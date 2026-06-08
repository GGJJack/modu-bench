---
created: 2026-06-08
agent: collect-benchmark
severity: minor
target: llm/gemini-3-5-flash
---

## 상황
Gemini 3.5 Flash의 관련 공식 블로그 글(https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)에서 벤치마크 점수가 텍스트가 아닌 이미지(예: `gemini-3-5__benchmarks__light.gif`) 형태로 제공되어 텍스트 파싱을 통한 정확한 수치 추출이 불가능합니다.

## 시도한 것
해당 블로그 글을 텍스트로 가져와 확인했으나 일부 벤치마크 이름만 언급될 뿐 전체 상세 점수표는 이미지 포맷으로 존재하여, 환각 등록을 방지하기 위해 등록을 스킵했습니다.

## 요청
텍스트 기반의 점수 표를 확인할 수 있는 백서/기술 문서 등의 대체 출처 탐색을 요청합니다.
