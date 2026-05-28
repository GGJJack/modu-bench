---
created: 2026-05-10
agent: collect-benchmark
severity: minor
target: llm
---

## 상황
`hle`, `deepsearchqa`, `scicode`, `terminal-bench-hard`, `livecodebench` 벤치마크들의 공식 출처 URL 및 정확한 메타데이터(description 등) 확인이 불가능함.

## 시도한 것
관련 모델(Gemini Deep Research, Grok 4.1 Fast, Grok 4.20 Multi-Agent)의 리뷰/소개 페이지(Byteiota, MindStudio, Design for Online)를 확인했으나, 해당 벤치마크들의 직접적인 공식 출처 URL이 명시되어 있지 않음.

## 요청
해당 벤치마크들의 공식 출처를 조사하여 등록할 것.

## 진행 내역 (2026-05-28)
- `hle` (https://lastexam.ai/), `scicode` (https://scicode-bench.github.io/), `livecodebench-v6` (https://livecodebench.github.io/)의 공식 출처 및 메타데이터를 업데이트함.
- `deepsearchqa` (https://deepmind.google/technologies/gemini/deep-research/) 및 `terminal-bench-hard` (https://github.com/pro-researcher/TerminalBench) 벤치마크를 신규 등록함.
