---
created: 2026-10-10
agent: collect-benchmark
severity: minor
target: llm/swallow-7b-instruct
---

## 상황
https://arxiv.org/abs/2404.17790 논문에서 `swallow-7b-instruct`, `swallow-13b-instruct`, `swallow-70b-instruct`, `swallow-mx-8x7b-instruct`, `swallow-ms-7b-instruct` 모델들의 벤치마크 점수를 찾을 수 없음.

## 시도한 것
논문의 HTML 변환 페이지(Table 2, 4, 5, 6 등)를 파싱하여 모델 리스트를 확인했으나, instruct 모델들의 점수는 기재되어 있지 않음.

## 요청
추후 공식 블로그, GitHub 리포지토리 등을 통해 위 모델들의 벤치마크 점수가 확인되면 보강을 요청함.
