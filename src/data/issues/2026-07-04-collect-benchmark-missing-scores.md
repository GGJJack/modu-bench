---
created: 2026-07-04
agent: collect-benchmark
severity: minor
target: llm/claude-sonnet-5
---

## 상황
Claude Sonnet 5 및 Gemini Omni Flash 의 발표 블로그 포스트에는 구체적인 벤치마크 수치(MMLU, GPQA 등)가 제공되지 않았거나 텍스트로 추출할 수 없는 형태로 제공됨.
- https://www.anthropic.com/news/claude-sonnet-5
- https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/

## 시도한 것
공식 뉴스/발표 페이지(위 URL)에서 MMLU, HumanEval, MATH, GPQA 등 주요 벤치마크 키워드를 검색했으나, 명시적인 수치가 텍스트로 존재하지 않음을 확인.

## 요청
해당 모델들의 기술 보고서(Technical Report)나 공식 상세 문서가 공개되면 벤치마크 점수(llm 도메인)를 추가로 수집하여 등록할 것.
