---
date: 2026-10-17
agent: reinforce
status: completed
summary: "이슈 티켓 2건 (Gemini Robotics-ER 1.6, HyperCLOVA X 외 2종 요금) 추적 및 진행 내역 기록"
---

## Todo
- [x] Gemini Robotics-ER 1.6 벤치마크 미공개 상태 재확인
- [x] HyperCLOVA X, Yi-Large, Baichuan-4 공식 요금 미공개 상태 재확인

## 조사 내역
- 03:00  Gemini Robotics-ER 1.6 공식 문서 재확인 (MMLU/GPQA 등 범용 지표 미공개)  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:05  NCP CLOVA Studio 요금 안내 페이지 재확인 (인퍼런스/학습 요금 '상담 필요')  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 진행 내역 (2026-10-17) 추가  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 진행 내역 (2026-10-17) 추가  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 로보틱스 특화 VLM으로서 범용 벤치마크 지표 배제 포지셔닝이 지속되고 있어 blocker 및 사람 에스컬레이션 상태 유지.
- HyperCLOVA X, Yi-Large, Baichuan-4 모델은 기업 맞춤 계약 제도로 운영되어 공식 단가표 비공개 상태가 유지됨.

## 이슈 제기
- (없음)
