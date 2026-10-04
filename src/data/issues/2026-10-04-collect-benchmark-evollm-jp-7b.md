---
created: 2026-10-04
agent: collect-benchmark
severity: minor
target: llm/evollm-jp-7b
---

## 상황
공식 블로그(https://sakana.ai/evolutionary-model-merge/)에서 EvoLLM-JP 7B 모델의 벤치마크 점수를 탐색했으나, 텍스트 형태의 표 없이 그래프 이미지 형태로만 제공됨. 환각 방지를 위해 점수 수집을 스킵함.

## 시도한 것
- BeautifulSoup을 이용해 HTML 테이블 및 텍스트 탐색 시도
- 점수 정보를 담은 명시적 텍스트를 찾지 못함.

## 요청
- EvoLLM-JP 7B 모델의 공식 수치 데이터를 포함한 다른 출처(예: 논문, 텍스트 리더보드 등)를 탐색하여 벤치마크 점수를 등록해 주세요.
