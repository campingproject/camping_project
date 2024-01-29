package camping.appbackend.domain.auth;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

import camping.appbackend.oauth.util.CookieUtil;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class CookieUtilTest {

    @Mock
    HttpServletRequest request;

    @DisplayName("요청에 쿠키가 없으면 empty() 리턴")
    @Test
    void givenRequestWithOutCookies_getCookie_returnEmpty() throws Exception {

        //given
        given(request.getCookies()).willReturn(null);

        //when & then
        assertThat(CookieUtil.getCookie(request, "")).isEmpty();

    }

    @DisplayName("요청에 이름과 일치하는 쿠키가 존재하면 쿠키 리턴")
    @Test
    void givenRequestWithCookies_getCookie_returnCookie() throws Exception {
        // given
        Cookie[] cookies = {new Cookie("test_cookie", "test_value")};
        given(request.getCookies()).willReturn(cookies);

        // when & then
        assertThat(CookieUtil.getCookie(request, "test_cookie")).isNotEmpty();
    }

    @DisplayName("요청에 access_token 쿠키가 존재하면 value값을 리턴")
    @Test
    void givenRequest_ExistsAccessToken_returnCookieValue() throws Exception {

        //given
        Cookie[] cookies = {new Cookie("access_token", "token_value_test")};
        given(request.getCookies()).willReturn(cookies);

        //when & then
        assertThat(CookieUtil.getAccessToken(request)).isEqualTo("token_value_test");
    }

    @DisplayName("요청에 access_token 쿠키가 존재하지 않으면 null 리턴")
    @Test
    void givenRequest_NotExistsAccessToken_returnNull() throws Exception {

        //given
        given(request.getCookies()).willReturn(null);

        //when & then
        assertThat(CookieUtil.getAccessToken(request)).isNull();

    }

}