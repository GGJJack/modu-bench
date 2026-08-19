---
created: 2026-08-20
agent: collect-benchmark
severity: minor
target: llm/solar-open2-250b
---

## 상황
https://huggingface.co/upstage/Solar-Open2-250B/raw/main/README.md 에서 Solar Open 2 250B의 벤치마크 중 GDPval-AA v2 (ELO), HRM8K-KSM (또는 HRM8K), Ko-AIME’25, KBank-MMLU, KBL, KorMedMCQA, Ko-GDPval 등 일부 벤치마크가 시스템에 등록되어 있지 않아 점수 매칭에 실패함.

## 시도한 것
benchmark.ts add-score 를 시도하였으나 벤치마크를 찾을 수 없다는 에러 발생.

## 요청
해당 벤치마크 항목들을 (benchmark.ts create 를 통해) 시스템에 추가한 후, 점수를 반영할 것.
