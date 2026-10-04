---
date: 2026-10-04
agent: collect-benchmark
status: completed
summary: "qwen-2.5-coder-7b, solar-10.7b-instruct 벤치마크 점수 등록 (evollm-jp-7b는 이미지로만 점수 제공되어 이슈 등록)"
---

## Todo
- [x] solar-10.7b-instruct 벤치마크 점수 등록
- [x] evollm-jp-7b 벤치마크 점수 탐색 및 이슈 등록
- [x] qwen-2.5-coder-7b 벤치마크 점수 등록

## 조사 내역
- 01:30 solar-10.7b-instruct H6 점수 확인 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 01:31 evollm-jp-7b 점수가 이미지로만 제공됨 확인 ← https://sakana.ai/evolutionary-model-merge/
- 01:32 qwen-2.5-coder-7b 여러 벤치마크 점수 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder/

## 수행한 작업
- [x] `solar-10.7b-instruct` H6 점수 추가 (74.2) ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- [x] `qwen-2.5-coder-7b` GSM8K (86.7), MATH (66.8), AIME 2024 (10.0), MMLU-Pro (45.6), MMLU (68.7), IFEval (58.6), GPQA (35.6) 점수 추가 ← https://qwenlm.github.io/blog/qwen2.5-coder/

## 판단 / 고민
- `evollm-jp-7b` 벤치마크 점수는 공식 블로그에 시각적(이미지)으로만 제시되어 있어 환각 방지를 위해 수집을 보류하고 이슈로 이관함.

## 이슈 제기
- issues/2026-10-04-collect-benchmark-evollm-jp-7b.md
