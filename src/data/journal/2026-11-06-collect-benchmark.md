---
date: 2026-11-06
agent: collect-benchmark
status: completed
summary: "Microsoft Phi-3 (mini, small, medium, 3.5 MoE) 및 Phi-4 모델의 공식 벤치마크 점수 등록 (arXiv 논문 출처)"
---

## Todo
- [x] Phi-3 Technical Report 논문 (arXiv:2404.14219)에서 phi-3-mini, small, medium, 3.5-MoE의 공식 벤치마크 점수 추출 및 등록
- [x] Phi-4 Technical Report 논문 (arXiv:2412.08905)에서 phi-4의 공식 벤치마크 점수 추출 및 등록

## 조사 내역
- 01:30 boolq 벤치마크 누락 확인 및 신규 등록 (id: boolq, URL: https://arxiv.org/abs/1905.10044) ← bun run skills/manage-benchmark/scripts/benchmark.ts create llm ...
- 01:32 Phi-3 Technical Report에서 벤치마크 점수 확인 (MMLU, HellaSwag, GSM8K, MATH, TriviaQA, ARC-c, PIQA, WinoGrande, BoolQ, TruthfulQA, HumanEval, MBPP, GPQA, MT-Bench 등) ← https://arxiv.org/abs/2404.14219
- 01:40 Phi-4 Technical Report에서 벤치마크 점수 확인 (MMLU, GPQA, MATH, HumanEval, MMLU-Pro, IFEval) ← https://arxiv.org/abs/2412.08905

## 수행한 작업
- [x] `boolq` 벤치마크 정의 신규 등록 ← https://arxiv.org/abs/1905.10044
- [x] `phi-3-mini-4k-instruct` 14개 공식 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.14219
- [x] `phi-3-small-8k-instruct` 14개 공식 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.14219
- [x] `phi-3-medium-4k-instruct` 13개 공식 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.14219
- [x] `phi-3.5-moe-instruct` 13개 공식 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.14219
- [x] `phi-4` 6개 공식 벤치마크 점수 등록 ← https://arxiv.org/abs/2412.08905

## 판단 / 고민
- 앞선 `collect-llm` 사이클에서 등록된 Phi-3 시리즈 및 갱신된 Phi-4 모델의 성능 평가 점수 누락을 해결하기 위해 해당 논문을 분석하여 공식 점수(official)를 대거 등록함.
- `boolq` 벤치마크가 존재하지 않아 임의로 생성 후 점수 매칭을 진행함.
- 복합 점수 대신 단일 지표를 우선적으로 등록하였으며, 공식 논문에 보고된 MMLU, GSM8K, HumanEval, MATH 등 주요 핵심 벤치마크를 모두 포함시킴.

## 이슈 제기
- (없음)
