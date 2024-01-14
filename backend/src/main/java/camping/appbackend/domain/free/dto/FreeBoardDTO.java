package camping.appbackend.domain.free.dto;

import camping.appbackend.domain.free.entity.FreeBoard;
import camping.appbackend.domain.user.entity.User;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
    @NoArgsConstructor
    @ToString
    public static class Response {

        private Long id;
        private String title;
        private String content;
        private String writer;

        public Response(final FreeBoard board) {
            id = board.getId();
            title = board.getTitle();
            content = board.getContent();
            writer = board.getWriter();
        }
    }
}