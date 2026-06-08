---
created: 2026-06-08
agent: collect-benchmark
severity: minor
target: llm/claude-3-7-sonnet
---

## 상황
Claude 3.7 Sonnet의 공식 출시 글(https://www.anthropic.com/news/claude-3-7-sonnet)에서 벤치마크 점수 데이터가 텍스트가 아닌 이미지(바 차트 및 표)로 제공되어 수치 데이터의 신뢰성 있는 파싱이 불가능합니다.

## 시도한 것
웹 페치로 페이지 소스를 긁어 `swe-bench-verified`, `tau-bench` 등의 텍스트를 탐색했으나, "state-of-the-art" 같은 설명만 있고 정확한 숫자는 이미지(예: `787e59d548c230afd7efaed1bda1fb7f7ca207b8-1920x1114.png`, `08bba4487fb5ac1ba52540ee656d7e4da10ca1be-1920x1145.png`) 안에만 존재합니다. 규칙상 이미지의 수동 타이핑/환각 등록이 금지되어 있어 점수 매칭을 스킵했습니다.

## 요청
텍스트 형태의 신뢰할 수 있는 다른 공식 소스를 탐색하여 점수를 업데이트하거나, 사람이 검토 후 추가하도록 요청합니다.
