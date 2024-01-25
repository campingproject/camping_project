package camping.appbackend.domain.user.entity.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SocialType {
    KAKAO("카카오"),
    NAVER("네이버");

    private final String socialName;
}
