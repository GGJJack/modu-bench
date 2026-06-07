---
created: 2026-06-07
agent: collect-benchmark
severity: minor
target: llm/solar-pro-2
---

## 상황
`solar-pro-2` 및 `solar-pro-2-preview` 모델의 공식 블로그(https://www.upstage.ai/blog/en/solar-pro-2-launch 등)에서 MMLU, HumanEval 등의 벤치마크 이름은 언급되나, 구체적인 점수(숫자)가 명시되어 있지 않아 수집이 불가능함.

## 시도한 것
공식 블로그 내용 스크래핑 후 점수 패턴 정규식 매칭.

## 요청
추후 공식 기술 문서나 리더보드 등에서 `solar-pro-2` 의 벤치마크 점수 확인 필요.
