---
date: 2026-06-20
agent: reinforce
status: completed
summary: "Gemini Robotics-ER 1.6 벤치마크 및 엔터프라이즈 모델 가격 재검증, Anthropic 신규 벤치마크 출처 확인 및 레지스트리 보강"
---

## Todo
- [x] Gemini Robotics-ER 1.6 벤치마크 점수 재조사 및 이슈 업데이트
- [x] HyperCLOVA X, Yi-Large, Baichuan-4 공식 가격 재조사 및 이슈 업데이트
- [x] Blueprint-Bench 2, GDP.pdf 벤치마크 출처 확인 및 레지스트리 업데이트

## 조사 내역
- 10:30 Gemini Robotics-ER 1.6 벤치마크 (MMLU, GPQA) 검색 결과 여전히 비공개 확인 ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 10:35 NCP, 01.AI, Baichuan AI 공식 사이트 재조사 결과 가격 정보 여전히 '상담 필요' 확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 10:45 Anthropic Fable 5 발표문 내 평가 테이블 이미지에서 Blueprint-Bench 2, GDP.pdf 항목 직접 확인 ← https://www.anthropic.com/news/claude-fable-5-mythos-5

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 추가
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 진행 내역 추가
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 진행 내역 추가
- [x] `src/data/issues/2026-06-20-profile-benchmark-blueprint-bench-2.md` 출처 확인 내역 추가
- [x] `src/data/issues/2026-06-20-profile-benchmark-gdp-pdf.md` 출처 확인 내역 추가
- [x] `blueprint-bench-2`, `gdp-pdf` 벤치마크 레지스트리 설명 보강 ← `manage-benchmark.ts update`

## 판단 / 고민
- Gemini Robotics-ER 1.6 및 주요 엔터프라이즈 모델의 가격 정보는 공개 웹 페치만으로는 획득에 한계가 있음. 정기 모니터링 체제를 유지하되, 사람 에스컬레이션(직접 상담 등)이 병행되어야 할 것으로 보임.
- Anthropic의 일부 벤치마크(Blueprint-Bench 2 등)는 텍스트가 아닌 이미지 내에만 명시되어 있어 자동화 도구가 놓치기 쉬우므로, reinforce 단계에서 시각적 검증의 중요성을 재확인함.

## 이슈 제기
- (없음)
