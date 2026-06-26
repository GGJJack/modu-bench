---
date: 2026-06-26
agent: reinforce
status: completed
summary: "Addressing oldest issues: Gemini Robotics-ER 1.6 benchmarks and enterprise model pricing."
---

## Todo
- [x] Investigate Gemini Robotics-ER 1.6 benchmarks (2026-05-05)
- [x] Investigate HyperCLOVA X, Yi-Large, Baichuan-4 pricing (2026-05-06)

## 조사 내역
- 03:00 시작
- 03:05 Gemini Robotics-ER 1.6 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 재검토. MMLU, GPQA 등 표준 벤치마크는 여전히 공표되지 않음.
- 03:10 NCP CLOVA Studio 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio) 재검토. HCX-007, 005, DASH-002 요금은 여전히 '상담 필요' 상태임.
- 03:12 NCP API 가이드(https://api.ncloud-docs.com/docs/clovastudio-chatcompletionsv3)를 통해 HCX-005(128k), HCX-DASH-002(32k) 컨텍스트 윈도우 사양 재확인.
- 03:15 Yi-Large 및 Baichuan-4 공식 사이트 및 OpenRouter 재검토. 새로운 공개 가격 정보 없음.

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 업데이트 (진행 내역 추가)
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 업데이트 (진행 내역 추가)

## 판단 / 고민
- 엔터프라이즈 모델(HyperCLOVA X, Yi-Large, Baichuan-4)의 공식 가격은 일반 공개보다 상담 위주로 운영되는 기조가 고착화된 것으로 보임.
- Gemini Robotics-ER 1.6은 제품 성격상 일반 LLM 벤치마크를 계속 배제할 것으로 예상되나, 정책에 따라 정기 추적 유지.

## 이슈 제기
- (없음)
