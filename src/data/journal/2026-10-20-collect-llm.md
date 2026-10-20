---
date: 2026-10-20
agent: collect-llm
status: completed
summary: "Qwen3 시리즈 (Qwen3-14B, Qwen3-8B, Qwen3-4B) 신규 수집 및 Gemini 1.5 Pro 컨텍스트 윈도우 메타데이터 보강"
---

## Todo
- [x] Qwen3 신규 모델 수집 (`qwen3-14b`, `qwen3-8b`, `qwen3-4b`)
- [x] 기존 모델 보강 (`gemini-1-5-pro` contextWindow)
- [x] 저널 완결 및 빌드 검증

## 조사 내역
- 01:00 Qwen3 공식 블로그 게시물 확인 (Qwen3-14B, Qwen3-8B, Qwen3-4B 사양 확인) ← https://qwenlm.github.io/blog/qwen3/
- 01:05 Qwen3-Coder 공식 블로그 게시물 확인 ← https://qwenlm.github.io/blog/qwen3-coder/
- 01:10 Gemini 1.5 Pro 공식 발표 블로그 확인 (1M token context window) ← https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/

## 수행한 작업
- [x] `qwen3-14b` 신규 수집 등록 ← https://qwenlm.github.io/blog/qwen3/
- [x] `qwen3-8b` 신규 수집 등록 ← https://qwenlm.github.io/blog/qwen3/
- [x] `qwen3-4b` 신규 수집 등록 ← https://qwenlm.github.io/blog/qwen3/
- [x] `gemini-1-5-pro` contextWindow (1000000 토큰) 보강 ← https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/

## 판단 / 고민
- Qwen3 릴리스 블로그에서 발견된 오픈 텍스트 모델 중 미등록 상태였던 Qwen3-14B, Qwen3-8B, Qwen3-4B를 필수 5필드 + 공식 URL로 추가 등록함.
- `gemini-1-5-pro`의 컨텍스트 윈도우가 null로 남아 있어 공식 블로그 소스에 명시된 1,000,000 토큰으로 업데이트함.
- `qwen3-235b-a22b`, `qwen3-32b`, `qwen3-30b-a3b`, `qwen3-coder-480b-a35b-instruct` 등은 이미 완결된 메타데이터가 잘 등록되어 있음을 검증함.

## 이슈 제기
- (없음)
