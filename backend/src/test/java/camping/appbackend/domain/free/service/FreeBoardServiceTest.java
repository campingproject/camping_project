package camping.appbackend.domain.free.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

import camping.appbackend.common.exception.BaseException;
import camping.appbackend.common.exception.ResultCode;
import camping.appbackend.common.paging.PageRequestDTO;
import camping.appbackend.domain.free.dto.FreeBoardDTO;
import camping.appbackend.domain.free.dto.FreeBoardDTO.Request;
import camping.appbackend.domain.free.dto.FreeBoardDTO.Response;
import camping.appbackend.domain.free.entity.FreeBoard;
import camping.appbackend.domain.free.repository.FreeBoardRepository;
import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.entity.type.SocialType;
import camping.appbackend.domain.user.repository.UserRepository;
import java.util.List;
import java.util.Optional;
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
class FreeBoardServiceTest {

    @Autowired
    private FreeBoardRepository freeBoardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FreeBoardService freeBoardService;

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
        freeBoardRepository.deleteAllInBatch();
    }

    @DisplayName("성공 테스트")
    @Nested
    class success_test_class {

        @DisplayName("게시물 조회 - 성공 (페이징)")
        @Test
        void getBoardsWithPaging_success() {
            // Given
            IntStream.range(0, 25).forEach(i -> insertSampleBoard());

            // When
            List<FreeBoardDTO.Response> result = freeBoardService.getBoards(new PageRequestDTO(1, 10)).getContent();

            // Then
            assertThat(result).hasSize(10);
        }

        @DisplayName("게시물 상세보기 - 성공")
        @Test
        void getBoardsDetail_success() {
            // Given
            FreeBoard board = insertSampleBoard();

            // When
            Response response = freeBoardService.getBoard(board.getId());

            // Then
            assertThat(response.getContent()).isEqualTo("test");
        }

        @DisplayName("게시물 생성 - 성공")
        @Test
        void createBoard_success() {
            // Given
            Request dto = Request.builder()
                    .title("Title")
                    .email(testUser.getEmail())
                    .content("Content")
                    .build();

            // When
            Long boardId = freeBoardService.saveBoard(dto);
            Optional<FreeBoard> createBoard = freeBoardRepository.findById(boardId);

            // Then
            assertThat(createBoard).isNotEmpty();
        }

        @DisplayName("게시물 수정 - 성공")
        @Test
        void updateBoard_success() {
            // Given
            FreeBoard board = insertSampleBoard();

            // When
            freeBoardService.updateBoard(board.getId(),
                    FreeBoardDTO.Request.builder()
                            .title("Updated Title")
                            .email(testUser.getEmail())
                            .content("Updated Content")
                            .build());

            FreeBoard updatedBoard = freeBoardRepository.findById(board.getId()).orElse(null);

            // Then
            assert updatedBoard != null;
            assertThat(updatedBoard.getTitle()).isEqualTo("Updated Title");
            assertThat(updatedBoard.getContent()).isEqualTo("Updated Content");

        }

        @Test
        @DisplayName("게시물 삭제 - 성공")
        void deleteBoard_success() {
            // Given
            FreeBoard board = insertSampleBoard();

            // When
            freeBoardService.deleteBoard(board.getId(), testUser.getEmail());

            // Then
            assertThat(freeBoardRepository.findById(board.getId())).isEmpty();
        }

    }

    @DisplayName("예외 테스트")
    @Nested
    class failed_test_class {

        @DisplayName("게시물 생성 - 실패 (존재하지 않는 유저)")
        @Test
        void createBoard_withInvalidUser_shouldThrowException() {
            // Given
            Request dto = Request.builder()
                    .title("Title")
                    .email("another@example.com")
                    .content("Content")
                    .build();

            // When
            BaseException baseException = assertThrows(BaseException.class, () -> freeBoardService.saveBoard(dto));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.USER_NOT_EXISTS);

        }

        @DisplayName("게시물 상세보기 - 실패 (게시글 없음)")
        @Test
        void getBoardDetail_withInvalidBoard_shouldThrowException() {
            // Given
            insertSampleBoard();

            // When
            BaseException baseException = assertThrows(BaseException.class, () -> freeBoardService.getBoard(999L));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_FOUND);
        }


        @DisplayName("게시물 수정 - 실패 (존재하지 않는 유저)")
        @Test
        void updateBoard_withInvalidUser_shouldThrowException() {
            // Given
            FreeBoard board = insertSampleBoard();

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> freeBoardService.updateBoard(board.getId(),
                            FreeBoardDTO.Request.builder()
                                    .title("Updated Title")
                                    .content("Updated Content")
                                    .email("another@example.com")
                                    .build()));
            ;

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.USER_NOT_EXISTS);
        }

        @DisplayName("게시물 수정  - 실패 (게시글 없음)")
        @Test
        void updateBoard_withInvalidBoard_shouldThrowException() {
            // Given
            insertSampleBoard();

            // When
            BaseException baseException = assertThrows(BaseException.class, () -> freeBoardService.updateBoard(999L,
                    FreeBoardDTO.Request.builder()
                            .title("Updated Title")
                            .content("Updated Content")
                            .email(testUser.getEmail())
                            .build()));
            ;

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_FOUND);
        }

        @DisplayName("게시물 수정 - 실패 (권한없음)")
        @Test
        void updateBoard_withPermissionBoard_shouldThrowException() {
            // Given
            FreeBoard board = insertSampleBoard();
            User testUser2 = userRepository.save(User.builder().email("test2@example.com").name("test")
                    .nickName("test").socialType(SocialType.KAKAO).build()
            );

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> freeBoardService.updateBoard(board.getId(),
                            FreeBoardDTO.Request.builder()
                                    .title("Updated Title")
                                    .content("Updated Content")
                                    .email(testUser2.getEmail())
                                    .build()));
            ;

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_PERMISSION);
        }

        @DisplayName("게시물 삭제 - 실패 (존재하지 않는 유저)")
        @Test
        void deleteBoard_withInvalidUser_shouldThrowException() {
            // Given
            FreeBoard board = insertSampleBoard();

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> freeBoardService.deleteBoard(board.getId(), "another@example.com"));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.USER_NOT_EXISTS);
        }

        @DisplayName("게시물 삭제 - 실패 (게시글 없음)")
        @Test
        void deleteBoard_withInvalidBoard_shouldThrowException() {
            // Given
            insertSampleBoard();

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> freeBoardService.deleteBoard(999L, testUser.getEmail()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_FOUND);
        }

        @DisplayName("게시물 삭제 - 실패 (권한없음) ")
        @Test
        void deleteBoard_withPermissionBoard_shouldThrowException() {
            // Given
            FreeBoard board = insertSampleBoard();

            User testUser2 = userRepository.save(User.builder().email("test2@example.com").name("test")
                    .nickName("test").socialType(SocialType.KAKAO).build()
            );

            // When
            BaseException baseException = assertThrows(BaseException.class,
                    () -> freeBoardService.deleteBoard(board.getId(), testUser2.getEmail()));

            // Then
            assertThat(baseException.getResultCode()).isEqualTo(ResultCode.BOARD_NOT_PERMISSION);
        }
    }


    private FreeBoard insertSampleBoard() {
        FreeBoard board = FreeBoard.builder().user(testUser).writer("test").title("test").content("test").build();
        freeBoardRepository.save(board);
        return board;
    }


}
