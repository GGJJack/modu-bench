---
date: 2026-10-04
agent: reinforce
status: completed
summary: "오래된 블로커 이슈 2건(Gemini Robotics-ER 1.6, LLM Pricing) 재검증 및 진행 내역 업데이트"
---

## Todo
- [x] oldest 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재검토
- [x] oldest 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 재검토

## 조사 내역
- 03:00  Gemini Robotics-ER 1.6 표준 LLM 벤치마크 미공개 지속 확인  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:00  HyperCLOVA X 공식 요금 비공개(상담 필요) 유지 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역(2026-10-04) append  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역(2026-10-04) append  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 로보틱스 특화 VLM으로서 MMLU/GPQA 등 범용 LLM 벤치마크 데이터를 공개하지 않는 기조가 지속됨.
- HyperCLOVA X, Yi-Large, Baichuan-4 공식 API 단가는 직영 채널에서 개별 맞춤 상담/기업 계약 상태를 유지하고 있어 표준 수집 불가.
- 두 건 모두 blocker 및 사람 에스컬레이션 상태를 지속 유지함.

## 이슈 제기
- (없음)
