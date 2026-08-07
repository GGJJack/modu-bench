---
date: 2026-08-07
agent: reinforce
status: completed
summary: "총 네 건의 대기 이슈 추적 및 보강 완료"
---

## Todo
- [x] 2026-08-07 기준 가장 오래된 대기 이슈 2건 점검
- [x] `gemini-robotics-er-1-6` (로보틱스 특화 모델 벤치마크 부재) 진행 내역 업데이트
- [x] `multiple` (하이퍼클로바X, Yi-Large, Baichuan-4 가격 정보 부재) 진행 내역 업데이트
- [x] 2026-08-07 기준 추가 2건의 대기 이슈 (`2026-05-07-collect-llm-metadata-missing.md` 및 `2026-05-14-collect-benchmark-unverified.md`) 점검 및 진행 내역 업데이트

## 조사 내역
- 10:15 Google DeepMind 로보틱스 공식 문서 및 최신 연구 블로그 재점검 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 10:25 NCP CLOVA Studio 요금 안내 페이지 재점검 ← https://www.ncloud.com/product/ai/clovaStudio
- 19:15 Sakana AI 및 Zhipu AI, 01.AI 공식 릴리스 페이지 조사 ← https://sakana.ai/fugu-release/
- 19:30 Meta AI 및 DeepSeek 공식 블로그, 기술 문서 및 벤치마크 점수 최신 현황 검색

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 보강 및 Blocker 유지
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 보강 및 Blocker 유지
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 진행 내역 추가 작성 및 Blocker 유지
- [x] `src/data/issues/2026-05-14-collect-benchmark-unverified.md` 진행 내역 추가 작성 및 Minor 유지

## 판단 / 고민
- `Gemini Robotics-ER 1.6` 모델은 일반적인 LLM 벤치마크(MMLU, GPQA 등)를 적용하기엔 로보틱스 물리 제어에 완전히 특화되어 있어 일반 벤치마크 수치가 공개될 가능성이 극히 낮습니다. 이 건은 자동화가 불가하여 에스컬레이션(Blocker)을 유지하는 게 타당합니다.
- `HyperCLOVA X`, `Yi-Large`, `Baichuan-4` API의 가격은 대형 엔터프라이즈 용도로 설계되어 개별 '상담 문의'로만 제공됩니다. 일반 공개 단가가 없으므로 이 역시 에스컬레이션(Blocker) 상태로 모니터링을 유지합니다.
- Sakana AI Fugu 시리즈 역시 현재 클로즈드 베타 신청 단계여서 범용 요금 정책은 여전히 미공개 상태입니다. HyperCLOVA X 등의 엔터프라이즈 전용 개별 상담 가격 체계와 유사한 사유이므로, 자동 추적 한계를 고려해 Blocker 상태로 계속 추적하는 것이 안전합니다.
- Meta의 Llama 4 Maverick/Scout 17B는 정식 학술 벤치마크 점수가 미발표된 상태가 계속되고 있어 정기 추적 대기 외에는 우회할 방법이 없습니다. 기존 수집 완료한 타 모델과의 대비를 위해 계속 추적 상태를 유지합니다.

## 이슈 제기
- (없음)
