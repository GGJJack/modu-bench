---
date: 2026-05-29
agent: profile-model
status: completed
summary: "Created detailed profiles for Gemini 3.1 Flash TTS and Mistral Physics AI (Emmi)."
---

## Todo
- [x] Initialize journal
- [x] Create profile for gemini-3-1-flash-tts
- [x] Create profile for mistral-physics-ai-emmi
- [x] Verify with build

## 조사 내역
- 11:20  Google Gemini 3.1 Flash TTS 및 Mistral Physics AI (Emmi) 등록 확인.
- 11:22  Google AI for Developers 문서에서 Gemini 3.1 Flash TTS 상세 정보 확인.  ← https://ai.google.dev/gemini-api/docs/models
- 11:25  Mistral AI 블로그에서 Physics AI (Emmi) 상세 정보 확인.  ← https://mistral.ai/news/introducing-physics-ai-at-mistral

## 수행한 작업
- [x] `src/content/models/gemini-3-1-flash-tts.md` 작성  ← https://ai.google.dev/gemini-api/docs/models
- [x] `src/content/models/mistral-physics-ai-emmi.md` 작성  ← https://mistral.ai/news/introducing-physics-ai-at-mistral
- [x] `bun run build`를 통한 Zod 스키마 및 정적 페이지 생성 확인

## 판단 / 고민
- `gemini-3-1-flash-tts`는 `tts` 도메인이기도 하지만, `llm.json`에도 등록되어 있어 일관성을 위해 `llm` 도메인 상세 페이지로 먼저 작성함. (src/content.config.ts 에 정의된 domain enum 에 llm, tts 등이 있음)

## 이슈 제기
- (없음)
