package camping.appbackend.common.response;

import camping.appbackend.common.exception.ErrorCode;
import lombok.Getter;

@Getter
public class DataResponseDTO<T> extends ResponseDTO {

    private final T data;

    private DataResponseDTO(T data) {
        super(true, ErrorCode.OK.getCode(), ErrorCode.OK.getMessage());
        this.data = data;
    }

    public DataResponseDTO(T data, String message) {
        super(true, ErrorCode.OK.getCode(), message);
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