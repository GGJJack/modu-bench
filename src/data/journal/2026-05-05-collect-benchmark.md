---
date: 2026-05-05
agent: collect-benchmark
status: completed
summary: "Discover and add benchmark scores for newly registered LLM models"
---

## Todo
- [x] Find benchmark scores for newly added LLMs.
- [x] Update benchmarks using the `benchmark.ts` script.

## 조사 내역
- 02:10 Gemini 3.1 Flash-Lite 벤치마크 점수 확인 (MMLU 89.2, MMLU Pro 83.0, GPQA 86.9, HumanEval 90.5, GSM8K 96.2) ← https://automatio.ai/models/gemini-3-1-flash-lite
- 02:15 Gemini 3.1 Flash-Live 벤치마크 점수 확인 (MMLU 91.0, MMLU Pro 89.0, GPQA 94.0, HumanEval 73.0, GSM8K 99.0) ← https://automatio.ai/models/gemini-3-1-flash-live
- 02:20 Rakuten AI 7B 벤치마크 점수 확인 (MMLU 61.31) ← https://huggingface.co/Rakuten/RakutenAI-7B
- 02:22 Rakuten AI 7B Instruct 벤치마크 점수 확인 (MMLU 60.32) ← https://huggingface.co/Rakuten/RakutenAI-7B-instruct
- 02:25 Rakuten AI 7B Chat 벤치마크 점수 미확인 ← https://huggingface.co/Rakuten/RakutenAI-7B-chat

## 수행한 작업
- [x] Gemini 3.1 Flash-Lite 벤치마크 점수 추가 완료 (MMLU, MMLU-Pro, GPQA, HumanEval, GSM8K) ← https://automatio.ai/models/gemini-3-1-flash-lite
- [x] Gemini 3.1 Flash-Live 벤치마크 점수 추가 완료 (MMLU, MMLU-Pro, GPQA, HumanEval, GSM8K) ← https://automatio.ai/models/gemini-3-1-flash-live
- [x] Rakuten AI 7B 벤치마크 점수 추가 완료 (MMLU) ← https://huggingface.co/Rakuten/RakutenAI-7B
- [x] Rakuten AI 7B Instruct 벤치마크 점수 추가 완료 (MMLU) ← https://huggingface.co/Rakuten/RakutenAI-7B-instruct

## 판단 / 고민
- Gemini Robotics-ER 1.6 및 Rakuten AI 7B Chat 의 벤치마크 점수는 공식/커뮤니티 사이트에서 명확하게 확인되지 않아 추가하지 않고 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md
- issues/2026-05-05-collect-benchmark-rakuten-ai-7b-chat.md
