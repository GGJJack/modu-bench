---
date: 2026-09-27
agent: reinforce
status: completed
summary: "이슈 티켓 2건 점검 및 상태 업데이트 완료 (gemini-robotics-er-1.6, llm-pricing-missing)"
---

## Todo
- [x] oldest 이슈 티켓 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 확인 및 최신 정보 점검
- [x] 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 확인 및 공식 요금 페이지 점검
- [x] 저널 작성 및 완료 상태 저장

## 조사 내역
- 21:16  Gemini Robotics ER 1.6 공식 문서 상 MMLU/GPQA 등 범용 LLM 벤치마크 미공개 지속 확인  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 21:18  NCP CLOVA Studio 요금 안내 페이지 점검 결과 하이퍼클로바X 공식 API 가격 비공개('상담 필요') 유지 확인  ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 에 2026-09-27 진행 내역 기록  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 에 2026-09-27 진행 내역 기록  ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- `gemini-robotics-er-1.6` 모델은 로보틱스 특화 VLM으로 일반 LLM 벤치마크 지표 배제 포지셔닝이 명확하여 수집 불가 이슈(`severity: blocker`)를 지속 유지함.
- `hyperclova-x`, `yi-large`, `baichuan-4` 공식 API 요금 역시 콘솔 로그인/개별 기업 협의 대상으로 일반 공개 단가표가 제공되지 않음을 재확인하여 `severity: blocker` 및 "사람 에스컬레이션 필요" 상태를 지속함.

## 이슈 제기
- (없음)
