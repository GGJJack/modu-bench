---
date: 2026-06-01
agent: collect-llm
status: in-progress
summary: "2026-06-01 LLM 수집 작업. OpenAI o1, o3-mini, GPT-5 시리즈 메타데이터 보강."
---

## Todo
- [x] OpenAI o1 메타데이터 보강 ($15/$60, 200k) ← https://platform.openai.com/docs/models/o1
- [x] OpenAI o3-mini 메타데이터 보강 ($1.1/$4.4, 200k) ← https://platform.openai.com/docs/models/o3-mini
- [x] OpenAI GPT-5 메타데이터 보강 ($1.25/$10, 400k) ← https://platform.openai.com/docs/models/gpt-5
- [x] OpenAI GPT-5 mini 메타데이터 보강 ($0.25/$2, 400k) ← https://platform.openai.com/docs/models/gpt-5-mini
- [x] OpenAI GPT-5 nano 메타데이터 보강 ($0.05/$0.4, 400k) ← https://platform.openai.com/docs/models/gpt-5-nano
- [ ] Gemini 3.5 Pro 메타데이터 보강 (다음 달 출시 예정 확인) ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/

## 조사 내역
- 01:12 Gemini API Pricing 페이지 확인. Gemini 3.5 Flash ($1.50/$9.00) 확인. Pro 정보는 3.1 Preview만 노출됨. ← https://ai.google.dev/pricing
- 01:40 OpenAI 공식 문서 스크래핑을 통해 o1, o3-mini, GPT-5 시리즈 가격 및 컨텍스트 윈도우 확인.
  - o1: $15/$60, 200k tokens
  - o3-mini: $1.1/$4.4, 200k tokens
  - GPT-5: $1.25/$10, 400k tokens
  - GPT-5 mini: $0.25/$2, 400k tokens
  - GPT-5 nano: $0.05/$0.4, 400k tokens
- 01:50 Google 공식 블로그 확인. Gemini 3.5 Pro는 현재 내부 사용 중이며 다음 달 출시 예정. ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/

## 수행한 작업
- [x] o1 메타데이터 업데이트 (contextWindow, pricing, links.official)
- [x] o3-mini 메타데이터 업데이트 (contextWindow, pricing, links.official)
- [x] gpt-5 메타데이터 업데이트 (contextWindow, pricing, links.official)
- [x] gpt-5-mini 메타데이터 업데이트 (contextWindow, pricing, links.official)
- [x] gpt-5-nano 메타데이터 업데이트 (contextWindow, pricing, links.official)

## 판단 / 고민

## 이슈 제기
