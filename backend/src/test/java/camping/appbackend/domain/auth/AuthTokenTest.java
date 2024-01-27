package camping.appbackend.domain.auth;

import static org.assertj.core.api.Assertions.assertThat;

import camping.appbackend.oauth.token.AuthToken;
import camping.appbackend.oauth.token.AuthTokenProvider;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class AuthTokenTest {


    private static final String AUTHORITIES_KEY = "role";
    private static final String NICKNAME_KEY = "nickName";
    private static final String SECRET_KEY = "1231231231231231223131231231231231231212312312";
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    AuthTokenProvider authTokenProvider = new AuthTokenProvider(SECRET_KEY);
    private final AuthToken authToken = new AuthToken("test_id", new Date(), key);

    @Test
    @DisplayName("토큰 생성 검증")
    void givenIdAndExpiry_whenCreateAuthToken_thenReturnsValidToken() {

        // given && when
        AuthToken generatedToken = new AuthToken("test_id", new Date(), key);

        // then
        assertThat(authToken.getToken()).isNotEmpty();
        assertThat(generatedToken.getToken()).isNotEmpty();
        assertThat(authToken.getToken()).isEqualTo(generatedToken.getToken());
    }

    @Test
    @DisplayName("jwt 내부 클레임 값 검증")
    void getTokenClaims_shouldReturnValidClaims() {
        // given
        String id = "test_id";
        String nickname = "test_nickname";
        String role = "ROLE_USER";
        Date expiry = new Date(System.currentTimeMillis() + 3600000);

        AuthToken generatedToken = new AuthToken(id, nickname, role, expiry, key);

        // when
        Optional<Claims> tokenClaims = generatedToken.getTokenClaims();

        // then
        assertThat(tokenClaims).isPresent();
        Claims claims = tokenClaims.get();
        assertThat(claims.getSubject()).isEqualTo(id);
        assertThat(claims.get(NICKNAME_KEY, String.class)).isEqualTo(nickname);
        assertThat(claims.get(AUTHORITIES_KEY, String.class)).isEqualTo(role);
    }


    @DisplayName("Convert token: AuthToken 객체 변환")
    @Test
    void givenValidAuthToken_whenConvertAuthToken_thenReturnsAuthToken() {

        // given
        AuthToken token = authTokenProvider.convertAuthToken("token_test");

        //when && then
        assertThat(token.getToken()).isEqualTo("token_test");
    }


}