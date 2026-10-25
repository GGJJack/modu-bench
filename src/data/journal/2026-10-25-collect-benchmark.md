---
date: 2026-10-25
agent: collect-benchmark
status: completed
summary: "Qwen 2.5 모델군의 벤치마크 점수 등록 (EXAONE 모델카드 교차 확인)"
---

## Todo
- [x] Qwen 2.5 3B Instruct 벤치마크 점수 등록 (출처: EXAONE 3.5 2.4B Instruct 공식 카드)
- [x] Qwen 2.5 32B Instruct 벤치마크 점수 등록 (출처: EXAONE 3.5 32B Instruct 공식 카드)

## 조사 내역
- 01:30 Qwen 2.5 3B Instruct 벤치마크 7건 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
- 01:30 Qwen 2.5 32B Instruct 벤치마크 7건 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct

## 수행한 작업
- [x] `qwen-2.5-3b-instruct` 모델에 대해 mt-bench 등 7개 벤치마크 점수 등록 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
- [x] `qwen-2.5-32b-instruct` 모델에 대해 mt-bench 등 7개 벤치마크 점수 등록 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct

## 판단 / 고민
- EXAONE 3.5 2.4B, 32B Instruct 모델의 공식 HuggingFace 카드에 기재된 평가 테이블을 교차 확인하여, 누락되어 있던 Qwen 2.5 3B, 32B Instruct 모델의 점수들을 추가 보강함.
- Llama 3.2 3B, Gemma 2 2B/27B 등 타 모델의 점수는 이미 기존에 등록된 내역이거나, 출처 우선순위(공식 > 커뮤니티)에 따라 기존 값을 유지하고 신규로 비어있는 Qwen 모델군 점수만 등록 완료.
- 벤치마크 날짜는 HuggingFace 모델 카드 API의 수정일자(2026-02-06)를 준용하여 입력함.

## 이슈 제기
- (없음)
