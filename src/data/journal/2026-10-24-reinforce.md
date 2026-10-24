---
date: 2026-10-24
agent: reinforce
status: completed
summary: "오래된 이슈 티켓 2건 (gemini-robotics-er-1-6 벤치마크 미공개 및 주요 모델 가격 정보 미공개) 점검 및 진행 내역 업데이트 완료"
---

## Todo
- [x] oldest issue `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 점검 및 진행 내역 업데이트
- [x] second oldest issue `2026-05-06-collect-llm-pricing-missing.md` 점검 및 진행 내역 업데이트

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 개발자 문서 재확인 결과, MMLU/GPQA 등 범용 LLM 벤치마크 점수는 미공개 상태 유지 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:00 HyperCLOVA X, Yi-Large, Baichuan-4 공식 요금 채널 점검 결과, 엔터프라이즈 개별 상담/협의 정책에 따른 공식 API 요금 비공개 기조 유지

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 2026-10-24 진행 내역 추가
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 파일에 2026-10-24 진행 내역 추가

## 판단 / 고민
- 특수 목적 로보틱스 VLM 및 엔터프라이즈 요금 협의 대상 모델들은 공공 문서나 공식 API 요금표상에서 데이터가 공개되지 않으므로, blocker/escalation 상태를 지속 유지하는 것이 최선임.

## 이슈 제기
- (없음)
