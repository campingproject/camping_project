# Java 17 이미지 사용
FROM openjdk:17-alpine

VOLUME /tmp

# JAR_FILE 변수에 값을 저장
ARG JAR_FILE=./build/libs/app-backend-1.0.jar

# 변수에 저장된 것을 컨테이너 실행 시 이름을 app.jar 파일로 변경하여 컨테이너에 복사
COPY ${JAR_FILE} app.jar

# 외부 설정 파일을 복사합니다. (예: security 폴더 안에 application.yml 파일)
COPY security/application-prod.yml application.yml

# 빌드된 이미지가 실행될 때 실행할 명령어
ENTRYPOINT ["java", "-jar", "app.jar"]
