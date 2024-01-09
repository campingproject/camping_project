package camping.appbackend.common.response;

import camping.appbackend.common.exception.ResultCode;
import lombok.Getter;

@Getter
public class DataResponseDTO<T> extends ResponseDTO {

    private final T data;

    private DataResponseDTO(T data) {
        super(true, ResultCode.SUCCESS.getCode(), ResultCode.SUCCESS.getMessage());
        this.data = data;
    }

    public DataResponseDTO(T data, String message) {
        super(true, ResultCode.SUCCESS.getCode(), message);
        this.data = data;
    }

    public static <T> DataResponseDTO<T> of(T data) {
        return new DataResponseDTO<>(data);
    }

    public static <T> DataResponseDTO<T> of(T data, String message) {
        return new DataResponseDTO<>(data, message);
    }

    public static <T> DataResponseDTO<T> empty() {
        return new DataResponseDTO<>(null);
    }
}