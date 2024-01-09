package camping.appbackend.domain.free.dto;

import camping.appbackend.domain.free.entity.FreeBoard;
import camping.appbackend.domain.user.entity.User;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.domain.Page;

public class FreeBoardDTO {

    @Getter
    @AllArgsConstructor
    @Builder
    @ToString
    public static class Request {

        @NotBlank(message = "제목을 입력해주세요")
        @Size(message = "제목은 100자까지 입력 가능합니다", max = 100)
        private String title;

        @NotBlank(message = "내용을 입력해주세요")
        private String content;

        @NotBlank(message = "이메일을 입력해주세요")
        private String email;

        public FreeBoard toEntity(User user) {
            return FreeBoard.builder()
                    .title(title)
                    .content(content)
                    .writer(user.getNickName())
                    .user(user)
                    .build();
        }
    }


    @Getter
    public static class Response {

        private final Long id;
        private final String title;
        private final String content;
        private final String writer;

        public Response(final FreeBoard board) {
            id = board.getId();
            title = board.getTitle();
            content = board.getContent();
            writer = board.getWriter();
        }
    }


    @Getter
    public static class PageResponse {

        private final Page<Response> boardList;
        private final int startPage;
        private final int endPage;

        public PageResponse(final Page<Response> boardList, final int startPage, final int endPage) {
            this.boardList = boardList;
            this.startPage = startPage;
            this.endPage = endPage;
        }
    }
}