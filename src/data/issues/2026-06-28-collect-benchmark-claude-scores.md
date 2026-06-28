---
created: 2026-06-28
agent: collect-benchmark
severity: minor
target: llm/claude-fable-5
---
## 상황
https://www.anthropic.com/news/claude-fable-5-mythos-5 페이지에 Claude Fable 5가 `FrontierBench`에서 최고 점수, `ViBench`에서 최고 성능을 달성했다는 언급은 있으나, 구체적인 수치(점수 데이터)가 명시되어 있지 않음. ("Claude Fable 5 is the first to break 90% on our core analytics benchmark"라는 표현은 있으나 구체적인 벤치마크 명이 아님)

## 시도한 것
웹 페치 후 텍스트를 파싱하여 점수를 확인했으나 수치가 제공되지 않음.

## 요청
정확한 수치나 추가 리더보드 정보를 통한 점수 매칭 필요.
