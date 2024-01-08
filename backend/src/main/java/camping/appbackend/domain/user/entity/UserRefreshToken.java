package camping.appbackend.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class UserRefreshToken {

    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_refresh_token_id")
    private Long id;

    @Comment("이메일")
    @Column(length = 100, unique = true, nullable = false)
    private String email;

    @Comment("리프레쉬 토큰 값")
    @Column(length = 256, nullable = false)
    private String refreshToken;

    @Builder
    public UserRefreshToken(String userEmail, String refreshToken) {
        this.email = userEmail;
        this.refreshToken = refreshToken;
    }

    public void changeRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

}
