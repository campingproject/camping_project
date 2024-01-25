package camping.appbackend.domain.user.repository;

import camping.appbackend.domain.user.entity.UserRefreshToken;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRefreshTokenRepository extends JpaRepository<UserRefreshToken, Long> {

    Optional<UserRefreshToken> findByEmail(String userEmail);

    Optional<UserRefreshToken> findByEmailAndRefreshToken(String userEmail, String refreshToken);
}