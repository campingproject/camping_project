package camping.appbackend.common.exception;

import lombok.Getter;

@Getter
public class BaseException extends RuntimeException {

    private final ResultCode resultCode;

    public BaseException() {
        super(ResultCode.INTERNAL_ERROR.getMessage());
        this.resultCode = ResultCode.INTERNAL_ERROR;
    }

    public BaseException(String message) {
        super(ResultCode.INTERNAL_ERROR.getMessage(message));
        this.resultCode = ResultCode.INTERNAL_ERROR;
    }

    public BaseException(ResultCode resultCode) {
        this.resultCode = resultCode;
    }

    public BaseException(String message, ResultCode resultCode) {
        super(message);
        this.resultCode = resultCode;
    }

    public BaseException(String message, Throwable cause, ResultCode resultCode) {
        super(message, cause);
        this.resultCode = resultCode;
    }

    public BaseException(Throwable cause, ResultCode resultCode) {
        super(cause);
        this.resultCode = resultCode;
    }
}