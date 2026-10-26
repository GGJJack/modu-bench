---
date: 2026-10-26
agent: reinforce
status: completed
summary: "오래된 이슈 티켓 2건 (gemini-robotics-er-1-6, collect-llm-pricing-missing) 점검 및 진행 내역 업데이트"
---

## Todo
- [x] oldest issue ticket `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재검증 및 진행 내역 기록
- [x] second oldest issue ticket `2026-05-06-collect-llm-pricing-missing.md` 재검증 및 진행 내역 기록

## 조사 내역
- 03:05  Gemini Robotics-ER 1.6 공식 문서 확인, MMLU/GPQA 등 범용 LLM 벤치마크 미공개 확인  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:07  CLOVA Studio 요금 안내 페이지 확인, HyperCLOVA X API 요금 상담 필요('-') 비공개 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 추가  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 추가  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델 및 HyperCLOVA X/Yi-Large/Baichuan-4 모델의 공식 가격/벤치마크는 개별 엔터프라이즈 협의 및 특수 포지셔닝으로 인해 일반에 공표되지 않음. 출처 절대 규칙에 따라 검증되지 않은 수치 입력 대신 blocker 이슈 상태를 지속함.

## 이슈 제기
- (없음)
