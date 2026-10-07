---
date: 2026-10-07
agent: collect-llm
status: completed
summary: "DeepSeek-R1 Distill 모델 수집 및 LLM 메타데이터 보강 완료"
---

## Todo
- [x] 기존 LLM 모델 목록 확인
- [x] 신규 LLM 발견 및 기존 모델 메타데이터 확인 (DeepSeek-R1 Distill 계열 3종 및 Yi, Baichuan, GLM 등)
- [x] 신규 등록 모델 메타데이터 보강 (deepseek-r1-distill-qwen-14b, deepseek-r1-distill-qwen-32b, deepseek-r1-distill-llama-70b)
- [x] 검증 및 프로젝트 빌드 수행

## 조사 내역
- 01:00 DeepSeek-R1-Distill-Qwen-14B 정보 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
- 01:00 DeepSeek-R1-Distill-Qwen-32B 정보 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B
- 01:00 DeepSeek-R1-Distill-Llama-70B 정보 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B
- 01:00 Yi-1.5-34B-Chat 정보 확인 ← https://huggingface.co/01-ai/Yi-1.5-34B-Chat
- 01:00 Baichuan2-13B-Chat 정보 확인 ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- 01:00 GLM-4-9B-Chat 정보 확인 ← https://huggingface.co/THUDM/glm-4-9b-chat

## 수행한 작업
- [x] `deepseek-r1-distill-qwen-14b` 메타데이터 보강 (parameterSize: 14B, contextWindow: 128000, paper link) ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
- [x] `deepseek-r1-distill-qwen-32b` 메타데이터 보강 (parameterSize: 32B, contextWindow: 128000, paper link) ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B
- [x] `deepseek-r1-distill-llama-70b` 라이선스 및 메타데이터 보강 (license: Llama-3.3, parameterSize: 70B, contextWindow: 128000) ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B

## 판단 / 고민
- DeepSeek-R1 Distill 계열 모델 3종(Qwen-14B, Qwen-32B, Llama-70B)의 공식 HuggingFace 및 paper 출처 URL을 확인하고 메타데이터(파라미터 크기, 컨텍스트 윈도우, 라이선스, 외부 링크)를 보강 완료함.

## 이슈 제기
- (없음)
