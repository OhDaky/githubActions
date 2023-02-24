# Day 01

## CI / CD

개발 프로세스를 자동화 하는 것
<br>
<b>ci</b> : 지속적 통합
<br>
<b>cd</b> : 지속적 제공, 지속적 배포
<br>
<br>

### CI

<b>핵심 포인트</b>

1. 개발자들은 코드를 자주 merge 해야한다
2. merge - build - test 프로세스 자동화

<b>장점</b>
<br>

- 코드의 이슈를 빠르게 파악.
- 버그를 빠르게 감지 / 수정
  => 코드 퀄리티 증가
  <br>
  <br>

### CD

어떻게 <b>배포를 자동화할 수 있을까?</b> 고민하는 단계
<br>
<br>

<h3>CI/CD 도구</h3>
ex. argo, github actions, jenkins, buildkite 등등
<br>
<br>

### Github Actions

<b>장점</b>
<br>

- 설치가 편리
  - 서버 설치가 필요 없다
  - 진입 장벽이 낮음
- Github와 강결합 되어있다 - github 내에서 사용 가능한 편리성 - 모든 github 이벤트에 대해 트리거를 제공 - 다양한 언어와 프레임워크 제공 - 개발자 친화적
<br>
<br>
<h4>핵심 요소</h4>

- Event : 특정 이벤트 발생했을 때, 내가 원하는 일을 자동화 하는 툴
  - ex) main 브랜치로 머지할 때 test 수행하게끔
- Workflows : 특정 이벤트 발생 시, 어떤 일을 수행하게 명시하는 것
- Jobs : 워크플로우 내에 job. 순서 지정도 가능
  - ex) unit test 수행. node setup.
- Steps : Job 안에 단계
  - step1 -> step2 순차적으로 수행하도록
- Actions : checkout을 가져다가 쓰는 액션 가장 첫번째에 반드시 배치

<br>

- Runner : 하나의 runner에는 하나의 job이 수행

<br>

<h4>WorkFlows</h4>

- github actions 실행의 뼈대가 되는 파일
  - .github/workflows 디렉토리에 YAML 형태로 저장
- Event 가 트리거가 되어 실행

<h4>Events</h4>

- workflow를 실행시키는 push, pull request, commit 등의 특정 행동
- event 종류는 github actions 공식 문서에서 확인

<h4>Job</h4>

- 동일한 Runner에서 실행되는 여러 step의 집합
- 모든 job은 기본적으로 동시에 병렬적으로 실행
- 필요 시 job 간의 의존관계를 설정하여 실행 순서 제어 가능

<h4>Steps</h4>

- 커맨드를 실행할 수 있는 각각의 task
- shell 커맨드가 될 수도 있고, 하나의 action이 될 수도 있다
- 하나의 job 내에서 각 step 은 다양한 task로 인해 생성된 데이터를 공유할 수 있다

<h4>Actions</h4>

- Workflow의 가장 작은 단위 블럭
- Public action : Github Community에 의해 생성된 action
- Custom action : 직접 만든 action

<h4>Runner</h4>

- github action runner 어플리케이션이 설치된 가상 머신
- workflow가 실행될 인스턴스
- runner는 한번에 하나의 Job만 실행할 수 있다
- runs-on 필드에 runner에 부여된 label 명시
