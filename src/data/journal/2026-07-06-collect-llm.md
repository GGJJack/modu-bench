---
title: "2026-07-06 collect-llm"
status: completed
---

# 2026-07-06 collect-llm 저널

## 수집 시도 목록

- [x] 신규 모델 발견
  - Google: `nano-banana-2`, `nano-banana-pro`, `veo-3.1-lite-preview`
- [x] 기존 모델 보강
  - Anthropic: `claude-fable-5`, `claude-opus-4-8`, `claude-sonnet-5`, `claude-haiku-4-5`
  - Google: `gemini-3.5-flash`
  - Mistral: `mistral-ocr-4`

## 주요 변경 사항

- Anthropic Claude 4.x/5.x 제품군 메타데이터 보강 (1M 컨텍스트 윈도우, 상세 가격 등)
- Google Nano Banana 2 및 Veo 3.1 제품군 신규 모델 등록
- Google Gemini 3.5 Flash 가격 및 컨텍스트 정보 업데이트
- Mistral OCR 4 가격 정보 ($4/1k pages) 반영

## 필드 ← URL

- `claude-fable-5.pricing` ← https://platform.claude.com/docs/en/about-claude/models/overview
- `claude-fable-5.contextWindow` ← https://platform.claude.com/docs/en/about-claude/models/overview
- `claude-sonnet-5.contextWindow` ← https://platform.claude.com/docs/en/about-claude/models/overview
- `claude-opus-4-8.pricing` ← https://platform.claude.com/docs/en/about-claude/models/overview
- `gemini-3.5-flash.pricing` ← https://ai.google.dev/gemini-api/docs/models
- `nano-banana-2.id` ← https://ai.google.dev/gemini-api/docs/models
- `veo-3.1-lite-preview.id` ← https://ai.google.dev/gemini-api/docs/models
- `mistral-ocr-4.pricing` ← https://mistral.ai/news/ocr-4/
