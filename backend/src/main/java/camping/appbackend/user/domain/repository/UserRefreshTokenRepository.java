package camping.appbackend.user.domain.repository;

import camping.appbackend.user.domain.entity.UserRefreshToken;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRefreshTokenRepository extends JpaRepository<UserRefreshToken, Long> {

    Optional<UserRefreshToken> findByEmail(String userEmail);

    Optional<UserRefreshToken> findByEmailAndRefreshToken(String userEmail, String refreshToken);
}