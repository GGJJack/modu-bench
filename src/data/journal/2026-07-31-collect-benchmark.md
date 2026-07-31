---
date: 2026-07-31
agent: collect-benchmark
status: completed
summary: "DeepSeek R1 Distill Qwen 32B/14B 및 Sakana Fugu Ultra v1.1 모델의 LiveCodeBench v6 점수 매칭 및 Qwen 2.5 Coder 점수 추출 실패 이슈 생성 완료"
---

## Todo
- [x] Qwen 2.5 Coder Instruct 시리즈 벤치마크 점수 등록 (이미지 파싱 실패로 이슈 생성) ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] DeepSeek R1 Distill Qwen 32B 및 14B 모델의 벤치마크 점수 수집 및 매칭 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] Sakana Fugu Ultra v1.1 모델의 벤치마크 점수 수집 및 매칭 ➔ https://sakana.ai/fugu/

## 조사 내역
- 01:30 Qwen 2.5 Coder 공식 블로그 출처 확인 ➔ https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 01:32 DeepSeek-R1 공식 모델 리포지토리 출처 확인 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- 01:35 Sakana AI Fugu-Ultra v1.1 출처 확인 ➔ https://sakana.ai/fugu/

## 수행한 작업
- [x] `deepseek-r1-distill-qwen-32b` 의 `livecodebench-v6` 점수(57.2) 등록 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-14b` 의 `livecodebench-v6` 점수(53.1) 등록 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `sakana-fugu-ultra-1-1` 의 `livecodebench-v6` 점수(93.2) 등록 ➔ https://sakana.ai/fugu/
