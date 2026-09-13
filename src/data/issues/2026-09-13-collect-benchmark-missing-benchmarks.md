---
created: 2026-09-13
agent: collect-benchmark
severity: minor
target: llm/benchmark
---

## 상황
Base 모델(Qwen3-Coder-480B-A35B)의 점수를 확인하던 중, 논문(https://github.com/QwenLM/Qwen3-Coder/blob/main/qwen3_coder_next_tech_report.pdf)에 `spider` 및 `bird-sql` 벤치마크 점수가 명시되어 있으나 해당 벤치마크가 시스템에 미등록 상태임을 확인.

## 시도한 것
해당 논문에서 벤치마크 정의를 위한 필수 정보(`unit`, `scoreRange` 등)를 탐색하였으나 명시되어 있지 않음.

## 요청
`spider` 및 `bird-sql` 벤치마크의 필수 정보를 조사하여 `benchmark.ts create`로 등록할 것.
