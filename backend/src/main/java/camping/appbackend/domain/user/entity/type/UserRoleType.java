package camping.appbackend.domain.user.entity.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserRoleType {

    USER("ROLE_USER"),
    ADMIN("ROLE_ADMIN");

    private final String key;

}
