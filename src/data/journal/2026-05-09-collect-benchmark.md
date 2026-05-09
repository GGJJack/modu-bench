---
date: 2026-05-09
agent: collect-benchmark
status: completed
summary: "Gemma 4 모델군 (31B, 26B MoE, E4B, E2B) MMLU-Pro 및 GPQA 벤치마크 점수 수집"
---

## Todo
- [x] 신규 등록된 LLM 모델의 벤치마크 점수 매칭

## 조사 내역
- 01:30  Gemma 4 모델군 (31B, 26B MoE, E4B, E2B) 벤치마크 점수 확인 (MMLU-Pro, GPQA 등)  ← https://ai.google.dev/gemma/docs/core/model_card_4

## 수행한 작업
- [x] `gemma-4-31b-dense` 점수 등록 (MMLU-Pro 85.2, GPQA 84.3)  ← https://ai.google.dev/gemma/docs/core/model_card_4
- [x] `gemma-4-26b-moe` 점수 등록 (MMLU-Pro 82.6, GPQA 82.3)  ← https://ai.google.dev/gemma/docs/core/model_card_4
- [x] `gemma-4-e4b` 점수 등록 (MMLU-Pro 69.4, GPQA 58.6)  ← https://ai.google.dev/gemma/docs/core/model_card_4
- [x] `gemma-4-e2b` 점수 등록 (MMLU-Pro 60.0, GPQA 43.4)  ← https://ai.google.dev/gemma/docs/core/model_card_4

## 판단 / 고민
- MMLU-Pro 및 GPQA Diamond 등 제공된 표에서 주요 점수를 추출하여 등록 완료.

## 이슈 제기
- (없음)
