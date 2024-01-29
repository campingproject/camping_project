package camping.appbackend.oauth.handler;


import static camping.appbackend.oauth.domain.repository.OAuth2AuthorizationRequestBasedOnCookieRepository.ACCESS_TOKEN;
import static camping.appbackend.oauth.domain.repository.OAuth2AuthorizationRequestBasedOnCookieRepository.REDIRECT_URI_PARAM_COOKIE_NAME;
import static camping.appbackend.oauth.domain.repository.OAuth2AuthorizationRequestBasedOnCookieRepository.REFRESH_TOKEN;

import camping.appbackend.config.properties.AppProperties;
import camping.appbackend.domain.user.entity.UserRefreshToken;
import camping.appbackend.domain.user.entity.type.SocialType;
import camping.appbackend.domain.user.entity.type.UserRoleType;
import camping.appbackend.domain.user.repository.UserRefreshTokenRepository;
import camping.appbackend.oauth.domain.repository.OAuth2AuthorizationRequestBasedOnCookieRepository;
import camping.appbackend.oauth.info.OAuth2UserInfo;
import camping.appbackend.oauth.info.OAuth2UserInfoFactory;
import camping.appbackend.oauth.token.AuthToken;
import camping.appbackend.oauth.token.AuthTokenProvider;
import camping.appbackend.oauth.util.CookieUtil;
import java.io.IOException;
import java.net.URI;
import java.util.Collection;
import java.util.Date;
import java.util.Optional;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;


@Component
@RequiredArgsConstructor
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final AuthTokenProvider tokenProvider;
    private final AppProperties appProperties;
    private final UserRefreshTokenRepository userRefreshTokenRepository;
    private final OAuth2AuthorizationRequestBasedOnCookieRepository authorizationRequestRepository;


    //oauth2 인증이 성공적으로 이뤄졌을 때 실행됨
    //token을 포함한 uri를 생성 후 인증요청 쿠키를 비워주고 redirect
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException {
        String targetUrl = determineTargetUrl(request, response, authentication);

        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }

        clearAuthenticationAttributes(request, response);
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    //token을 생성하고 이를 포함한 프론트엔드의 URI를 생성
    @Override
    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) {
        Optional<String> redirectUri = CookieUtil.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue);

        if (redirectUri.isPresent() && !isAuthorizedRedirectUri(redirectUri.get())) {
            throw new IllegalArgumentException("잘못된 리다이렉트 경로입니다. 인증을 진행할 수 없습니다.");
        }

        String targetUrl = redirectUri.orElse("/");

        OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) authentication;
        SocialType socialType = SocialType.valueOf(authToken.getAuthorizedClientRegistrationId().toUpperCase());

        OidcUser user = ((OidcUser) authentication.getPrincipal());
        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(socialType, user.getAttributes());
        Collection<? extends GrantedAuthority> authorities = ((OidcUser) authentication.getPrincipal()).getAuthorities();

        UserRoleType userRoleType = hasAuthority(authorities);

        Date now = new Date();
        AuthToken accessToken = tokenProvider.createAuthToken(
                userInfo.getEmail(),
                userInfo.getNickname(),
                userRoleType.getKey(),
                new Date(now.getTime() + appProperties.getAuth().getTokenExpiry())
        );

        // refresh 토큰 설정
        long refreshTokenExpiry = appProperties.getAuth().getRefreshTokenExpiry();

        AuthToken refreshToken = tokenProvider.createAuthToken(
                appProperties.getAuth().getTokenSecret(),
                new Date(now.getTime() + refreshTokenExpiry)
        );

        UserRefreshToken userRefreshToken = userRefreshTokenRepository.findByEmail(userInfo.getEmail())
                .orElse(new UserRefreshToken(userInfo.getEmail(), refreshToken.getToken()));

        userRefreshToken.changeRefreshToken(refreshToken.getToken());
        userRefreshTokenRepository.saveAndFlush(userRefreshToken);

        int cookieMaxAge = (int) refreshTokenExpiry / 60;
        int cookieMaxAgeForAccess = (int) appProperties.getAuth().getTokenExpiry() / 1000;

        CookieUtil.deleteCookie(request, response, ACCESS_TOKEN);
        CookieUtil.addCookieForAccess(response, ACCESS_TOKEN, accessToken.getToken(), cookieMaxAgeForAccess);

        CookieUtil.deleteCookie(request, response, REFRESH_TOKEN);
        CookieUtil.addCookie(response, REFRESH_TOKEN, refreshToken.getToken(), cookieMaxAge);

        return UriComponentsBuilder.fromUriString(targetUrl)
                .build().toUriString();
    }

    //인증정보 요청 내역에서 쿠키를 삭제
    protected void clearAuthenticationAttributes(HttpServletRequest request, HttpServletResponse response) {
        super.clearAuthenticationAttributes(request);
        authorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
    }

    private UserRoleType hasAuthority(Collection<? extends GrantedAuthority> authorities) {
        if (authorities == null) {
            return UserRoleType.USER;
        }

        for (GrantedAuthority grantedAuthority : authorities) {
            if (UserRoleType.ADMIN.getKey().equals(grantedAuthority.getAuthority())) {
                return UserRoleType.ADMIN;
            }
        }

        return UserRoleType.USER;
    }

    //application.oauth.yml을 통해서 등록해놓은 Redirect uri가 맞는지 확인한다.
    private boolean isAuthorizedRedirectUri(String uri) {
        URI clientRedirectUri = URI.create(uri);

        return appProperties.getOauth2().getAuthorizedRedirectUris()
                .stream()
                .anyMatch(authorizedRedirectUri -> {
                    URI authorizedURI = URI.create(authorizedRedirectUri);
                    return authorizedURI.getHost().equalsIgnoreCase(clientRedirectUri.getHost())
                            && authorizedURI.getPort() == clientRedirectUri.getPort();
                });
    }
}
