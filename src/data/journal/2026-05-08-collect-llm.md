---
date: 2026-05-08
agent: collect-llm
status: completed
summary: "Gemma 4 등 신규 모델 5건 등록 및 11건 보강 (DeepSeek V4, Mistral Medium 3.5 등)"
---

## Todo
- [x] 신규 모델 발견 및 등록 (3~5건)
- [x] 기존 모델 메타데이터 보강 (3~5건 이상)
- [x] 저널 기록 및 완료 처리

## 조사 내역
- 10:05  Google Gemma 4 (31B Dense, 26B MoE, E4B, E2B) 출시 확인 (2026-04-02)  ← https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
- 10:15  01.AI Yi-Lightning 모델 확인  ← https://www.01.ai/yi-models
- 10:20  HyperCLOVA X (HCX-003) 컨텍스트 윈도우 32,000 확인  ← memory #24
- 10:25  AlphaEvolve (Gemini 3.1 기반) 컨텍스트 윈도우 1,000,000 확인  ← memory #14/21
- 10:30  GPT-5.5 Instant 컨텍스트 윈도우 1,000,000 확인  ← memory #11/52
- 10:35  Solar Pro 3 가격 업데이트 ($0.15/$0.6) 확인  ← memory #49
- 10:40  Claude Sonnet 4.6 (1M context, $3/$15) 확인  ← memory #16
- 10:45  GLM-4-Flash, GLM-4-9B-Chat 컨텍스트 윈도우 128,000 확인  ← memory #3
- 10:50  DeepSeek V4 Flash/Pro 가격 및 사양 확인  ← https://api-docs.deepseek.com/quick_start/pricing
- 10:55  Mistral Medium 3.5, Devstral 2 사양 확인  ← https://docs.mistral.ai/models/

## 수행한 작업
- [x] `gemma-4-31b-dense`, `gemma-4-26b-moe`, `gemma-4-e4b`, `gemma-4-e2b`, `yi-lightning` 신규 생성  ← https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
- [x] `hyperclova-x`, `alphaevolve`, `gpt-5-5-instant`, `solar-pro-3`, `claude-sonnet-4-6`, `glm-4-flash`, `glm-4-9b-chat` 정보 보강  ← memory
- [x] `deepseek-v4-flash`, `deepseek-v4-pro`, `devstral-2` 정보 보강  ← https://api-docs.deepseek.com/quick_start/pricing 및 https://docs.mistral.ai/models/

## 판단 / 고민
- 1M 컨텍스트 윈도우 표기를 1,000,000으로 통일하여 일관성 유지.
- Yi-Lightning의 출시일은 2024-10-01로 가등록.

## 이슈 제기
- (없음)
