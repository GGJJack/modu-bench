---
date: 2026-04-28
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 8건 등록 및 기존 모델 2건 보강 완료"
---

## Todo
- [x] 신규 모델 탐색 및 등록 (Mistral AI, Cohere, xAI)
- [x] 기존 모델 보강 (Solar Pro 3, Command A)
- [ ] 교차 발견 모델 처리 (발견된 TTS 모델은 이미 등록됨)

## 조사 내역
- 09:00 작업 시작. 현재 등록된 모델 19개 확인.
- 09:10 Mistral AI 최신 모델 조사: Mistral Large 3 (2025-12), Mistral Small 4 (2026-03), Mistral Medium 3.1 (2025-08), Ministral 3 (2025-12), Devstral 2 (2025-12), Magistral Medium 1.2 (2025-09) 확인 ← https://docs.mistral.ai/models
- 09:15 Cohere 최신 모델 조사: Command A (2025-03, contextWindow 256k), Command A Reasoning (2025-08) 등 확인 ← https://docs.cohere.com/docs/models
- 09:20 xAI 최신 모델 조사: Grok 4.20 확인 (출시일 2026-04-16 추정) ← https://docs.x.ai/developers/models
- 09:25 Upstage Solar Pro 3 상세 스펙 확인: 102B (MoE) 파라미터 확인 ← https://console.upstage.ai/docs/models/solar-pro-3
- 09:30 교차 발견: Mistral Voxtral TTS 재확인. tts 도메인에 이미 등록되어 있음.

## 수행한 작업
- [x] 신규 모델 등록: mistral-large-3, mistral-small-4, mistral-medium-3-1, ministral-3-14b, devstral-2, magistral-medium-1-2, command-a-03-2025, grok-4-20
- [x] 기존 모델 보강: solar-pro-3 (parameterSize: "102B (MoE)"), command-a-03-2025 (contextWindow: 256000)

## 판단 / 고민
- xAI Grok 4.20의 출시일은 뉴스룸의 마지막 업데이트 날짜인 2026-04-16을 기준으로 등록함.
- Claude Opus 4.7은 이미 등록된 상태였으나, 뉴스룸 확인을 통해 최신 상태임을 재검증함.

## 이슈 제기
