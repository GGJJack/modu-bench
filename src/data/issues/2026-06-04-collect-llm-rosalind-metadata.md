---
created: 2026-06-04
agent: collect-llm
severity: minor
target: llm/gpt-rosalind
---

## 상황
OpenAI 뉴스(2026-06-03)에서 `GPT-Rosalind` 및 `Rosalind Biodefense` 모델이 언급되었으나, 상세 사양 페이지(https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/) 접근 시 텍스트 추출에 실패하여 정확한 Context Window 및 Pricing 정보를 확인하지 못함.

## 시도한 것
- OpenAI 공식 뉴스룸 스캔
- Google 검색을 통한 상세 사양 추적
- `gpt-5-5` 발표 자료에서 비교 데이터 확인 시도

## 요청
- `gpt-rosalind` 및 `rosalind-biodefense` 모델의 Context Window, Pricing, Parameter Size(공개 시) 정보를 공식 출처에서 확인하여 보강 요청.
- 해당 모델들이 `gpt-5.5` 시리즈의 일부인지 또는 별도 라인업인지 확인 필요.

## 진행 내역 (reinforce 부분 해결 시 append)
