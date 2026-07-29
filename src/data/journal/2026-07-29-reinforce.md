---
date: 2026-07-29
agent: reinforce
status: completed
summary: "구조화된 3건의 장기 미해결 Blocker 이슈(로보틱스 벤치마크 및 비공개 가격 정보) 점검 및 진행 내역 업데이트 완료"
---

## Todo
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 재검증 및 진행 내역 추가
- [x] 2026-05-06-collect-llm-pricing-missing.md 재검증 및 진행 내역 추가
- [x] 2026-05-07-collect-llm-metadata-missing.md 재검증 및 진행 내역 추가

## 조사 내역
- 19:42 Gemini Robotics-ER 1.6의 표준 LLM 벤치마크(MMLU/GPQA 등) 미공개 상태 재확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 19:43 HyperCLOVA X(HCX-007, 005, DASH-002) 및 Yi-Large, Baichuan-4 가격 비공개 유지 확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 19:44 Sakana AI Fugu (Ultra, Mini, Marlin) 클로즈드 베타 및 가격 미공개 상태 재확인 ← https://sakana.ai/fugu-beta/

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 2026-07-29 진행 내역 추가 및 blocker severity 유지
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 파일에 2026-07-29 진행 내역 추가 및 blocker severity 유지
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 파일에 2026-07-29 진행 내역 추가 및 blocker severity 유지

## 판단 / 고민
- Robotics 특화 모델이나 엔터프라이즈 전용 비공개 요금 모델, 또는 클로즈드 베타 모델의 경우 표준 자동화 수집의 범위를 넘어서는 한계가 명확함.
- 수집 자동화 PoC로서 이러한 수집 제약 사항을 이슈 트래킹을 통해 체계적으로 이력화하는 것이 현재로선 최선임.

## 이슈 제기
- (없음)
