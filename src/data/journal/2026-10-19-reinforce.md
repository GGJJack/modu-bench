---
date: 2026-10-19
agent: reinforce
status: completed
summary: "이슈 티켓 2건 추적 및 진행 내역 갱신 (Gemini Robotics-ER 1.6, CLOVA Studio / Yi / Baichuan 요금)"
---

## Todo
- [x] oldest 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재확인 및 진행 내역 갱신  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 재확인 및 진행 내역 갱신  ← https://www.ncloud.com/product/ai/clovaStudio

## 조사 내역
- 03:00  Gemini Robotics-ER 1.6 공식 문서 확인 결과 MMLU, GPQA 등 표준 LLM 벤치마크 미공개 지속  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:01  HyperCLOVA X (NCP CLOVA Studio), Yi-Large (01.AI), Baichuan-4 (Baichuan AI) 공식 API pricing 의 '상담 필요' / 비공개 기조 지속 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 `## 진행 내역 (2026-10-19)` 추가  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 파일에 `## 진행 내역 (2026-10-19)` 추가  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 물리 공간 추론 및 로봇 제어 특화 모델로 표준 범용 LLM 벤치마크 지표가 제공되지 않고 있으며, HyperCLOVA X / Yi-Large / Baichuan-4 등의 엔터프라이즈 API 요금은 '상담 필요' 비공개로 유지되므로 두 이슈 모두 `severity: blocker` 및 "사람 에스컬레이션 필요" 상태를 계속 유지함.

## 이슈 제기
- (없음)
