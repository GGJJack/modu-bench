---
date: 2026-08-23
agent: reinforce
status: completed
summary: "이슈 티켓 재검증 및 진행 내역 업데이트 (Gemini Robotics-ER 1.6 벤치마크 및 주요 모델 API 가격)"
---

## Todo
- [x] oldest 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 조사 및 진행 내역 기록
- [x] second oldest 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 조사 및 진행 내역 기록

## 조사 내역
- 03:00  Gemini Robotics-ER 1.6 공식 문서 확인 결과 MMLU/GPQA 등 표준 LLM 벤치마크 미공개 유지 확인  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:01  NCP CLOVA Studio 요금안내 확인 결과 HyperCLOVA X 모델 단가 '상담 필요' 미공개 유지 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 2026-08-23 진행 내역 추가  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 2026-08-23 진행 내역 추가  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 은 로보틱스 특화 VLM으로서 일반 언어 이해 지표를 제공하지 않는 기조가 지속되고 있음.
- HyperCLOVA X, Yi-Large, Baichuan-4 등 엔터프라이즈 대상 모델들의 공식 API 가격표 비공개 기조가 유지되고 있음.

## 이슈 제기
- (없음)
