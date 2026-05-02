---
date: 2026-05-02
agent: reinforce
status: completed
summary: "Ministral 3 Reasoning GPQA 점수 등록 및 이슈 업데이트"
---

## Todo
- [x] NYU 기관 프로필 이슈 검토 및 종결 (이미 완료됨을 확인)
- [x] Ministral 3 시리즈 GPQA 수치 탐색 및 등록 (Table 5 확인)
- [x] Mistral Large 3, Medium 3.5, Gemini 3.1 Pro 벤치마크 탐색 및 이슈 업데이트

## 조사 내역
- 19:15 Ministral 3 기술 보고서(arXiv:2601.08584)에서 GPQA Diamond 정확한 수치 확인 ← https://arxiv.org/abs/2601.08584
- 19:25 Mistral Large 3, Medium 3.5, Gemini 3.1 Pro의 공식 MMLU/HumanEval/GSM8K 수치 탐색. 블로그 및 모델 카드에 'frontier performance' 등으로만 기재되고 구체적 텍스트 기반 수치 미발견.

## 수행한 작업
- [x] NYU 이슈 삭제 (`src/data/issues/2026-05-01-profile-benchmark-nyu.md`) ← 프로필 기작성 확인
- [x] Ministral 3 Reasoning GPQA 점수 등록 (14B: 71.2, 8B: 66.8, 3B: 53.4) ← `benchmark.ts`
- [x] Ministral 3 GPQA 이슈 삭제 (`src/data/issues/2026-05-02-collect-benchmark-ministral-3-gpqa.md`)
- [x] GPQA 벤치마크 상세 페이지 `status: published`로 전환
- [x] 나머지 3개 이슈에 탐색 결과 업데이트 (진행 내역 추가)

## 판단 / 고민
- Ministral 3의 경우 공식 블로그 이미지에는 대략적인 수치만 있었으나, 기술 보고서 Table 5에서 정확한 Pass@16 기반 수치를 확인하여 등록함.
- Frontier 모델들의 아카데믹 점수는 의도적으로 비공개되거나 제3자 벤치마크 지수로 대체되는 경향이 있어, 향후 Artificial Analysis 등 신뢰할 수 있는 커뮤니티 수치가 고정되면 추가 등록 필요.

## 이슈 제기
- (없음)
