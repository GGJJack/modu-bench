---
date: 2026-05-19
agent: collect-llm
status: completed
summary: "Google I/O 2026 신규 모델 등록 및 DeepSeek/Moonshot AI 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 모델 발견 (3~5건)
- [x] 기존 모델 보강 (3~5건)
- [ ] 이슈 티켓 생성 (필요 시)

## 조사 내역
- 09:00 작업 시작
- 09:15 Google I/O 2026 발표 내용 확인 (Gemini 3.5 Flash, Gemini Omni Flash, Antigravity 2.0 등) ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- 09:30 Gemini API 가격표 확인 ← https://ai.google.dev/pricing
- 09:45 DeepSeek-V4 Pro/Flash 가격 및 상세 사양 확인 ← https://api-docs.deepseek.com/quick_start/pricing/
- 10:00 Kimi K2.6 공식 출시 및 가격 정보 확인 ← https://platform.kimi.com/docs/pricing/chat-k26

## 수행한 작업
- [x] 신규 모델 등록: `gemini-3.5-flash`, `gemini-omni-flash`, `google-antigravity-2.0`, `deep-research-max`, `gemini-3-1-flash-lite-preview` ← https://blog.google/
- [x] 기존 모델 보강 (kimi-k2.6): pricing (0.6/3.0) 업데이트 ← https://platform.kimi.com/docs/pricing/chat-k26
- [x] 기존 모델 보강 (deepseek-r1): pricing (0.14/0.28) 업데이트 ← https://api-docs.deepseek.com/quick_start/pricing/
- [x] 기존 모델 보강 (llama-4-maverick-17b): contextWindow (1M) 업데이트 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/ (비교표)
- [x] 기존 모델 보강 (deepseek-v4-pro): releaseDate (2026-04-24) 보정 ← https://api-docs.deepseek.com/news/news260424
- [x] 기존 모델 보강 (exaone-4-5-33b): contextWindow (256k) 업데이트 ← https://huggingface.co/LGAI-Research/EXAONE-4.5-33B

## 판단 / 고민
- Google I/O 2026에서 발표된 Gemini 3.5 Flash 및 Omni Flash를 신속하게 등록함.
- DeepSeek-R1의 경우 공식 API 가격 정보가 확인되어 null 필드를 보강함.
- Llama 4 Maverick 17B의 Context Window를 Google 블로그의 벤치마크 비교표를 근거로 1M으로 업데이트함 (공식 Bedrock 사양 확인 전까지 유효한 출처로 간주).

## 이슈 제기
- issues/2026-05-19-collect-llm-pricing-missing.md
