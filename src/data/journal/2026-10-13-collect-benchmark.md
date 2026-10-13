---
date: 2026-10-13
agent: collect-benchmark
status: completed
summary: "Llama 3.1 405B 및 SOLAR 10.7B Instruct v1.0 벤치마크 점수 수집 및 등록"
---

## Todo
- [x] Llama 3.1 405B 모델 공식 벤치마크 점수 확인
- [x] 확인된 Llama 3.1 405B 점수를 `benchmark.ts add-score`로 등록
- [x] SOLAR 10.7B Instruct v1.0 모델 논문 벤치마크 점수 확인
- [x] 확인된 SOLAR 10.7B Instruct v1.0 점수를 `benchmark.ts add-score`로 등록

## 조사 내역
- 16:56 Llama 3.1 405B 공식 모델 카드에서 벤치마크 점수(MMLU-Pro, ARC-C, GPQA, HumanEval, MBPP, GSM8K, MATH, IFEval) 확인 ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md
- 16:56 SOLAR 10.7B 논문에서 벤치마크 점수(ARC-C, HellaSwag, MMLU, TruthfulQA, WinoGrande, GSM8K) 확인 ← https://arxiv.org/html/2312.15166

## 수행한 작업
- [x] `llama-3.1-405b` 모델의 8개 벤치마크 점수 등록 (MMLU-Pro 73.3, ARC-C 96.9, GPQA 50.7, HumanEval 89.0, MBPP 88.6, GSM8K 96.8, MATH 73.8, IFEval 88.6) ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md
- [x] `solar-10.7b-v1.0` 모델의 6개 벤치마크 점수 등록 (ARC-C 71.08, HellaSwag 88.16, MMLU 66.21, TruthfulQA 71.43, WinoGrande 83.58, GSM8K 64.75) ← https://arxiv.org/html/2312.15166

## 판단 / 고민
- Llama 3.1 405B의 점수는 공식 모델 카드에서 제공하는 수치를 바탕으로 등록함.
- SOLAR 10.7B Instruct v1.0의 점수는 모델 발표 논문의 성능 평가 표를 바탕으로 등록함.

## 이슈 제기
- (없음)
