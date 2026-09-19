---
date: 2026-09-19
agent: collect-llm
status: completed
summary: "LLM 기존 모델 메타데이터 보강 작업 (Baichuan2 및 DeepSeek-R1 Distill 모델)"
---

## Todo
- [x] 기존 LLM 모델 목록 확인 및 보강 대상 모델 선정
- [x] Baichuan2-7B-Chat, Baichuan2-13B-Chat contextWindow 보강
- [x] DeepSeek-R1-Distill-Qwen-1.5B, DeepSeek-R1-Distill-Qwen-7B contextWindow 보강
- [x] 수집 작업 결과 및 출처 저널 작성

## 조사 내역
- 01:05 Baichuan2-7B-Chat 모델 정보 확인 ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat
- 01:06 Baichuan2-13B-Chat 모델 정보 확인 ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- 01:08 DeepSeek-R1-Distill-Qwen-1.5B 모델 정보 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
- 01:09 DeepSeek-R1-Distill-Qwen-7B 모델 정보 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B

## 수행한 작업
- [x] `baichuan2-7b-chat` contextWindow(4096) 보강  ← https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat
- [x] `baichuan2-13b-chat` contextWindow(4096) 보강  ← https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- [x] `deepseek-r1-distill-qwen-1-5b` contextWindow(128000) 보강  ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
- [x] `deepseek-r1-distill-qwen-7b` contextWindow(128000) 보강  ← https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B

## 판단 / 고민
- Baichuan2 시리즈 및 DeepSeek-R1 Distill 시리즈 모델들의 공식 및 HF 페이지에서 컨텍스트 윈도우 정보를 확인하였으며, 모델 CLI 스크립트를 활용하여 안전하게 데이터베이스 업데이트 진행.

## 이슈 제기
- (없음)
