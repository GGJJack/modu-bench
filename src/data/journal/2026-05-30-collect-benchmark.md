---
date: 2026-05-30
agent: collect-benchmark
status: completed
summary: "벤치마크 모델 점수 등록 시도 (gpt-oss-120b, gpt-oss-20b, gemini-3-1-flash-tts, mistral-physics-ai-emmi) - 점수 미상으로 이슈 티켓 생성"
---

## Todo
- 신규 모델의 벤치마크 점수 찾기 (gpt-oss-120b, gemini-3-1-flash-tts 등)

## 조사 내역
- 01:30 gpt-oss-120b 점수 탐색 실패 ← https://openai.com/news
- 01:35 gpt-oss-20b 점수 탐색 실패 ← https://openai.com/news
- 01:40 gemini-3-1-flash-tts 점수 탐색 실패 ← https://ai.google.dev/gemini-api/docs/models
- 01:45 mistral-physics-ai-emmi 점수 탐색 실패 ← https://mistral.ai/news/introducing-physics-ai-at-mistral

## 수행한 작업
- [x] gpt-oss-120b: 점수 출처 없음. 이슈 생성.
- [x] gpt-oss-20b: 점수 출처 없음. 이슈 생성.
- [x] gemini-3-1-flash-tts: 점수 출처 없음. 이슈 생성.
- [x] mistral-physics-ai-emmi: 점수 출처 없음. 이슈 생성.

## 판단 / 고민
- 새로 추가된 4개의 모델(gpt-oss-120b, gpt-oss-20b, gemini-3-1-flash-tts, mistral-physics-ai-emmi)에 대해 벤치마크 정보를 조사하였으나, 공식 문서에서 수치화된 점수를 찾지 못함.
- Groundedness Rule에 따라 점수를 임의로 생성하거나 추측하지 않고 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-30-collect-benchmark-gpt-oss-120b.md
- issues/2026-05-30-collect-benchmark-gpt-oss-20b.md
- issues/2026-05-30-collect-benchmark-gemini-3-1-flash-tts.md
- issues/2026-05-30-collect-benchmark-mistral-physics-ai-emmi.md
