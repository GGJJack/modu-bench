---
date: 2026-11-05
agent: collect-benchmark
status: completed
summary: "mistral-7b 및 mixtral-8x7b 논문 점수 수집 완료, mixtral-8x22b, ministraux-8b, mistral-large-2411 점수 출처 부재로 이슈 티켓 생성"
---

## Todo
- [x] `mistral-7b` 벤치마크 점수 등록 (MMLU, HumanEval, MBPP, MATH, GSM8K, MT-Bench) ← https://arxiv.org/abs/2310.06825
- [x] `mixtral-8x7b` 벤치마크 점수 등록 (MMLU, HumanEval, MBPP, MATH, GSM8K, MT-Bench) ← https://arxiv.org/abs/2401.04088
- [x] `mixtral-8x22b`, `ministraux-8b`, `mistral-large-2411` 공식 점수 확인 및 미발견시 이슈 생성

## 조사 내역
- 01:30  `mistral-7b` (arXiv:2310.06825) Table 1 및 Table 2 등에서 점수 확인  ← https://arxiv.org/abs/2310.06825
- 01:32  `mixtral-8x7b` (arXiv:2401.04088) Table 4 및 Table 6 등에서 점수 확인  ← https://arxiv.org/abs/2401.04088
- 01:35  `mixtral-8x22b`, `ministraux-8b`, `mistral-large-2411` 공식 블로그 및 문서에서 명확한 표 형태의 기계 판독 가능한 벤치마크 점수를 찾지 못함 (이미지 형태이거나 텍스트 혼재) ← https://mistral.ai/news/mixtral-8x22b/, https://mistral.ai/news/ministraux/, https://docs.mistral.ai/models/mistral-large-2-1-24-11/

## 수행한 작업
- [x] `mistral-7b` MMLU 60.1, HumanEval 30.5, MBPP 47.5, MATH 13.1, GSM8K 52.2, MT-Bench 6.84 등록 ← https://arxiv.org/abs/2310.06825
- [x] `mixtral-8x7b` MMLU 70.6, HumanEval 40.2, MBPP 60.7, MATH 28.4, GSM8K 74.4, MT-Bench 8.30 등록 ← https://arxiv.org/abs/2401.04088
- [x] `mixtral-8x22b` 벤치마크 점수 누락 이슈 티켓 생성 ← https://mistral.ai/news/mixtral-8x22b/
- [x] `ministraux-8b` 벤치마크 점수 누락 이슈 티켓 생성 ← https://mistral.ai/news/ministraux/
- [x] `mistral-large-2411` 벤치마크 점수 누락 이슈 티켓 생성 ← https://docs.mistral.ai/models/mistral-large-2-1-24-11/

## 판단 / 고민
- `mixtral-8x22b`, `ministraux-8b` 공식 블로그에서는 성능 표가 이미지 형태로만 제공되어 신뢰성 있는 점수 텍스트를 파싱하기 어려움.
- `mistral-large-2411`의 경우 docs 에 점수 테이블이 존재하지 않음. 출처 규칙에 따라 무리한 파싱/추측 대신 미입력 후 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-11-05-collect-benchmark-mixtral-8x22b.md
- issues/2026-11-05-collect-benchmark-ministraux-8b.md
- issues/2026-11-05-collect-benchmark-mistral-large-2411.md
