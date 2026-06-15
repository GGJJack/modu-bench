---
date: 2026-06-15
agent: collect-llm
status: completed
summary: "Gemini 3.5 Live Translate 및 Ministral 3 시리즈 메타데이터 보강, Voxtral 전사 모델 교차 발견 등록 및 세부 정보(단가, 모달리티) 추가"
---

## Todo
- [x] Mistral 3 (8B/Ministral) 상세 정보 보강
- [x] Gemini 3.5 Live Translate 상세 정보 보강
- [x] 신규 모델 검색 (DeepSeek, Qwen, 국내 모델 등)

## 조사 내역
- 01:00 작업 시작
- 01:10 Gemini 3.5 Live Translate 컨텍스트 윈도우 확인 (128k) 및 오디오/텍스트 모달리티 지원 확인 ← https://deepmind.google/models/model-cards/gemini-3-5-audio/
- 01:15 Ministral 3 시리즈 컨텍스트 윈도우 및 가격 확인 (256k, $0.1~0.2/M) ← https://docs.mistral.ai/models/ministral-3-3b-25-12
- 01:20 Voxtral Mini Transcribe 2/Realtime 출시일(2026-02-04), 라이선스(V2: Proprietary, Realtime: Apache-2.0), 단가($0.003~0.006/min) 및 지원 모달리티(audio, text) 확인 ← https://mistral.ai/news/voxtral-transcribe-2/

## 수행한 작업
- [x] gemini-3-5-live-translate 보강 (contextWindow: 128000) ← https://deepmind.google/models/model-cards/gemini-3-5-audio/
- [x] gemini-3.5-live-translate (multimodal) 보강 (supportedModalities: ["audio", "text"], contextWindow: 128000)
- [x] ministral-3-3b 보강 (contextWindow: 256000, pricing: 0.1/0.1) ← https://docs.mistral.ai/models/ministral-3-3b-25-12
- [x] ministral-3-8b 보강 (contextWindow: 256000, pricing: 0.15/0.15) ← https://docs.mistral.ai/models/ministral-3-8b-25-12
- [x] ministral-3-14b 보강 (contextWindow: 256000, pricing: 0.2/0.2) ← https://docs.mistral.ai/models/ministral-3-14b-25-12
- [x] cross-discovery → multimodal: voxtral-mini-transcribe-2, voxtral-mini-transcribe-realtime 등록 및 보강 (pricing, supportedModalities) ← https://mistral.ai/news/voxtral-transcribe-2/

## 판단 / 고민
- DeepSeek-V4-Flash 및 Preview는 이미 최신 정보가 등록되어 있어 추가 보강하지 않음.
- Solar Pro 3 역시 이미 등록되어 있으며 최신 뉴스에서 추가 필드(parameterSize 등)가 명확히 공개되지 않아 null 유지.
- 도메인별 ID 명명 규칙 차이(gemini-3-5 vs gemini-3.5) 확인하여 각각 업데이트 수행.

## 이슈 제기
- (없음)
