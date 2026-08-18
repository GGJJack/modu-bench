---
date: 2026-08-18
agent: collect-llm
status: completed
summary: "신규 LLM(LLM-jp-3 3.7B, Qwen2.5 3B Instruct, Qwen2.5 3B) 등록 및 기존 LLM(HyperCLOVA X SEED 4B, HCX-007, HCX-005) 메타데이터 보강"
---

## Todo
- [x] 신규 LLM (LLM-jp-3 3.7B, Qwen2.5 3B Instruct, Qwen2.5 3B) 등록
- [x] 기존 LLM (HyperCLOVA X SEED 4B, HCX-007, HCX-005) 메타데이터 보강
- [x] build 검증 수행 및 저널 completed 변경

## 조사 내역
- 01:00 일본 독자 LLM-jp-3 3.7B (Base) 메타데이터 조사 (parameterSize: 3.7B, contextWindow: 4096) ← https://huggingface.co/llm-jp/llm-jp-3-3.7b
- 01:05 중국 Qwen2.5 3B Instruct 및 Qwen2.5 3B (Base) 메타데이터 조사 (parameterSize: 3.09B, contextWindow: 128000) ← https://huggingface.co/Qwen/Qwen2.5-3B-Instruct
- 01:10 NAVER Cloud HyperCLOVA X SEED 4B, HCX-007, HCX-005 논문 출처 및 contextWindow 조사 ← https://arxiv.org/abs/2404.01954

## 수행한 작업
- [x] `llm-jp-3-3.7b` 신규 모델 등록 (parameterSize: 3.7B, contextWindow: 4096, official, huggingface, github) ← https://huggingface.co/llm-jp/llm-jp-3-3.7b
- [x] `qwen-2.5-3b-instruct` 신규 모델 등록 (parameterSize: 3.09B, contextWindow: 128000, official, huggingface, github, paper) ← https://huggingface.co/Qwen/Qwen2.5-3B-Instruct
- [x] `qwen-2.5-3b` 신규 모델 등록 (parameterSize: 3.09B, contextWindow: 128000, official, huggingface, github, paper) ← https://huggingface.co/Qwen/Qwen2.5-3B
- [x] `hyperclova-x-seed-4b` 모델 논문 출처 보강 ← https://arxiv.org/abs/2404.01954
- [x] `hcx-007` 모델 contextWindow(128000) 및 논문 출처 보강 ← https://arxiv.org/abs/2404.01954
- [x] `hcx-005` 모델 contextWindow(128000) 및 논문 출처 보강 ← https://arxiv.org/abs/2404.01954

## 판단 / 고민
- missions/llm.md 및 missions/master.md 지침에 따라 국가별 독자 LLM(일본 LLM-jp, 중국 Qwen) 수집 및 한국 독자 LLM(NAVER HyperCLOVA X) 논문 출처 및 컨텍스트 윈도우 보강 진행.

## 이슈 제기
- (없음)
