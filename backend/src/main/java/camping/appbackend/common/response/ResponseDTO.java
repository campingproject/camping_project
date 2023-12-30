package camping.appbackend.common.response;

import camping.appbackend.common.exception.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@ToString
@Getter
@RequiredArgsConstructor
public class ResponseDTO {

    private final Boolean success;
    private final Integer statusCode;
    private final String message;

    public static ResponseDTO of(Boolean success, ErrorCode code) {
        return new ResponseDTO(success, code.getCode(), code.getMessage());
    }

    public static ResponseDTO of(Boolean success, ErrorCode errorCode, Exception e) {
        return new ResponseDTO(success, errorCode.getCode(), errorCode.getMessage(e));
    }

    public static ResponseDTO of(Boolean success, ErrorCode errorCode, String message) {
        return new ResponseDTO(success, errorCode.getCode(), errorCode.getMessage(message));
    }

}