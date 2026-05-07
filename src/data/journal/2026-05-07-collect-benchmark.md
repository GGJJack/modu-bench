---
date: 2026-05-07
agent: collect-benchmark
status: completed
summary: "Discover and add benchmark scores for newly registered LLM models"
---

## Todo
- [x] Find benchmark scores for newly added LLMs (Yi-1.5-34B-Chat, Baichuan2-13B-Chat, GLM-4-9B-Chat).
- [x] Update benchmarks using the `benchmark.ts` script.

## 조사 내역
- 01:30 Yi-1.5-34B-Chat 벤치마크 점수 확인 (이미지 형태라 직접 확인 불가) ← https://huggingface.co/01-ai/Yi-1.5-34B-Chat
- 01:35 Baichuan2-13B-Chat 벤치마크 점수 확인 (Base 모델의 점수만 존재하여 Chat 모델 점수 확인 불가) ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- 01:40 GLM-4-9B-Chat 벤치마크 점수 확인 (MMLU 72.4, GSM8K 79.6, HumanEval 71.8, MT-Bench 8.35) ← https://huggingface.co/zai-org/glm-4-9b-chat

## 수행한 작업
- [x] GLM-4-9B-Chat 벤치마크 점수 추가 완료 (MMLU, GSM8K, HumanEval, MT-Bench) ← https://huggingface.co/zai-org/glm-4-9b-chat

## 판단 / 고민
- Yi-1.5-34B-Chat 의 경우 공식 Hugging Face 페이지에서 벤치마크 점수가 이미지 형태로만 제공되어 텍스트 추출이 불가능함.
- Baichuan2-13B-Chat 의 경우 Base 모델의 점수만 기재되어 있고 Chat 모델의 점수는 명시되어 있지 않음.
- 따라서 위 두 모델의 벤치마크 점수를 부정확하게 입력하지 않고 각각 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-07-collect-benchmark-yi-1-5-34b-chat.md
- issues/2026-05-07-collect-benchmark-baichuan2-13b-chat.md
