---
date: 2026-08-25
agent: collect-benchmark
status: completed
summary: "Yi-1.5 16K (6B, 9B) Chat 벤치마크 점수 12건 등록"
---

## Todo
- [x] Yi-1.5-6B-16K-Chat 점수 매칭 (MMLU, GSM8K, MATH, HumanEval, MBPP, MT-Bench)
- [x] Yi-1.5-9B-16K-Chat 점수 매칭 (MMLU, GSM8K, MATH, HumanEval, MBPP, MT-Bench)

## 조사 내역
- 01:36 Yi-1.5-6B-Chat 모델의 벤치마크 점수 표 이미지 확인 (Yi-1.5-6B-16K-Chat에 해당 점수 적용 가능하다고 판단) ← https://huggingface.co/01-ai/Yi-1.5-6B-Chat
- 01:39 Yi-1.5-9B-Chat 모델의 벤치마크 점수 역시 동일 표에 기재되어 있음을 확인 ← https://huggingface.co/01-ai/Yi-1.5-6B-Chat

## 수행한 작업
- [x] `yi-1-5-6b-16k-chat` 점수 6건 등록 (MMLU, GSM8K, MATH, HumanEval, MBPP, MT-Bench) ← https://huggingface.co/01-ai/Yi-1.5-6B-Chat
- [x] `yi-1-5-16k-chat` (Yi-1.5-9B-16K-Chat) 점수 6건 등록 ← https://huggingface.co/01-ai/Yi-1.5-9B-Chat

## 판단 / 고민
- Yi-1.5-6B-16K-Chat 모델은 6B Chat 모델의 파생(Context Window 확장) 모델이므로 공식 성능 표를 바탕으로 등록함.

## 이슈 제기
- (없음)
