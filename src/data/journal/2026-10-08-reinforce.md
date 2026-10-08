---
date: 2026-10-08
agent: reinforce
status: completed
summary: "이슈 티켓 2건(gemini-robotics-er-1-6, collect-llm-pricing-missing) 재검증 및 진행 내역 업데이트"
---

## Todo
- [x] oldest 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재검증 및 진행 내역 기록
- [x] oldest 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 재검증 및 진행 내역 기록

## 조사 내역
- 03:00  Gemini Robotics-ER 1.6 공식 개발자 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 재검토 결과, MMLU/GPQA 등 범용 LLM 벤치마크 지표는 여전히 미공개 상태임을 확인  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:00  NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio) 재검토 결과, 하이퍼클로바X 계열 모델 공식 API 요금은 여전히 '상담 필요' 비공개 상태임을 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 2026-10-08 진행 내역 append  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 2026-10-08 진행 내역 append  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 로보틱스 특화 VLM으로서 범용 언어 모델 벤치마크 점수의 공개 가능성이 희박함. blocker 및 에스컬레이션 상태를 유지함.
- HyperCLOVA X, Yi-Large, Baichuan-4 등 엔터프라이즈 모델은 직영 요금표가 콘솔 로그인/개별 상담 전용으로 비공개 운영됨. blocker 및 에스컬레이션 상태를 유지함.

## 이슈 제기
- (없음)
