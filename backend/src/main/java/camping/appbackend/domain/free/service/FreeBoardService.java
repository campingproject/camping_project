package camping.appbackend.domain.free.service;

import static camping.appbackend.common.exception.ResultCode.BOARD_NOT_FOUND;
import static camping.appbackend.common.exception.ResultCode.BOARD_NOT_PERMISSION;
import static camping.appbackend.common.exception.ResultCode.USER_NOT_EXISTS;

import camping.appbackend.common.exception.BaseException;
import camping.appbackend.domain.free.dto.FreeBoardDTO;
import camping.appbackend.domain.free.dto.FreeBoardDTO.PageResponse;
import camping.appbackend.domain.free.dto.FreeBoardDTO.Response;
import camping.appbackend.domain.free.entity.FreeBoard;
import camping.appbackend.domain.free.repository.FreeBoardQueryRepository;
import camping.appbackend.domain.free.repository.FreeBoardRepository;
import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.repository.UserRepository;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;
    private final FreeBoardQueryRepository freeBoardQueryRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public PageResponse getBoards(Pageable pageable) {
        int page = pageable.getPageNumber() - 1;
        int pageLimit = 12;

        Page<Response> boardList = freeBoardQueryRepository.findByPage(
                PageRequest.of(page, pageLimit, Sort.by(Direction.DESC, "id")));

        int blockLimit = 3;
        int startPage = ((int) Math.ceil((double) pageable.getPageNumber() / blockLimit) - 1) * blockLimit + 1;
        int endPage = Math.min((startPage + blockLimit - 1), boardList.getTotalPages());

        return new FreeBoardDTO.PageResponse(boardList, startPage, endPage);
    }

    @Transactional(readOnly = true)
    public FreeBoardDTO.Response getBoard(Long id) {
        return freeBoardRepository.findById(id)
                .map(Response::new)
                .orElseThrow(() -> new BaseException(BOARD_NOT_FOUND));
    }

    public Long saveBoard(FreeBoardDTO.Request request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BaseException(USER_NOT_EXISTS));

        FreeBoard board = freeBoardRepository.save(request.toEntity(user));
        return board.getId();
    }

    public void updateBoard(Long id, FreeBoardDTO.Request request) {
        FreeBoard board = freeBoardRepository.findById(id)
                .orElseThrow(() -> new BaseException(BOARD_NOT_FOUND));

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BaseException(USER_NOT_EXISTS));

        if (!Objects.equals(board.getUser().getId(), user.getId())) {
            throw new BaseException(BOARD_NOT_PERMISSION);
        }

        board.update(request.getTitle(), request.getContent());

    }

    public void deleteBoard(Long id, String email) {
        FreeBoard board = freeBoardRepository.findById(id)
                .orElseThrow(() -> new BaseException(BOARD_NOT_FOUND));

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new BaseException(USER_NOT_EXISTS));

        if (!Objects.equals(board.getUser().getId(), user.getId())) {
            throw new BaseException(BOARD_NOT_PERMISSION);
        }

        freeBoardRepository.delete(board);
    }

}