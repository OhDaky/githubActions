# Day 02

## Runner

### Runner의 종류

- Github-hosted Runner
- Self-hosted Runner

<br>

### Github hosted Runner

- github에서 호스팅하는 러너
- 러너 어플리케이션 및 기타 도구가 사전 설치된 가상 머신
- Ubuntu Linux, Windows, macOS 에서 사용
- 서버 유지 관리 및 업그레이드 자동 처리
- 무료 범위 초과 시 비용

<br>

### Self hosted Runner

- 유저가 보유한 컴퓨팅 자원으로 실행되는 가상 머신
- 유저가 자체적으로 호스팅하는 러너
- 오픈 소스
- 머신에 self hosted runner 어플리케이션 설치 및 실행
- github hosted runner 에서 지원하지 않는 운영체제도 선택 가능
- hw / sw / os / 보안 요구사항에 맞게 커스터마이징 가능
- 무료지만 러너 유지보수 비용 발생

<br>

## Self Hosted Runner 사용법

1. github 저장소 > Settings > Action > Runners
2. New self-hosted runner
3. 터미널에서 self-hosted runner 설치 명령어 입력
4. Repository Settings > Actions > Runners 에서 확인
5. 해당 러너 label 지정 ex. test-runner
6. Actions > New workflow
7. <b>runs-on</b> 필드에 Runner Label 명시
   ex. runs-on: [test-runner]
8. Start commit
9. Workflow 실행 과정 확인
10. 터미널에서도 실행 확인
