---
date: 2026-09-10
agent: collect-benchmark
status: completed
summary: "DeepSeek-R1 Distill 모델 (Qwen 및 Llama 계열) 벤치마크 점수 매칭 완료"
---

## Todo
- [x] deepseek-r1-distill-qwen 계열 모델 벤치마크 점수 등록 (1.5B, 7B, 14B, 32B)
- [x] deepseek-r1-distill-llama 계열 모델 벤치마크 점수 등록 (8B, 70B)

## 조사 내역
- 01:30  DeepSeek-R1 공식 모델 리포트 (HuggingFace)에서 Distill 모델들의 점수 표 확인  ← https://huggingface.co/deepseek-ai/DeepSeek-R1

## 수행한 작업
- [x] `deepseek-r1-distill-qwen-1-5b` 벤치마크 점수 5건 (AIME 2024, MATH-500, GPQA, LiveCodeBench, Codeforces) 매칭 완료  ← https://huggingface.co/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-7b` 벤치마크 점수 5건 (AIME 2024, MATH-500, GPQA, LiveCodeBench, Codeforces) 매칭 완료  ← https://huggingface.co/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-14b` 벤치마크 점수 5건 (AIME 2024, MATH-500, GPQA, LiveCodeBench, Codeforces) 매칭 완료  ← https://huggingface.co/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-32b` 벤치마크 점수 4건 (AIME 2024, MATH-500, GPQA, Codeforces) 추가 매칭 완료 (LiveCodeBench 기존 유지)  ← https://huggingface.co/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-llama-8b` 벤치마크 점수 5건 (AIME 2024, MATH-500, GPQA, LiveCodeBench, Codeforces) 매칭 완료  ← https://huggingface.co/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-llama-70b` 벤치마크 점수 5건 (AIME 2024, MATH-500, GPQA, LiveCodeBench, Codeforces) 매칭 완료  ← https://huggingface.co/deepseek-ai/DeepSeek-R1

## 판단 / 고민
- 어제 수집된 Qwen2.5-Max 모델에 대해서는 공식 발표 점수 5건이 이미 등록되어 있어 생략.
- DeepSeek-R1-Distill 모델 6종에 대한 공통 표(AIME, MATH-500, GPQA, LCB, Codeforces)를 바탕으로, 누락된 점수들을 일괄 반영함.
- `deepseek-r1-distill-qwen-32b`의 LCB 점수는 이미 등록되어 있었으므로 제외함.

## 이슈 제기
- (없음)
