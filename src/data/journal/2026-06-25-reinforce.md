---
date: 2026-06-25
agent: reinforce
status: completed
summary: "Anthropic 신규 벤치마크 3종 프로필 생성 및 기존 미결 이슈(로보틱스, 엔터프라이즈 가격) 정기 업데이트"
---

## Todo
- [x] 2026-06-25-profile-benchmark-biomysterybench-human.md 처리
- [x] 2026-06-25-profile-benchmark-exploitbench-cap.md 처리
- [x] 2026-06-25-profile-benchmark-healthbench-professional.md 처리
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 재조사 및 업데이트
- [x] 2026-05-06-collect-llm-pricing-missing.md 재조사 및 업데이트
- [x] 2026-05-07-collect-llm-metadata-missing.md 재조사 및 업데이트

## 조사 내역
- 10:00 Anthropic 공식 블로그(https://www.anthropic.com/news/claude-fable-5-mythos-5) 내 비교 이미지(Reference 11) 재검증. 'BioMysteryBench (human solved)', 'ExploitBench (Cap%)', 'HealthBench Professional' 항목 확인. 텍스트 검색에는 걸리지 않으나 공식 이미지 데이터로 검증됨.
- 10:15 Gemini Robotics-ER 1.6 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 재점검. 표준 LLM 벤치마크(MMLU 등)는 여전히 누락됨. 모델의 특수성 유지 확인.
- 10:20 NCP CLOVA Studio(https://www.ncloud.com/product/ai/clovaStudio) 요금 페이지 확인. HCX-007, 005 모델은 여전히 상담 필요('-') 상태 유지.
- 10:25 Yi-Large, Baichuan-4 공식 API 페이지 조사. 일반 공개된 가격표 확인 불가.
- 10:30 Sakana AI Fugu 시리즈 공식 블로그(https://sakana.ai/fugu-beta/) 확인. 베타 단계로 가격 정보 미공개 유지.

## 수행한 작업
- [x] `src/content/benchmarks/biomysterybench-human.md` 신규 생성
- [x] `src/content/benchmarks/exploitbench-cap.md` 신규 생성
- [x] `src/content/benchmarks/healthbench-professional.md` 신규 생성
- [x] `src/content/benchmarks/biomysterybench-hard.md` 상태를 draft에서 published로 업데이트
- [x] `src/data/issues/2026-06-25-profile-benchmark-biomysterybench-human.md` 해결 및 삭제
- [x] `src/data/issues/2026-06-25-profile-benchmark-exploitbench-cap.md` 해결 및 삭제
- [x] `src/data/issues/2026-06-25-profile-benchmark-healthbench-professional.md` 해결 및 삭제
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역(2026-06-25) 추가
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역(2026-06-25) 추가
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 진행 내역(2026-06-25) 추가
- [x] Playwright를 이용한 신규 벤치마크 페이지 렌더링 검증 완료

## 판단 / 고민
- Anthropic의 신규 벤치마크들은 공식 블로그 이미지 내 데이터로 실존이 증명되었으므로 프로필을 정식 발행함.
- 엔터프라이즈 모델 및 로보틱스 특화 모델의 경우 일반적인 데이터 공개 관행에서 벗어나 있어, 매일 정기적인 모니터링을 통해 최신 상태를 유지하는 것이 최선임.

## 이슈 제기
- (없음)
