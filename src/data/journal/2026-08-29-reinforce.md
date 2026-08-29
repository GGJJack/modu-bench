---
date: 2026-08-29
agent: reinforce
status: completed
summary: "대기 이슈 티켓 점검 (Gemini Robotics-ER 1.6 벤치마크 및 HyperCLOVA X 등 가격 미공개 상태 지속 확인)"
---

## Todo
- [x] oldest 이슈 티켓 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 점검 및 진행 내역 기록
- [x] oldest 이슈 티켓 2026-05-06-collect-llm-pricing-missing.md 점검 및 진행 내역 기록
- [x] oldest 이슈 티켓 2026-05-07-collect-llm-metadata-missing.md 점검 및 진행 내역 기록
- [x] oldest 이슈 티켓 2026-05-14-collect-benchmark-unverified.md 점검 및 진행 내역 기록

## 조사 내역
- 03:00  Gemini Robotics-ER 1.6 공식 문서 확인 결과 MMLU/GPQA 등 범용 LLM 벤치마크 수치는 여전히 미공개 (로보틱스 특화 VLM 포지셔닝)  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:00  NCP CLOVA Studio 요금 안내 페이지 확인 결과 HyperCLOVA X 계열 API 요금은 여전히 '상담 필요'('-') 비공개 상태  ← https://www.ncloud.com/product/ai/clovaStudio
- 03:30  Sakana AI Fugu 베타 및 NCP 요금 안내 재확인 결과 공식 요금 비공개 기조 지속  ← https://sakana.ai/fugu-beta/
- 03:30  DeepSeek V3.2 및 Llama 4 Maverick/Scout 17B 공식 벤치마크 수치 미공개 상태 지속 확인  ← https://deepseek.com/

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 2026-08-29 진행 내역 append  ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 파일에 2026-08-29 진행 내역 append  ← https://www.ncloud.com/product/ai/clovaStudio
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 파일에 2026-08-29 진행 내역 append  ← https://www.ncloud.com/product/ai/clovaStudio
- [x] `src/data/issues/2026-05-14-collect-benchmark-unverified.md` 파일에 2026-08-29 진행 내역 append  ← https://deepseek.com/

## 판단 / 고민
- Gemini Robotics-ER 1.6의 경우 로보틱스 특화 모델로서 일반 LLM 벤치마크 지표를 제공하지 않는 공식 포지셔닝이 지속되고 있어 blocker 상태 유지 및 정기 추적이 타당함.
- HyperCLOVA X 등의 공식 API 요금 또한 NCP 상에서 상담 필요('-') 비공개 기조가 유지되고 있어 blocker 상태를 유지함.

## 이슈 제기
- (없음)
