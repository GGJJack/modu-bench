---
modelId: amazon-nova-2-sonic
domain: llm
status: published
updated: 2026-07-14
sources:
  - https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-sonic-next-generation-speech-to-speech-model-for-conversational-ai/
  - https://aws.amazon.com/ai/generative-ai/nova/
features:
  toolUse: true
  audioInput: true
  audioOutput: true
  realtime: true
highlights:
  - "Amazon Bedrock 기반 차세대 실시간 실용 양방향 speech-to-speech 모델"
  - "Polyglot 목소리 지원으로 언어 전환(Code-switching) 및 혼용 지원"
  - "Configurable VAD 및 인터럽트(Interruption) 핸들링 기능 탑재"
  - "비동기 도구 호출(Asynchronous Tool Calling)을 통한 자연스러운 멀티태스킹"
relatedOrganization: amazon
---

## 개요
Amazon Nova 2 Sonic은 Amazon Web Services(AWS)가 개발하여 Amazon Bedrock을 통해 일반 제공(GA)하는 차세대 speech-to-speech(음성 대 음성) 멀티모달 파운데이션 모델입니다. 이 모델은 전통적인 텍스트 변환 방식(ASR-LLM-TTS 파이프라인)의 한계를 깨고, 오디오 신호를 음향 맥락(Acoustic Context)과 감정 정보까지 포함하여 네이티브로 직접 처리하도록 설계되었습니다. 이를 통해 단순히 문장을 번역하거나 변환하는 것뿐만 아니라, 화자의 어조와 뉘앙스에 즉각적이고 유연하게 반응하는 사람처럼 유려한 voice-first 대화형 인공지능 인터페이스를 구현합니다.

## 기술 특징
* **다국어 및 다언어 음성(Polyglot Voices)**: 영어, 프랑스어, 이탈리아어, 독일어, 스페인어 등의 기존 언어 사양에 더해 포르투갈어와 힌디어 지원이 추가로 확장되었습니다. 특히 단일 목소리(예: Tiffany 화자)가 여러 언어를 부드럽게 넘나들 수 있는 **Polyglot 기능**과 대화 도중 언어를 혼용하는 **코드 스위칭(Code-switching)** 능력을 정교하게 처리합니다.
* **음성 활동 제어(Configurable VAD)**: 음성 활동 감지(Voice Activity Detection)의 민감도를 고(High), 중(Medium), 저(Low) 세 단계로 조절하여 비즈니스 성격에 맞게 튜닝할 수 있습니다. 빠른 반응 속도가 필요한 고객 서비스에는 High 민감도를, 긴 생각이 필요하거나 발화 속도가 느린 아동 및 노인 교육용 서비스에는 Low 민감도를 적용할 수 있습니다.
* **비동기 도구 호출(Asynchronous Tool Calling)**: 도메인 검색이나 외부 API 등의 도구를 호출할 때 대화 흐름을 멈추지 않고, 백그라운드에서 실행하는 동시에 사용자에게 즉각적인 자연어 대답을 계속 들려주는 차세대 대화형 멀티태스킹 기능을 갖추고 있습니다.
* **자연스러운 턴테이킹과 인터럽션**: 사용자가 모델의 발화 도중 말을 자르거나 끼어드는 상황(User Interruption)을 부드럽게 감지하고 이에 즉각 대응합니다. 또한, 오디오 코덱 최적화 및 8KHz 텔레포니 음성 매칭 성능이 뛰어나 실제 고객 콜센터 수준의 열악한 오디오 주파수 대역에서도 높은 인식 성능을 발휘합니다.
* **상호모달(Crossmodal) 영속 지원**: 한 세션 안에서 텍스트 입력과 음성 입력을 자유롭게 전환하며 Context를 온전히 공유합니다. 텍스트로 고도의 주소지나 도메인 사양을 지시한 후 즉각 이에 관해 네이티브 오디오로 상세 상담을 이어갈 수 있습니다.

## 사용 사례
* **지능형 콜센터/IVR 통합**: Amazon Connect, Vonage, Twilio 등 업계 주요 글로벌 텔레포니 및 오디오 파이프라인과 완벽히 호환되어, 복잡한 신호 처리와 회선 연결 오버헤드 없이 전사 고객 센터의 AI 음성 비서로 즉각 배포될 수 있습니다.
* **글로벌 실시간 교육**: 사용자가 학습 목적에 따라 한국어나 영어를 혼용하여 발화해도 모델이 유연하게 코드 스위칭과 다국어 억양을 반영하여 응대하므로 고품질 비대면 1:1 어학 학습의 핵심 튜터로 적용됩니다.
* **다기능 음성 에이전트**: 비동기 외부 검색(Web Grounding)과 연동하여, 비행기 일정을 실시간 조회하는 동안 대화가 끊기지 않도록 음성 음향 피드백을 주며 최종 일정을 조율해 주는 맞춤형 비서 역할을 수행합니다.

## 한계
* **컴퓨팅 인프라 의존성**: AWS Bedrock 생태계의 비동기 스트리밍 연결 및 고성능 연산 파이프라인에 밀접하게 종속되어 있어 온프레미스(On-premises)나 여타 클라우드 노드에서의 독자적인 패키징 서빙에는 기술적 제약이 뒤따릅니다.
* **초기 지역적 제한**: 현재 US East (N. Virginia), US West (Oregon), Asia Pacific (Tokyo) 등 특정 AWS 리전에서만 제한적으로 서빙되어 있어 글로벌 전 지점의 밀접 지연 시간 제어에는 리전 라우팅 설계가 고려되어야 합니다.
