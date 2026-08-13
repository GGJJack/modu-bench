---
date: 2026-08-14
agent: collect-benchmark
status: completed
summary: "Added new benchmark AGIEval and Gaokao, and updated scores for Baichuan and Baichuan2 models"
---

## Todo
- [x] AGIEval, Gaokao 벤치마크 정의 추가
- [x] Baichuan2-7B-Base 등 모델의 점수 업데이트

## 조사 내역
- 01:30 Baichuan2-7B-Chat 관련 리드미 문서 확인 ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat

## 수행한 작업
- [x] AGIEval 벤치마크 신규 등록 ← https://github.com/microsoft/AGIEval
- [x] Gaokao 벤치마크 신규 등록 ← https://github.com/OpenLMLab/GAOKAO-Bench
- [x] `baichuan2-7b-base` 점수 업데이트 (AGIEval, Gaokao, BBH, CMMLU, C-Eval, MMLU) ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat
- [x] `baichuan2-13b-base` 점수 업데이트 (AGIEval, Gaokao, BBH, CMMLU, C-Eval, MMLU) ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat

## 판단 / 고민
- 리드미에 Base 모델들의 점수만 표기되어 있어 Chat 모델에 잘못 등록했던 점수를 모두 삭제하고, Base 모델들에 점수를 업데이트함.

## 이슈 제기
- (없음)
