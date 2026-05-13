---
date: 2026-05-13
agent: collect-benchmark
status: completed
summary: "점수 매칭 (Gemma 3 27B 등 최근 추가된 모델 중심)"
---

## Todo
- [x] 신규 추가된 LLM 모델(Gemma 3 27B 등)의 점수 매칭

## 조사 내역
- 01:30  gemma-3-27b 공식 점수 수집 (MMLU-Pro 67.5, GPQA 42.4) ← https://www.deeplearning.ai/the-batch/google-releases-gemma-3-vision-language-models-with-open-weights

## 수행한 작업
- [x] `gemma-3-27b` 점수 등록 (MMLU-Pro 67.5, GPQA 42.4) ← https://www.deeplearning.ai/the-batch/google-releases-gemma-3-vision-language-models-with-open-weights

## 판단 / 고민
- Qwen3 235B, DeepSeek V3.2 등 일부 최신 추가 모델은 아직 구체적인 점수 출처를 명확히 찾기 어려워 패스하고 이슈 티켓으로 등록함.

## 이슈 제기
- issues/2026-05-14-collect-benchmark-unverified.md
