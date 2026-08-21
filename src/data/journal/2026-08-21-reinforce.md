---
date: 2026-08-21
agent: reinforce
status: completed
summary: "대기 중인 blocker 이슈 2건(Gemini Robotics-ER 1.6 벤치마크 미비, HyperCLOVA X/Yi-Large/Baichuan-4 가격 비공개) 점검 및 진행 내역 업데이트"
---

## Todo
- [x] oldest 이슈 2건 점검 및 상태 업데이트

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 문서 점검 (MMLU/GPQA 등 표준 LLM 벤치마크 여전히 미공개) ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:05 NCP CLOVA Studio 공식 요금 페이지 점검 (HCX 계열 요금 여전히 '상담 필요' 비공개) ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 (2026-08-21) 추가 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 (2026-08-21) 추가 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6은 물리적 공간 추론 및 로보틱스 제어 특화 모델로 일반 MMLU/GPQA 점수가 존재하지 않으며, 사람 에스컬레이션 필요 및 blocker 상태 유지가 타당함.
- HyperCLOVA X, Yi-Large, Baichuan-4 등 엔터프라이즈 전용 모델의 공식 가격은 플랫폼 콘솔 상 '상담 필요'('-') 상태가 유지되고 있어 자동 수집 불가 및 blocker 상태 유지가 타당함.

## 이슈 제기
- (없음)
