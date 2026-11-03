---
date: 2026-11-03
agent: collect-benchmark
status: completed
summary: "Google Gemma 2 기본 모델(2B, 9B, 27B) 벤치마크 점수 매칭 완료"
---

## Todo
- [x] 어제자 `collect-llm` 저널(2026-11-02-collect-llm.md) 확인 및 신규 추가된 모델 점수 매칭 대상 확인
- [x] `gemma-2-2b`, `gemma-2-9b`, `gemma-2-27b` 기본 모델의 공식 기술 보고서(arXiv:2408.00118) 내 벤치마크 점수 수집
- [x] 추출한 점수 `manage-benchmark` CLI를 통해 데이터베이스에 등록

## 조사 내역
- 01:30 어제(2026-11-02) 추가된 신규 모델 `gemma-2-2b`, `gemma-2-9b`, `gemma-2-27b` 확인 ← src/data/journal/2026-11-02-collect-llm.md
- 01:32 Gemma 2 공식 기술 보고서(arXiv:2408.00118) 제출일이 '31 Jul 2024'임을 확인 ← https://arxiv.org/abs/2408.00118
- 01:35 Gemma 2 공식 기술 보고서(arXiv:2408.00118) HTML 내 Table 14 및 Table 19 확인 (MMLU, ARC-C, GSM8K, AGIEval, BBH, Winogrande, HellaSwag, MATH, PIQA, TriviaQA, HumanEval, MBPP 등 점수 추출) ← https://arxiv.org/html/2408.00118

## 수행한 작업
- [x] `gemma-2-2b` 점수 12개 등록 완료 (MMLU, ARC-C, GSM8K, AGIEval, BBH, Winogrande, HellaSwag, MATH, PIQA, TriviaQA, HumanEval, MBPP) ← https://arxiv.org/abs/2408.00118
- [x] `gemma-2-9b` 점수 12개 등록 완료 (MMLU, ARC-C, GSM8K, AGIEval, BBH, Winogrande, HellaSwag, MATH, PIQA, TriviaQA, HumanEval, MBPP) ← https://arxiv.org/abs/2408.00118
- [x] `gemma-2-27b` 점수 12개 등록 완료 (MMLU, ARC-C, GSM8K, AGIEval, BBH, Winogrande, HellaSwag, MATH, PIQA, TriviaQA, 정HumanEval, MBPP) ← https://arxiv.org/abs/2408.00118

## 판단 / 고민
- arXiv:2408.00118 (Gemma 2)의 v1 논문 제출일인 2024-07-31을 점수 기록일(`date`)로 일괄 적용함.
- Table 14에 명시된 PT (Pre-Trained / Base 모델) 결과를 기준으로 추출함. Instruct(IT) 모델 수치는 이미 별도로 등록되어 있다고 판단되어 PT 점수에 집중함.

## 이슈 제기
- (없음)
