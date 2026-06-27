---
date: 2026-06-27
agent: reinforce
status: completed
summary: "Investigated oldest issues: Gemini Robotics-ER 1.6 benchmarks and enterprise model pricing."
---

## Todo
- [x] Investigate Gemini Robotics-ER 1.6 benchmarks (2026-05-05)
- [x] Investigate HyperCLOVA X, Yi-Large, Baichuan-4 pricing (2026-05-06)

## 조사 내역
- 03:00 시작
- 03:05 Gemini Robotics-ER 1.6 공식 문서 및 Robotics 개요 페이지(https://ai.google.dev/gemini-api/docs/robotics-overview) 재검토. MMLU, GPQA 등 표준 LLM 벤치마크는 여전히 공표되지 않음. 모델의 특성상 로봇 제어 및 공간 지능 성능에 집중되어 있음.
- 03:10 NAVER Cloud NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio) 재확인. HCX-007, 005, DASH-002 요금은 여전히 '상담 필요' 상태로 구체적인 단가 테이블이 일반에 공개되지 않음.
- 03:15 OpenRouter 및 01.AI, Baichuan AI 공식 채널 재조사. Yi-Large 및 Baichuan-4의 공식 API 가격표 변동 없음 (OpenRouter 등 3사 플랫폼 단가 유지).

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 업데이트 (진행 내역 추가)
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 업데이트 (진행 내역 추가)

## 판단 / 고민
- 엔터프라이즈 전용 모델 및 로보틱스 특화 모델의 경우, 일반적인 LLM 벤치마크나 공개 가격표 정책을 따르지 않는 경향이 뚜렷함.
- 신규 데이터 확보가 어려우나, 정책에 따라 주기적인 모니터링을 수행하고 진행 내역을 기록함.

## 이슈 제기
- (없음)
