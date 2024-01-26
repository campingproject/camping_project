package camping.appbackend.domain.campReview.controller;

import camping.appbackend.common.paging.PageRequestDTO;
import camping.appbackend.common.response.DataResponseDTO;
import camping.appbackend.domain.campReview.dto.CampReviewDTO;
import camping.appbackend.domain.campReview.service.CampReviewService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "캠핑장 한줄리뷰 API")
@RequestMapping("/camp/review")
@RequiredArgsConstructor
@RestController
public class CampReviewController {

    private final CampReviewService campReviewService;

    @Operation(summary = "한줄리뷰 조회")
    @GetMapping("/list")
    public DataResponseDTO<Page<CampReviewDTO.Response>> board(PageRequestDTO pageRequestDTO) {
        return DataResponseDTO.of(campReviewService.getReviews(pageRequestDTO));
    }

    @Operation(summary = "한줄리뷰 상세보기")
    @GetMapping("read/{id}")
    public DataResponseDTO<CampReviewDTO.Response> read(@PathVariable Long id) {
        return DataResponseDTO.of(campReviewService.getReview(id));
    }

    //    @PreAuthorize("hasAuthority('USER')")
    @Operation(summary = "한줄리뷰 등록")
    @PostMapping("register")
    public DataResponseDTO<Long> register(@Valid CampReviewDTO.Request request) {
        return DataResponseDTO.of(campReviewService.saveReview(request));
    }

    //    @PreAuthorize("hasAuthority('USER')")
    @Operation(summary = "한줄리뷰 수정")
    @PutMapping("modify/{id}")
    public DataResponseDTO<Long> modify(@PathVariable Long id, CampReviewDTO.Request request) {
        campReviewService.updateReview(id, request);
        return DataResponseDTO.of(id);
    }

    //    @PreAuthorize("hasAuthority('USER')")
    @Operation(summary = "한줄리뷰 삭제")
    @DeleteMapping("delete/{id}")
    public DataResponseDTO<Object> delete(@PathVariable Long id, @PathVariable String email) {
        campReviewService.deleteReview(id, email);
        return DataResponseDTO.empty();
    }
}