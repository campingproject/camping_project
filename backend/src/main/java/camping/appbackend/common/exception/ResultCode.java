package camping.appbackend.common.exception;

import java.util.Arrays;
import java.util.Optional;
import java.util.function.Predicate;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ResultCode {
    SUCCESS(200, HttpStatus.OK, "Ok"),

    BAD_REQUEST(10000, HttpStatus.BAD_REQUEST, "Bad request"),
    VALIDATION_ERROR(10001, HttpStatus.BAD_REQUEST, "Validation error"),
    NOT_FOUND(10002, HttpStatus.NOT_FOUND, "Requested resource is not found"),
    EMPTY_PATH_VARIABLE(10003, HttpStatus.BAD_REQUEST, "Empty path Variable"),
    METHOD_NOT_ALLOWED(10004, HttpStatus.METHOD_NOT_ALLOWED, "Not Accessible method"),

    INTERNAL_ERROR(20000, HttpStatus.INTERNAL_SERVER_ERROR, "Internal error"),
    DATA_ACCESS_ERROR(20001, HttpStatus.INTERNAL_SERVER_ERROR, "Data access error"),

    UNAUTHORIZED(40000, HttpStatus.UNAUTHORIZED, "User unauthorized"),

    BOARD_NOT_FOUND(11000, HttpStatus.NOT_FOUND, "Board Not Found"),
    BOARD_NOT_PERMISSION(11001, HttpStatus.FORBIDDEN, "Permission denied for Board"),

    USER_NOT_EXISTS(12000, HttpStatus.NOT_FOUND, "User Not Exists"),

    IMAGE_NOT_EXISTS(13000, HttpStatus.NOT_FOUND, "image Not Exists"),

    API_REQUEST_ERROR(14000, HttpStatus.BAD_REQUEST, "Go Camp Api Request Error");


    private final Integer code;
    private final HttpStatus httpStatus;
    private final String message;

    ResultCode(Integer code, HttpStatus httpStatus, String message) {
        this.code = code;
        this.httpStatus = httpStatus;
        this.message = message;
    }


    public String getMessage(Throwable e) {
        return this.getMessage(this.getMessage() + " - " + e.getMessage());
    }

    public String getMessage(String message) {
        return Optional.ofNullable(message)
                .filter(Predicate.not(String::isBlank))
                .orElse(this.getMessage());
    }

    public static ResultCode valueOf(HttpStatus httpStatus) {
        if (httpStatus == null) {
            throw new BaseException("HttpStatus is null.");
        }

        return Arrays.stream(values())
                .filter(errorCode -> errorCode.getHttpStatus() == httpStatus)
                .findFirst()
                .orElseGet(() -> {
                    if (httpStatus.is4xxClientError()) {
                        return ResultCode.BAD_REQUEST;
                    }
                    if (httpStatus.is5xxServerError()) {
                        return ResultCode.INTERNAL_ERROR;
                    }
                    return ResultCode.SUCCESS;
                });
    }

    @Override
    public String toString() {
        return String.format("%s (%d)", this.name(), this.getCode());
    }
}