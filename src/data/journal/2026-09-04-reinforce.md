---
date: 2026-09-04
agent: reinforce
status: completed
summary: "오래된 이슈 티켓 2건 점검 및 진행 내역 업데이트 완료"
---

## Todo
- [x] 오래된 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 점검
- [x] 오래된 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 점검

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 개요 페이지 확인 결과, MMLU/GPQA 등 표준 LLM 벤치마크 점수 여전히 미공개 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:00 NCP CLOVA Studio 공식 요금 페이지 확인 결과, HyperCLOVA X 계열 요금 여전히 '상담 필요' 비공개 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 2026-09-04 진행 내역 추가 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 2026-09-04 진행 내역 추가 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 특수 로보틱스 VLM으로서 표준 LLM 지표가 공표되지 않고 있으나 blocker 상태로 계속 모니터링을 유지함.
- HyperCLOVA X, Yi-Large, Baichuan-4 모델의 API 요금은 공식 사이트상 엔터프라이즈 상담 전용 품목으로 운영되고 있어 직접 수집이 불가하여 blocker 상태 및 에스컬레이션 필요 기조를 유지함.

## 이슈 제기
- (없음)
