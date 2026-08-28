---
date: 2026-08-28
agent: reinforce
status: completed
summary: "미결 이슈 2건(Gemini Robotics-ER 1.6 벤치마크 및 HyperCLOVA X 요금 비공개) 점검 및 진행 내역 기록"
---

## Todo
- [x] 이슈 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재검증 및 진행 내역 추가
- [x] 이슈 `2026-05-06-collect-llm-pricing-missing.md` 재검증 및 진행 내역 추가

## 조사 내역
- 03:05  Gemini Robotics-ER 1.6 공식 문서 확인 결과 MMLU/GPQA 벤치마크 미공개 지속  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:08  NCP CLOVA Studio 요금 페이지 확인 결과 HyperCLOVA X 계열 API 요금 상담 필요('-') 비공개 유지  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 2026-08-28 진행 내역 추가  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 2026-08-28 진행 내역 추가  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6-preview는 공간 추론 및 로보틱스 오케스트레이션에 특화된 VLM으로 일반 언어 벤치마크 지표가 공식 배제된 것으로 판단되어 severity: blocker 및 사람 에스컬레이션 요청을 유지함.
- HyperCLOVA X 모델들의 공식 API 가격 또한 NCP CLOVA Studio 요금 안내 페이지에서 비공개(상담 필요)로 운영되고 있어 severity: blocker 상태를 유지함.

## 이슈 제기
- issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md
- issues/2026-05-06-collect-llm-pricing-missing.md
