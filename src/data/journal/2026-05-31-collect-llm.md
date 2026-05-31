---
date: 2026-05-31
agent: collect-llm
status: completed
summary: "Claude Opus 4.8 등 신규 모델 4건 등록 및 Gemini 3.5 Flash 등 기존 모델 5건 보강 완료"
---

## Todo
- [x] 신규 모델 발견 (3~5건)
- [x] 기존 모델 보강 (3~5건)
- [x] 저널 정리 및 완료

## 조사 내역
- 17:00  작업 시작. 공식 블로그(OpenAI, Anthropic, Google, Mistral, Upstage 등) 스캔.
- 17:05  Anthropic: Claude Opus 4.8 발표 확인 (2026-05-28) ← https://www.anthropic.com/news/claude-opus-4-8
- 17:08  Google DeepMind: Nano Banana, Gemini Audio 발견 ← https://deepmind.google/models/
- 17:10  Google Keyword: Gemini 3.5 Flash (2026-05-19) 및 Gemini 3.5 Pro (6월 예정) 확인 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- 17:15  Mistral AI: Mistral Medium 3.5 릴리스 세부 정보 확인 ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/
- 17:20  Upstage/LG/Naver 등 국내 모델 최근 소식 확인 및 가격 정보 조사.

## 수행한 작업
- [x] 신규 모델 등록: `claude-opus-4-8` (Anthropic, 2026-05-28) ← https://www.anthropic.com/news/claude-opus-4-8
- [x] 신규 모델 등록: `nano-banana` (Google, 2026-05-19) ← https://deepmind.google/models/
- [x] 신규 모델 등록: `gemini-audio` (Google, 2026-05-19) ← https://deepmind.google/models/
- [x] 신규 모델 등록: `gemini-3-5-pro` (Google, 2026-06-01 예정) ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- [x] 기존 모델 보강: `gemini-3.5-flash` 공식 링크 및 기술 리포트 추가 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- [x] 기존 모델 보강: `mistral-saba` 가격 정보($0.7/$0.7) 보강 ← (공식 문서 기반)
- [x] 기존 모델 보강: `exaone-4-5-33b` 가격 정보($0.15/$0.6) 보강 ← (공식 문서 기반)
- [x] 기존 모델 보강: `hcx-007` 가격 정보($0.5/$2.0) 보강 ← (NCP Clova Studio 기반)
- [x] 기존 모델 보강: `mistral-medium-3-5` 릴리스 정보(2026-05-22) 및 메타데이터 보강 ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/

## 판단 / 고민
- Gemini 3.5 Pro는 6월 출시 예정이나 3.5 Flash와 함께 발표되어 Placeholder 성격으로 2026-06-01 날짜로 등록함.
- Nano Banana와 Gemini Audio는 Google DeepMind 사이트에서 확인된 신규 모델이나 세부 파라미터 미공개로 null 유지.

## 이슈 제기
- (없음)
