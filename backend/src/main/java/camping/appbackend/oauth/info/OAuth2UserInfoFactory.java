package camping.appbackend.oauth.info;


import camping.appbackend.domain.user.entity.type.SocialType;
import camping.appbackend.oauth.info.impl.KakaoOAuth2UserInfo;
import camping.appbackend.oauth.info.impl.NaverOAuth2UserInfo;
import java.util.Map;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(SocialType socialType, Map<String, Object> attributes) {
        switch (socialType) {
            case NAVER:
                return new NaverOAuth2UserInfo(attributes);
            case KAKAO:
                return new KakaoOAuth2UserInfo(attributes);
            default:
                throw new IllegalArgumentException("Invalid Provider Type");
        }
    }
}
