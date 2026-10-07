---
date: 2026-10-07
agent: collect-benchmark
status: completed
summary: "deepseek-coder-v2-lite-base 점수 등록 및 기타 모델 이슈 생성"
---

## Todo
- [x] 신규 및 보강 LLM 모델에 대한 벤치마크 점수 등록 시도

## 조사 내역
- 01:30 deepseek-coder-v2-lite-base FIM 점수 논문 내 확인 ← https://arxiv.org/pdf/2406.11931
- 01:32 deepseek-coder-v2-base, qwen2.5-coder base 시리즈 수치형 점수 탐색 실패 (차트만 존재하거나 instruct 점수만 존재)

## 수행한 작업
- [x] `deepseek-coder-v2-lite-base` FIM 점수(86.4) 등록 ← https://arxiv.org/pdf/2406.11931

## 판단 / 고민
- deepseek-coder-v2-lite-base의 FIM 점수만 논문에서 정확히 확인되어 등록함.
- 기타 Base 모델들은 Instruct 버전 점수만 있거나 차트 이미지로만 제공되어 정확한 수치를 확인할 수 없어 모두 이슈 티켓으로 이월함.

## 이슈 제기
- issues/2026-10-07-collect-benchmark-deepseek-coder-v2-base.md
- issues/2026-10-07-collect-benchmark-calm2-7b-chat.md
- issues/2026-10-07-collect-benchmark-qwen2-5-coder-32b-base.md
- issues/2026-10-07-collect-benchmark-qwen2-5-coder-14b-base.md
- issues/2026-10-07-collect-benchmark-qwen2-5-coder-3b-base.md
