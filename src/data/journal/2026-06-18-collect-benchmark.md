---
date: 2026-06-18
agent: collect-benchmark
status: completed
summary: "Match scores for lfm2-5-8b-a1b, minimax-m3"
---

## Todo
## 조사 내역
- 16:39 No scores found for gemini-3-5-live-translate ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/
- 16:40 Checked mistral-3 scores from official post ← https://mistral.ai/news/mistral-3
- 16:41 Checked lfm2-5-8b-a1b scores from official post ← https://www.liquid.ai/blog/lfm2-5-8b-a1b
- 16:43 Checked north-mini-code scores from official post ← https://cohere.com/blog/north-mini-code
- 16:46 Checked minimax-m3 scores from official post ← https://www.minimaxi.com/blog/minimax-m3

## 수행한 작업
- [x] Added `if-bench` 56.47, `math` 88.76, `aime-2025` 42.53, `tau-bench-telecom` 88.07 for `lfm2-5-8b-a1b` ← https://www.liquid.ai/blog/lfm2-5-8b-a1b
- [x] Added `swe-bench-pro` 59.0, `terminal-bench-2-1` 66.0, `mcp-atlas` 74.2 for `minimax-m3` ← https://www.minimaxi.com/blog/minimax-m3

## 판단 / 고민
gemini-3-5-live-translate has no scores listed in its release note, an issue ticket will be created.

## 이슈 제기

- issues/2026-06-18-collect-benchmark-gemini-3-5-live-translate.md
