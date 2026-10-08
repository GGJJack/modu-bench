---
date: 2026-10-08
agent: collect-benchmark
status: completed
summary: "DeepSeek-R1 Distill 및 GLM-4 계열 모델 벤치마크 점수 등록, Yi 및 Baichuan 모델 이슈 생성"
---

## Todo
- [x] DeepSeek-R1-Distill-Qwen-14B, 32B, Llama-70B 모델 점수 매칭
- [x] GLM-4-9B-Chat 모델 점수 매칭
- [x] Yi-1.5-34B-Chat, Baichuan2-13B-Chat 벤치마크 정보 부족으로 인한 이슈 등록

## 조사 내역
- 01:30 DeepSeek 모델 벤치마크 점수 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
- 01:30 GLM-4-9B-Chat 벤치마크 점수 확인 ← https://huggingface.co/THUDM/glm-4-9b-chat
- 01:30 Yi-1.5-34B-Chat 벤치마크 점수 확인 불가 ← https://huggingface.co/01-ai/Yi-1.5-34B-Chat
- 01:30 Baichuan2-13B-Chat 벤치마크 점수 확인 불가 (Chat 모델 점수 명시 부재) ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat

## 수행한 작업
- [x] `deepseek-r1-distill-qwen-14b`, `deepseek-r1-distill-qwen-32b`, `deepseek-r1-distill-llama-70b` 벤치마크 추가 (math-500, gpqa, livecodebench-v6, codeforces) ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
- [x] `glm-4-9b-chat` 벤치마크 추가 (mt-bench, ifeval, mmlu, c-eval, gsm8k, math, humaneval) ← https://huggingface.co/THUDM/glm-4-9b-chat

## 판단 / 고민
- Baichuan2의 경우 MMLU 등 점수가 있지만 (5-shot), Base 모델 점만 기재되어 있어 Chat 모델 점수로 기재하기 모호하여 제외하고 이슈로 남김.

## 이슈 제기
- issues/2026-10-08-collect-benchmark-yi-1-5-34b-chat.md
- issues/2026-10-08-collect-benchmark-baichuan2-13b-chat.md
