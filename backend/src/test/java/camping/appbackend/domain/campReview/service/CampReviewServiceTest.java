package camping.appbackend.domain.campReview.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

import camping.appbackend.common.exception.BaseException;
import camping.appbackend.common.exception.ResultCode;
import camping.appbackend.common.paging.PageRequestDTO;
import camping.appbackend.domain.campReview.dto.CampReviewDTO;
import camping.appbackend.domain.campReview.dto.CampReviewDTO.Request;
import camping.appbackend.domain.campReview.dto.CampReviewDTO.Response;
import camping.appbackend.domain.campReview.entity.CampReview;
import camping.appbackend.domain.campReview.repository.CampReviewRepository;
import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.entity.type.SocialType;
import camping.appbackend.domain.user.repository.UserRepository;
import java.util.List;
import java.util.stream.IntStream;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootTest
class CampReviewServiceTest {

    @Autowired
    private CampReviewRepository campReviewRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CampReviewService campReviewService;

    private User testUser;

    @BeforeEach
    public void insertTestUser() {
        testUser = userRepository.save(
                User.builder()
                        .email("test@example.com")
                        .name("test")
                        .nickName("test")
                        .socialType(SocialType.KAKAO)
                        .build()
        );
    }

    @BeforeEach
    public void deleteAllData() {
        campReviewRepository.deleteAllInBatch();
    }

    @DisplayName("성공 테스트")
    @Nested
    class success_test_class {

        @DisplayName("캠핑 리뷰 조회 - 성공 (페이징)")
        @Test
        void getReviewsWithPaging_success() {
            // Given
            IntStream.range(0, 25).forEach(i -> insertSampleReview());

            // When
            List<Response> result = campReviewService.getReviews(new PageRequestDTO(1, 10)).getContent();

            // Then
            assertThat(result).hasSize(10);
        }

        @DisplayName("캠핑 리뷰 상세보기 - 성공")
        @Test
        void getReviewDetail_success() {
            // Given
            CampReview review = insertSampleReview();

            // When
            Response response = campReviewService.getReview(review.getId());

            // Then
            assertThat(response.getMessage()).isEqualTo("test");
        }

        @DisplayName("캠핑 리뷰 생성 - 성공")
        @Test
        void createReview_success() {
            // Given
            Request dto = Request.builder()
                    .message("Message")
                    .email(testUser.getEmail())
                    .imageUrl("Image URL")
                    .campSiteName("Camp Site Name")
                    .build();

            // When
            Long reviewId = campReviewService.saveReview(dto);
            CampReview createdReview = campReviewRepository.findById(reviewId).orElse(null);

            // Then
            assertThat(createdReview).isNotNull();
            assertThat(createdReview.getMessage()).isEqualTo("Message");
            assertThat(createdReview.getUser()).isEqualTo(testUser);
        }

        @DisplayName("캠핑 리뷰 수정 - 성공")
        @Test
        void updateReview_success() {
            // Given
            CampReview review = insertSampleReview();

            // When
            campReviewService.updateReview(review.getId(),
                    CampReviewDTO.Request.builder()
                            .message("Updated Message")
                            .imageUrl("Updated Image URL")
                            .campSiteName("Updated Camp Site Name")
                            .email(testUser.getEmail())
                            .build());

            CampReview updatedReview = campReviewRepository.findById(review.getId()).orElse(null);

            // Then
            assert updatedReview != null;
            assertThat(updatedReview.getMessage()).isEqualTo("Updated Message");
            assertThat(updatedReview.getImageUrl()).isEqualTo("Updated Image URL");
            assertThat(updatedReview.getCampSiteName()).isEqualTo("Updated Camp Site Name");
        }

        @Test
        @DisplayName("캠핑 리뷰 삭제 - 성공")
        void deleteReview_success() {
            // Given
            CampReview review = insertSampleReview();

            // When
            campReviewService.deleteReview(review.getId(), testUser.getEmail());

            // Then
            assertThat(campReviewRepository.findById(review.getId())).isEmpty();
        }

    }

    @DisplayName("예외 테스트")
    @Nested
    class failed_test_class {

        @DisplayName("캠핑 리뷰 생성 - 실패 (존재하지 않는 유저)")
        @Test
        void createReview_withInvalidUser_shouldThrowException() {
            // Given
            Request dto = Request.builder()
                    .message("Message")
                    .email("another@example.com")
                    .imageUrl("Image URL")
                    .campSiteName("Camp Site Name")
                    .build();

            // When
            BaseException baseException = assertThrows(BaseException.class, () -> campReviewService.saveReview(dto));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.USER_NOT_EXISTS);
        }

        @DisplayName("캠핑 리뷰 상세보기 - 실패 (리뷰 없음)")
        @Test
        void getReviewDetail_withInvalidReview_shouldThrowException() {
            // Given
            insertSampleReview();

            // When
            BaseException baseException = assertThrows(BaseException.class, () -> campReviewService.getReview(999L));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_FOUND);
        }

        @DisplayName("캠핑 리뷰 수정 - 실패 (존재하지 않는 유저)")
        @Test
        void updateReview_withInvalidUser_shouldThrowException() {
            // Given
            CampReview review = insertSampleReview();

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> campReviewService.updateReview(review.getId(),
                            CampReviewDTO.Request.builder()
                                    .message("Updated Message")
                                    .imageUrl("Updated Image URL")
                                    .campSiteName("Updated Camp Site Name")
                                    .email("another@example.com")
                                    .build()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.USER_NOT_EXISTS);
        }

        @DisplayName("캠핑 리뷰 수정  - 실패 (리뷰 없음)")
        @Test
        void updateReview_withInvalidReview_shouldThrowException() {
            // Given
            insertSampleReview();

            // When
            BaseException baseException = assertThrows(BaseException.class, () -> campReviewService.updateReview(999L,
                    CampReviewDTO.Request.builder()
                            .message("Updated Message")
                            .imageUrl("Updated Image URL")
                            .campSiteName("Updated Camp Site Name")
                            .email(testUser.getEmail())
                            .build()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_FOUND);
        }

        @DisplayName("캠핑 리뷰 수정 - 실패 (권한없음)")
        @Test
        void updateReview_withPermissionReview_shouldThrowException() {
            // Given
            CampReview review = insertSampleReview();
            User testUser2 = userRepository.save(User.builder().email("test2@example.com").name("test")
                    .nickName("test").socialType(SocialType.KAKAO).build()
            );

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> campReviewService.updateReview(review.getId(),
                            CampReviewDTO.Request.builder()
                                    .message("Updated Message")
                                    .imageUrl("Updated Image URL")
                                    .campSiteName("Updated Camp Site Name")
                                    .email(testUser2.getEmail())
                                    .build()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_PERMISSION);
        }

        @DisplayName("캠핑 리뷰 삭제 - 실패 (존재하지 않는 유저)")
        @Test
        void deleteReview_withInvalidUser_shouldThrowException() {
            // Given
            CampReview review = insertSampleReview();

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> campReviewService.deleteReview(review.getId(), "another@example.com"));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.USER_NOT_EXISTS);
        }

        @DisplayName("캠핑 리뷰 삭제 - 실패 (리뷰 없음)")
        @Test
        void deleteReview_withInvalidReview_shouldThrowException() {
            // Given
            insertSampleReview();

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> campReviewService.deleteReview(999L, testUser.getEmail()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_FOUND);
        }

        @DisplayName("캠핑 리뷰 삭제 - 실패 (권한없음) ")
        @Test
        void deleteReview_withPermissionReview_shouldThrowException() {
            // Given
            CampReview review = insertSampleReview();

            User testUser2 = userRepository.save(User.builder().email("test2@example.com").name("test")
                    .nickName("test").socialType(SocialType.KAKAO).build()
            );

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> campReviewService.deleteReview(review.getId(), testUser2.getEmail()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_PERMISSION);
        }


    }

    private CampReview insertSampleReview() {
        CampReview review = CampReview.builder().user(testUser)
                .message("test")
                .imageUrl("image-url")
                .campSiteName("camp-site-name")
                .writer("test")
                .build();

        return campReviewRepository.save(review);
    }
}
