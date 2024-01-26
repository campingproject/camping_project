package camping.appbackend.domain.free.dto;

import camping.appbackend.domain.free.entity.FreeBoard;
import camping.appbackend.domain.user.entity.User;
import io.swagger.annotations.ApiModelProperty;
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
        @ApiModelProperty("제목")
        private String title;

        @NotBlank(message = "내용을 입력해주세요")
        @ApiModelProperty("내용")
        private String content;

        @NotBlank(message = "이메일을 입력해주세요")
        @ApiModelProperty("이메일")
        private String email;

        @ApiModelProperty("썸네일 이미지 url")
        private String thumbnailUrl;

        public FreeBoard toEntity(User user) {
            return FreeBoard.builder()
                    .title(title)
                    .content(content)
                    .thumbnailUrl(thumbnailUrl)
                    .writer(user.getNickName())
                    .user(user)
                    .build();
        }
    }


    @Getter
    @NoArgsConstructor
    @ToString
    public static class Response {

        @ApiModelProperty("게시글 번호")
        private Long id;

        @ApiModelProperty("제목")
        private String title;

        @ApiModelProperty("내용")
        private String content;

        @ApiModelProperty("작성자")
        private String writer;

        @ApiModelProperty("썸네일 이미지 url")
        private String thumbnailUrl;

        public Response(final FreeBoard board) {
            id = board.getId();
            title = board.getTitle();
            content = board.getContent();
            writer = board.getWriter();
            thumbnailUrl = board.getThumbnailUrl();
        }
    }

}