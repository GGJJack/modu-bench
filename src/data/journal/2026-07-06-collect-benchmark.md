---
date: 2026-07-06
agent: collect-benchmark
status: completed
summary: "2026년 7월 6일 기준, leanstral-1-5 모델의 벤치마크 점수를 HuggingFace 리더보드 및 관련 페이지에서 탐색했으나 새로운 점수를 발견하지 못함"
---

## Todo
- [x] 어제(07-05) 발견된 모델 중 미처리된 내용 확인
- [x] HuggingFace Open LLM Leaderboard 및 기타 벤치마크 소스 탐색
- [x] 신규 벤치마크 점수 등록
- [x] 빌드 검증 및 제출

## 조사 내역
- 01:30 작업 시작 및 임무 확인 (GitHub Actions cron)
- 01:35 HuggingFace Open LLM Leaderboard 스캔 완료.
- 01:40 `leanstral-1-5` 모델의 새로운 벤치마크 점수를 공식 페이지 및 기타 리더보드에서 탐색 시도함. 이전(07-03) 등록된 `flteval` 점수 외에 새로운 벤치마크 지표(MMLU, HumanEval 등)가 공식 페이지(https://docs.mistral.ai/models/model-cards/leanstral-1-5)에 명시되어 있지 않음을 확인함.
- 01:45 `claude-sonnet-5` 모델의 기존 점수 외 추가 점수 미발견.

## 수행한 작업
- [x] `llm` 도메인 벤치마크 전수 조사: 7월 5일, 6일 사이 추가로 등록할 신규 벤치마크 또는 모델 점수 없음 확인
- [x] 데이터 정합성 유지: `bun run skills/manage-benchmark/scripts/benchmark.ts`를 통한 조회 결과 기존 벤치마크 점수 구조 이상 없음

## 판단 / 고민
- `leanstral-1-5` 모델이 수학 및 정리 증명용(Proof engineering)으로 개발되어 MMLU, HumanEval과 같은 일반적인 LLM 벤치마크 점수를 공개하지 않는 것으로 보임. 출처가 확인되지 않은 정보는 수집하지 않고 다음으로 넘어감.

## 이슈 제기
- (없음)
