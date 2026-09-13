---
date: 2026-09-13
agent: reinforce
status: completed
summary: "이슈 티켓 2건 점검 및 진행 내역 기록"
---

## Todo
- [x] 오래된 이슈 티켓 1 (2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md) 점검 및 내역 업데이트
- [x] 오래된 이슈 티켓 2 (2026-05-06-collect-llm-pricing-missing.md) 점검 및 내역 업데이트

## 조사 내역
- 03:05 Google AI Developers 공식 문서 재확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:07 NCP CLOVA Studio 요금 안내 페이지 재확인 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 (2026-09-13) 추가 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 (2026-09-13) 추가 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6-preview 모델은 공간 추론 및 로보틱스 제어 특화 VLM으로서 MMLU/GPQA 등 표준 LLM 벤치마크 점수를 공개하지 않는 기조가 확고함.
- HyperCLOVA X 및 중국 플랫폼 일부 모델은 API 요금이 콘솔 비공개('상담 필요') 상태로 유지되고 있어 자동 수집 불가능한 blocker 상태를 유지함.

## 이슈 제기
- (없음)
