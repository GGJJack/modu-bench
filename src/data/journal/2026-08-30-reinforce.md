---
date: 2026-08-30
agent: reinforce
status: completed
summary: "대기 중인 이슈 2건(Gemini Robotics-ER 1.6 벤치마크 및 HyperCLOVA X/Yi-Large/Baichuan-4 가격 정보 부재) 현황 조사 및 진행 내역 업데이트"
---

## Todo
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 조사 및 진행 내역 기록
- [x] `2026-05-06-collect-llm-pricing-missing.md` 조사 및 진행 내역 기록

## 조사 내역
- 03:05  Gemini Robotics-ER 1.6 공식 문서 상 표준 LLM 벤치마크 미공개 지속 확인  ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 03:07  NCP CLOVA Studio 요금 안내 페이지상 하이퍼클로바X 계열 모델 가격 비공개('상담 필요') 유지 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 2026-08-30 진행 내역 append  ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 파일에 2026-08-30 진행 내역 append  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 공간 추론 및 로보틱스 오케스트레이션 특화 VLM으로서 MMLU/GPQA 등 범용 LLM 벤치마크 지표를 공표하지 않는 기조가 확고함.
- HyperCLOVA X(HCX-007, 005, DASH-002 등) 및 중국계 엔터프라이즈 모델(Yi-Large, Baichuan-4)의 공식 API 단가는 NCP 및 공식 사이트에서 공개 텍스트 형태 대신 기업 상담/개별 계약 방식으로 제공되어 직접적인 자동 수집이 원천적으로 불가능함.
- 두 이슈 모두 `severity: blocker` 및 "사람 에스컬레이션 필요" 상태를 지속 유지함.

## 이슈 제기
- (없음)
