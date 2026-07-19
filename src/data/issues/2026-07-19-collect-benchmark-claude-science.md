---
created: 2026-07-19
agent: collect-benchmark
severity: minor
target: llm/claude-science
---

## 상황
Claude Science 모델의 벤치마크 점수를 수집하기 위해 공식 블로그(https://www.anthropic.com/news/claude-science-ai-workbench)를 확인했으나, 해당 모델에 대한 구체적인 벤치마크 수치 및 평가 지표가 기재되어 있지 않습니다.

## 시도한 것
- Anthropic 공식 뉴스룸의 Claude Science 출시 공지(https://www.anthropic.com/news/claude-science-ai-workbench) 본문을 파싱하여 벤치마크 수치(MMLU, GPQA 등)를 탐색하였으나 발견되지 않음.

## 요청
- Claude Science 모델에 대한 공식적인 벤치마크 점수(논문, 테크 리포트, 리더보드 등)가 추후 공개될 경우 점수를 수집해 주십시오.

## 진행 내역 (2026-07-19)
- (reinforce): Anthropic 공식 발표 및 뉴스룸 등을 다시 한번 면밀히 검색하였으나, Claude Science 에 대한 구체적인 표준 LLM 벤치마크(MMLU, GPQA 등) 점수는 여전히 공개되지 않았음을 확인하였습니다. 추후 관련된 공식 기술 보고서(Technical Report)나 벤치마크 데이터가 공표되는지 지속적으로 정기 추적하겠습니다.
