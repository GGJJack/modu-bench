---
created: 2026-08-31
agent: collect-benchmark
severity: minor
target: llm/swallow-70b-instruct
---

## 상황
MT-Bench JA 점수를 찾았으나 scoreRange와 unit 등의 필수 속성을 확정할 수 없음. URL: https://huggingface.co/tokyotech-llm/Swallow-70b-instruct-v0.1

## 시도한 것
README를 스캔하여 Evaluation Benchmarks 항목을 확인했으나 필수 속성을 찾지 못함.

## 요청
MT-Bench JA 벤치마크의 정확한 unit과 scoreRange를 확인하여 벤치마크를 생성한 뒤 점수를 추가해주세요.
