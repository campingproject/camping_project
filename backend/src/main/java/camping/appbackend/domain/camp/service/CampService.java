package camping.appbackend.domain.camp.service;


import static camping.appbackend.common.exception.ResultCode.NOT_FOUND;

import camping.appbackend.common.exception.BaseException;
import camping.appbackend.common.exception.ResultCode;
import camping.appbackend.common.util.TimeUtils;
import camping.appbackend.domain.camp.dto.CampDTO;
import camping.appbackend.domain.camp.dto.CampDTO.Response;
import camping.appbackend.domain.camp.entity.Camp;
import camping.appbackend.domain.camp.entity.Camp.SyncStatus;
import camping.appbackend.domain.camp.repository.CampQueryRepository;
import camping.appbackend.domain.camp.repository.CampRepository;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Slf4j
@RequiredArgsConstructor
@Transactional
@Service
public class CampService {

    private final RestTemplate restTemplate;
    private final CampRepository campRepository;
    private final CampQueryRepository campQueryRepository;
    private final Gson gson;

    @Value("${api.camp.service-key}")
    private String serviceKey;


    @Transactional(readOnly = true)
    public Page<Response> getCamps(CampDTO.Search search) {
        Pageable pageable = search.toPageable();
        return campQueryRepository.findByPage(pageable, search);
    }

    @Transactional(readOnly = true)
    public CampDTO.Detail getCamp(Long id) {
        return campRepository.findById(id)
                .map(CampDTO.Detail::new)
                .orElseThrow(() -> new BaseException(NOT_FOUND));
    }


    /**
     * 캠핑장 모든 데이터 받아와서 DB 삽입 메서드 초기 데이터 세팅용
     */
    public void saveAllCampingDataFromApi() {

        int totalCount = getTotalCount(requestBasicCampingInfo(1));
        JsonObject responseData = requestBasicCampingInfo(totalCount);

        JsonArray items = getItems(responseData);

        List<Camp> campList = new ArrayList<>();

        for (JsonElement item : items) {
            Camp camp = gson.fromJson(item, Camp.class);
            campList.add(camp);
        }

        campRepository.saveAll(campList);
    }

    @Retryable(value = {BaseException.class}, backoff = @Backoff(delay = 10000))
    @Scheduled(cron = "0 0 1 * * *") // 매일 새벽 1시
    public void createCampingDataFromApi() {
        int totalCount = getTotalCount(requestCampingInfoChanges(1, SyncStatus.NEW.getCode()));
        if (totalCount == 0) {
            return;
        }

        JsonObject responseData = requestCampingInfoChanges(totalCount, SyncStatus.NEW.getCode());
        JsonArray items = getItems(responseData);

        for (JsonElement item : items) {
            Camp newCamp = gson.fromJson(item, Camp.class);
            Optional<Camp> optionalCamp = campRepository.findByContentId(newCamp.getContentId());
            if (optionalCamp.isEmpty()) {
                campRepository.save(newCamp);
            }
        }

    }

    @Retryable(value = {BaseException.class}, backoff = @Backoff(delay = 10000))
    @Scheduled(cron = "0 10 1 * * *") // 매일 새벽 1시10분
    public void updateCampingDataFromApi() {
        int totalCount = getTotalCount(requestCampingInfoChanges(1, SyncStatus.EDIT.getCode()));
        if (totalCount == 0) {
            return;
        }

        JsonObject responseData = requestCampingInfoChanges(totalCount, SyncStatus.NEW.getCode());
        JsonArray items = getItems(responseData);

        for (JsonElement item : items) {
            Camp changeCamp = gson.fromJson(item, Camp.class);
            campRepository.findByContentId(changeCamp.getContentId())
                    .ifPresent(camp -> camp.update(changeCamp));
        }
    }

    @Retryable(value = {BaseException.class}, backoff = @Backoff(delay = 10000))
    @Scheduled(cron = "0 20 1 * * *") // 매일 새벽 1시20분
    public void deleteCampingDataFromApi() {
        int totalCount = getTotalCount(requestCampingInfoChanges(1, SyncStatus.DELETE.getCode()));
        if (totalCount == 0) {
            return;
        }

        JsonObject responseData = requestCampingInfoChanges(totalCount, SyncStatus.NEW.getCode());
        JsonArray items = getItems(responseData);

        for (JsonElement item : items) {
            Camp deleteCamp = gson.fromJson(item, Camp.class);
            campRepository.findByContentId(deleteCamp.getContentId())
                    .ifPresent(camp -> campRepository.deleteByContentId(camp.getContentId()));
        }
    }

    private static JsonArray getItems(JsonObject responseData) {
        return responseData
                .getAsJsonObject("body")
                .getAsJsonObject("items")
                .getAsJsonArray("item");
    }


    private void successCheck(ResponseEntity<String> responseData) {
        if (responseData.getBody() == null || responseData.getBody().contains("ERROR")) {
            log.error("invalid request go camp api error : {}", responseData.getBody());
            throw new BaseException(ResultCode.API_REQUEST_ERROR);
        }

        JsonObject header = getResponse(responseData).getAsJsonObject("header");
        String resultCode = header.getAsJsonPrimitive("resultCode").getAsString();

        if (!"0000".equals(resultCode)) {
            log.error("api response error code : {}, msg : {}", resultCode, header.get("resultMsg").getAsString());
            throw new BaseException(ResultCode.API_REQUEST_ERROR);
        }
    }

    private int getTotalCount(JsonObject responseData) {
        return responseData
                .getAsJsonObject("body")
                .getAsJsonPrimitive("totalCount")
                .getAsInt();
    }

    /**
     * GoCamping Open API를 통해 캠핑장 정보를 요청하고 응답을 반환합니다.
     *
     * @param batchSize 한 번에 조회할 행의 수
     * @return API 응답에서 추출한 JsonObject("response") 데이터
     */
    private JsonObject requestBasicCampingInfo(int batchSize) {
        URI uri = UriComponentsBuilder.fromHttpUrl("https://apis.data.go.kr/B551011/GoCamping/basedList")
                .queryParam("serviceKey", serviceKey)
                .queryParam("numOfRows", batchSize)
                .queryParam("pageNo", 1)
                .queryParam("MobileOS", "ETC")
                .queryParam("MobileApp", "camp-api-backend")
                .queryParam("_type", "json")
                .build()
                .encode()
                .toUri();

        ResponseEntity<String> responseData = restTemplate.getForEntity(uri.toString(), String.class);
        successCheck(responseData);

        return getResponse(responseData);
    }

    /**
     * GoCamping Open API를 통해 캠핑장 정보의 변경사항을 요청하고 응답을 반환합니다.
     *
     * @param batchSize  한 번에 조회할 행의 수
     * @param syncStatus 컨텐츠상태(A=신규, U=수정,D =삭제)
     * @return API 응답에서 추출한 JsonObject("response") 데이터
     */
    private JsonObject requestCampingInfoChanges(int batchSize, String syncStatus) {
        URI uri = UriComponentsBuilder.fromHttpUrl("https://apis.data.go.kr/B551011/GoCamping/basedSyncList")
                .queryParam("serviceKey", serviceKey)
                .queryParam("numOfRows", batchSize)
                .queryParam("pageNo", 1)
                .queryParam("MobileOS", "ETC")
                .queryParam("MobileApp", "camp-api-backend")
                .queryParam("_type", "json")
                .queryParam("syncStatus", syncStatus)
                .queryParam("syncModTime", TimeUtils.adjustDate("yyyyMMdd", -2))
                .build()
                .encode()
                .toUri();

        ResponseEntity<String> responseData = restTemplate.getForEntity(uri, String.class);
        successCheck(responseData);

        return getResponse(responseData);
    }

    private static JsonObject getResponse(ResponseEntity<String> responseData) {
        return JsonParser.parseString(Objects.requireNonNull(responseData.getBody()))
                .getAsJsonObject()
                .getAsJsonObject("response");
    }


}