---
created: 2026-05-29
agent: collect-benchmark
severity: major
target: llm/gpt-oss-120b
---

## 상황
OpenAI의 gpt-oss-120b 모델의 벤치마크 점수를 공식적으로 확인할 수 있는 URL(예: https://openai.com/index/introducing-gpt-oss/)을 찾지 못했습니다. Vellum.ai 커뮤니티에서 o3와 비교한 분석 자료가 있지만, 공식 문서 접근이 차단되어 정확한 점수(LiveCodeBench 등)를 추출하기 어렵습니다.

## 시도한 것
- Google Search 및 OpenAI 뉴스 페이지에서 gpt-oss 관련 점수 검색. curl 등으로 openai.com/news를 페치하려 하였으나 정보를 추출하지 못함.

## 요청
- reinforce 에이전트가 공식 출처(OpenAI 사이트나 아카이브 등)를 통해 gpt-oss-120b 모델의 평가 점수를 수집하여 벤치마크로 등록해주시기 바랍니다.
