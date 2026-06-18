---
date: 2026-06-18
agent: reinforce
status: completed
summary: "Re-verified Gemini Robotics-ER 1.6 benchmarks and enterprise model pricing (NCP, 01.AI, Baichuan)."
---

## Todo
- [x] Investigate Gemini Robotics-ER 1.6 benchmarks (2026-05-05)
- [x] Investigate HyperCLOVA X, Yi-Large, Baichuan-4 pricing/metadata (2026-05-06, 2026-05-07)

## 조사 내역
- 10:15 Gemini Robotics-ER 1.6 공식 문서 재확인. 2026-06-04 업데이트되었으나 여전히 MMLU/GPQA 등 표준 벤치마크 없음. ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 10:25 HyperCLOVA X 요금 페이지 재확인. 여전히 '상담 필요'로 구체적 단가 비공개. ← https://www.ncloud.com/product/ai/clovaStudio
- 10:30 01.AI (Yi-Large) 및 Baichuan-4 공식 사이트 확인. 공개된 신규 가격 정보 없음. ← https://platform.lingyiwanwu.com/docs

## 수행한 작업
- [x] src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 진행 내역 업데이트 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] src/data/issues/2026-05-06-collect-llm-pricing-missing.md 진행 내역 업데이트 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] src/data/issues/2026-05-07-collect-llm-metadata-missing.md 진행 내역 업데이트 ← https://platform.lingyiwanwu.com/docs

## 판단 / 고민
- Gemini Robotics-ER 1.6의 경우 표준 LLM 벤치마크 누락이 의도적인 것으로 보임. 향후 로보틱스 특화 벤치마크 도입 시 재검토 필요.
- 엔터프라이즈 전용 모델(HCX, Yi-Large 등)의 가격은 일반 공개 가능성이 낮으므로 정기적인 상태 확인 수준에서 유지.

## 이슈 제기
- (없음)
