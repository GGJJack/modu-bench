---
date: 2026-10-27
agent: collect-benchmark
status: completed
summary: "Qwen3 0.6B 및 1.7B 신규 모델 벤치마크 점수 매칭 완료"
---

## Todo
- [x] Qwen3-0.6B 벤치마크 점수 등록 (MMLU, MMLU-Pro, BBH, GPQA, GSM8K, MATH, MultiPL-E, MBPP, CRUX-O, MMMLU)
- [x] Qwen3-1.7B 벤치마크 점수 등록 (MMLU, MMLU-Pro, BBH, GPQA, GSM8K, MATH, MultiPL-E, MBPP, CRUX-O, MMMLU)

## 조사 내역
- 01:30 Qwen3 기술 보고서 스캔 및 Qwen3 0.6B, 1.7B 모델 벤치마크 점수 확인 (Table 7) ← https://arxiv.org/abs/2505.09388 (제출일: 2025-05-14)

## 수행한 작업
- [x] `qwen3-0.6b` 10개 벤치마크 점수 추가 ← https://arxiv.org/abs/2505.09388
- [x] `qwen3-1.7b` 10개 벤치마크 점수 추가 ← https://arxiv.org/abs/2505.09388

## 판단 / 고민
- 신규 등록된 Qwen3-0.6B와 Qwen3-1.7B 모델의 벤치마크 점수 매칭 수행.
- ArXiv 논문의 Table 7을 기준으로 MMLU, MMLU-Pro, BBH, GPQA, GSM8K, MATH, MultiPL-E, MBPP, CRUX-O(CRUXEval), MMMLU 등 논문 내 General, Math & STEM, Coding, Multilingual Tasks의 주요 지표를 모두 등록.

## 이슈 제기
- (없음)
