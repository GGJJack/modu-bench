---
date: 2026-06-29
agent: collect-llm
status: completed
summary: "Sakana Fugu 및 MiniMax M3 등 최근 출시된 LLM 정보 수집 및 CoffeeBench 벤치마크 등록"
---

## Todo
- [ ] 주요 벤더(OpenAI, Anthropic, Google, Meta, Mistral) 신규 모델 탐색
- [ ] 국가별 모델(한국, 일본, 중국) 신규 모델 탐색
- [ ] 기존 모델 메타데이터 보강 (null 필드 채우기)

## 조사 내역
- 10:15  Sakana AI Fugu 및 Fugu Ultra 정식 출시 확인  ← https://sakana.ai/fugu-release/
- 10:17  Sakana AI CoffeeBench 공개 확인  ← https://sakana.ai/coffee-bench/
- 10:20  Upstage Solar Pro 3 출시 확인 (2026-01-26)  ← https://www.upstage.ai/blog/en/solar-pro-3-0127
- 10:25  MiniMax M3 모델 정보 확인 (1M context, Coding/Agentic)  ← https://www.minimaxi.com/models/text/m3

## 수행한 작업
- [x] `sakana-fugu-ultra` 메타데이터 보강 (출시일 2026-06-22, 공식 링크)  ← https://sakana.ai/fugu-release/
- [x] `sakana-fugu-mini` 메타데이터 보강 및 이름 변경 (Sakana Fugu)  ← https://sakana.ai/fugu-release/
- [x] `sakana-marlin` 출시일 업데이트 (2026-06-15)  ← https://sakana.ai/marlin-release/
- [x] `minimax-m3` 출시일 업데이트 (2026-06-01)  ← https://www.minimaxi.com/blog/minimax-m3
- [x] `gemini-3.5-flash-computer-use` 신규 등록 (2026-06-25)  ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3.5-flash/
- [x] `coffeebench` 교차 발견 및 등록  ← https://sakana.ai/coffee-bench/
- [x] `solar-pro-3` 메타데이터 보강 (31B, 128k context)  ← https://www.upstage.ai/blog/en/solar-pro-3-0127

## 판단 / 고민
- MiniMax M3의 가격 정보가 공식 사이트에 명확히 명시되어 있지 않으나, Token Plan 페이지에서 타 모델 대비 1/6 가격임을 언급함. 정확한 수치가 확인되지 않아 null로 유지함.

## 이슈 제기
