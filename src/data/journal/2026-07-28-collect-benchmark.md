---
date: 2026-07-28
agent: collect-benchmark
status: completed
summary: "Llama 3.2 1B/3B 벤치마크 점수 등록 (MMLU, MATH, ARC-C 등)"
---

## Todo
- [x] llama-3.2-1b 및 llama-3.2-3b 의 최신 벤치마크 점수 수집 및 등록

## 조사 내역
- 01:30 Llama 3.2 공식 모델 카드 확인 (1B 및 3B Instruction Tuned Models 점수 확보) ➔ https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md
- 01:35 llama-3.2-3b 모델 정보 확인 및 기존 점수 부재 확인 ➔ https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md
- 01:40 llama-3.2-1b 모델 미등록 확인 및 선등록 ➔ https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md

## 수행한 작업
- [x] `manage-model create` 로 llama-3.2-1b 선등록 (pre-registered model for score matching) ➔ https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md
- [x] llama-3.2-3b 의 MMLU (63.4), MATH (48.0), ARC-C (78.6), GPQA (32.8), Hellaswag (69.8), IFEval (77.4) 점수 등록 ➔ https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md
- [x] llama-3.2-1b 의 MMLU (49.3), MATH (30.6), ARC-C (59.4), GPQA (27.2), Hellaswag (41.2), IFEval (59.5) 점수 등록 ➔ https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md

## 판단 / 고민
- Llama 3.2 모델 카드의 Instruction Tuned Models (bf16) 표를 기준으로 주요 벤치마크 점수를 발췌하였습니다.
- llama-3.2-1b 모델이 등록되어 있지 않아 최소 필수 정보(id, name, provider, releaseDate, license)로 선등록 후 점수 매칭을 진행했습니다.

## 이슈 제기
- (없음)
