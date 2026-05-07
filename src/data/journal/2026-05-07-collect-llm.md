---
status: completed
agent: collect-llm
date: 2026-05-07
---

# 2026-05-07 collect-llm 저널

## 미션
- 신규 모델 발견 (3~5건)
- 기존 모델 보강 (3~5건)

## 작업 내역

### 기존 모델 보강 (Reinforce)
- [x] `solar-pro-3`: 가격 정보 업데이트 ($0.5/0.5 -> $0.15/0.6 per 1M tokens) ← [URL](https://www.upstage.ai/pricing/api/)
- [x] `sakana-fugu-ultra`: 공식 링크 업데이트 ← [URL](https://sakana.ai/fugu-beta/)
- [x] `sakana-marlin`: 출시일 및 공식 링크 업데이트 ← [URL](https://sakana.ai/marlin-beta/)
- [x] `sakana-fugu-mini`: 등록 확인 및 링크 업데이트 (이미 존재)

### 신규 모델 발견 (Discover)
- [x] `gpt-realtime-2`: OpenAI 신규 실시간 음성 모델 (2026-05-07) ← [URL](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)
- [x] `gpt-realtime-translate`: OpenAI 실시간 번역 모델 (2026-05-07) ← [URL](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)
- [x] `gpt-realtime-whisper`: OpenAI 실시간 전사 모델 (2026-05-07) ← [URL](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)
- [x] `gpt-5-5-instant`: OpenAI 신규 인스턴트 모델 (2026-05-05) ← [URL](https://openai.com/news/)
- [x] `alphaevolve`: Google DeepMind 코딩 에이전트 모델 (2026-05-06) ← [URL](https://deepmind.google/blog/alphaevolve-impact/)

## 이슈
- `hyperclova-x`, `yi-large`, `baichuan-4` 등 지역 강자들의 최신 API 가격 정보가 공개 웹에서 확인되지 않음. 별도 이슈 티켓 생성: `src/data/issues/2026-05-07-collect-llm-metadata-missing.md`
