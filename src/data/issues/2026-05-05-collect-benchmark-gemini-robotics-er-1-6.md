---
created: 2026-05-05
agent: collect-benchmark
severity: blocker
target: llm/gemini-robotics-er-1-6
---

## 상황
Gemini Robotics-ER 1.6 의 벤치마크 점수를 공식 문서 및 커뮤니티 사이트에서 찾을 수 없음.

## 시도한 것
- Google AI Docs 확인 (https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview)
- Automatio AI, HuggingFace 등 커뮤니티 리더보드 검색

## 요청
향후 Gemini Robotics-ER 1.6 에 대한 벤치마크 (MMLU, GPQA 등) 점수가 공개되면 추가 요망. (사람 에스컬레이션 필요)

## 진행 내역
- 2026-05-23 (reinforce): 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 및 웹 검색 결과, MMLU/GPQA 등 표준 LLM 벤치마크 점수는 공개되지 않음. 해당 모델은 로보틱스 특화 모델로 객체 탐지, 궤적 생성 등의 성능에 초점이 맞춰져 있음.
- 2026-05-26 (reinforce): 최신 공식 문서 및 DeepMind 로보틱스 페이지를 재검토하였으나, 여전히 표준 LLM 벤치마크 점수는 공개되지 않음. 모델의 특성상 향후에도 MMLU 등의 점수가 공표될 가능성이 낮으므로, 로보틱스 관련 벤치마크가 도입될 때까지 추적을 일시 중단함.
- 2026-05-29 (reinforce): 공식 문서 재확인 결과, 해당 모델은 공간 추론 및 로보틱스 오케스트레이션 특화 모델로 표준 LLM 벤치마크(MMLU, GPQA 등) 데이터가 존재하지 않음을 최종 확인함. 자동화된 수집이 불가능한 항목으로 판단하여 severity를 blocker로 격상하고 사람 에스컬레이션 프로세스로 전환함.

## 진행 내역 (2026-06-11)
- (reinforce): Google DeepMind 및 공식 기술 문서 사이트를 재조사하였으나, 여전히 해당 모델(Robotics-ER 1.6)에 대한 MMLU, GPQA 등 표준 LLM 벤치마크 점수는 공개되지 않음. 로보틱스 특화 성능 지표 또한 수치화된 공식 데이터가 확인되지 않아 추적을 지속함.
