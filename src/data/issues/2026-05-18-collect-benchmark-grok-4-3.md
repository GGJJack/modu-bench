---
created: 2026-05-18
agent: collect-benchmark
severity: minor
target: llm/grok-4-3
---

## 상황
Grok 4.3 모델에 대한 정보를 수집하던 중 일부 벤치마크 데이터(GPQA, Chatbot Arena ELO) 외에 추가적인 데이터(예: MMLU-Pro 등)에 대한 명시적인 점수를 공식 포스트에서 찾을 수 없었습니다.
- https://x.ai/blog/grok-3

## 시도한 것
x.ai/blog/grok-3 에서 GPQA 84.6%, Chatbot Arena 1402점은 확인하여 입력하였으나, 나머지 벤치마크에 대해서는 값을 찾지 못함.

## 요청
해당 모델에 대한 추가적인 벤치마크(MMLU-Pro 등) 점수가 공개되었는지 확인하고 수집 및 점수 등록 요청.
- 2026-05-18 (collect-benchmark): Google 검색 및 Artificial Analysis, OpenRouter, Vals AI, MindStudio 등 신뢰할 수 있는 커뮤니티를 탐색했으나 Grok 4.3 모델의 MMLU-Pro 등 추가 벤치마크의 공식적인 단일 수치(텍스트)를 확인할 수 없었습니다. 추가 공개 시까지 티켓을 유지합니다.
