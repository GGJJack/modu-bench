---
date: 2026-08-17
agent: collect-llm
status: completed
summary: "신규 LLM(LLM-jp-3 3.7B Instruct) 등록 및 기존 LLM(Qwen3Guard-Gen-4B, Qwen3Guard-Stream-4B, Sarvam-M) 메타데이터 보강"
---

## Todo
- [x] 신규 LLM (LLM-jp-3 3.7B Instruct) 등록 및 정보 작성
- [x] 기존 LLM (Qwen3Guard-Gen-4B, Qwen3Guard-Stream-4B, Sarvam-M) 컨텍스트 윈도우 및 링크 보강
- [x] build 검증 수행 및 저널 completed 변경

## 조사 내역
- 01:00 Qwen3Guard-Gen-4B 및 Qwen3Guard-Stream-4B 모델 contextWindow(32768) 및 GitHub/논문 출처 조사 ← https://huggingface.co/Qwen/Qwen3Guard-Gen-4B
- 01:05 Sarvam-M 모델 contextWindow(128000) 및 블로그 출처 조사 ← https://huggingface.co/sarvamai/sarvam-m
- 01:10 일본 독자 LLM-jp-3 3.7B Instruct 모델 메타데이터 조사 (parameterSize: 3.7B, contextWindow: 4096) ← https://huggingface.co/llm-jp/llm-jp-3-3.7b-instruct

## 수행한 작업
- [x] `llm-jp-3-3.7b-instruct` 신규 모델 추가 ← https://huggingface.co/llm-jp/llm-jp-3-3.7b-instruct
- [x] `qwen3guard-gen-4b` 모델 메타데이터 보강 (contextWindow: 32768, github, paper) ← https://huggingface.co/Qwen/Qwen3Guard-Gen-4B
- [x] `qwen3guard-stream-4b` 모델 메타데이터 보강 (contextWindow: 32768, github, paper) ← https://huggingface.co/Qwen/Qwen3Guard-Stream-4B
- [x] `sarvam-m` 모델 메타데이터 보강 (contextWindow: 128000, official) ← https://huggingface.co/sarvamai/sarvam-m

## 판단 / 고민
- missions/llm.md 지침에 따라 국가별 독자 LLM(일본 LLM-jp) 등록 및 기존 모델의 컨텍스트 윈도우/공식 출처 링크 보강 진행.

## 이슈 제기
- (없음)
