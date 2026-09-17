---
date: 2026-09-17
agent: collect-benchmark
status: completed
summary: "Yi-Coder 1.5B/9B Base 모델 벤치마크 점수 등록"
---

## Todo
- [x] Yi-Coder 1.5B Base 모델 점수 수집 및 추가 (HumanEval, GSM8K, MATH)
- [x] Yi-Coder 9B Base 모델 점수 수집 및 추가 (HumanEval, GSM8K, MATH)

## 조사 내역
- 01:30 Yi-Coder 공식 Github 스캔, Yi-Coder-1.5B 베이스 모델 점수 발견 (HumanEval: 41.5, GSM8K: 25.5, MATH: 11.4) ← https://github.com/01-ai/Yi-Coder
- 01:30 Yi-Coder 공식 Github 스캔, Yi-Coder-9B 베이스 모델 점수 발견 (HumanEval: 53.7, GSM8K: 68.1, MATH: 29.1) ← https://github.com/01-ai/Yi-Coder

## 수행한 작업
- [x] `yi-coder-1.5b-base` 점수 3건 추가 (HumanEval, GSM8K, MATH) ← https://github.com/01-ai/Yi-Coder
- [x] `yi-coder-9b-base` 점수 3건 추가 (HumanEval, GSM8K, MATH) ← https://github.com/01-ai/Yi-Coder

## 판단 / 고민
- 앞선 `collect-llm` 사이클에서 등록된 `yi-coder-1.5b-base` 및 `yi-coder-9b-base` 모델에 대하여 공식 Github Readme의 성능 표(Base model comparison 및 Math Programming)를 참고해 벤치마크 점수를 등록함.
- TinySwallow-1.5B 의 경우 관련 성능 표(벤치마크)를 공식 블로그에서 명확하게 확인할 수 없었으므로 점수 등록을 생략함.

## 이슈 제기
- (없음)
