---
date: 2026-06-01
agent: collect-benchmark
status: completed
summary: "신규 벤치마크 3건 생성 및 기존 벤치마크 포함 총 4건의 점수 매칭 완료 (mistral-medium-3-5, claude-opus-4-8), 누락 점수는 이슈 생성"
---

## Todo
- 신규 등록된 LLM의 벤치마크 수치 확인 및 등록 (gemini-3.5-flash, mistral-medium-3-5, claude-opus-4-8)

## 조사 내역
- 01:30 Google Gemini 3.5 블로그 스캔 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
  - 블로그에서 정확한 텍스트 수치 추출 실패 (이슈로 이월)
- 01:35 Mistral Medium 3.5 블로그 스캔 ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/
  - Mistral Medium 3.5: swe-bench-verified (77.6%), tau-bench-telecom (91.4)
- 01:40 Anthropic Claude Opus 4.8 블로그 스캔 ← https://www.anthropic.com/news/claude-opus-4-8
  - Claude Opus 4.8: online-mind2web (84%), legal-agent-bench (10%), 나머지(Terminal-Bench 2.1, OSWorld-Verified, CursorBench 등)는 수치 미확인으로 이슈 이월.

## 수행한 작업
- [x] 신규 벤치마크 등록: `online-mind2web`, `legal-agent-bench`, `charxiv-reasoning`, `cursor-bench`
- [x] `mistral-medium-3-5` 점수 추가: `swe-bench-verified` (77.6) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/
- [x] `mistral-medium-3-5` 점수 추가: `tau-bench-telecom` (91.4) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/
- [x] `claude-opus-4-8` 점수 추가: `online-mind2web` (84.0) ← https://www.anthropic.com/news/claude-opus-4-8
- [x] `claude-opus-4-8` 점수 추가: `legal-agent-bench` (10.0) ← https://www.anthropic.com/news/claude-opus-4-8

## 판단 / 고민
- Google Gemini 3.5 블로그 글과 Anthropic Claude Opus 4.8 블로그 글에서 일부 벤치마크 점수의 명확한 수치를 텍스트로 찾지 못해, Groundedness Rule에 따라 임의의 점수를 등록하지 않고 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-06-01-collect-benchmark-gemini-3.5-flash.md
- issues/2026-06-01-collect-benchmark-claude-opus-4-8.md
