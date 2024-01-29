package camping.appbackend.domain.campReview.service;

import static camping.appbackend.common.exception.ResultCode.BOARD_NOT_FOUND;
import static camping.appbackend.common.exception.ResultCode.BOARD_NOT_PERMISSION;
import static camping.appbackend.common.exception.ResultCode.USER_NOT_EXISTS;

import camping.appbackend.common.exception.BaseException;
import camping.appbackend.common.paging.PageRequestDTO;
import camping.appbackend.domain.aws.service.S3Service;
import camping.appbackend.domain.campReview.dto.CampReviewDTO;
import camping.appbackend.domain.campReview.dto.CampReviewDTO.Response;
import camping.appbackend.domain.campReview.entity.CampReview;
import camping.appbackend.domain.campReview.repository.CampReviewQueryRepository;
import camping.appbackend.domain.campReview.repository.CampReviewRepository;
import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.repository.UserRepository;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Transactional
@RequiredArgsConstructor
@Service
public class CampReviewService {

    private final CampReviewRepository campReviewRepository;
    private final CampReviewQueryRepository campReviewQueryRepository;
    private final UserRepository userRepository;
    private final S3Service s3Service;

    @Transactional(readOnly = true)
    public Page<Response> getReviews(PageRequestDTO pageRequestDTO) {
        Pageable pageable = pageRequestDTO.toPageable();
        return campReviewQueryRepository.findByPage(pageable);
    }

    @Transactional(readOnly = true)
    public CampReviewDTO.Response getReview(Long id) {
        return campReviewRepository.findById(id)
                .map(Response::new)
                .orElseThrow(() -> new BaseException(BOARD_NOT_FOUND));
    }

    public Long saveReview(CampReviewDTO.Request request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BaseException(USER_NOT_EXISTS));

        CampReview board = campReviewRepository.save(request.toEntity(user));
        return board.getId();
    }

    public void updateReview(Long id, CampReviewDTO.Request request) {
        CampReview board = campReviewRepository.findById(id)
                .orElseThrow(() -> new BaseException(BOARD_NOT_FOUND));

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BaseException(USER_NOT_EXISTS));

        if (!Objects.equals(board.getUser().getId(), user.getId())) {
            throw new BaseException(BOARD_NOT_PERMISSION);
        }

        board.update(request.getMessage(), request.getImageUrl(), request.getCampSiteName());

    }

    public void deleteReview(Long id, String email) {
        CampReview board = campReviewRepository.findById(id)
                .orElseThrow(() -> new BaseException(BOARD_NOT_FOUND));

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new BaseException(USER_NOT_EXISTS));

        if (!Objects.equals(board.getUser().getId(), user.getId())) {
            throw new BaseException(BOARD_NOT_PERMISSION);
        }

        campReviewRepository.delete(board);
        s3Service.deleteImagesWithPattern(board.getImageUrl());

    }


}