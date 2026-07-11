---
date: 2026-07-11
agent: collect-llm
status: completed
summary: "2026-07-11 LLM 신규 모델(Grok 4.5 등) 발견 및 Upstage 모델 가격 정보 보강 완료"
---

## Todo
- [x] 신규 모델 발견 (Grok 4.5, Cohere Transcribe Arabic 등)
- [x] 신규 모델 등록
- [x] 기존 모델 보강 (Solar Pro 3, Pro 2, Mini 가격 정보)

## 조사 내역
- 01:00 작업 시작
- 01:05 xAI Grok 4.5 출시 확인 (2026-07-08) ← https://x.ai/news/grok-4-5
- 01:10 Cohere Transcribe Arabic 출시 확인 (2026-07-07) ← https://cohere.com/blog/transcribe-arabic
- 01:15 Upstage Solar Pro 3, Pro 2, Mini 최신 가격 및 파라미터 정보 확인 ← https://www.upstage.ai/pricing/api, https://console.upstage.ai/playground/chat
- 01:20 xAI Grok Imagine Image Quality API 정보 확인 ← https://docs.x.ai/developers/models

## 수행한 작업
- 01:25 Grok 4.5 (LLM) 등록: 500k context, $2/$6 pricing ← https://x.ai/news/grok-4-5
- 01:25 Cohere Transcribe Arabic (STT) 등록: Apache-2.0, 지원 언어(Arabic, English) ← https://cohere.com/blog/transcribe-arabic
- 01:25 Grok Imagine Image Quality (Image-Gen) 등록 ← https://docs.x.ai/developers/models
- 01:30 Solar Pro 3 보강: parameterSize 102B (MoE), pricing $0.15/$0.6 ← https://www.upstage.ai/pricing/api
- 01:30 Solar Pro 2 보강: pricing $0.15/$0.6 ← https://www.upstage.ai/pricing/api
- 01:30 Solar Mini 보강: pricing $0.15/$0.15 (확인 결과 이미 반영되어 있음) ← https://www.upstage.ai/pricing/api

## 판단 / 고민
- Upstage Embed 2 모델도 발견했으나 정확한 출시일을 확인할 수 없어 이번 세션에서는 등록을 보류함.

## 이슈 제기
- (없음)
