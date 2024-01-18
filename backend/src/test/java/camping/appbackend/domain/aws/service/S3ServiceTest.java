package camping.appbackend.domain.aws.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class S3ServiceTest {

    @Autowired
    S3Service s3Service;

    @Test
    @DisplayName("게시물 내용에서 파일이름 추출 정규식 테스트 ")
    void extractFileNameTest() throws Exception {

        //given
        String content = "https://leegangeun-bucket.s3.ap-northeast-2.amazonaws.com/camp/3y7SjwzF_400x400.jpeg " +
                "https://leegangeun-bucket.s3.ap-northeast-2.amazonaws.com/camp/example.jpg " +
                "https://leegangeun-bucket.s3.ap-northeast-2.amazonaws.com/camp/another.png";

        //when
        List<String> fileNameList = S3Service.extractAllFileNamesAndExtensions(content);

        //then
        assertThat(fileNameList.get(0)).isEqualTo("3y7SjwzF_400x400.jpeg");
        assertThat(fileNameList.get(1)).isEqualTo("example.jpg");
        assertThat(fileNameList.get(2)).isEqualTo("another.png");
    }
}