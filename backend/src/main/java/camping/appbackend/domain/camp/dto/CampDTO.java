package camping.appbackend.domain.camp.dto;

import camping.appbackend.domain.camp.entity.Camp;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import javax.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;


public class CampDTO {

    @Getter
    @AllArgsConstructor
    @Builder
    @ToString
    public static class Search {

        @ApiModelProperty("지역")
        private String region;

        @ApiModelProperty("캠핑장 이름")
        private String facltNm;

        @ApiModelProperty("체크인 [yyyy-MM-dd]")
        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private LocalDate startDate;

        @ApiModelProperty("체크아웃 [yyyy-MM-dd]")
        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private LocalDate endDate;

        @ApiModelProperty("페이지 번호")
        private int page;

        @ApiModelProperty("페이지 행의 수 (max:20)")
        @Min(0)
        private int size;

        public Pageable toPageable() {
            return PageRequest.of(page != 0 ? page - 1 : page, Math.min(size, 20));
        }


    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @ToString
    public static class Response {

        @ApiModelProperty("캠핑장 ID")
        private Long id;

        @ApiModelProperty("캠핑장 대표 이미지")
        private String firstImageUrl;

        @ApiModelProperty("캠핑장 이름")
        private String facltNm;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @ToString
    public static class Detail {

        @ApiModelProperty("상세주소")
        private String addr1;

        @ApiModelProperty("반려동물 출입")
        private String animalCmgCl;

        @ApiModelProperty("자동차 야영장 개수")
        private String autoSiteCo;

        @ApiModelProperty("카라반 내부 시설")
        private String caravInnerFclty;

        @ApiModelProperty("카라반 개수")
        private int caravSiteCo;

        @ApiModelProperty("도(행정구역)")
        private String doNm;

        @ApiModelProperty("시군구(행정구역)")
        private String sigunguNm;

        @ApiModelProperty("캠핑장비 대여 목록")
        private String eqpmnLendCl;

        @ApiModelProperty("소화기 개수")
        private int extshrCo;

        @ApiModelProperty("야영장 명")
        private String facltNm;

        @ApiModelProperty("특징")
        private String featureNm;

        @ApiModelProperty("화재감지기 개수")
        private String fireSensorCo;

        @ApiModelProperty("대표 이미지")
        private String firstImageUrl;

        @ApiModelProperty("글램핑 내부 시설 목록")
        private String glamPinnerFclty;

        @ApiModelProperty("글램핑 개수")
        private int glamp_site_co;

        @ApiModelProperty("캠핑장 홈페이지")
        private String homepage;

        @ApiModelProperty("업종")
        private String induty;

        @ApiModelProperty("소개")
        private String intro;

        @ApiModelProperty("입지 구분")
        private String lctCl;

        @ApiModelProperty("한줄 소개")
        private String lineIntro;

        @ApiModelProperty("경도")
        private String mapX;

        @ApiModelProperty("위도")
        private String mapY;

        @ApiModelProperty("운영일")
        private String operDeCl;

        @ApiModelProperty("운영기간")
        private String operPdCl;

        @ApiModelProperty("주변 이용가능 시설")
        private String posblFcltyCl;

        @ApiModelProperty("예약 구분")
        private String resveCl;

        @ApiModelProperty("예약 페이지")
        private String resveUrl;

        @ApiModelProperty("부대시설")
        private String sbrsCl;

        @ApiModelProperty("부대시설 기타")
        private String sbrsEtc;

        @ApiModelProperty("사이트간 거리")
        private String sitedStnc;

        @ApiModelProperty("샤워실 개수")
        private int swrmCo;

        @ApiModelProperty("화장실 개수")
        private int toiletCo;

        @ApiModelProperty("개수대 개수")
        private int wtrplCo;

        @ApiModelProperty("전화")
        private String tel;

        @ApiModelProperty("테마 환경")
        private String themaEnvrnCl;

        @ApiModelProperty("여행 시기")
        private String tourEraCl;

        @ApiModelProperty("개인 트레일러 동반 여부")
        private String trlerAcmpnyAt;

        @ApiModelProperty("개인 카라반 동반 여부")
        private String caravAcmpnyAt;

        public Detail(final Camp camp) {
            addr1 = camp.getAddr1();
            animalCmgCl = camp.getAnimalCmgCl();
            autoSiteCo = camp.getAutoSiteCo();
            caravInnerFclty = camp.getCaravInnerFclty();
            caravSiteCo = camp.getCaravSiteCo();
            doNm = camp.getDoNm();
            sigunguNm = camp.getSigunguNm();
            eqpmnLendCl = camp.getEqpmnLendCl();
            extshrCo = camp.getExtshrCo();
            facltNm = camp.getFacltNm();
            featureNm = camp.getFeatureNm();
            fireSensorCo = camp.getFireSensorCo();
            firstImageUrl = camp.getFirstImageUrl();
            glamPinnerFclty = camp.getGlamPinnerFclty();
            homepage = camp.getHomepage();
            induty = camp.getInduty();
            intro = camp.getIntro();
            lctCl = camp.getLctCl();
            lineIntro = camp.getLineIntro();
            mapX = camp.getMapX();
            mapY = camp.getMapY();
            operDeCl = camp.getOperDeCl();
            operPdCl = camp.getOperPdCl();
            posblFcltyCl = camp.getPosblFcltyCl();
            resveCl = camp.getResveCl();
            resveUrl = camp.getResveUrl();
            sbrsCl = camp.getSbrsCl();
            sbrsEtc = camp.getSbrsEtc();
            sitedStnc = camp.getSitedStnc();
            swrmCo = camp.getSwrmCo();
            toiletCo = camp.getToiletCo();
            wtrplCo = camp.getWtrplCo();
            tel = camp.getTel();
            themaEnvrnCl = camp.getThemaEnvrnCl();
            tourEraCl = camp.getTourEraCl();
            trlerAcmpnyAt = camp.getTrlerAcmpnyAt();
            caravAcmpnyAt = camp.getCaravAcmpnyAt();
        }
    }

}
