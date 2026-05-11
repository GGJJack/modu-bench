---
date: 2026-05-11
agent: collect-llm
status: completed
summary: "OpenAI GPT-5.5/5.4, Anthropic Claude 4, Google Gemini 3 시리즈 신규 등록 및 기존 모델 보강"
---

## Todo
- [x] EXAONE 4.5 33B 컨텍스트 윈도우 보강 ← https://www.lgresearch.ai/
- [x] GPT-5.5 Instant 가격 정보 보강 ← https://developers.openai.com/api/docs/pricing
- [x] AlphaEvolve 가격 정보 보강 ← https://ai.google.dev/gemini-api/docs/pricing
- [x] Gemini Deep Research 가격 정보 보강 ← https://ai.google.dev/gemini-api/docs/pricing
- [x] 신규 모델 검색 및 등록 (5건)
- [x] 기존 모델 추가 보강 (7건)

## 조사 내역
- 09:00  작업 시작 및 기존 모델 목록 확인
- 09:15  기존 모델(glm-4-flash, sakana-marlin-beta 등) 상태 확인 및 보강 대상 선정
- 09:40  OpenAI, Anthropic, Google 공식 문서에서 신규 모델 및 가격 정보 확인
- 09:50  EXAONE 4.5 33B의 컨텍스트 윈도우(256k) 확인
- 10:10  Anthropic Claude 4 (Opus 4.7, Sonnet 4.6, Haiku 4.5) 가격 및 컨텍스트 윈도우 보강

## 수행한 작업
- [x] exaone-4-5-33b: contextWindow (256000) 업데이트 ← https://www.lgresearch.ai/
- [x] gpt-5-5-instant: pricing ($5/$30) 업데이트 ← https://developers.openai.com/api/docs/pricing
- [x] alphaevolve: pricing ($2/$12) 업데이트 ← https://ai.google.dev/gemini-api/docs/pricing
- [x] gemini-deep-research: pricing ($2/$12) 업데이트 ← https://ai.google.dev/gemini-api/docs/pricing
- [x] claude-opus-4-7: contextWindow(1M), pricing ($5/$25) 업데이트 ← https://platform.claude.com/docs/en/about-claude/models/overview
- [x] claude-sonnet-4-6: contextWindow(1M), pricing ($3/$15) 업데이트 ← https://platform.claude.com/docs/en/about-claude/models/overview
- [x] claude-haiku-4-5: contextWindow(200k), pricing ($1/$5) 업데이트 ← https://platform.claude.com/docs/en/about-claude/models/overview
- [x] gpt-5-5-pro: 신규 등록 ($30/$180) ← https://developers.openai.com/api/docs/pricing
- [x] gpt-5-4-mini: 신규 등록 ($0.75/$4.5) ← https://developers.openai.com/api/docs/pricing
- [x] gpt-5-4-nano: 신규 등록 ($0.2/$1.25) ← https://developers.openai.com/api/docs/pricing
- [x] gemini-3-flash: 신규 등록 ($0.5/$3) ← https://ai.google.dev/gemini-api/docs/pricing
- [x] mistral-medium-3-5-vibe: 신규 등록 ($0.5/$1.5) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5

## 판단 / 고민
- GLM-4-Flash 및 Sakana Marlin (Beta)의 정확한 가격/컨텍스트 정보는 공식 페이지 자바스크립트 미지원 및 검색 결과 부족으로 이번 세션에서 보강하지 못함.
- OpenAI GPT-5.5 Pro 등 세분화된 모델 라인업이 확인되어 추가 등록함.

## 이슈 제기
