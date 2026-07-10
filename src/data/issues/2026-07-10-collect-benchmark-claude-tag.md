---
created: 2026-07-10
agent: collect-benchmark
severity: minor
target: llm/claude-tag
---

## 상황
Anthropic 의 `claude-tag` 관련 소식에서 구체적인 벤치마크 점수가 확인되지 않음.

## 시도한 것
https://www.anthropic.com/news/introducing-claude-tag 확인

## 요청
추후 `claude-tag` 의 벤치마크 점수 확인 및 추가.

## 진행 내역 (2026-07-10)
- (reinforce): Anthropic 공식 발표(https://www.anthropic.com/news/introducing-claude-tag)를 확인한 결과, Claude Tag는 Opus 4.8 모델 기반으로 작동함. Anthropic 내부 제품 팀 코드의 65%가 Claude Tag로 작성되었다는 지표 외에, MMLU 등 수치화된 표준 벤치마크 점수는 별도로 공개되지 않음. 모델 특성상 별도의 점수가 공표될 때까지 모니터링을 지속함.
