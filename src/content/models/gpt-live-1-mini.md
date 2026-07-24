---
modelId: gpt-live-1-mini
domain: llm
status: published
updated: 2026-07-24
sources:
  - https://openai.com/index/introducing-gpt-live/
  - https://deploymentsafety.openai.com/gpt-live
  - https://help.openai.com/articles/20001274
features:
  toolUse: true
  audioInput: true
  audioOutput: true
  realtime: true
highlights:
  - "전이중(Full-duplex) 아키텍처 기반의 고성능 소형 실시간 음성 상호작용 모델"
  - "ChatGPT 무료 사용자 및 경량 API 수요를 위한 최적의 응답 효율성 제공"
  - "백그라운드에서 GPT-5.5 Instant 모델과 연동되어 실시간 정보와 추론 작업 위임 처리"
relatedOrganization: openai
---

# GPT-Live-1 mini 소개

## 개요
GPT-Live-1 mini는 OpenAI가 2026-07-08 GPT-Live-1 제품군과 함께 공개한 경량 실시간 음성 상호작용 모델입니다. 이 모델은 대규모 음성 인프라의 처리 비용을 혁신적으로 절감하면서도, 인간과 대화하는 듯한 반응 감도와 흐름을 제공하는 것을 목표로 설계되었습니다. 글로벌 롤아웃과 함께 ChatGPT Free 사용자를 위한 기본 음성 모델로 설정되었으며, 모바일 환경 등 저대역폭 및 저지연성이 요구되는 실시간 대화 환경에서 극대화된 효율성을 자랑합니다.

## 기술 특징
GPT-Live-1 mini는 상위 제품군과 마찬가지로 입력을 지속적으로 처리하면서 출력을 동시에 내뱉는 전이중(Full-duplex) 실시간 음성 아키텍처를 공유합니다. 하지만 파라미터 경량화를 통해 모델 자체의 계산량과 대기 시간(Latency)을 획기적으로 낮춘 것이 가장 큰 특징입니다.
*   **하이브리드 위임 프레임워크:** 복잡한 검색이나 계산이 필요할 경우, 백그라운드에서 경량 프런티어 모델인 GPT-5.5 Instant에 연산을 동적으로 위임(Delegation)하여 결과를 실시간 음성 흐름에 자연스럽게 녹여냅니다.
*   **고대역폭 음성 제어:** 경량화 모델임에도 불구하고 "mhmm", "yeah"와 같은 추임새를 실시간으로 판단하여 출력하고, 사용자의 급작스러운 말 끊기(Interrupt)나 침묵 상태를 정확히 인지하여 턴을 전환하는 턴 감지(Turn detection) 메커니즘을 동일하게 탑재하고 있습니다.

## 사용 사례
이 모델은 반응 속도가 최우선인 가벼운 비서 대화, 즉각적인 단어 번역, 실시간 발음 교정 및 외국어 회화 연습과 같은 일상 밀착형 서비스에 적합합니다. 특히 전력 및 컴퓨팅 비용의 효율성이 중요하여 API 사용 시 경제적인 부담을 줄이고자 하는 모바일 애플리케이션 개발자나 스타트업의 지능형 음성 에이전트 구축에 최상의 선택지를 제공합니다.

## 한계
GPT-Live-1 mini는 초저지연 연산에 최적화되어 있으므로 복잡한 이과적 과학 추론(GPQA 등)이나 기하학적 사고, 긴 문서의 요약 등 고도의 복잡한 사고력이 필요한 워크플로우에서는 상위 모델인 GPT-Live-1 Medium이나 High 에 비해 백그라운드 위임 처리에 따른 응답 지연이 더 자주 체감되거나 최종 정밀도가 낮아질 수 있습니다. 또한 화면 공유나 비디오 입력과 결합한 실시간 오디오-비디오 동시 인터랙션 기능은 지원하지 않습니다.
