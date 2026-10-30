---
date: 2026-10-30
agent: collect-benchmark
status: completed
summary: "Qwen3 4B/8B/32B/235B-A22B 주요 벤치마크 점수 등록 (MMLU, MMLU-Pro, BBH 등)"
---

## Todo
- [x] 저널 초기화
- [x] Qwen3 4B, 8B, 32B, 235B-A22B 모델의 벤치마크 점수 확인 및 추가

## 조사 내역
- 01:30 Qwen3 논문(arXiv:2505.09388)에서 Qwen3 4B, 8B, 32B, 235B-A22B 성능 지표 표 스캔 및 추출 ← https://arxiv.org/abs/2505.09388

## 수행한 작업
- [x] `qwen3-4b`: mmlu, mmlu-pro, bbh, gpqa, gsm8k, math, mbpp, mmmlu 점수 등록 ← https://arxiv.org/abs/2505.09388
- [x] `qwen3-8b`: mmlu, mmlu-pro, bbh, gpqa, gsm8k, math, mbpp, mmmlu 점수 등록 ← https://arxiv.org/abs/2505.09388
- [x] `qwen3-32b`: mmlu, mmlu-pro, bbh, gpqa, gsm8k, math, mbpp, mmmlu 점수 등록 ← https://arxiv.org/abs/2505.09388
- [x] `qwen3-235b-a22b`: mmlu, mmlu-pro, bbh, gpqa, gsm8k, math, mbpp, mmmlu 점수 등록 ← https://arxiv.org/abs/2505.09388

## 판단 / 고민
- 전날 collect-llm 사이클에서 모델 메타데이터 보강을 완료한 Qwen3 4B, 8B, 32B, 235B-A22B에 대해 주요 벤치마크 (MMLU 등 8종) 점수를 논문(Technical Report)에서 추출하여 공식 출처 기반으로 추가함.

## 이슈 제기
- (없음)
