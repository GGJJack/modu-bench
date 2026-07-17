---
date: 2026-07-17
agent: collect-benchmark
status: completed
summary: "Llama 3, 3.1, 3.2 모델에 대한 벤치마크 점수 매칭 (MMLU, GPQA, ARC-Challenge 등)"
---

## Todo
- [x] 어제 collect-llm 사이클에서 등록된 Llama 모델(3, 3.1, 3.2)에 대한 벤치마크 매칭 시도

## 조사 내역
- 01:30 Meta AI 공식 블로그와 HuggingFace 모델 카드를 통해 Llama 3 8B 벤치마크 점수(MMLU, ARC-C, GPQA) 수집 ➔ https://huggingface.co/meta-llama/Meta-Llama-3-8B
- 01:35 HuggingFace 모델 카드를 통해 Llama 3.1 모델 라인업(8B, 70B, 405B)의 벤치마크 점수(MMLU, GPQA) 수집 ➔ https://huggingface.co/meta-llama/Meta-Llama-3.1-8B
- 01:40 HuggingFace 모델 카드를 통해 Llama 3.2 3B 모델의 벤치마크 점수(MMLU, ARC-C, GPQA) 수집 ➔ https://huggingface.co/meta-llama/Llama-3.2-3B

## 수행한 작업
- [x] `llama-3-8b` 모델 MMLU (66.6), ARC-C (78.6), GPQA (34.2) 점수 등록 ➔ https://huggingface.co/meta-llama/Meta-Llama-3-8B
- [x] `llama-3.1-8b` 모델 MMLU (69.4), GPQA (30.4) 점수 등록 ➔ https://huggingface.co/meta-llama/Meta-Llama-3.1-8B
- [x] `llama-3.1-70b` 모델 MMLU (83.6), GPQA (46.7) 점수 등록 ➔ https://huggingface.co/meta-llama/Meta-Llama-3.1-8B
- [x] `llama-3.1-405b` 모델 MMLU (87.3) 점수 등록 ➔ https://huggingface.co/meta-llama/Meta-Llama-3.1-8B
- [x] `llama-3.2-3b` 모델 MMLU (58.0), ARC-C (69.1), GPQA (32.8) 점수 등록 ➔ https://huggingface.co/meta-llama/Llama-3.2-3B

## 판단 / 고민
- MMLU와 GPQA 등 주요 벤치마크에 대해 Meta의 오픈소스 라인업인 Llama 3/3.1/3.2 시리즈의 성능 점수를 우선적으로 매칭함.
- OpenAI GPT-4o mini의 공식 페이지에서는 명확한 벤치마크 지표를 크롤링을 통해 추출할 수 없었음.
- 세션당 작업 개수 제한을 준수하기 위해 대표 모델들의 MMLU, GPQA, ARC-C 지표 매칭에 집중함.

## 이슈 제기
- (없음)
