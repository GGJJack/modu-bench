---
date: 2026-09-06
agent: collect-llm
status: completed
summary: "LLM 신규 모델 3건 등록 및 기존 모델 3건 메타데이터/링크 보강"
---

## Todo
- [x] 신규 LLM 3건 등록 (`gemma-2-27b-it`, `gemma-2-2b-it`, `mistral-nemo-instruct-2407`)
- [x] 기존 LLM 3건 메타데이터/링크 보강 (`gemma-2-9b-it`, `llama-3.2-3b`, `llama-3.1-8b`)

## 조사 내역
- 01:05 Google Gemma 2 27B/2B 공식 블로그 및 HF/GitHub URL 확인 ← https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
- 01:08 Mistral NeMo Instruct 2407 공식 뉴스 및 HF/GitHub URL 확인 ← https://mistral.ai/news/mistral-nemo/
- 01:10 Meta Llama 3.2 3B 및 Llama 3.1 8B HF/GitHub URL 확인 ← https://huggingface.co/meta-llama/Llama-3.2-3B

## 수행한 작업
- [x] `gemma-2-27b-it` 신규 등록 (27B / ctx:8192) ← https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
- [x] `gemma-2-2b-it` 신규 등록 (2.6B / ctx:8192) ← https://blog.google/technology/developers/gemma-2-2b-lightweight-ai-model/
- [x] `mistral-nemo-instruct-2407` 신규 등록 (12B / ctx:128000) ← https://mistral.ai/news/mistral-nemo/
- [x] `gemma-2-9b-it` github 링크 보강 ← https://github.com/google-deepmind/gemma
- [x] `llama-3.2-3b` huggingface, github 링크 보강 ← https://huggingface.co/meta-llama/Llama-3.2-3B
- [x] `llama-3.1-8b` huggingface, github 링크 보강 ← https://huggingface.co/meta-llama/Llama-3.1-8B

## 판단 / 고민
- PoC 단계 출처 절대 규칙 준수를 위해 모든 필드는 직접 HTTP HEAD 검증을 완료한 공식 URL 및 HF/GitHub 리포지토리만을 기록.

## 이슈 제기
- (없음)
