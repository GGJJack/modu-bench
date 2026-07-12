---
date: 2026-07-12
agent: collect-llm
status: completed
summary: "2026-07-12 LLM/STT/TTS 신규 모델(Liquid AI LFM2.5 등) 대규모 등록 및 기존 모델 메타데이터(Grok 4.5, Solar Pro 3 등) 보강 완료"
---

## Todo
- [x] 신규 모델 발견 및 등록 (Liquid AI LFM2/2.5 시리즈, Upstage Embed 2)
- [x] 기존 모델 메타데이터 보강 (Grok 4.5, Solar Pro 3, Mistral Medium 3.5, DeepSeek-V4 등)
- [x] 교차 도메인 모델 등록 (Liquid AI Audio 모델 STT/TTS 등록)

## 조사 내역
- 01:00 작업 시작
- 01:05 Liquid AI 신규 LFM2.5 시리즈 확인 (2026-06-25) ← https://www.liquid.ai/blog/lfm2-5-230m, https://docs.liquid.ai/lfm/models/complete-library
- 01:10 Upstage Embed 2 출시 및 가격 확인 ($0.02) ← https://www.upstage.ai/pricing/api
- 01:15 Mistral Robostral Navigate (8B) 및 Mistral Medium 3.5 상세 정보 확인 ← https://mistral.ai/news/robostral-navigate/, https://mistral.ai/pricing/api/
- 01:20 DeepSeek-V4 시리즈 (Flash/Pro) 컨텍스트 윈도우(1M) 및 가격 확인 ← https://api-docs.deepseek.com/news
- 01:25 Grok 4.5 가격($2/$6) 및 컨텍스트(500k) 재검증 ← https://x.ai/news/grok-4-5

## 수행한 작업
- **신규 등록**:
  - LLM: `upstage-embed-2`, `lfm2-5-1-2b-instruct/thinking/base/jp`, `lfm2-700m`, `lfm2-2-6b`, `lfm2-2-6b-exp`, `lfm2-5-vl-1-6b`, `lfm2-vl-3b`
  - STT/TTS: `lfm2-5-audio-1-5b`
- **보강 업데이트**:
  - `grok-4-5`: pricing $2/$6, contextWindow 500k
  - `solar-pro-3`: parameterSize 102B (MoE), contextWindow 128k, pricing $0.15/$0.6
  - `mistral-medium-3-5`: name 수정, contextWindow 256k, pricing $1.5/$7.5
  - `robostral-navigate`: parameterSize 8B, contextWindow 128k
  - `deepseek-v4-pro/flash/preview`: contextWindow 1M, pricing 보강
  - `lfm` 시리즈: 라이선스(LFM Open License) 및 정확한 컨텍스트 윈도우(32768/131072) 반영
  - `voxtral-mini-transcribe-2/realtime`: pricing $0.003/$0.006 per min 반영

## 판단 / 고민
- OpenAI `gpt-live-1` 시리즈의 구체적인 API 가격은 공식 블로그에서 확인되지 않아 `null`로 유지하거나 기존 잘못된 추정치를 제거함.
- Liquid AI 모델들의 컨텍스트 윈도우를 "32K" 등의 표기에서 정확한 2의 거듭제곱 값(32768)으로 통일함.

## 이슈 제기
- OpenAI GPT-Live-1 시리즈의 상세 API 가격 정보가 공식 문서에 아직 업데이트되지 않음. 추후 확인 필요.
