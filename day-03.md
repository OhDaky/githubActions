# Day 03

## Public / Custom Actions

1. Action 종류

- Public Actions
  - https://github.com/actions 에서 미리 만들어진 actions 사용 가능
- Custon Actions
  - action.yml 파일 명으로 action 생성
  - action.yml 파일의 경로를 입력하여 action을 사용할 수 있음

<br>

2. Action Inputs / Outputs

- inputs: with를 사용하여 입력 가능
- outputs: step에 id 할당 후, ${{steps.{id}.outputs.{key}}} 형태로 사용 가능

<br>

3. 주요 변수

- github context
  - https://docs.github.com/en/actions/learn-github-actions/contexts#github-context

<br>

- matrix
  - 매트릭스에 기입된 값 수만큼 job이 실행되며, 각 값을 변수로 사용 가능
  - ${{matrix.{key}}}

<br>

- env
  - 환경변수로 값 정의한 후 step 에서 사용 가능
  - ${{env.{key}}}

<br>

- secret
  - github에 중요한 값을 저장한 후, github actions 실행 시 값을 가져와서 사용 가능
  - ${{secrets.{key}}}

<br>

4. 순차 처리

- job 순차 처리를 위해서 needs 선언
- if 사용하여 분기 처리 가능
- needs: {Job name}

<br>

5. Docker Action Flow

- docker/setup-buildx-action: docker 빌드 환경 세팅
- docker/setup-qemu-action: 다양한 플랫폼에서 사용할 수 있도록 QEMU 정적 바이너리 설치
- docker/login-action: 로그인
- docker/build-push-action: docker 이미지 빌드
