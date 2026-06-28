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

## 진행 내역 (2026-06-12)
- (reinforce): 2026년 6월 4일 업데이트된 공식 문서(https://ai.google.dev/gemini-api/docs/robotics-overview)를 재확인하였으나, 여전히 MMLU, GPQA 등 표준 LLM 벤치마크 점수는 누락됨. 해당 모델은 공간 추론, 궤적 생성 등 로보틱스 에이전트 기능에 특화되어 있으며, 일반 언어 모델 성능 지표는 의도적으로 배제된 것으로 보임.

## 진행 내역 (2026-06-13)
- (reinforce): RT-2 및 로보틱스 기초 모델 관련 최신 벤치마크 성과를 재검토하였으나, Gemini Robotics-ER 1.6에 대한 수치화된 표준 벤치마크(MMLU, GPQA 등) 데이터는 여전히 존재하지 않음. 해당 모델의 특수성을 고려하여 표준 LLM 벤치마크 추적은 실익이 낮다고 판단됨.

## 진행 내역 (2026-06-14)
- (reinforce): 공식 기술 블로그 및 최신 AI 벤치마크 리포트를 재검색하였으나, Gemini Robotics-ER 1.6 에 대한 MMLU, GPQA 등 표준 LLM 지표는 여전히 공개되지 않음. 해당 모델은 로봇 제어 및 공간 지능에 최적화된 특수 목적 모델이므로 일반 벤치마크 점수 누락은 의도적인 것으로 보임. 정기 추적을 유지함.

## 진행 내역 (2026-06-15)
- (reinforce): 공식 모델 페이지(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview)를 재점검함. 해당 모델은 2026년 4월 30일에 최종 업데이트되었으며, 여전히 MMLU/GPQA 등의 일반 LLM 벤치마크 데이터는 제공되지 않음. 로보틱스 특화 모델로서의 성능 강조가 지속되고 있으며, 일반 벤치마크 누락은 제품 포지셔닝에 따른 것으로 최종 판단됨.

## 진행 내역 (2026-06-16)
- (reinforce): 공식 모델 페이지 및 관련 기술 자료를 재조사함. MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 여전히 제공되지 않으며, 해당 모델이 로보틱스 특화 모델임을 고려할 때 일반 벤치마크 점수의 공개 가능성은 매우 낮은 것으로 보임. 현재의 추적 상태를 유지함.

## 진행 내역 (2026-06-17)
- (reinforce): 공식 모델 페이지(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview)를 재조사함. 2026년 4월 30일 업데이트 이후 MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 여전히 공표되지 않음. 해당 모델은 128k 컨텍스트 윈도우를 가진 로보틱스 특화 모델로, 일반 벤치마크 점수 누락은 제품 포지셔닝에 따른 의도적인 것으로 최종 재확인됨.

## 진행 내역 (2026-06-18)
- (reinforce): 공식 모델 페이지(https://ai.google.dev/gemini-api/docs/robotics-overview)를 재점검함. 2026년 6월 4일 업데이트된 문서에서도 MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 여전히 제공되지 않음. 해당 모델은 공간 지능 및 로봇 제어에 특화된 모델로, 일반 벤치마크 점수 누락은 제품의 특수 목적에 따른 의도적인 것으로 최종 재확인됨.

## 진행 내역 (2026-06-19)
- (reinforce): 공식 기술 문서(https://ai.google.dev/gemini-api/docs/robotics-overview, 2026-06-18 업데이트)를 재확인함. Robotics-ER 1.6의 컨텍스트 윈도우(128k) 및 API 가격(Input $1 / Output $5 per 1M tokens)은 이미 등록되어 있으나, MMLU, GPQA 등 표준 LLM 벤치마크 점수는 여전히 공개되지 않음. 해당 모델의 로보틱스 특화 성격을 고려할 때 일반 벤치마크 점수는 의도적으로 배제된 것으로 보임.

## 진행 내역 (2026-06-20)
- (reinforce): Google AI 및 DeepMind 공식 채널을 재조사하였으나, Gemini Robotics-ER 1.6 에 대한 MMLU, GPQA 등 표준 LLM 벤치마크 점수는 여전히 공개되지 않음. 해당 모델은 로보틱스 특화 모델로서 공간 지능과 제어 성능에 집중하고 있으며, 일반 언어 이해 지표는 제공되지 않는 상태가 지속되고 있음.

## 진행 내역 (2026-06-21)
- (reinforce): 공식 기술 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview, 2026-06-18 업데이트)를 재확인함. Robotics-ER 1.6의 토큰 제한(Input 131k, Output 65k) 등 상세 기술 사양은 지속 업데이트되고 있으나, MMLU, GPQA 등 표준 LLM 벤치마크 점수는 여전히 공개되지 않음. 해당 모델은 로보틱스 특화 모델로서 일반 언어 능력보다 물리 세계에서의 추론 및 제어 성능에 집중하고 있으며, 일반 벤치마크 누락은 제품 포지셔닝에 따른 의도적인 것으로 최종 확인됨. 정기 추적을 유지하되 추가 공개 가능성은 매우 낮음.

## 진행 내역 (2026-06-22)
- (reinforce): 공식 기술 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview, 2026-04-30 최종 업데이트 확인)를 재점검함. MMLU, GPQA 등 표준 LLM 벤치마크 점수는 여전히 제공되지 않으며, 해당 모델이 로보틱스 특화 VLM임을 고려할 때 일반 벤치마크 점수의 공개 가능성은 매우 낮음. 정기 모니터링 대상으로 유지함.

## 진행 내역 (2026-06-23)
- (reinforce): 공식 기술 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview)를 재점검함. 2026년 6월 23일 업데이트 기준으로도 MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 여전히 제공되지 않음. 해당 모델은 로보틱스 에이전트 전용 VLM으로서 공간 지능 및 물리적 액션 계획에 최적화되어 있어 일반적인 언어 모델 벤치마크를 적용하지 않는 기조가 지속되고 있음. 정기 모니터링을 유지함.

## 진행 내역 (2026-06-24)
- (reinforce): 2026년 6월 24일 기준, 공식 문서 및 기술 블로그를 재조사하였으나 MMLU, GPQA 등 표준 LLM 벤치마크 수치는 여전히 공개되지 않음. 모델의 특수성을 고려하여 정기 모니터링을 지속함.

## 진행 내역 (2026-06-25)
- (reinforce): 공식 기술 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview, 2026-06-23 업데이트 확인)를 재점검함. MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 여전히 제공되지 않으며, 해당 모델은 로보틱스 특화 VLM으로서 일반 언어 벤치마크를 배제하는 기조가 유지되고 있음. 정기 모니터링을 지속함.

## 진행 내역 (2026-06-26)
- (reinforce): 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview, 2026-06-23 업데이트)를 최종 재확인함. Robotics-ER 1.6의 기술 사양(131k context, agentic capabilities)은 명시되어 있으나, MMLU/GPQA 등 표준 LLM 지표는 여전히 공표되지 않음. 해당 모델은 물리 세계 작용 및 공간 추론에 최적화된 특수 모델로, 일반 벤치마크 누락은 의도적인 제품 포지셔닝으로 판단됨. "사람 에스컬레이션 필요" 상태를 유지하며 정기 모니터링을 계속함.

## 진행 내역 (2026-06-27)
- (reinforce): Google AI Developers 공식 문서(https://ai.google.dev/gemini-api/docs/robotics-overview)를 재검토하였으나, 여전히 MMLU, GPQA 등 표준 LLM 벤치마크 데이터는 추가되지 않음. 로보틱스 특화 모델로서의 정체성이 확고하여 향후에도 일반 언어 모델 지표 공개 가능성은 매우 낮은 것으로 보임. 정기 추적을 유지함.

## 진행 내역 (2026-06-28)
- (reinforce): 공식 기술 문서 및 최신 리더보드를 재점검함. Gemini Robotics-ER 1.6 에 대한 MMLU, GPQA 등 표준 LLM 벤치마크 수치는 여전히 공개되지 않음. 해당 모델은 로보틱스 특화 기능에 집중되어 있어 일반 벤치마크 누락이 지속되고 있음. 정기 모니터링을 유지함.
