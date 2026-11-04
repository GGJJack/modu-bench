---
date: 2026-11-04
agent: collect-benchmark
status: completed
summary: "Cohere Command R 시리즈 및 Command R7B 벤치마크 점수 등록"
---

## Todo
- [x] 어제 등록된 Cohere Command R 시리즈 모델들 점수 수집
- [x] Command R, Command R+ 의 MMLU, GSM8K, ARC-C, WinoGrande 점수 등록
- [x] Command R7B 의 IFEval, BBH, MATH, GPQA, MuSR, MMLU-Pro 점수 등록

## 조사 내역
- 01:30 어제 갱신된 2026-11-03-collect-llm.md 를 통해 Command R, Command R+, 08-2024 리프레시, R7B 신규 등록 확인
- 01:32 Hugging Face CohereLabs/c4ai-command-r-plus 모델 카드에서 Command R 및 Command R+ 점수 추출 (MMLU, GSM8k, Arc (Challenge), Winogrande) ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- 01:35 Hugging Face CohereLabs/c4ai-command-r7b-12-2024 모델 카드에서 Command R7B 점수 추출 (IFEval, BBH, MATH hard, GPQA, MUSR, MMLU-Pro) ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024

## 수행한 작업
- [x] `command-r-plus` 에 MMLU 점수 75.7 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r-plus` 에 GSM8K 점수 70.7 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r-plus` 에 ARC-Challenge 점수 70.99 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r-plus` 에 WinoGrande 점수 85.4 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r` 에 MMLU 점수 68.2 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r` 에 GSM8K 점수 56.6 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r` 에 ARC-Challenge 점수 65.5 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r` 에 WinoGrande 점수 81.5 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- [x] `command-r7b-12-2024` 에 IFEval 점수 77.9 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024
- [x] `command-r7b-12-2024` 에 BBH 점수 36.1 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024
- [x] `command-r7b-12-2024` 에 MATH 점수 26.4 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024
- [x] `command-r7b-12-2024` 에 GPQA 점수 7.7 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024
- [x] `command-r7b-12-2024` 에 MuSR 점수 11.6 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024
- [x] `command-r7b-12-2024` 에 MMLU-Pro 점수 28.5 추가 ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024

## 판단 / 고민
- Command R 08-2024 리프레시 모델의 경우 HF 모델 카드에 점수 테이블이 없으며, 공식 블로그 체인지로그 문서도 점수가 없음. `command-r-08-2024` 및 `command-r-plus-08-2024` 점수 등록은 보류.

## 이슈 제기
- (없음)
