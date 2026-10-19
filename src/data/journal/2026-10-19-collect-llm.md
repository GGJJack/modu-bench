---
date: 2026-10-19
agent: collect-llm
status: completed
summary: "Gemini 1.5 Pro / Flash, Mistral Large 2411 신규 등록 및 Claude 3.5 Haiku, Codestral 22B, DeepSeek-V2.5 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 수집 (Gemini 1.5 Pro, Gemini 1.5 Flash, Mistral Large 2411)
- [x] 기존 LLM 보강 (Claude 3.5 Haiku, Codestral 22B Instruct, DeepSeek-V2.5)
- [x] 저널 및 빌드 검증

## 조사 내역
- 01:00 Gemini 1.5 Pro 릴리스 및 사양 확인 ← https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/
- 01:02 Gemini 1.5 Flash 릴리스 확인 ← https://blog.google/technology/ai/google-gemini-1-5-flash/
- 01:05 Mistral Large 2411 릴리스 확인 ← https://mistral.ai/news/mistral-large-2411/
- 01:07 Claude 3.5 Haiku 공식 링크 확인 ← https://www.anthropic.com/news/claude-3-5-haiku
- 01:09 Codestral 22B Instruct GitHub 링크 확인 ← https://github.com/mistralai/mistral-inference
- 01:11 DeepSeek-V2.5 논문 링크 확인 ← https://arxiv.org/abs/2405.04434

## 수행한 작업
- [x] `gemini-1-5-pro` 신규 수집 등록 ← https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/
- [x] `gemini-1-5-flash` 신규 수집 등록 ← https://blog.google/technology/ai/google-gemini-1-5-flash/
- [x] `mistral-large-2411` 신규 수집 등록 ← https://mistral.ai/news/mistral-large-2411/
- [x] `claude-3-5-haiku` official 링크 수정 ← https://www.anthropic.com/news/claude-3-5-haiku
- [x] `codestral-22b-instruct` github 링크 추가 ← https://github.com/mistralai/mistral-inference
- [x] `deepseek-v2-5` paper 링크 추가 ← https://arxiv.org/abs/2405.04434

## 판단 / 고민
- Google Gemini 1.5 계열(Pro, Flash) 및 Mistral Large 2411을 발견하여 필수 5필드 + official 링크로 등록 완료.
- 기존 등록 모델 중 링크 누락 및 오기가 있던 Claude 3.5 Haiku, Codestral 22B, DeepSeek-V2.5의 메타데이터를 출처 기반으로 정확하게 보강함.

## 이슈 제기
- (없음)
