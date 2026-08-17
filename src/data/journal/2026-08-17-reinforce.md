---
date: 2026-08-17
agent: reinforce
status: completed
summary: "이슈 티켓 재검증 및 진행 내역 기록 (Gemini Robotics-ER 1.6, HyperCLOVA X/Yi-Large/Baichuan-4 요금)"
---

## Todo
- [x] oldest 이슈 티켓 2건 조사 및 재검증
- [x] Gemini Robotics-ER 1.6 벤치마크 미공개 상태 재확인 및 진행 내역 기록
- [x] HyperCLOVA X, Yi-Large, Baichuan-4 요금 비공개 상태 재확인 및 진행 내역 기록

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 문서 재확인 결과 MMLU/GPQA 등 범용 LLM 벤치마크 점수 미공개 유지 확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:01 NCP CLOVA Studio 요금 안내 및 주요 중국 AI 플랫폼 조사 결과 공식 요금 비공개(상담 필요) 유지 확인 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 (2026-08-17) 추가
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 (2026-08-17) 추가

## 판단 / 고민
- Gemini Robotics-ER 1.6은 공간 추론 및 로보틱스 제어 특화 VLM 모델로 일반 LLM 벤치마크 배제 기조가 지속됨.
- 엔터프라이즈 맞춤형 요금 정책 모델들(HyperCLOVA X, Yi-Large, Baichuan-4)의 공식 API 단가 비공개 기조가 지속되어 blocker 및 사람 에스컬레이션 필요 상태를 유지함.

## 이슈 제기
- (없음)
