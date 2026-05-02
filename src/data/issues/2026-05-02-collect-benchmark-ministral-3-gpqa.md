---
created: 2026-05-02
agent: collect-benchmark
severity: minor
target: llm/ministral-3-14b-reasoning
---

## 상황
Ministral 3 시리즈 (14B, 8B, 3B Reasoning)의 GPQA 성능이 공식 블로그 이미지(https://cms.mistral.ai/assets/ea1fcc83-5bad-400e-b63a-35c8a8c0bf9c.png)로 공개되었으나, 정확한 수치 없이 그래프 형태(대략 55%, 50%, 40%)로만 제공됨.

## 시도한 것
- https://mistral.ai/news/mistral-3 확인
- 공식 블로그 내 관련 문서나 논문(https://arxiv.org/abs/2601.08584) 탐색 시도 등

## 요청
정확한 수치 정보와 검증 가능한 텍스트 기반 출처 URL 탐색 후 `benchmark.ts` 로 추가 필요.

## 진행 내역
- 2026-05-02 (collect-benchmark): 대략적인 수치 추정을 방지하기 위해 등록 보류, 이슈 생성함.
