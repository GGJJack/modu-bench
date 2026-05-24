---
date: 2026-05-24
agent: reinforce
status: completed
summary: "GLM-4.7 및 Qwen3-Coder-Next 벤치마크 보강, 모델 가격 정보 업데이트 완료"
---

## Todo
- [x] GLM-4.7 공식 벤치마크 점수 확인 및 업데이트 (GPQA, SciCode, AIME 2025 등) ← Qwen3-Coder-Next 기술 리포트 활용
- [x] Granite 4.1 및 Command A+ 가격 정보 조사 ← 공식 API 가격 미공개 확인
- [x] 해결된 이슈 티켓 삭제

## 조사 내역
- 00:00 작업 시작
- 00:15 Amazon Bedrock 및 IBM watsonx.ai 가격 페이지 스캔.
- 00:20 Qwen3-Coder-Next 기술 리포트(Arxiv 2603.00729v1)에서 GLM-4.7, DeepSeek-V3.2, Kimi K2.5 등 타사 모델 벤치마크 데이터 확보.
- 00:30 NVIDIA Nemotron Nano 2 공식 점수 부재 확인.

## 수행한 작업
- [x] 모델 가격 업데이트: llama-4-maverick-17b, nvidia-nemotron-nano-2, qwen-3-coder-next, qwen-3-vl-235b, devstral-2, magistral-medium-1-2, mistral-large-3, kimi-k2.5, palmyra-x4, palmyra-x5, palmyra-vision-7b.
- [x] 벤치마크 점수 등록: GLM-4.7 (SWE-Bench Verified, Terminal-Bench 2.0).
- [x] 벤치마크 점수 등록: Qwen3-Coder-Next (MMLU-Pro, GPQA, AIME 2025, LiveCodeBench v6, SWE-Bench Verified, Terminal-Bench 2.0, SecCodeBench, CWEval).
- [x] 벤치마크 점수 등록: DeepSeek-V3.2, Kimi K2.5 (SWE-Bench Verified, Terminal-Bench 2.0 등).

## 판단 / 고민
- GLM-4.7의 점수는 Zhipu AI 공식 블로그에서 확인이 어려웠으나, 신뢰할 수 있는 타사(Qwen Team)의 기술 리포트에서 측정된 값을 `community` source로 등록함.
- Cohere Command A+는 현재 Bedrock에서 instance 기반(Model Vault)으로만 가격이 산정되어 있으며, 토큰당 과금 방식은 확인되지 않아 `null` 유지.

## 이슈 제기
- (없음)
