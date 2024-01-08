package camping.appbackend.common.exception;

import camping.appbackend.common.response.ErrorResponseDTO;
import java.util.stream.Collectors;
import javax.validation.UnexpectedTypeException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /*
     * Developer Custom Exception
     */
    @ExceptionHandler(BaseException.class)
    protected ResponseEntity<ErrorResponseDTO> handleBaseException(final BaseException e) {
        return ResponseEntity
                .status(e.getResultCode().getCode())
                .body(ErrorResponseDTO.of(e.getResultCode()));
    }

    @ExceptionHandler(BindException.class)
    protected ResponseEntity<ErrorResponseDTO> handleBaseException(final BindException e) {
        String sb = e.getBindingResult().getFieldErrors().stream()
                .map(fieldError -> fieldError.getField() + ":" + fieldError.getDefaultMessage())
                .collect(Collectors.joining(", ", "", ""));

        return ResponseEntity
                .status(ResultCode.VALIDATION_ERROR.getCode())
                .body(ErrorResponseDTO.of(ResultCode.VALIDATION_ERROR, sb));
    }

    /**
     * enum type 일치하지 않아 binding 못할 경우 발생 주로 @RequestParam enum으로 binding 못했을 경우 발생
     */
    // date
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    protected ResponseEntity<ErrorResponseDTO> handleMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.VALIDATION_ERROR));
    }

    /**
     * javax.validation.Valid or @Validated 으로 binding error 발생시 발생한다. HttpMessageConverter 에서 등록한 HttpMessageConverter
     * binding 못할경우 발생 주로 @RequestBody, @RequestPart 어노테이션에서 발생
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<ErrorResponseDTO> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException e) {
        BindingResult bindingResult = e.getBindingResult();
        StringBuilder builder = new StringBuilder();
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            builder.append(fieldError.getDefaultMessage());
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.BAD_REQUEST, builder.toString()));
    }

    // Path variable 입력 안할 때
    @ExceptionHandler(value = HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponseDTO> handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.EMPTY_PATH_VARIABLE));
    }

    /*
     * HTTP 405 Exception
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    protected ResponseEntity<ErrorResponseDTO> handleHttpRequestMethodNotSupportedException(
            final HttpRequestMethodNotSupportedException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.METHOD_NOT_ALLOWED));
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    protected ResponseEntity<ErrorResponseDTO> handleMissingServletRequestParameterException(
            final MissingServletRequestParameterException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.BAD_REQUEST));
    }

    @ExceptionHandler(UnexpectedTypeException.class)
    protected ResponseEntity<ErrorResponseDTO> handleUnexpectedTypeException(final UnexpectedTypeException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.BAD_REQUEST));
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    protected ResponseEntity<ErrorResponseDTO> handleUnexpectedTypeException(final UsernameNotFoundException e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST.value())
                .body(ErrorResponseDTO.of(ResultCode.USER_NOT_EXISTS));
    }

}

