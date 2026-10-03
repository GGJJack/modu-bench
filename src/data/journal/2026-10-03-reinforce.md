---
date: 2026-10-03
agent: reinforce
status: completed
summary: "2건의 이슈 티켓 재점검 및 진행 내역 기록"
---

## Todo
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재점검 및 진행 내역 기록
- [x] `2026-05-06-collect-llm-pricing-missing.md` 재점검 및 진행 내역 기록

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 문서 수치 미공개 확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:01 HyperCLOVA X / CLOVA Studio 요금 안내 페이지 단가 비공개('상담 필요') 확인 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역(2026-10-03) 추가 및 blocker 상태 유지 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역(2026-10-03) 추가 및 blocker 상태 유지 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6은 물리 공간 추론 및 로봇 제어 특화 VLM 모델로, MMLU/GPQA 등 범용 LLM 벤치마크 점수의 추가 공개 가능성이 매우 낮음.
- HyperCLOVA X, Yi-Large, Baichuan-4 등 엔터프라이즈 위주 API 서비스는 공식 단가표 대신 콘솔 로그인/상담 문의 형태의 영업 정책을 고수하므로 지속 추적 및 blocker 상태 유지가 적절함.

## 이슈 제기
- (없음)
