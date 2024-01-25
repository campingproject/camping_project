package camping.appbackend.domain.aws.service;

import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.Headers;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class S3Service {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    @Async
    public void deleteImagesWithPattern(String content) {
        List<String> fileNameList = extractAllFileNamesAndExtensions(content);
        fileNameList.forEach(this::deleteImage);
    }

    public static List<String> extractAllFileNamesAndExtensions(String content) {
        List<String> fileNameList = new ArrayList<>();

        String pattern = "leegangeun-bucket.s3.ap-northeast-2.amazonaws.com/camp/([^\\s]+)";

        Matcher matcher = Pattern.compile(pattern).matcher(content);

        while (matcher.find()) {
            fileNameList.add(matcher.group(1));
        }

        return fileNameList;
    }

    public void deleteImage(String fileName) {
        amazonS3.deleteObject(bucket, fileName);
    }

    public String getPreSignedUrl(String prefix, String fileName) {
        if (!StringUtils.isEmpty(prefix)) {
            fileName = createPath(prefix, fileName);
        }

        GeneratePresignedUrlRequest generatePresignedUrlRequest = getGeneratePreSignedUrlRequest(bucket, fileName);
        URL url = amazonS3.generatePresignedUrl(generatePresignedUrlRequest);
        return url.toString();
    }

    private GeneratePresignedUrlRequest getGeneratePreSignedUrlRequest(String bucket, String fileName) {
        GeneratePresignedUrlRequest generatePresignedUrlRequest =
                new GeneratePresignedUrlRequest(bucket, fileName)
                        .withMethod(HttpMethod.PUT)
                        .withExpiration(getPreSignedUrlExpiration());
        generatePresignedUrlRequest.addRequestParameter(
                Headers.S3_CANNED_ACL,
                CannedAccessControlList.PublicRead.toString());
        return generatePresignedUrlRequest;
    }

    private Date getPreSignedUrlExpiration() {
        Date expiration = new Date();
        long expTimeMillis = expiration.getTime();
        expTimeMillis += 1000 * 60 * 2;
        expiration.setTime(expTimeMillis);
        return expiration;
    }

    private String createPath(String prefix, String fileName) {
        String fileId = UUID.randomUUID().toString().substring(0, 20);
        return String.format("%s/%s", prefix, fileId + fileName);
    }

}
