---
title: "LLM 모델 수집 및 보강 (2026-06-28)"
skill: collect-llm
status: completed
summary: "OpenAI GPT-5.6 시리즈 가격 및 컨텍스트 창 보강, Mistral Small 3.1 파라미터 크기 보강"
---

# 2026-06-28 LLM 모델 수집 작업

## 탐색 대상 모델
- Mistral Small 3.1 (보강: parameterSize)
- OpenAI GPT-5.6 Sol/Terra/Luna (보강: contextWindow, pricing)
- 신규 모델 탐색 (Anthropic, Google, Meta 등) - 주말 신규 출시 없음 확인

## 작업 내역
- [x] `gpt-5-6-sol` pricing ($5/$30) 및 contextWindow (1M) 보강 ← https://openai.com/index/previewing-gpt-5-6-sol/
- [x] `gpt-5-6-terra` pricing ($2.5/$15) 및 contextWindow (1M) 보강 ← https://openai.com/index/previewing-gpt-5-6-sol/
- [x] `gpt-5-6-luna` pricing ($1/$6) 및 contextWindow (1M) 보강 ← https://openai.com/index/previewing-gpt-5-6-sol/
- [x] `mistral-small-3-1` parameterSize (24B) 보강 ← src/content/models/mistral-small-3-1.md 및 https://mistral.ai/news/mistral-small-3-1/

## 판단 / 고민
- OpenAI GPT-5.6 시리즈의 가격 정보는 공식 블로그 프리뷰 텍스트를 통해 확인됨.
- Mistral Small 3.1의 파라미터 크기는 공식 블로그 및 로컬 프로필 파일에서 24B로 확인되어 업데이트함.
- 6월 27~28일 주말 동안 주요/지역 라이벌 사의 신규 모델 출시는 탐색 결과 발견되지 않음.
