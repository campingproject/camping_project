package camping.appbackend.common.response;

import camping.appbackend.common.exception.ResultCode;
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

    public static ResponseDTO of(Boolean success, ResultCode code) {
        return new ResponseDTO(success, code.getCode(), code.getMessage());
    }

    public static ResponseDTO of(Boolean success, ResultCode resultCode, Exception e) {
        return new ResponseDTO(success, resultCode.getCode(), resultCode.getMessage(e));
    }

    public static ResponseDTO of(Boolean success, ResultCode resultCode, String message) {
        return new ResponseDTO(success, resultCode.getCode(), resultCode.getMessage(message));
    }

}