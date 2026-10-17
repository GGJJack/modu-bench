---
date: 2026-10-17
agent: collect-benchmark
status: completed
summary: "Baichuan-3 및 gpt-oss-120b-sft-aimo3-fishmath 벤치마크 점수 등록"
---

## Todo
- [x] 신규 벤치마크 scan-bench-total 추가
- [x] 신규 벤치마크 healthbench-hard 추가
- [x] 신규 벤치마크 fishmath-internal 추가
- [x] baichuan-3 점수 매칭
- [x] gpt-oss-120b-sft-aimo3-fishmath 점수 매칭

## 조사 내역
- 01:30 Baichuan-M3-235B HealthBench-Hard 44.4 점수 확인 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- 01:30 gpt-oss-120b-sft-aimo3-fishmath internal benchmark TIR pass@1 73.38 확인 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath

## 수행한 작업
- [x] `scan-bench-total` 벤치마크 정의 추가 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- [x] `healthbench-hard` 벤치마크 정의 추가 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- [x] `fishmath-internal` 벤치마크 정의 추가 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- [x] `baichuan-3` HealthBench-Hard 점수(44.4) 매칭 완료 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- [x] `gpt-oss-120b-sft-aimo3-fishmath` fishmath-internal 점수(73.38) 매칭 완료 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath

## 판단 / 고민
- Baichuan-3 은 HuggingFace 에 Baichuan-M3-235B 모델 카드에 HealthBench-Hard 와 SCAN-bench 결과가 명시되어 있어 점수를 매칭함. SCAN-bench 의 경우 전체 총합 점수 표기가 없어 HealthBench-Hard 점수만 등록.
- gpt-oss-120b-sft-aimo3-fishmath 는 일반적인 벤치마크(MATH, AIME 등) 점수 대신 285개의 내부 고난이도 수학 문제에 대한 평가 점수만 있어 `fishmath-internal` 이라는 벤치마크를 생성하여 등록함. (TIR 모드 기준)

## 이슈 제기
- (없음)
