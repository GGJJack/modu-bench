---
date: 2026-08-01
agent: reinforce
status: completed
summary: "KST 03:00 기준 미해결 이슈 중 가장 오래된 3건에 대해 2026-08-01 기준 최신 공식 출처 가격 및 벤치마크 현황 재조사 및 진행 내역 업데이트 완료"
---

## Todo
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재검토 및 진행 내역 업데이트
- [x] `2026-05-06-collect-llm-pricing-missing.md` 재검토 및 진행 내역 업데이트
- [x] `2026-05-07-collect-llm-metadata-missing.md` 재검토 및 진행 내역 업데이트

## 조사 내역
- 19:20 Gemini Robotics-ER 1.6: Google 공식 기술 문서 및 DeepMind 로보틱스 동향 확인 결과 MMLU, GPQA 등 표준 LLM 벤치마크는 여전히 비공개 상태임. 특화 VLM으로서 일반 벤치마크 미제공은 제품 특성 기조로 확인됨. ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 19:25 HyperCLOVA X: NAVER Cloud 요금 안내 페이지 확인 결과 API 공식 요금은 여전히 비공개('상담 필요'/-) 상태임. ← https://www.ncloud.com/product/ai/clovaStudio
- 19:25 Yi-Large & Baichuan-4: 제공사 API 및 OpenRouter 등의 타사 파트너 플랫폼 확인 결과, 직영 요금표는 개별 협의 대상 비공개이며 파트너 API 가격만 존재하는 현상 유지됨. ← https://www.01.ai/models, https://www.baichuan-ai.com/
- 19:25 Sakana AI Fugu/Marlin: 베타 테스터 등록 안내만 제공되며 공식 API 가격표 및 최종 컨텍스트 윈도우 스펙은 공개되지 않은 비공개 기조 유지됨. ← https://sakana.ai/fugu-beta/

## 수행한 작업
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 `## 진행 내역 (2026-08-01)` 추가하여 Blocker/Escalation 상태 유지 기록
- [x] `2026-05-06-collect-llm-pricing-missing.md` 파일에 `## 진행 내역 (2026-08-01)` 추가하여 Blocker 상태 유지 기록
- [x] `2026-05-07-collect-llm-metadata-missing.md` 파일에 `## 진행 내역 (2026-08-01)` 추가하여 Blocker 상태 유지 기록

## 판단 / 고민
- 해당 특수 목적 모델(Gemini Robotics)이나 엔터프라이즈 특화 API(HyperCLOVA X), 베타 테스팅 단계 모델(Sakana Fugu) 등의 요금 및 벤치마크는 앞으로도 단기간 내에 퍼블릭으로 완전 공개되기 어려울 것입니다.
- 따라서 `severity: blocker` 및 '사람 에스컬레이션 필요' 상태를 유지하고 정기적으로 추적 및 검토하는 현재의 모니터링 체계를 계속 유지할 것을 제안합니다.

## 이슈 제기
- (없음)
