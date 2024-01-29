package camping.appbackend.oauth.token;


import camping.appbackend.domain.user.entity.User;
import camping.appbackend.domain.user.repository.UserRepository;
import camping.appbackend.oauth.exception.TokenValidFailedException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;


@Slf4j
public class AuthTokenProvider {

    private final Key key;
    private static final String AUTHORITIES_KEY = "role";
    @Autowired
    private UserRepository userRepository;

    public AuthTokenProvider(String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    public AuthToken createAuthToken(String userEmail, Date expiry) {
        return new AuthToken(userEmail, expiry, key);
    }

    public AuthToken createAuthToken(String userEmail, String nickName, String role, Date expiry) {
        return new AuthToken(userEmail, nickName, role, expiry, key);
    }

    public AuthToken convertAuthToken(String token) {
        return new AuthToken(token, key);
    }

    public Authentication getAuthentication(AuthToken authToken) {

        Claims claims = authToken.getTokenClaims().orElseThrow(TokenValidFailedException::new);

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(new String[]{claims.get(AUTHORITIES_KEY).toString()})
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        User principal = userRepository.findByEmail(claims.getSubject()).orElseThrow();
        log.debug("claims subject := [{}]", claims.getSubject());

        return new UsernamePasswordAuthenticationToken(principal, authToken, authorities);
    }
}

