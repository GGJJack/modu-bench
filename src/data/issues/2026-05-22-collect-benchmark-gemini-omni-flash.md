---
created: 2026-05-22
agent: collect-benchmark
severity: minor
target: llm/gemini-omni-flash
---

## 상황
`gemini-omni-flash` 모델의 벤치마크 점수 수집을 시도했으나, 공식 블로그(https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)에서 명확한 텍스트 기반의 표준 벤치마크 점수를 찾을 수 없음.

## 시도한 것
공식 블로그의 본문 및 테이블 분석. 수치형 벤치마크 데이터가 부족하여 점수를 추출하지 못함.

## 요청
공식 문서나 기술 보고서(Technical Report)가 추가로 공개되면, `gemini-omni-flash` 모델의 주요 벤치마크 점수(MMLU, HumanEval 등)를 찾아 `llm.json`에 `official` 출처로 등록해 주세요.
