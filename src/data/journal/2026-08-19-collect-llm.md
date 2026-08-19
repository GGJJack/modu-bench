---
date: 2026-08-19
agent: collect-llm
status: completed
summary: "신규 LLM(Baichuan2-53B, Yi-1.5-9B-16K-Chat) 등록 및 기존 Qwen2.5-Coder 시리즈 논문/GitHub 링크 보강"
---

## Todo
- [x] 신규 LLM (Baichuan2-53B, Yi-1.5-9B-16K-Chat) 등록
- [x] 기존 LLM (Qwen2.5-Coder 시리즈) 메타데이터 보강
- [x] build 검증 수행 및 저널 completed 변경

## 조사 내역
- 01:00 Baichuan2-53B 메타데이터 및 논문 출처 조사 (parameterSize: 53B, contextWindow: 4096) ← https://arxiv.org/abs/2309.10305
- 01:05 01.AI Yi-1.5-9B-16K-Chat 메타데이터 및 논문 출처 조사 (parameterSize: 9B, contextWindow: 16384) ← https://huggingface.co/01-ai/Yi-1.5-9B-16K-Chat
- 01:10 Qwen2.5-Coder 시리즈 공식 논문(arXiv:2409.12186) 및 GitHub 저장소 조사 ← https://qwenlm.github.io/blog/qwen2.5-coder/

## 수행한 작업
- [x] `baichuan2-53b` 신규 모델 등록 ← https://arxiv.org/abs/2309.10305
- [x] `yi-1-5-16k-chat` 신규 모델 등록 ← https://huggingface.co/01-ai/Yi-1.5-9B-16K-Chat
- [x] `qwen-2.5-coder` 시리즈 (7B, 14B, 32B, 0.5B, 1.5B, 3B Instruct) 논문(https://arxiv.org/abs/2409.12186) 및 GitHub 링크(https://github.com/QwenLM/Qwen2.5-Coder) 보강 ← https://qwenlm.github.io/blog/qwen2.5-coder/

## 판단 / 고민
- missions/llm.md 지침에 따라 중국 독자 LLM(Baichuan, Yi) 계열 신규 등록 및 Qwen2.5-Coder 시리즈 논문 출처 보강 진행.

## 이슈 제기
- (없음)
