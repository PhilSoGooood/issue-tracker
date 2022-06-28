# 가동중인 Issue-Tracker 도커 중단 및 삭제
sudo docker ps -a -q --filter "name=issue-tracker" | grep -q . && docker stop issue-tracker && docker rm issue-tracker | true

# 기존 이미지 삭제
sudo docker rmi philzeeno/issue-tracker:1.0

# 도커허브 이미지 pull
sudo docker pull philzeeno/issue-tracker:1.0

# 도커 run
sudo docker run -d -p 80:8080 --name issue-tracker philzeeno/issue-tracker:1.0

# 사용하지 않는 불필요한 이미지 삭제 -> 현재 컨테이너가 물고 있는 이미지는 삭제되지 않습니다.
sudo docker rmi -f $(docker images -f "dangling=true" -q) || true
