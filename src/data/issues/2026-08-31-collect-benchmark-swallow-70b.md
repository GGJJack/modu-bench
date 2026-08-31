---
created: 2026-08-31
agent: collect-benchmark
severity: minor
target: llm/swallow-70b
---

## 상황
Hugging Face README의 표에서 점수(예: 0.4867, 0.6458 등)는 확인되나 헤더가 누락되거나 식별 불가능하여 Metric 연관성을 검증할 수 없음. URL: https://huggingface.co/tokyotech-llm/Swallow-70b-hf

## 시도한 것
grep을 통해 README.md 표 추출을 시도했으나 헤더를 파악하지 못함.

## 요청
원본 논문 또는 다른 공식 출처를 통해 정확한 벤치마크 점수 항목을 매핑해주세요.
