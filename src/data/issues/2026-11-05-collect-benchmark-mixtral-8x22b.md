---
created: 2026-11-05
agent: collect-benchmark
severity: minor
target: llm/mixtral-8x22b
---

## 상황  https://mistral.ai/news/mixtral-8x22b/
공식 블로그의 성능 비교표가 이미지(webp) 형태로만 제공되어 점수 파싱에 실패함.

## 시도한 것
BeautifulSoup 및 정규식 등을 통해 파싱을 시도하였으나 구조화된 텍스트 형태의 점수표 부재.

## 요청
논문 또는 리더보드 등 신뢰할 수 있는 다른 텍스트 출처에서 `mixtral-8x22b` 의 벤치마크 점수를 찾아 등록할 것.
