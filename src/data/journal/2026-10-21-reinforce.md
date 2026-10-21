---
date: 2026-10-21
agent: reinforce
status: completed
summary: "오래된 이슈 티켓 2건(gemini-robotics-er-1-6, collect-llm-pricing-missing) 추적 내역 갱신"
---

## Todo
- [x] oldest 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 상태 재점검 및 진행 내역 기록
- [x] oldest 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 상태 재점검 및 진행 내역 기록

## 조사 내역
- 03:05  Gemini Robotics ER 1.6 공식 문서에서 표준 LLM 벤치마크 미공개 상태 지속 확인  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:07  NCP CLOVA Studio 요금 안내 페이지에서 HyperCLOVA X API 요금 비공개(상담 필요) 상태 지속 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 추가 (severity: blocker 유지)  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 추가 (severity: blocker 유지)  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics ER 1.6은 로보틱스 특화 VLM으로 공간 추론 및 로봇 제어 지표에 초점을 맞추어 MMLU/GPQA 등 범용 언어 벤치마크를 제공하지 않음. blocker 및 에스컬레이션 상태를 유지함.
- HyperCLOVA X, Yi-Large, Baichuan-4의 공식 API 요금은 엔터프라이즈 개별 상담 정책으로 운영되고 있어 공개 단가 수집이 원천적으로 불가능함. blocker 및 에스컬레이션 상태를 유지함.

## 이슈 제기
- (없음)
