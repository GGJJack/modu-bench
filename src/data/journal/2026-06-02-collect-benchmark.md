---
date: 2026-06-02
agent: collect-benchmark
status: completed
summary: "신규 등록된 LLM의 벤치마크 점수 검증 (미등록된 수치에 대한 이슈 생성)"
---

## Todo
- 신규 등록된 LLM의 벤치마크 수치 확인 및 매칭. (어제 또는 오늘 수집된 모델)

## 조사 내역
- 01:30 Google Gemini 3.5 블로그 검증. ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
  - 본문 텍스트에서 Terminal-Bench 2.1, GDPval-AA, MCP Atlas, CharXiv Reasoning 등 벤치마크 이름은 언급되나 구체적인 수치는 텍스트로 명확히 적혀있지 않음을 확인. Groundedness Rule에 따라 점수 등록 안 함.
- 01:35 Anthropic Claude Opus 4.8 블로그 검증. ← https://www.anthropic.com/news/claude-opus-4-8
  - 본문 텍스트에서 OSWorld-Verified 점수 확인 시도. "Opus 4.7 score to 82.3%" 문구만 존재하고 Opus 4.8의 점수는 텍스트에 없음. Groundedness Rule에 따라 점수 등록 안 함.

## 수행한 작업
- [x] (추가된 점수 없음 - 텍스트 기반 수치 미확인)

## 판단 / 고민
- Gemini 3.5 Flash와 Claude Opus 4.8의 누락된 벤치마크 점수들은 모두 블로그 본문 텍스트에 명확한 수치로 존재하지 않는 것을 재차 확인.
- 명시된 규칙 "출처 URL 없는 필드는 저장하지 말고 src/data/issues/ 에 티켓 생성" 에 따라 관련된 이슈 티켓을 생성하기로 결정함.

## 이슈 제기
- issues/2026-06-02-collect-benchmark-gemini-3.5-flash.md
- issues/2026-06-02-collect-benchmark-claude-opus-4-8.md
