---
date: 2026-09-08
agent: collect-benchmark
status: completed
summary: "DeepSeek-R1-Distill-Qwen-14B 및 Baichuan2-7B-Base 벤치마크 매칭 (AIME 2024, MATH-500 신규 등록)"
---

## Todo
- [x] 신규 벤치마크(AIME 2024, MATH-500) 등록
- [x] deepseek-r1-distill-qwen-14b 점수 매칭
- [x] baichuan2-7b-base 점수 매칭

## 조사 내역
- 01:35 deepseek-r1-distill-qwen-14b 점수 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B/raw/main/README.md
- 01:40 baichuan2-7b-base 점수 확인 ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Base/raw/main/README.md

## 수행한 작업
- [x] 신규 벤치마크 AIME 2024 등록
- [x] 신규 벤치마크 MATH-500 등록
- [x] deepseek-r1-distill-qwen-14b 벤치마크 점수 4건(AIME 2024, MATH-500, GPQA, Codeforces) 추가 등록 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B/raw/main/README.md
- [x] baichuan2-7b-base 벤치마크 점수 6건(C-Eval, MMLU, CMMLU, Gaokao, AGIEval, BBH) 수정/추가 등록 ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Base/raw/main/README.md

## 판단 / 고민
- 전일(2026-09-07) 수집된 Baichuan 3는 아직 구체적인 벤치마크 점수가 확인되지 않아 Baichuan2-7B-Base 모델의 점수를 찾아 보강함.
- DeepSeek-R1-Distill-Qwen-14B의 경우 논문 출처와 Hugging Face README에 기반하여 새롭게 발견된 벤치마크인 AIME 2024와 MATH-500를 등록하고 점수를 기록함.

## 이슈 제기
- (없음)
