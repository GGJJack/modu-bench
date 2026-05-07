---
modelId: gpt-realtime-2
domain: llm
status: published
updated: 2026-05-07
sources:
  - https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/
  - https://platform.openai.com/docs/models/gpt-realtime
features:
  toolUse: true
  vision: false
  audioInput: true
  audioOutput: true
highlights:
  - "OpenAI의 차세대 실시간 음성 지능 모델"
  - "지연 시간을 획기적으로 단축하여 자연스러운 대화 경험 제공"
  - "번역 및 전사(Transcription) 전용 모델 라인업 포함"
relatedOrganization: openai
---

# GPT-Realtime-2 소개

## 개요
GPT-Realtime-2는 2026년 5월 7일 OpenAI가 발표한 실시간 음성 지능 특화 모델입니다. 이 모델은 기존의 텍스트 기반 대화를 넘어, API를 통해 오디오 데이터를 실시간으로 입력받고 출력할 수 있도록 설계되었습니다. 특히 대화의 지연 시간(latency)을 인간의 대화 수준으로 단축하여, 사용자와 AI 간의 매끄럽고 즉각적인 상호작용을 가능하게 합니다. OpenAI는 이 모델과 함께 실시간 번역(`gpt-realtime-translate`) 및 전사(`gpt-realtime-whisper`) 모델을 동시에 공개하며 음성 AI 생태계를 확장하고 있습니다.

## 기술 특징
GPT-Realtime-2는 오디오 데이터를 직접 처리하는 네이티브 멀티모달 아키텍처를 채택하여, 기존의 STT(Speech-to-Text)와 LLM, TTS(Text-to-Speech)를 순차적으로 연결하던 방식보다 훨씬 빠른 반응 속도를 보여줍니다. 128,000 토큰의 컨텍스트 윈도우를 지원하며, 음성의 톤, 감정, 억양 등을 정교하게 이해하고 표현할 수 있는 능력을 갖추고 있습니다. 또한, 실시간 대화 중에도 도구 사용(Tool Use) 기능을 지원하여, 음성 명령만으로 외부 API를 호출하거나 복잡한 작업을 수행하는 진정한 의미의 '음성 에이전트' 구현이 가능해졌습니다.

## 사용 사례
이 모델은 고객 서비스 센터의 실시간 AI 상담원, 개인화된 언어 학습 튜터, 실시간 회의 통역사 등 다양한 분야에서 혁신을 일으키고 있습니다. 특히 개발자들은 Realtime API를 통해 자신의 어플리케이션에 고성능 음성 인터페이스를 손쉽게 통합할 수 있습니다. 예를 들어, 실시간 대화형 게임의 NPC 캐릭터나 시각 장애인을 위한 실시간 상황 설명 서비스 등에서 탁월한 몰입감과 편의성을 제공합니다.

## 한계
실시간 고성능 처리를 요구하는 모델의 특성상, 기존의 텍스트 전용 모델에 비해 API 사용 비용이 상대적으로 높게 책정되어 있습니다. 또한, 실시간 스트리밍 환경에서 안정적인 오디오 품질을 유지하기 위해 네트워크 상태에 민감하게 반응할 수 있다는 점이 제약 사항으로 꼽힙니다. 복잡한 추론이 필요한 일부 작업에서는 최상위 텍스트 모델인 GPT-5 시리즈에 비해 성능이 다소 제한적일 수 있으며, 지원되는 언어의 범위와 음성 합성의 자연스러움 또한 지속적인 업데이트가 필요한 영역입니다.
