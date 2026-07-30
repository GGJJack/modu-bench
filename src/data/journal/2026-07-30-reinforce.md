---
date: 2026-07-30
agent: reinforce
status: completed
summary: "이슈 티켓 2건 점검 및 상태 보강 업데이트 완료"
---

## Todo
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 티켓 재검토 및 진행 내역 업데이트
- [x] 2026-05-06-collect-llm-pricing-missing.md 티켓 재검토 및 진행 내역 업데이트

## 조사 내역
- 19:50 Gemini Robotics-ER 1.6 MMLU/GPQA 벤치마크 미제공 기조 재확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 19:52 HyperCLOVA X, Yi-Large, Baichuan-4 공식 API 단가 비공개 기조 재확인 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 티켓에 2026-07-30 일자 진행 내역 추가 및 severity: blocker 유지 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 티켓에 2026-07-30 일자 진행 내역 추가 및 severity: blocker 유지 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 로보틱스 오케스트레이션 및 공간 제어에 전념하는 소형 VLM으로, 앞으로도 일반 언어에 특화된 아카데믹 벤치마크 점수의 수집은 현실적으로 불가능해 보입니다. 계속해서 blocker 트래킹을 유지하는 것 외에 더 상세한 로보틱스 특화 벤치마크가 도입되기 전까진 상태가 변경되기 어려울 것입니다.
- HyperCLOVA X와 Yi-Large, Baichuan-4 등 엔터프라이즈 전용 대규모 모델들의 공식 1차 API 단가는 공식 협의를 통한 수집 방식 기조를 이어가고 있어 일반 공개 API를 타겟으로 하는 모니터링 방식의 보강 한계를 넘을 수 없으므로, severity: blocker를 지속 유지합니다.

## 이슈 제기
- (없음)
