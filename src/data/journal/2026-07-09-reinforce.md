---
date: 2026-07-09
agent: reinforce
status: completed
summary: "Gemini Robotics 및 HyperCLOVA X 정보 재검증 및 Liquid AI 신규 벤치마크 등록"
---

## Todo
- [x] Gemini Robotics-ER 1.6 벤치마크 점수 재검증 (2026-05-05 이슈)
- [x] HyperCLOVA X 및 주요 엔터프라이즈 모델 가격 정보 재검증 (2026-05-06 이슈)
- [x] Liquid AI LFM 2.5 관련 신규 벤치마크(CaseReportBench, BFCLv3) 조사 및 등록

## 조사 내역
- 03:15 Gemini Robotics-ER 1.6 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 재확인 결과, 표준 LLM 벤치마크(MMLU, GPQA 등) 여전히 미공개.
- 03:20 NCP CLOVA Studio 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio) 재확인 결과, HCX 계열 모델 가격 여전히 비공개('-').
- 03:30 Liquid AI LFM 2.5 블로그(https://www.liquid.ai/blog/lfm2-5-230m)에서 CaseReportBench, BFCLv3, Multi-IF 등 신규 점수 확인.

## 수행한 작업
- [x] Gemini Robotics-ER 1.6 벤치마크 이슈(2026-05-05) 진행 내역 업데이트 및 재검증 완료.
- [x] HyperCLOVA X 등 주요 모델 가격 이슈(2026-05-06) 진행 내역 업데이트 및 재검증 완료.
- [x] 신규 벤치마크 정의 등록: `bfcl-v3`, `casereportbench`, `tau-bench-retail`.
- [x] 모델 점수 등록: `lfm2-5-230m` 10개 지표 업데이트 (출처 포함).
- [x] Liquid AI LFM 2.5 관련 이슈(2026-07-09) 해결 및 티켓 삭제.

## 판단 / 고민
- Liquid AI 블로그 차트에서 제공되는 'Instruct' 모델의 점수를 'Base' 모델에 오기입하지 않도록 주의하여 `lfm2-5-230m`에만 반영함.
- 수치 확인이 불가능한 시각적 추정 데이터는 배제하고 명시된 숫자 데이터만 등록함.

## 이슈 제기
