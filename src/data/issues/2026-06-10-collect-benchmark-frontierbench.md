---
created: 2026-06-10
agent: collect-benchmark
severity: minor
target: llm/frontierbench
---

## 상황  https://www.anthropic.com/news/claude-fable-5-mythos-5 에 있는 벤치마크 표
FrontierCode (Diamond)라는 벤치마크 (Agentic coding) 점수가 표에 기재되어 있으나 (Claude Fable 5: 29.3%, Opus 4.8: 13.4%, GPT 5.5: 5.7%), 현재 시스템에 등록된 벤치마크 ID를 찾지 못했습니다.
"frontierbench" 관련 ID가 없어 점수 등록을 스킵했습니다.

## 시도한 것
`bun run skills/manage-benchmark/scripts/benchmark.ts list llm | grep frontier`

## 요청  reinforce가 할 구체 작업
FrontierCode (Diamond) 벤치마크를 시스템에 등록해 주세요. 등록 후 해당 모델들의 점수를 입력해야 합니다.

## 진행 내역
