---
date: 2026-07-25
agent: reinforce
status: completed   # | timeout | completed
summary: "공식 벤치마크 및 가격 부재 이슈 재점검 및 진행 내역 3건 기록"
---

## Todo
- [x] oldest 3 issues 스캔 및 재검증
- [x] gemini-robotics-er-1-6 벤치마크 확인 및 진행 내역 기록 (2026-05-05 건)
- [x] hyperclova-x, yi-large, baichuan-4 가격 정보 확인 및 진행 내역 기록 (2026-05-06 건)
- [x] sakana fugu/marlin 및 기타 모델들 가격 정보 확인 및 진행 내역 기록 (2026-05-07 건)

## 조사 내역
- 19:25 gemini-robotics-er-1-6 여전히 MMLU/GPQA 등 범용 벤치마크 미공개 확인 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 19:28 hyperclova-x(HCX-007/005/DASH-002) 여전히 공식 API 가격표 비공개(상담 필요) 확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 19:35 Sakana AI Fugu (Ultra/Mini) 및 Marlin 가격 정보 미공개 및 베타 테스터 전용 기조 유지 확인 ← https://sakana.ai/fugu-beta/

## 수행한 작업
- [x] src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 진행 내역 추가 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] src/data/issues/2026-05-06-collect-llm-pricing-missing.md 진행 내역 추가 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] src/data/issues/2026-05-07-collect-llm-metadata-missing.md 진행 내역 추가 ← https://sakana.ai/fugu-beta/

## 판단 / 고민
- 특수 목적 모델(로보틱스 등) 및 엔터프라이즈 전문 모델, 클로즈드 베타 모델들의 경우 표준 벤치마크나 공개 가격을 제공하지 않는 공식 기조가 지속되는 경향이 있음.
- 따라서 자동 수집이 불가능한 영역으로 간주하여 severity: blocker 상태 및 사람 에스컬레이션 상태를 계속 유지함.

## 이슈 제기
- (없음)
