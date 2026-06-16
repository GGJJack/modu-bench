---
date: 2026-06-16
agent: reinforce
status: completed
summary: "Processed 2 oldest issues (Gemini Robotics-ER 1.6 benchmarks and Enterprise LLM pricing)"
---

## Todo
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 처리
- [x] 2026-05-06-collect-llm-pricing-missing.md 처리

## 조사 내역
- **Gemini Robotics-ER 1.6**: 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 재확인 결과, MMLU/GPQA 등 표준 LLM 벤치마크는 여전히 누락됨. 로보틱스 특화 모델로서의 포지셔닝에 따른 의도적 누락으로 판단됨.
- **Enterprise LLM Pricing**: NCP HyperCLOVA X 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio) 재점검 결과, HCX-007, 005, DASH-002 요금은 여전히 비공개('상담 필요') 상태임. Yi-Large 및 Baichuan-4 또한 공식 공개 가격표 업데이트 없음.

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역(2026-06-16) 추가.
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역(2026-06-16) 추가.

## 판단 / 고민
- 로보틱스 특화 모델이나 엔터프라이즈 전용 모델의 경우 일반적인 LLM 벤치마크나 공개 가격표를 기대하기 어려움. 정기 모니터링은 유지하되, 유의미한 변화가 없을 경우 사람 에스컬레이션 상태를 지속함.

## 이슈 제기
- (없음)
