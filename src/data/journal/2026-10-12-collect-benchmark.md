---
date: 2026-10-12
agent: collect-benchmark
status: completed
summary: "DeepSeek-Coder-V2-Instruct 벤치마크 점수 수집 및 등록"
---

## Todo
- [x] DeepSeek-Coder-V2-Instruct 공식 벤치마크 점수 확인
- [x] 확인된 벤치마크 점수를 `benchmark.ts add-score`로 등록

## 조사 내역
- 01:30 DeepSeek-Coder-V2-Instruct 공식 저장소에서 코드, 수학, 일반 추론 벤치마크 점수 확인 (HumanEval, MBPP, GSM8K, MATH, BBH, MMLU 등 12개) ← https://github.com/deepseek-ai/DeepSeek-Coder-V2/blob/main/README.md

## 수행한 작업
- [x] `deepseek-coder-v2-instruct` 모델의 12개 벤치마크 점수 등록 (HumanEval 90.2, MBPP 76.2, GSM8K 94.9, MATH 75.7, BBH 83.9, MMLU 79.2, ARC-C 92.8, TriviaQA 82.3, AGIEval 60.0, C-Eval 79.4, CMMLU 80.9, MT-Bench 8.77) ← https://github.com/deepseek-ai/DeepSeek-Coder-V2/blob/main/README.md

## 판단 / 고민
- Github 공식 저장소의 README.md에서 제공하는 `DeepSeek-Coder-V2 Instruct` 성능 평가 표(Code Generation, Mathematical Reasoning, General Natural Language)를 바탕으로 신뢰성 있는 점수만 추출하여 등록함. 일부 버전 불일치 의심(예: LiveCodeBench)이나 수치 단위 불확실 항목(예: AIME 2024의 4/30)은 누락하여 정확성 보장.

## 이슈 제기
- (없음)
