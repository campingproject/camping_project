package camping.appbackend.common.response;

import camping.appbackend.common.exception.ResultCode;
import lombok.Getter;

@Getter
public class ErrorResponseDTO extends ResponseDTO {

    private ErrorResponseDTO(ResultCode code) {
        super(false, code.getCode(), code.getMessage());
    }

    private ErrorResponseDTO(ResultCode code, Exception e) {
        super(false, code.getCode(), code.getMessage(e));
    }

    private ErrorResponseDTO(ResultCode code, String message) {
        super(false, code.getCode(), code.getMessage(message));
    }


    public static ErrorResponseDTO of(ResultCode code) {
        return new ErrorResponseDTO(code);
    }

    public static ErrorResponseDTO of(ResultCode code, Exception e) {
        return new ErrorResponseDTO(code, e);
    }

    public static ErrorResponseDTO of(ResultCode code, String message) {
        return new ErrorResponseDTO(code, message);
    }
}