---
date: 2026-05-03
agent: collect-llm
status: completed
summary: "GPT-5.5, Claude Opus 4.7 등 메이저 모델 보강 및 Qwen2.5 시리즈 신규 등록"
---

## Todo
- [x] gpt-5-5 정보 보강
- [x] qwen-plus 보강 및 qwen-turbo 신규 등록
- [x] grok-4.3 정보 보강
- [x] exaone-3.0, hyperclova-x 보강 시도 (정보 부족으로 이슈 생성)

## 조사 내역
- 01:05 GPT-5.5 (gpt-5-5) 가격 및 컨텍스트 윈도우 확인 ($5/$30, 1M) ← https://openai.com/index/introducing-gpt-5-5/
- 01:10 Claude Opus 4.7 (claude-opus-4-7) 가격 및 컨텍스트 윈도우 확인 ($5/$25, 1M) ← https://www.anthropic.com/news/claude-opus-4-7
- 01:15 Qwen2.5 시리즈 출시 정보 및 Qwen-Plus 컨텍스트 윈도우(128k) 확인 ← https://qwenlm.github.io/blog/qwen2.5/
- 01:20 Qwen-Turbo, GPT-5.3 Instant, GPT-5.3-Codex 신규 발견 및 등록 ← https://qwenlm.github.io/blog/qwen2.5/, https://openai.com/news/
- 01:25 Grok 4.3 (grok-4-3) 문서 확인. 컨텍스트 윈도우 및 가격 미표기 확인 ← https://docs.x.ai/developers/models

## 수행한 작업
- [x] gpt-5-5 보강: contextWindow 1,000,000, pricing ($5/$30) ← https://openai.com/index/introducing-gpt-5-5/
- [x] claude-opus-4-7 보강: contextWindow 1,000,000, pricing ($5/$25) ← https://www.anthropic.com/news/claude-opus-4-7
- [x] qwen-plus 보강: contextWindow 128,000 ← https://qwenlm.github.io/blog/qwen2.5/
- [x] qwen-turbo 신규 등록 ← https://qwenlm.github.io/blog/qwen2.5/
- [x] gpt-5-3-instant, gpt-5-3-codex 신규 등록 ← https://openai.com/news/

## 판단 / 고민
- GPT-5.5 가격 정보가 "soon be available" 상태로 기재되어 있으나, 공식 발표문에 구체적 수치($5/$30)가 명시되어 있어 보강함.
- Grok 4.3은 문서상 "Context- tokens"로 비어 있어 null로 유지함.

## 이슈 제기
- issues/2026-05-03-collect-llm-pricing-missing.md (Qwen-Turbo, Grok 4.3, EXAONE 3.0, HyperCLOVA X 가격/스펙 누락)
