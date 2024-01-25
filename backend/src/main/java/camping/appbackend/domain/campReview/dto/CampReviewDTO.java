package camping.appbackend.domain.campReview.dto;

import camping.appbackend.domain.campReview.entity.CampReview;
import camping.appbackend.domain.user.entity.User;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

public class CampReviewDTO {

    @Getter
    @AllArgsConstructor
    @Builder
    @ToString
    public static class Request {

        @NotBlank(message = "내용을 입력해주세요")
        private String message;

        @NotBlank(message = "이메일을 입력해주세요")
        private String email;

        @NotBlank(message = "캠핑장 사진을 입력해주세요")
        private String imageUrl;

        @NotBlank(message = "캠핑장명을 입력해주세요")
        private String campSiteName;

        public CampReview toEntity(User user) {
            return CampReview.builder()
                    .message(message)
                    .imageUrl(imageUrl)
                    .campSiteName(campSiteName)
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
        private String message;
        private String writer;
        private String imageUrl;
        private String campSiteName;

        public Response(final CampReview campReview) {
            id = campReview.getId();
            message = campReview.getMessage();
            writer = campReview.getWriter();
            imageUrl = campReview.getImageUrl();
            campSiteName = campReview.getCampSiteName();
        }
    }
}