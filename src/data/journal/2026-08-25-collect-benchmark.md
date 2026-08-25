---
date: 2026-08-25
agent: collect-benchmark
status: completed
summary: "Yi-1.5 16K (6B, 9B) Chat 점수 등록 및 yi-coder-9b-instruct, minimax-text-01 점수 추가"
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

## 재실행 (01:30)
## Todo
- [x] 신규 LLM 모델 벤치마크 점수 매칭 (`glm-4v-9b`, `yi-coder-9b-instruct`, `minimax-text-01`)

## 조사 내역
- 01:30 `glm-4v-9b` 벤치마크 점수 탐색 (시각 모델이므로 기존 텍스트 벤치마크 점수 없음 확인) ← https://github.com/THUDM/GLM-4, https://huggingface.co/THUDM/glm-4v-9b
- 01:35 `yi-coder-9b-instruct` 벤치마크 점수 확인 (HumanEval, GSM8K, MATH) ← https://github.com/01-ai/Yi-Coder
- 01:40 `minimax-text-01` 벤치마크 점수 확인 (MMLU, MMLU-Pro, IFEval, Arena-Hard, GPQA, GSM8k, MATH, MBPP, HumanEval) ← https://huggingface.co/MiniMaxAI/MiniMax-Text-01

## 수행한 작업
- [x] `yi-coder-9b-instruct` 점수 매칭: HumanEval 85.4, GSM8K 68.1, MATH 29.1 ← https://github.com/01-ai/Yi-Coder
- [x] `minimax-text-01` 점수 매칭: MMLU 88.5, MMLU-Pro 75.7, IFEval 89.1, Arena-Hard 89.1, GPQA 54.4, GSM8K 94.8, MATH 77.4, MBPP 71.7, HumanEval 86.9 ← https://huggingface.co/MiniMaxAI/MiniMax-Text-01

## 판단 / 고민
- GLM-4V-9B의 경우 다중모달(시각) 벤치마크 점수만 제공되어, 현재 LLM 도메인의 텍스트/코드/수학 중심 벤치마크 점수는 등록하지 않음.
- MiniMax-Text-01은 MiniMaxAI 허깅페이스 저장소에서 가장 최신의 정확한 수치를 획득하여 등록함.

## 이슈 제기
- (없음)