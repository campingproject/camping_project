package camping.appbackend.domain.camp.controller;

import camping.appbackend.common.response.DataResponseDTO;
import camping.appbackend.domain.camp.dto.CampDTO;
import camping.appbackend.domain.camp.service.CampService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "캠핑장 조회 API")
@RequestMapping("/camp")
@RequiredArgsConstructor
@RestController
public class CampController {

    private final CampService campService;

    @Operation(summary = "캠핑장 조회 및 검색")
    @GetMapping("search")
    public DataResponseDTO<Page<CampDTO.Response>> search(@Valid CampDTO.Search search) {
        return DataResponseDTO.of(campService.getCamps(search));
    }

    @Operation(summary = "캠핑장 상세보기")
    @GetMapping("read{id}")
    public DataResponseDTO<CampDTO.Detail> read(@PathVariable Long id) {
        return DataResponseDTO.of(campService.getCamp(id));
    }


}