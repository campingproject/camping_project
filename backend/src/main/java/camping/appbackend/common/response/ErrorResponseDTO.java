package camping.appbackend.common.response;

import camping.appbackend.common.exception.ErrorCode;
import lombok.Getter;

@Getter
public class ErrorResponseDTO extends ResponseDTO {

    private ErrorResponseDTO(ErrorCode code) {
        super(false, code.getCode(), code.getMessage());
    }

    private ErrorResponseDTO(ErrorCode code, Exception e) {
        super(false, code.getCode(), code.getMessage(e));
    }

    private ErrorResponseDTO(ErrorCode code, String message) {
        super(false, code.getCode(), code.getMessage(message));
    }


    public static ErrorResponseDTO of(ErrorCode code) {
        return new ErrorResponseDTO(code);
    }

    public static ErrorResponseDTO of(ErrorCode code, Exception e) {
        return new ErrorResponseDTO(code, e);
    }

    public static ErrorResponseDTO of(ErrorCode code, String message) {
        return new ErrorResponseDTO(code, message);
    }
}