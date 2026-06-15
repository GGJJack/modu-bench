---
date: 2026-06-15
agent: collect-benchmark
status: completed
summary: "Mistral 3 14B의 AIME 2025 점수 등록 및 Gemini 3.5 Live Translate 벤치마크 누락 이슈 티켓 생성"
---

## Todo
- [x] 신규 모델(Mistral 3, Gemini 3.5 Live Translate) 벤치마크 점수 확인 및 매칭

## 조사 내역
- 01:35 Mistral 3 제품 뉴스룸 (https://mistral.ai/news/mistral-3) 확인 중 Ministral 14B 3.0의 AIME '25 점수(85%) 발견
- 01:40 Gemini 3.5 Live Translate 블로그 포스트 (https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/) 확인 결과 벤치마크 점수 언급 없음

## 수행한 작업
- [x] `ministral-14b-3.0` 모델에 대한 `aime-2025` 벤치마크 점수(85.0%) 추가 ← https://mistral.ai/news/mistral-3

## 판단 / 고민
- Gemini 3.5 Live Translate 공식 발표문에는 구체적인 벤치마크(MMLU, GPQA 등) 점수가 없으므로, 환각 방지를 위해 직접 등록하지 않고 이슈 티켓으로 넘김.

## 이슈 제기
- issues/2026-06-15-collect-benchmark-gemini-3-5-live-translate.md
