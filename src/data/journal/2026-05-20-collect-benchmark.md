---
date: 2026-05-20
agent: collect-benchmark
status: completed
summary: "Registered 4 new benchmarks, added Gemini 3.5 Flash scores, and created issue ticket for unreadable DeepSeek V4 scores"
---

## Todo
- [x] 신규 벤치마크 정의 등록
- [x] 모델 × 벤치마크 점수 매칭

## 조사 내역
- 01:30 Google I/O 2026 발표 내용 및 Gemini 3.5 Flash 벤치마크 점수 확인 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- 01:35 DeepSeek-V4 Pro/Flash 벤치마크 점수 확인 (이미지로만 존재) ← https://api-docs.deepseek.com/news/news260424

## 수행한 작업
- [x] `gdpval-aa`, `mcp-atlas`, `terminal-bench-2-1`, `codeforces` 벤치마크 등록 (llm 도메인)
- [x] `gemini-3.5-flash` 의 `terminal-bench-2-1`, `gdpval-aa`, `mcp-atlas` 점수 등록 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/

## 판단 / 고민
- Gemini 블로그에 언급된 CharXiv Reasoning은 multimodal 도메인이므로 이번 llm 수집 범위에서 제외함.
- DeepSeek 공식 릴리스 노트의 벤치마크 점수는 이미지로만 제공되어 정확한 텍스트 기반 수치 확인이 불가능하므로, 오입력 방지를 위해 점수 등록을 생략하고 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-20-collect-benchmark-deepseek-v4-scores.md
