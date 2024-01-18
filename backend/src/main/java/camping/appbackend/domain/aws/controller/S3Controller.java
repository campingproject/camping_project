package camping.appbackend.domain.aws.controller;

import camping.appbackend.common.response.DataResponseDTO;
import camping.appbackend.domain.aws.service.S3Service;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "파일 API")
@RequiredArgsConstructor
@RequestMapping("/file")
@RestController
public class S3Controller {

    private final S3Service s3Service;

    @Operation(summary = "파일 생성 권한 획득")
    @PostMapping("/presigned-url")
    public DataResponseDTO<String> getPreSignedUrl(@RequestParam String fileName) {
        return DataResponseDTO.of(s3Service.getPreSignedUrl("camp", fileName));
    }

    @Operation(summary = "파일 삭제")
    @DeleteMapping("/delete")
    public DataResponseDTO<Object> deleteImage(@RequestParam String fileName) {
        s3Service.deleteImage(fileName);
        return DataResponseDTO.empty();
    }
}