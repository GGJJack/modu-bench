---
date: 2026-05-29
agent: collect-llm
status: completed
summary: "Collected 2 new models (Mistral, Google) and reinforced 12 existing models with pricing and context window data. Excluded agentic products from core registry."
---

## Todo
- [x] Initialize journal
- [x] Research new models and missing metadata
- [x] Reinforce existing models (GPT-OSS, Granite, etc.)
- [x] Register newly discovered models
- [x] Verify changes with build

## 조사 내역
- 18:00  Mistral AI 공식 블로그 확인. Physics AI (Emmi), Search Toolkit, Vibe Work Mode 발견.  ← https://mistral.ai/news
- 18:10  xAI API 문서 확인. Grok 4.3 및 Grok Build 0.1 상세 스펙(가격, 컨텍스트) 확보.  ← https://docs.x.ai/developers/models
- 18:20  Google Gemini API 문서 확인. Gemini 3.1 Flash Live, TTS 및 Antigravity Agent 등 신규 모델군 확인.  ← https://ai.google.dev/gemini-api/docs/models
- 18:30  DeepSeek API 가격 페이지 확인. DeepSeek-V4 Pro/Flash 가격 및 Preview 버전 상세 정보 확인.  ← https://api-docs.deepseek.com/quick_start/pricing
- 18:40  IBM Granite 문서 확인. Granite 4.1 시리즈(30B, 8B, 3B) 컨텍스트 윈도우 확인.  ← https://www.ibm.com/granite/docs/models/granite4-1

## 수행한 작업
- [x] `gpt-oss-120b`, `gpt-oss-20b` contextWindow 보강 (128,000)  ← https://openai.com/news
- [x] `deepseek-v4-pro`, `deepseek-v4-flash` pricing 보강  ← https://api-docs.deepseek.com/quick_start/pricing
- [x] `deepseek-v4-preview` parameterSize 및 pricing 보강  ← https://api-docs.deepseek.com/quick_start/pricing
- [x] `grok-4-3` contextWindow (1M) 및 pricing 보강  ← https://docs.x.ai/developers/models
- [x] `grok-build-0.1` pricing 보강 ($1/$2)  ← https://x.ai/news/grok-build-0-1
- [x] `gemini-3.5-flash`, `gemini-3-1-flash-lite` contextWindow (1M) 보강  ← https://ai.google.dev/gemini-api/docs/models
- [x] `granite-4.1-30b`, `8b`, `3b` contextWindow (128,000) 보강  ← https://www.ibm.com/granite/docs/models/granite4-1
- [x] 신규 모델 등록: `gemini-3-1-flash-tts` ($0.25/$1.5), `mistral-physics-ai-emmi`

## 판단 / 고민
- Mistral의 Physics AI (Emmi)는 전통적인 LLM과는 궤가 다르지만, Mistral의 전략적 모델이므로 Proprietary 라이선스로 등록함.
- DeepSeek-V4 Preview는 V4-Pro와 동일한 가격과 파라미터 구조를 가짐을 확인하여 반영함.
- 'Mistral Vibe'와 'Search Toolkit'은 개별 모델 아키텍처가 아닌 에이전트 제품군이므로 코어 LLM 레지스트리에서는 제외하고, 필요 시 도구(Tools) 도메인으로 확장을 고려함.

## 이슈 제기
- (없음)
