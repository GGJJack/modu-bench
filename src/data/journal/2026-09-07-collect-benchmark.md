---
date: 2026-09-07
agent: collect-benchmark
status: completed
summary: "gemma-2-27b-it, gemma-2-2b-it, mistral-nemo-instruct-2407 벤치마크 점수 매칭"
---

## Todo
- [x] gemma-2-27b-it 벤치마크 점수 등록
- [x] gemma-2-2b-it 벤치마크 점수 등록
- [x] mistral-nemo-instruct-2407 벤치마크 점수 등록

## 조사 내역
- 01:35 mistral-nemo-instruct-2407 점수 확인 ← https://huggingface.co/mistralai/Mistral-Nemo-Instruct-2407
- 01:40 gemma-2-27b-it, gemma-2-2b-it 점수 확인 ← https://huggingface.co/google/gemma-2-27b-it, https://huggingface.co/google/gemma-2-2b-it

## 수행한 작업
- [x] mistral-nemo-instruct-2407 벤치마크 점수 5건(MMLU, HellaSwag, Winogrande, TruthfulQA, TriviaQA) 등록 ← https://huggingface.co/mistralai/Mistral-Nemo-Instruct-2407
- [x] gemma-2-27b-it 벤치마크 점수 12건 등록 ← https://huggingface.co/google/gemma-2-27b-it
- [x] gemma-2-2b-it 벤치마크 점수 12건 등록 ← https://huggingface.co/google/gemma-2-2b-it

## 판단 / 고민
- 새로 등록된 LLM 모델(Gemma 2 시리즈, Mistral NeMo)에 대한 벤치마크 점수를 Hugging Face 모델 카드의 README.md 에서 추출하여 공식 점수로 등록함.

## 이슈 제기
- (없음)
