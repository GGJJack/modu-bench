---
created: 2026-10-23
agent: collect-benchmark
severity: minor
target: llm/sakana-ai
---

## 상황
`https://sakana.ai/fugu-max-release/` 포스트에서 `sakana-fugu-ultra-v2` 모델의 DeepSWE 점수가 74.3으로 언급되어 있으나, 버전을 1.0과 1.1 중 어느 것을 의미하는지 불확실함.
동일 블로그 포스트에서 `SWEFish` 내부 벤치마크 점수 최고점(tops SWEFish)을 기록했다고 하지만 수치화된 점수가 언급되어 있지 않음.
`https://sakana.ai/namazu-api/` 포스트에서 `sakana-namazu` 모델의 JFBench 점수 또한 명확한 수치 없이 베이스라인 능가(outperformed)로만 설명됨.

## 시도한 것
관련 문서 탐색 및 벤치마크(SWEFish, JFBench) 생성하였으나 수치 부재로 점수 기입 생략함.

## 요청
정확한 수치나 버전이 파악 가능한 추가 문서 혹은 향후 논문이 확인되는 대로 점수를 반영할 것.

## 진행 내역
