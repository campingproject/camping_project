package camping.appbackend.domain.free.controller;

import camping.appbackend.common.response.DataResponseDTO;
import camping.appbackend.domain.free.dto.FreeBoardDTO.PageResponse;
import camping.appbackend.domain.free.dto.FreeBoardDTO.Request;
import camping.appbackend.domain.free.dto.FreeBoardDTO.Response;
import camping.appbackend.domain.free.service.FreeBoardService;
import io.swagger.v3.oas.annotations.Operation;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/free/board")
@RequiredArgsConstructor
@RestController
public class FreeBoardController {

    private final FreeBoardService freeBoardService;

    @Operation(summary = "자유게시판 게시글 조회")
    @GetMapping("/list")
    public DataResponseDTO<PageResponse> board(@PageableDefault(page = 1) Pageable pageable) {
        return DataResponseDTO.of(freeBoardService.getBoards(pageable));
    }

    @Operation(summary = "자유게시판 글 상세보기")
    @GetMapping("read/{id}")
    public DataResponseDTO<Response> read(@PathVariable Long id) {
        return DataResponseDTO.of(freeBoardService.getBoard(id));
    }

    //    @PreAuthorize("hasAuthority('USER')")
    @Operation(summary = "자유게시판 글 등록")
    @PostMapping("register")
    public DataResponseDTO<Long> register(@Valid Request request) {
        return DataResponseDTO.of(freeBoardService.saveBoard(request));
    }

    //    @PreAuthorize("hasAuthority('USER')")
    @Operation(summary = "자유게시판 글 수정")
    @PutMapping("modify/{id}")
    public DataResponseDTO<Long> modify(@PathVariable Long id, Request request) {
        freeBoardService.updateBoard(id, request);
        return DataResponseDTO.of(id);
    }

    //    @PreAuthorize("hasAuthority('USER')")
    @Operation(summary = "자유게시판 글 삭제")
    @DeleteMapping("delete/{id}")
    public DataResponseDTO<Object> delete(@PathVariable Long id, @PathVariable String email) {
        freeBoardService.deleteBoard(id, email);
        return DataResponseDTO.empty();
    }


}