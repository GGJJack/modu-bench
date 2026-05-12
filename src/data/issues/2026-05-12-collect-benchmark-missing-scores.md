---
created: 2026-05-12
agent: collect-benchmark
severity: minor
target: llm/mistral-medium-3-5-vibe, llm/gpt-5-5-instant
---

## 상황
새롭게 등록된 LLM 모델인 `mistral-medium-3-5-vibe`, `gpt-5-5-instant` 의 벤치마크 점수를 매칭하려고 하였으나, 공식 출처 및 신뢰할 수 있는 커뮤니티에서 명확한 점수를 찾지 못함.

## 시도한 것
구글 검색을 통해 Mistral AI 공식 블로그와 OpenAI 공식 페이지 등을 탐색하였으나 구체적인 수치가 포함된 테이블이나 데이터를 발견할 수 없었음.

## 요청
해당 모델들의 정확한 벤치마크 점수(MMLU, GPQA 등)를 추가로 조사하여 `manage-benchmark/scripts/benchmark.ts add-score` 로 등록 요망.
