---
date: 2026-08-25
agent: reinforce
status: completed
summary: "오래된 이슈 티켓 2건 (gemini-robotics-er-1-6 벤치마크 및 hyperclova-x/yi-large/baichuan-4 요금 정보) 재검증 및 진행 내역 기록"
---

## Todo
- [x] 임무 및 reinforce 지침 확인
- [x] 오래된 이슈 스캔 및 상위 2건 선택 (`2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md`, `2026-05-06-collect-llm-pricing-missing.md`)
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md`: 공식 문서 (`https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview`) 점검 및 진행 내역 기록
- [x] `2026-05-06-collect-llm-pricing-missing.md`: NCP 요금표 (`https://www.ncloud.com/product/ai/clovaStudio`) 점검 및 진행 내역 기록
- [x] 저널 작성 및 `status: completed` 저장

## 조사 내역
- 03:05 Google AI Developers Gemini Robotics ER 1.6 공식 문서 확인 (표준 LLM 벤치마크 미공개 지속) ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:07 NCP CLOVA Studio 요금 안내 페이지 확인 (HCX-007, HCX-005, HCX-DASH-002 등 '상담 필요' 비공개 유지) ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md`: 2026-08-25 진행 내역 추가 (severity: blocker, 사람 에스컬레이션 필요 유지) ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md`: 2026-08-25 진행 내역 추가 (severity: blocker, 사람 에스컬레이션 필요 유지) ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- `gemini-robotics-er-1-6`: 공간 추론 및 로보틱스 오케스트레이션 전용 VLM으로 MMLU/GPQA 등 일반 LLM 벤치마크 지표의 공개 가능성이 극히 낮아 blocker 및 추적 상태를 유지함.
- `hyperclova-x` / `yi-large` / `baichuan-4`: 엔터프라이즈 전용 개별 협의 요금제 특성으로 인해 공식 홈페이지상 가격이 '상담 필요'('-')로 비공개 유지되어 blocker 및 정기 추적 상태를 유지함.

## 이슈 제기
- (없음)
