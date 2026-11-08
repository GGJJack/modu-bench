---
date: 2026-11-08
agent: collect-benchmark
status: completed
summary: "Added benchmark scores for newly registered DeepSeek models (7B/67B Base/Chat, V2) from official arXiv papers"
---

## Todo
- [x] 신규 등록된 DeepSeek 초기 모델 및 V2 모델 벤치마크 점수 등록 (MMLU, HumanEval, MBPP, GSM8K, CMMLU)

## 조사 내역
- 01:30 DeepSeek 7B/67B 논문 (arXiv:2401.02954) 에서 테이블 8, 9를 파싱하여 MMLU, HumanEval, MBPP, GSM8K, CMMLU 점수 추출 ← https://arxiv.org/abs/2401.02954
- 01:35 DeepSeek-V2 논문 (arXiv:2405.04434) 에서 테이블 10을 파싱하여 기본 벤치마크 점수 추출 ← https://arxiv.org/abs/2405.04434

## 수행한 작업
- [x] `deepseek-llm-7b-base` 점수 5개 추가 (MMLU 48.2, HumanEval 26.2, MBPP 39.0, GSM8K 17.4, CMMLU 47.2) ← https://arxiv.org/abs/2401.02954
- [x] `deepseek-llm-7b-chat` 점수 5개 추가 (MMLU 49.4, HumanEval 48.2, MBPP 35.2, GSM8K 63.0, CMMLU 49.7) ← https://arxiv.org/abs/2401.02954
- [x] `deepseek-llm-67b-base` 점수 5개 추가 (MMLU 71.3, HumanEval 42.7, MBPP 57.4, GSM8K 63.4, CMMLU 70.8) ← https://arxiv.org/abs/2401.02954
- [x] `deepseek-llm-67b-chat` 점수 5개 추가 (MMLU 71.1, HumanEval 73.8, MBPP 61.4, GSM8K 84.1, CMMLU 67.8) ← https://arxiv.org/abs/2401.02954
- [x] `deepseek-v2` 점수 5개 추가 (MMLU 78.5, HumanEval 48.8, MBPP 66.6, GSM8K 79.2, CMMLU 84.0) ← https://arxiv.org/abs/2405.04434

## 판단 / 고민
- 직전 `collect-llm` 사이클에서 누락되어 있던 DeepSeek의 기초 모델 4종(7B/67B)과 MoE의 시작점인 DeepSeek-V2 모델이 신규 등록되었음을 확인.
- 해당 모델들의 공식 성능 지표를 채우기 위해 각 모델의 기반이 되는 공식 기술 보고서(arXiv)에 접근, 핵심 벤치마크 5종(MMLU, HumanEval, MBPP, GSM8K, CMMLU)을 추출하여 점수를 매칭함.
- 모든 점수는 공식 논문의 테이블 데이터에서 파싱되었으며, 날짜는 논문 제출일을 기준으로 적용함.

## 이슈 제기
- (없음)
