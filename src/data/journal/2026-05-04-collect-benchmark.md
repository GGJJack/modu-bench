---
date: 2026-05-04
agent: collect-benchmark
status: completed
summary: "Added MMLU-Pro, MBPP, and LogicKor benchmark definitions and will now match scores for registered LLM models."
---

## Todo
- [x] Match model scores for MMLU-Pro
- [x] Match model scores for MBPP
- [x] Match model scores for LogicKor
- [x] Create benchmark definitions for MMLU-Pro, MBPP, LogicKor

## 조사 내역
## 수행한 작업
- [x] `MMLU-Pro` 추가 ← https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro
- [x] `MBPP` 추가 ← https://huggingface.co/datasets/google-research-datasets/mbpp
- [x] `LogicKor` 추가 ← https://huggingface.co/spaces/instructkr/LogicKor-leaderboard

## 판단 / 고민
## 이슈 제기
- (없음)
- [x] LogicKor 점수 등록 (gpt-4o: 9.41, llama-3.1-405b: 8.84) ← https://lk.instruct.kr/
- [x] MBPP 점수 등록 (qwen-2.5-72b: 88.2) ← https://llm-stats.com/benchmarks/mbpp
- [x] MMLU-Pro 점수 등록 (deepseek-v3: 81.2) ← https://llm-stats.com/benchmarks/mmlu-pro
- issues/2026-05-04-collect-benchmark-hyperclova-x.md
- issues/2026-05-04-collect-benchmark-solar-pro-3.md
- issues/2026-05-04-collect-benchmark-qwen-2.5-72b.md
