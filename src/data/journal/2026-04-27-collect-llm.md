---
date: 2026-04-27
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 4건 등록 및 기존 모델 3건 보강 완료"
---

## Todo
- [x] Mistral AI 신규 모델 탐색 및 등록 (Voxtral TTS 발견, TTS 도메인 확인)
- [x] Gemini 3.1 Pro 보강 (기존 데이터 확인)
- [x] Claude Opus 4.7 보강 (contextWindow 1M 확인)
- [x] 신규 한국/일본/중국 LLM 탐색 (Sakana Fugu, Marlin 등 발견)
- [x] 기존 모델 중 null 필드가 많은 Sakana AI 모델 보강
- [x] GPT-5.4 공식 출처 확인 (실패하여 이슈 티켓 생성)

## 조사 내역
- 01:00  작업 시작. 현재 등록된 모델 13개 확인.
- 01:10  Anthropic 최신 모델 조사: Claude Opus 4.7(2026-04-16), Sonnet 4.6(2026-02-17), Haiku 4.5(2025-10-01) 확인 ← https://www.anthropic.com/news, https://platform.claude.com/docs/en/about-claude/models/overview
- 01:15  Claude Mythos Preview 발견 (Project Glasswing, 2026-04-07) ← https://www.anthropic.com/glasswing
- 01:20  Sakana AI 신규 모델 조사: Sakana Fugu Mini/Ultra (2026-04-24), Sakana Marlin (2026-04-02) 확인 ← https://sakana.ai/fugu-beta/, https://sakana.ai/marlin-beta/
- 01:25  Upstage Solar Pro 3 출시일(2026-01-26) 재확인 ← https://www.upstage.ai/blog/en/solar-pro-3-0127
- 01:30  GPT-5.4 관련: 경쟁사 벤치마크에는 등장하나 OpenAI 공식 발표문 발견 실패. 추가 조사 필요.
- 01:35  Mistral AI Voxtral TTS 발견 (2026-03-23). TTS 도메인에 이미 등록되어 있음 확인 ← https://mistral.ai/news/voxtral-tts

## 수행한 작업
- [x] 신규 모델 등록: claude-sonnet-4-6, claude-haiku-4-5, claude-mythos-preview, sakana-fugu-mini
- [x] 기존 모델 보강: claude-opus-4-7 (contextWindow), sakana-fugu-ultra (releaseDate), sakana-marlin (releaseDate)
- [x] 이슈 티켓 생성: src/data/issues/2026-04-27-collect-llm-gpt-5-4.md

## 판단 / 고민
- GPT-5.4는 여러 곳에서 인용되고 있으나 OpenAI 공식 페이지 접근이 제한적이거나 아직 검색에 잡히지 않음. 출처 절대 규칙에 따라 공식 URL 확인 전까지는 등록을 유예하고 이슈로 넘김.

## 이슈 제기
- issues/2026-04-27-collect-llm-gpt-5-4.md
