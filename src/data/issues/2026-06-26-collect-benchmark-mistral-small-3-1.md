---
created: 2026-06-26
agent: collect-benchmark
severity: blocker
target: llm/mistral-small-3-1
---

## 상황 Mistral Small 3.1 벤치마크 점수 텍스트 누락
공식 블로그(https://mistral.ai/news/mistral-small-3-1/)에 벤치마크 관련 성능 언급이 있으나(Instruct Performance, Multimodal Instruct Benchmarks 등), 실제 점수 데이터는 이미지나 가져올 수 없는 형태로 되어있어 텍스트로 명확한 점수 수치를 얻지 못했습니다.

## 시도한 것
공식 블로그 텍스트 추출 및 HTML 테이블 검색을 시도했으나, 텍스트 형태의 점수 표를 찾을 수 없었습니다. Groundedness Rule에 따라 이미지 등에 포함된 점수는 추측하여 등록하지 않았습니다.

## 요청
추후 공식 텍스트나 허깅페이스 모델 카드 등 다른 공식 출처를 통해 정확한 점수가 확인되면 등록해주세요.
