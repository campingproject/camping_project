package camping.appbackend.oauth.service;


import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.entity.type.SocialType;
import camping.appbackend.domain.user.entity.type.UserRoleType;
import camping.appbackend.domain.user.repository.UserRepository;

import camping.appbackend.oauth.domain.entity.UserPrincipal;
import camping.appbackend.oauth.exception.OAuthProviderMissMatchException;
import camping.appbackend.oauth.info.OAuth2UserInfo;
import camping.appbackend.oauth.info.OAuth2UserInfoFactory;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);

        try {
            return this.process(userRequest, user);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    //인증을 요청하는 사용자에 따라서 없는 회원이면 회원가입, 이미 존재하는 회원이면 업데이트를 실행
    private OAuth2User process(OAuth2UserRequest userRequest, OAuth2User user) {

        //현재 진행중인 서비스를 구분하기 위해 문자열을 받음
        SocialType socialType = SocialType.valueOf(
                userRequest.getClientRegistration().getRegistrationId().toUpperCase());
        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(socialType, user.getAttributes());
        Optional<User> checkUser = userRepository.findByEmail(userInfo.getEmail());
        User savedUser = checkUser.orElseGet(() -> createUser(userInfo, socialType));

        if (socialType != savedUser.getSocialType()) {
            throw new OAuthProviderMissMatchException("가입 경로가 잘못 되었습니다. " + savedUser.getSocialType() + "로 다시 로그인해주세요");
        }

        return UserPrincipal.create(savedUser, user.getAttributes());
    }


    //TODO 카카오 권한문제로 닉네임, 생년, 핸드폰 번호등 받아올 수가 없음 ..
    private User createUser(OAuth2UserInfo userInfo, SocialType socialType) {
        User newUser = User.builder()
                .email(userInfo.getEmail())
                .name(socialType == SocialType.NAVER ? userInfo.getName() : userInfo.getNickname())
                .nickName(userInfo.getNickname())
                .birthday(socialType == SocialType.NAVER ? userInfo.getBirthYear() + userInfo.getBirthDay()
                        .replace("-", "") : null)
                .phoneNumber(userInfo.getPhoneNumber())
                .profileImage(userInfo.getProfileImage())
                .socialType(socialType)
                .userRoleType(UserRoleType.USER)
                .build();

        return userRepository.saveAndFlush(newUser);
    }
}
