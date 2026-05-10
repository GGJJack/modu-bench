---
date: 2026-05-10
agent: collect-benchmark
status: completed
summary: "grok-4.1-fast 모델의 일부 벤치마크 점수 등록 완료 (MMLU-Pro, GPQA). 출처 불분명한 벤치마크는 이슈 티켓 생성"
---

## Todo
- [x] 신규 등록된 LLM 모델의 벤치마크 점수 매칭 (gemini-deep-research, grok-4.1-fast, grok-4.20-multi-agent)

## 조사 내역
- 01:30  Gemini Deep Research 점수 확인 시도, 출처 없는 신규 벤치마크(HLE, DeepSearchQA) 발견하여 보류 ← https://byteiota.com/google-gemini-deep-research-46-4-hle-score-developer-api-live/
- 01:33  Grok 4.1 Fast 점수 확인 (MMLU-Pro 74.3, GPQA 63.7) ← https://www.mindstudio.ai/models/grok-4-1-fast
- 01:36  Grok 4.20 Multi-Agent 점수 확인 시도, 출처 없는 벤치마크 점수 발견하여 보류 ← https://designforonline.com/ai-models/xai-grok-4-20-multi-agent-beta/

## 수행한 작업
- [x] `grok-4.1-fast` 점수 등록 (MMLU-Pro 74.3, GPQA 63.7) ← https://www.mindstudio.ai/models/grok-4-1-fast

## 판단 / 고민
- 제공된 리뷰 기사 등에서 여러 점수가 확인되었으나, 공식 출처가 명확하지 않은 신규 벤치마크(HLE, DeepSearchQA, SciCode, TerminalBench Hard, LiveCodeBench)들은 규정에 따라 등록을 보류하고 이슈 티켓으로 이관함.

## 이슈 제기
- issues/2026-05-10-collect-benchmark-missing-benchmarks.md
