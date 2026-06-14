---
modelId: gemini-3-5-live-translate
domain: llm
status: published
updated: 2026-06-14
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/
  - https://deepmind.google/models/model-cards/gemini-3-5-audio/
  - https://ai.google.dev/gemini-api/docs/live-api/live-translate
features:
  toolUse: false
  vision: false
  audioInput: true
  audioOutput: true
  realtime: true
highlights:
  - "70개 이상의 언어 지원 실시간 음성 통역 모델"
  - "화자의 억양, 속도, 피치를 유지하는 자연스러운 음성 생성"
  - "SynthID를 통한 AI 생성 오디오 워터마크 적용"
relatedOrganization: google
---

# Gemini 3.5 Live Translate 소개

## 개요
Gemini 3.5 Live Translate는 Google이 2026년 6월 9일에 발표한 혁신적인 오디오 전용 실시간 통역 모델입니다. Gemini 3 Pro를 기반으로 설계된 이 모델은 70개 이상의 언어를 자동으로 감지하고, 화자 간의 언어 장벽을 허물어 자연스러운 대화를 가능하게 합니다. 기존의 순차적 번역 시스템과 달리, 상대방의 말이 끝나기를 기다리지 않고 지속적으로 음성을 처리하여 지연 시간을 최소화한 것이 특징입니다.

## 기술 특징
이 모델은 음성 스트림을 실시간으로 처리하며, 번역된 음성에서 화자의 고유한 억양(Intonation), 속도(Pacing), 피치(Pitch)를 유지하여 기계적인 느낌을 줄였습니다. 기술적으로는 최대 128k 토큰의 오디오 컨텍스트 윈도우를 지원하며, 출력 시에는 최대 64k 토큰의 오디오 및 텍스트를 생성할 수 있습니다. 특히 노이즈에 대한 강한 내성을 갖추고 있어 소음이 심한 환경에서도 정확한 번역이 가능합니다. 또한 보안과 투명성을 위해 모든 생성 오디오에는 SynthID 워터마크가 보이지 않게 삽입되어 있습니다.

## 사용 사례
Gemini 3.5 Live Translate는 다양한 실시간 커뮤니케이션 환경에 최적화되어 있습니다. Google Meet을 통한 화상 회의에서 2,000개 이상의 언어 조합으로 실시간 통역을 지원하며, Google 번역 앱의 '듣기 모드'를 통해 스마트폰을 귀에 대고 일반 통화처럼 외국어 안내를 자국어로 실시간 청취할 수 있습니다. 개발자들은 Gemini Live API를 통해 다국어 전화 통화, 교육 강의 라이브 통역, 방송 더빙 등의 서비스에 이 모델의 기능을 통합할 수 있습니다.

## 한계
이 모델은 오디오 입력에 특화되어 있어 텍스트 입력은 지원하지 않으며, 현재 도구 사용(Tool-use)이나 복잡한 시스템 명령 수행 기능은 갖추고 있지 않습니다. 또한 긴 일시 정지 후에는 목소리가 일관되지 않거나, 여러 명의 화자가 빠르게 교차하며 말하는 상황에서 성별 인식이 바뀌는 등의 기술적 한계가 보고되어 있습니다. 배경 소음을 효과적으로 필터링하지만, 특정 환경에서는 번역된 오디오에 노이즈가 섞일 수 있습니다.
