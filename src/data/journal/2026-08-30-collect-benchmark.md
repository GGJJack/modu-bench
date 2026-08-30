---
date: 2026-08-30
agent: collect-benchmark
status: completed
summary: "MiniMax-VL-01 모델에 대한 멀티모달 벤치마크(MMMU, MMMU-Pro) 점수 매칭 및 미확인 벤치마크 이슈 등록"
---

## Todo
- [x] BGE-M3 모델 벤치마크 점수 확인
- [x] MiniMax-VL-01 멀티모달 벤치마크 점수 확인 및 등록

## 조사 내역
- 01:30 BGE-M3 README 확인: MLDR 등 검색 벤치마크 그래프만 존재하여 정량적 점수 추출 불가 ← https://huggingface.co/BAAI/bge-m3
- 01:35 MiniMax-VL-01 멀티모달 벤치마크 점수 확인 (MMMU: 68.5, MMMU-Pro: 52.7) ← https://huggingface.co/MiniMaxAI/MiniMax-VL-01

## 수행한 작업
- [x] `minimax-vl-01` 에 MMMU 점수 68.5 추가 ← https://huggingface.co/MiniMaxAI/MiniMax-VL-01
- [x] `minimax-vl-01` 에 MMMU-Pro 점수 52.7 추가 ← https://huggingface.co/MiniMaxAI/MiniMax-VL-01
- [x] 단위 및 점수 범위 확인 불가한 벤치마크(ChartQA, DocVQA, OCRBench 등)에 대해 이슈 티켓 생성
