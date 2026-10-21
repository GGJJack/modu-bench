---
date: 2026-10-21
agent: collect-llm
status: completed
summary: "Qwen3-Coder 시리즈 신규 수집 및 메이저 LLM 컨텍스트 윈도우 보강"
---

## Todo
- [x] Qwen3-Coder 신규 모델 수집 (`qwen3-coder-32b-instruct`, `qwen3-coder-14b-instruct`, `qwen3-coder-7b-instruct`)
- [x] 기존 모델 메타데이터 보강 (`qwen3-coder-plus`, `gemini-1-5-flash`, `mistral-large-2411`)
- [x] 저널 완결 및 빌드 검증

## 조사 내역
- 01:00 Qwen3-Coder 공식 블로그 게시물 확인 ← https://qwenlm.github.io/blog/qwen3-coder/
- 01:05 Gemini 1.5 Flash 공식 발표 블로그 확인 ← https://blog.google/technology/ai/google-gemini-1-5-flash/
- 01:10 Mistral Large 2411 공식 발표 블로그 확인 ← https://mistral.ai/news/mistral-large-2411/

## 수행한 작업
- [x] `qwen3-coder-32b-instruct` 신규 수집 등록 (Apache-2.0, Alibaba Cloud) ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `qwen3-coder-14b-instruct` 신규 수집 등록 (Apache-2.0, Alibaba Cloud) ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `qwen3-coder-7b-instruct` 신규 수집 등록 (Apache-2.0, Alibaba Cloud) ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `qwen3-coder-plus` contextWindow (131072 토큰) 보강 ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `gemini-1-5-flash` contextWindow (1000000 토큰) 보강 ← https://blog.google/technology/ai/google-gemini-1-5-flash/
- [x] `mistral-large-2411` contextWindow (128000 토큰) 보강 ← https://mistral.ai/news/mistral-large-2411/

## 판단 / 고민
- Qwen3-Coder 공식 블로그에서 오픈 릴리스된 코드 생성 특화 모델들 중 미등록 상태였던 32B/14B/7B Instruct 버전을 필수 5필드와 공식 URL로 추가 등록함.
- `qwen3-coder-plus`, `gemini-1-5-flash`, `mistral-large-2411`의 컨텍스트 윈도우가 null로 남아 있어 각각 공식 출처에 명시된 토큰 크기(131,072, 1,000,000, 128,000)로 업데이트함.
- 수집 전 과정에서 출처 URL 검증 및 manage-model CLI 스크립트를 사용해 데이터 일관성을 유지함.

## 이슈 제기
- (없음)
