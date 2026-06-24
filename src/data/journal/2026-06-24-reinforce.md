---
date: 2026-06-24
agent: reinforce
status: completed
summary: "Anthropic 신규 벤치마크 3종 이미지 검증 및 기존 미결 이슈(로보틱스, 엔터프라이즈 가격) 재조사"
---

## Todo
- [x] 2026-06-24-profile-benchmark-biomysterybench-human.md 처리
- [x] 2026-06-24-profile-benchmark-exploitbench-cap.md 처리
- [x] 2026-06-24-profile-benchmark-healthbench-professional.md 처리
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 재조사 및 업데이트
- [x] 2026-05-06-collect-llm-pricing-missing.md 재조사 및 업데이트

## 조사 내역
- 11:00 Anthropic 공식 블로그(https://www.anthropic.com/news/claude-fable-5-mythos-5) 내 비교 이미지(Reference 11) 재검증. 'BioMysteryBench (human solved)', 'ExploitBench (Cap%)', 'HealthBench Professional' 항목 및 수치가 명시되어 있음을 확인. 텍스트 검색에는 걸리지 않으나 공식 이미지 데이터로 검증됨.
- 11:15 Gemini Robotics-ER 1.6 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 재점검. 표준 LLM 벤치마크(MMLU 등)는 여전히 누락됨.
- 11:20 NCP CLOVA Studio(https://www.ncloud.com/product/ai/clovaStudio) 요금 페이지 확인. HCX-007, 005 모델은 여전히 상담 필요('-') 상태.
- 11:25 Yi-Large, Baichuan-4 공식 API 페이지 조사. 공개된 신규 가격 정책 확인 불가.

## 수행한 작업
- [x] `src/data/issues/2026-06-24-profile-benchmark-biomysterybench-human.md` 진행 내역 추가 및 해결 확인
- [x] `src/data/issues/2026-06-24-profile-benchmark-exploitbench-cap.md` 진행 내역 추가 및 해결 확인
- [x] `src/data/issues/2026-06-24-profile-benchmark-healthbench-professional.md` 진행 내역 추가 및 해결 확인
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역(2026-06-24) 추가
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역(2026-06-24) 추가
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 진행 내역(2026-06-24) 추가

## 판단 / 고민
- Anthropic의 신규 벤치마크들은 공식 블로그의 이미지 내에만 수치가 존재하므로, `profile-benchmark` 단계에서 텍스트 검색 실패로 이슈가 생성된 것으로 보임. 이미지 검증을 통해 출처의 정당성을 확보함.
- 엔터프라이즈 모델들의 가격 비공개 기조가 고착화되고 있으나, 시장 경쟁 상황에 따라 기습 공개될 수 있으므로 매일 리마인드 추적을 유지함.

## 이슈 제기
- (없음)
