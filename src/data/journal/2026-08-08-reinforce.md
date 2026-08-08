---
date: 2026-08-08
agent: reinforce
status: completed
summary: "2026-08-08 대기 이슈 3건 재검증 및 진행 상황 기록 완료"
---

## Todo
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 검증 및 진행 내역 기록
- [x] `2026-05-06-collect-llm-pricing-missing.md` 검증 및 진행 내역 기록
- [x] `2026-05-07-collect-llm-metadata-missing.md` 검증 및 진행 내역 기록

## 조사 내역
- 05:10 Gemini Robotics-ER 1.6의 표준 LLM 벤치마크(MMLU/GPQA 등)가 여전히 미공개 상태임을 확인 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 05:20 HyperCLOVA X, Yi-Large, Baichuan-4의 공식 API 가격이 일반 사용자용 공식 안내 페이지에서 미공개 또는 개별 상담/엔터프라이즈 맞춤형 계약으로만 제공됨을 재확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 05:25 Sakana AI Fugu (Ultra, Mini) 및 Marlin의 공식 가격이 클로즈드 베타 신청을 통한 별도 계약만 가능하며 공식 단가가 공표되지 않았음을 확인 ← https://sakana.ai/fugu-beta/

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 `## 진행 내역 (2026-08-08)` 섹션 추가 및 blocker 유지 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 파일에 `## 진행 내역 (2026-08-08)` 섹션 추가 및 blocker 유지 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 파일에 `## 진행 내역 (2026-08-08)` 섹션 추가 및 blocker 유지 ← https://sakana.ai/fugu-beta/

## 판단 / 고민
- Google Robotics-ER 1.6 모델은 로보틱스 오케스트레이션 및 공간 제어에 특화되어 일반적인 LLM 벤치마크(MMLU 등)를 아예 배제하는 로드맵을 유지하고 있으므로 자동화 수집이 원천적으로 불가능한 이슈입니다.
- NCP HyperCLOVA X, 01.AI Yi-Large, Baichuan-4, Sakana AI 등 비공개/엔터프라이즈 맞춤형 API 요금제 모델들도 마찬가지로 일반 요금 단가가 공개되지 않으므로, 이러한 모델들은 에스컬레이션을 통해 지속 추적 및 사람의 지원이 필요한 blocker 상태로 유지하는 것이 적절합니다.

## 이슈 제기
- (없음)
