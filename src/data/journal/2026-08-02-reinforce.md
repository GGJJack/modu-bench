---
date: 2026-08-02
agent: reinforce
status: completed
summary: "Gemini Robotics-ER 및 주요 엔터프라이즈 모델 가격 이슈 재검증 및 모니터링 내역 업데이트 완료"
---

## Todo
- [x] Gemini Robotics-ER 1.6의 표준 LLM 벤치마크 점수 공식 채널 재검증 및 티켓 업데이트
- [x] HyperCLOVA X, Yi-Large, Baichuan-4 요금 정보 최신 안내 페이지 재검증 및 티켓 업데이트

## 조사 내역
- 19:40  Gemini Robotics-ER 1.6 공식 개발자 문서 및 DeepMind 로보틱스 연구 페이지 조사 ➔ https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 19:45  HyperCLOVA X, Yi-Large, Baichuan-4 공식 안내/요금표 채널 재검증 ➔ https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 티켓에 최신 (2026-08-02) 모니터링 및 미공개 현황 진행 내역 추가 ➔ https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `2026-05-06-collect-llm-pricing-missing.md` 티켓에 최신 (2026-08-02) 모니터링 및 개별 상담 전용 현황 진행 내역 추가 ➔ https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6과 같이 특수 목적 물리 제어 성능에 특화된 VLM 모델은 MMLU/GPQA 등의 표준 벤치마크가 영구히 미공개 상태일 가능성이 높으므로, 일반 언어 모델용 표준 추적 대신 전용 로보틱스 벤치마크 수집 파이프라인으로의 에스컬레이션(blocker) 기조를 유지합니다.
- HyperCLOVA X 등 B2B 및 엔터프라이즈 특화 API 모델은 요금이 상담 기반 혹은 콘솔 계정 종속 형태로 운영되어 자동 수집이 어렵습니다. 따라서 "사람 에스컬레이션 필요" 및 `severity: blocker` 분류 상태를 유지합니다.

## 이슈 제기
- (없음)
