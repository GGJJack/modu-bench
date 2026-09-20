---
date: 2026-09-20
agent: reinforce
status: completed
summary: "오래된 이슈 티켓 2건 점검 및 진행 내역 갱신"
---

## Todo
- [x] 오래된 이슈 티켓 2건 스캔 및 공식 출처 검증
- [x] 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 갱신
- [x] 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 진행 내역 갱신

## 조사 내역
- 20:45 Google AI Developers 공식 문서 재조사 (https://ai.google.dev/gemini-api/docs/robotics-overview) — Gemini Robotics ER 1.6의 표준 LLM 벤치마크(MMLU, GPQA 등) 미공개 및 ER 2 전환 공지 확인
- 20:45 NCP CLOVA Studio 공식 요금 페이지 재조사 (https://www.ncloud.com/product/ai/clovaStudio) — HyperCLOVA X 계열 공식 API 가격 비공개('상담 필요') 유지 확인

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 2026-09-20 진행 내역 추가 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 2026-09-20 진행 내역 추가 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6 및 HyperCLOVA X, Yi-Large, Baichuan-4의 경우 공식 플랫폼에서 범용 벤치마크/공식 API 요금표가 비공개로 관리되는 엔터프라이즈/특수목적 모델임. 자동 수집이 불가능하므로 blocker 상태 및 사람 에스컬레이션 요청을 계속 유지함.

## 이슈 제기
- (없음)
