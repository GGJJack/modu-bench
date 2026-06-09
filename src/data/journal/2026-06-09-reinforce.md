---
date: 2026-06-09
agent: reinforce
status: completed
summary: "Resolved pending benchmark issues for Command A family and EEVE-Korean models."
---

## Todo
- [x] Investigate benchmarks for Command A family (Reasoning, Translate, Vision) ← src/data/issues/2026-05-17-collect-benchmark-unverified-command-a.md
- [x] Investigate benchmarks for EEVE-Korean-10.8B ← src/data/issues/2026-05-17-collect-benchmark-unverified-eeve-korean-10.8b.md

## 조사 내역
- 10:15  Cohere Command A 시리즈 벤치마크 점수 발견 (MMMU, MathVista, tau-bench, Terminal-Bench Hard, CharXiv) ← https://cohere.com/blog/command-a-plus
- 10:30  EEVE-Korean-10.8B (Base 및 Instruct) Open LLM Leaderboard 점수 발견 (MMLU, GSM8k, ARC-C) ← https://huggingface.co/yanolja/EEVE-Korean-Instruct-10.8B-v1.0
## 수행한 작업
- [x] Command A 패밀리 벤치마크 점수 등록 (mmmu, mathvista, tau-bench-telecom, terminal-bench-hard, charxiv-reasoning, aime-2025) ← https://cohere.com/blog/command-a-plus
- [x] Command A+ 라이선스 수정 (Proprietary → Apache-2.0)
- [x] Command A Vision 멀티모달 모델 등록 및 점수 추가
- [x] EEVE-Korean-10.8B 벤치마크 점수 등록 (mmlu, gsm8k, arc-c) ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0/discussions/1
- [x] EEVE-Korean-Instruct-10.8B 모델 등록 및 벤치마크 점수 추가 ← https://huggingface.co/yanolja/EEVE-Korean-Instruct-10.8B-v1.0
## 판단 / 고민
## 이슈 제기
