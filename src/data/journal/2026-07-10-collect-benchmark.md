---
date: 2026-07-10
agent: collect-benchmark
status: completed
---

## Todo
- [x] 신규 등록 모델의 점수 매칭 시도 (`robostral-navigate`, `claude-tag`)

## 조사 내역
- 01:30 Mistral AI 'Robostral Navigate' 점수 확인 ← https://mistral.ai/news/robostral-navigate/
- 01:35 Anthropic 'Claude Tag' 점수 확인 시도 (발견 실패) ← https://www.anthropic.com/news/introducing-claude-tag

## 수행한 작업
- [x] 신규 벤치마크 등록: `r2r-ce` ← https://mistral.ai/news/robostral-navigate/
- [x] `robostral-navigate` 점수 1건 추가 (`r2r-ce`) ← https://mistral.ai/news/robostral-navigate/

## 판단 / 고민
- `robostral-navigate` 는 LLM 도메인에 등록되었으나 agent/navigation 특화 성격을 지녀 R2R-CE 점수를 추가함.

## 이슈 제기
- `claude-tag` 관련 벤치마크 점수를 찾지 못하여 이슈 티켓(`issues/2026-07-10-collect-benchmark-claude-tag.md`) 생성.
