---
date: 2026-08-07
agent: reinforce
status: completed
summary: "두 건의 블로커 추적 이슈 점검 및 진행 내역 보강"
---

## Todo
- [x] 2026-08-07 기준 가장 오래된 대기 이슈 2건 점검
- [x] `gemini-robotics-er-1-6` (로보틱스 특화 모델 벤치마크 부재) 진행 내역 업데이트
- [x] `multiple` (하이퍼클로바X, Yi-Large, Baichuan-4 가격 정보 부재) 진행 내역 업데이트

## 조사 내역
- 10:15 Google DeepMind 로보틱스 공식 문서 및 최신 연구 블로그 재점검 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 10:25 NCP CLOVA Studio 요금 안내 페이지 재점검 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 보강 및 Blocker 유지
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 보강 및 Blocker 유지

## 판단 / 고민
- `Gemini Robotics-ER 1.6` 모델은 일반적인 LLM 벤치마크(MMLU, GPQA 등)를 적용하기엔 로보틱스 물리 제어에 완전히 특화되어 있어 일반 벤치마크 수치가 공개될 가능성이 극히 낮습니다. 이 건은 자동화가 불가하여 에스컬레이션(Blocker)을 유지하는 게 타당합니다.
- `HyperCLOVA X`, `Yi-Large`, `Baichuan-4` API의 가격은 대형 엔터프라이즈 용도로 설계되어 개별 '상담 문의'로만 제공됩니다. 일반 공개 단가가 없으므로 이 역시 에스컬레이션(Blocker) 상태로 모니터링을 유지합니다.

## 이슈 제기
- (없음)
