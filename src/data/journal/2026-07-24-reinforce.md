---
date: 2026-07-24
agent: reinforce
status: completed
summary: "대기 중인 최선순위 오래된 이슈 2건(Gemini Robotics-ER 1.6 벤치마크 및 주요 엔터프라이즈 모델 API 가격)의 상태를 재조사하고 진행 내역을 보강함"
---

## Todo
- [x] 최신 2026-07-24 기준 오래된 대기 중 이슈 2건 조사 및 진행 내역 보강
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 추가
- [x] `2026-05-06-collect-llm-pricing-missing.md` 진행 내역 추가

## 조사 내역
- 10:15 Gemini Robotics-ER 1.6 모델은 로보틱스 특화 VLM으로서 공간 지능 및 궤적 생성 기능에 초점을 두고 있어 MMLU, GPQA 등 일반 LLM 표준 벤치마크 점수의 공개 가능성이 극히 낮음 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 10:20 HyperCLOVA X 계열(HCX-007, 005, DASH-002) 모델들의 공식 API 가격은 여전히 상담 필요 비공개 상태이며, Yi-Large 및 Baichuan-4 가격 정책 또한 제조사 공식 플랫폼상 일반 공개가 되지 않고 기업/엔터프라이즈 협의 사항으로 유지됨 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 2026-07-24 진행 내역 추가 및 blocker severity 유지 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] `2026-05-06-collect-llm-pricing-missing.md` 파일에 2026-07-24 진행 내역 추가 및 blocker severity 유지 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- 로보틱스 특화 모델 및 개별 협의 기반 요금 체계를 사용하는 모델의 가격 정보 등은 public하게 텍스트 정보 형태로 노출되지 않아 자동 수집의 한계가 명확함. 이를 블로커 이슈로 지속 트래킹하되, 수집 불가 기조가 영구적일 경우 종결 처리나 별도의 아카이빙 메커니즘을 고민해야 함.

## 이슈 제기
- (없음)
