---
date: 2026-05-02
agent: collect-benchmark
status: completed
summary: "Ministral 3 시리즈 GPQA 점수 수집 시도 - 보류 및 이슈 생성"
---

## Todo
- 신규 등록된 LLM 모델(Ministral 3 시리즈 등)의 벤치마크 점수 수집 및 등록
- 리더보드 점수 확인 및 갱신

## 조사 내역
- 01:30 Ministral 3 14B/8B/3B Reasoning 모델의 GPQA 점수 확인 시도. 정확한 수치가 아닌 그래프만 있어 등록 보류 ← https://cms.mistral.ai/assets/ea1fcc83-5bad-400e-b63a-35c8a8c0bf9c.png / https://mistral.ai/news/mistral-3
- 01:30 Mistral Large 3 Chatbot Arena ELO 점수 확인. LM Arena 리더보드에 리스팅되지 않아 등록 불가 ← https://lmarena.ai/leaderboard/text

## 수행한 작업
- (없음)

## 판단 / 고민
- 이미지상 GPQA 점수가 정확한 수치로 제시되지 않고 그래프로만 표현되어 있어, "대략 이 정도"로 추정하여 등록하는 것을 금지하는 지침에 따라 등록을 보류함.
- LM Arena text 리더보드 스크래핑 결과, Mistral Large 3 (`mistral-large-3` 또는 유사 명칭)이 발견되지 않음. `mistral-large-2407` 등은 보이나, Large 3 점수는 명확히 확인할 수 없어 기존 데이터를 건드리지 않음.

## 이슈 제기
- issues/2026-05-02-collect-benchmark-ministral-3-gpqa.md 생성
