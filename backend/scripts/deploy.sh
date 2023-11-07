# 가동중인 awsstudy 도커 중단 및 삭제
sudo docker ps -a -q --filter "name=api" | grep -q . && docker stop api && docker rm api | true

# 기존 이미지 삭제
sudo docker rmi easydong02/camping:1.0

# 도커허브 이미지 pull
sudo docker pull easydong02/camping:1.0

# 도커 run
docker run -d -p 9090:8080 -e SPRING_PROFILES_ACTIVE=prod --name api easydong02/camping:1.0

# 사용하지 않는 불필요한 이미지 삭제 -> 현재 컨테이너가 물고 있는 이미지는 삭제되지 않습니다.
docker rmi -f $(docker images -f "dangling=true" -q) || true