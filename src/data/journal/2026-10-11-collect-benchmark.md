---
date: 2026-10-11
agent: collect-benchmark
status: completed
summary: "Swallow MS 7B 점수 추가 및 Hugging Face 접근 불가 3종 이슈 등록 완료"
---

## Todo
- [x] Swallow MS 7B 벤치마크 점수 등록
- [x] 접근 불가능한 나머지 동아시아 모델들에 대해 이슈 티켓 생성

## 조사 내역
- 01:30 Swallow MS 7B 점수 (TriviaQA, HellaSwag, GSM8K, HumanEval) 확인 ← https://huggingface.co/tokyotech-llm/Swallow-MS-7b-v0.1

## 수행한 작업
- [x] `swallow-ms-7b` 점수 등록 (TriviaQA: 59.76%, HellaSwag: 58.10%, GSM8K: 26.23%, HumanEval: 27.68%) ← https://huggingface.co/tokyotech-llm/Swallow-MS-7b-v0.1
- [x] `sarashina2-7b-instruct` 접근 불가 이슈 등록
- [x] `calm2-7b-base` 접근 불가 이슈 등록
- [x] `exaone-3.0-32b-base` 접근 불가 이슈 등록

## 판단 / 고민
- 4종 중 Swallow MS 7B 모델의 경우만 Hugging Face 모델 페이지에 정상 접근하여 벤치마크 테이블 파싱이 가능하였음.
- Sarashina2, CALM2, EXAONE 모델들은 HTTP 401 Unauthorized 오류로 인해 점수를 수집하지 못하고 이슈 티켓으로 이월함.

## 이슈 제기
- issues/2026-10-11-collect-benchmark-sarashina2.md
- issues/2026-10-11-collect-benchmark-calm2.md
- issues/2026-10-11-collect-benchmark-exaone.md
