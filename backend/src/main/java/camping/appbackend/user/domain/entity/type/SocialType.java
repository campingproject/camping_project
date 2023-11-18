package camping.appbackend.user.domain.entity.type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
@AllArgsConstructor
public enum SocialType {
    GOOGLE("구글"),
    NAVER("네이버");

    private final String socialName;
}
