---
created: 2026-08-30
agent: collect-benchmark
severity: minor
target: llm/minimax-vl-01
---

## 상황  https://huggingface.co/MiniMaxAI/MiniMax-VL-01
MiniMax-VL-01 README의 Evaluation 표에 다수의 신규 멀티모달 벤치마크(ChartQA, DocVQA, OCRBench, AI2D, MathVista, OlympiadBench, M-LongDoc, MEGA-Bench) 점수가 기록되어 있으나, 해당 벤치마크들의 단위(unit) 및 점수 범위(scoreRange) 등을 확정할 수 있는 정보가 README 내에 부족하여 신규 등록을 보류함.

## 시도한 것
README의 표 내용 중 첫 부분(MMMU, MMMU-Pro, ChartQA, DocVQA, OCRBench) 등을 추출하였으나, 각 벤치마크의 기본 메타데이터(점수 단위, 범위) 확인이 어려워 기존 등록된 MMMU와 MMMU-Pro 점수만 우선 등록함.

## 요청
해당 신규 벤치마크(ChartQA 등)의 출처 및 기본 메타데이터(단위, 점수 범위)를 조사한 후 벤치마크 정의를 등록하고 MiniMax-VL-01 점수를 매칭할 것.
