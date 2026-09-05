---
date: 2026-09-05
agent: collect-llm
status: completed
summary: "LLM 신규 모델 3건 등록 및 기존 모델 3건 메타데이터/링크 보강"
---

## Todo
- [x] 신규 LLM 3건 등록 (`codestral-22b-instruct`, `gemma-2-9b-it`, `qwen-2.5-math-72b-instruct`)
- [x] 기존 LLM 3건 메타데이터/링크 보강 (`qwen-2.5-coder-14b`, `mistral-small-24b-instruct`, `yi-coder-9b-instruct`)

## 조사 내역
- 01:05 Mistral Codestral 22B 공식 발표 및 HF 카드 확인 ← https://mistral.ai/news/codestral/
- 01:07 Google Gemma 2 공식 블로그 및 HF 카드 확인 ← https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
- 01:10 Qwen2.5-Math-72B-Instruct 블로그 및 논문/GitHub 확인 ← https://qwenlm.github.io/blog/qwen2.5-math/
- 01:12 Qwen2.5-Coder-14B HF 및 논문/GitHub 링크 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B
- 01:14 Mistral-Small-24B-Instruct GitHub 리포지토리 확인 ← https://github.com/mistralai/mistral-inference
- 01:15 Yi-Coder-9B-Instruct GitHub 리포지토리 확인 ← https://github.com/01-ai/Yi-Coder

## 수행한 작업
- [x] `codestral-22b-instruct` 신규 등록 (22B / ctx:32768) ← https://mistral.ai/news/codestral/
- [x] `gemma-2-9b-it` 신규 등록 (9B / ctx:8192) ← https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
- [x] `qwen-2.5-math-72b-instruct` 신규 등록 (72.7B / ctx:4096) ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `qwen-2.5-coder-14b` huggingface, github, paper 링크 보강 ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B
- [x] `mistral-small-24b-instruct` github 링크 보강 ← https://github.com/mistralai/mistral-inference
- [x] `yi-coder-9b-instruct` github 링크 보강 ← https://github.com/01-ai/Yi-Coder

## 판단 / 고민
- PoC 단계의 출처 절대 규칙에 따라 모든 추가 데이터 및 링크는 공식 블로그/GitHub/ArXiv/HuggingFace에서 직접 확인된 건만 수집.

## 이슈 제기
- (없음)
