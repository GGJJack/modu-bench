---
date: 2026-11-10
agent: collect-benchmark
status: completed
summary: "Llama 3 8B/70B Instruct 및 Llama 2 7B/13B Chat 공식 벤치마크 점수 등록 완료"
---

## Todo
- [x] Llama 3 8B Instruct, Llama 3 70B Instruct 점수 확인 및 등록
- [x] Llama 2 7B Chat, Llama 2 13B Chat 점수 확인 및 등록

## 조사 내역
- 01:30 신규 등록된 Llama 모델(llama-3-8b-instruct, llama-3-70b-instruct, llama-2-7b-chat, llama-2-13b-chat) 점수 매칭을 위해 공식 리포지토리 확인
- 01:35 Meta Llama Models GitHub Llama 3 MODEL_CARD.md에서 Instruction tuned models 벤치마크 테이블 확보 (MMLU, GPQA, HumanEval, GSM-8K, MATH) ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3/MODEL_CARD.md

## 수행한 작업
- [x] `llama-3-8b-instruct` 모델에 MMLU, GPQA, HumanEval, GSM-8K, MATH 벤치마크 5건 점수 등록 ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3/MODEL_CARD.md
- [x] `llama-3-70b-instruct` 모델에 MMLU, GPQA, HumanEval, GSM-8K, MATH 벤치마크 5건 점수 등록 ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3/MODEL_CARD.md
- [x] `llama-2-7b-chat` 모델에 MMLU, GPQA, HumanEval, GSM-8K, MATH 벤치마크 5건 점수 등록 ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3/MODEL_CARD.md
- [x] `llama-2-13b-chat` 모델에 MMLU, GPQA, HumanEval, GSM-8K, MATH 벤치마크 5건 점수 등록 ← https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3/MODEL_CARD.md

## 판단 / 고민
- Llama 2 Chat 모델에 대한 벤치마크 점수도 Llama 3의 MODEL_CARD.md에서 일괄적으로 제공된 표를 기반으로 등록 진행. 각주/세부 조건(0-shot, 5-shot 등)이 동일하여 비교 가능한 신뢰할 수 있는 데이터임.
- Llama 2 Chat의 등록 날짜는 모델 releaseDate에 맞춰 2023-07-18로 지정.

## 이슈 제기
- (없음)
