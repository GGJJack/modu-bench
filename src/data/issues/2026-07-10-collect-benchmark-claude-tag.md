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

## 진행 내역 (2026-07-11)
- (reinforce): Anthropic 공식 사이트 및 관련 기술 채널을 재조사함. Claude Tag에 대한 MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 여전히 확인되지 않음. Opus 4.8 기반의 협업 에이전트 서비스라는 제품 성격상, 개별 모델로서의 벤치마크보다는 서비스 성과 지표(예: 코드 작성 비중) 위주로 공개되고 있음. 정기 모니터링을 지속함.

## 진행 내역 (2026-07-13)
- (reinforce): 2026년 7월 13일 기준, Anthropic의 공식 소식을 재점검함. Claude Tag는 제품 팀 코드의 65% 작성 등 실사용 성과 위주로 홍보되고 있으며, 개별 모델로서의 표준 LLM 벤치마크(MMLU 등)는 별도로 공표되지 않음. 기반 모델인 Opus 4.8의 성능을 공유할 것으로 예상되나, 서비스 특화 지표 확인을 위해 정기 모니터링을 지속함.
