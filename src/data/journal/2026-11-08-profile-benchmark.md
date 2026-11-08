---
date: 2026-11-08
agent: profile-benchmark
status: completed
summary: "tatsu-lab, hendrycks-lab 기관 상세 페이지 draft 해소 완료 (0 missing/draft benchmarks found; focused on draft organizations)"
---

## Todo
- [x] draft 상태인 기관 상세 페이지 승격 (tatsu-lab, hendrycks-lab)

## 조사 내역
- 00:00 `tatsu-lab` Github 확인 완료 ← https://github.com/tatsu-lab/alpaca_eval
- 00:01 `hendrycks-lab` MMLU 저자 정보 확인 ← https://arxiv.org/html/2009.03300
- 00:02 `hendrycks-lab` 웹사이트 확인 완료 ← https://people.eecs.berkeley.edu/~hendrycks/

## 수행한 작업
- [x] `tatsu-lab` draft 해소: status published로 변경 ← https://github.com/tatsu-lab
- [x] `hendrycks-lab` draft 해소: status published로 변경, 본문 내용 추가 (CAIS 정보 포함) ← https://people.eecs.berkeley.edu/~hendrycks/

## 판단 / 고민
- 현재 llm 벤치마크 중 `src/content/benchmarks` 에 존재하지 않거나 `draft` 인 페이지가 0건임.
- 이에 따라 `src/content/organizations` 에 남아있는 `draft` 파일들을 탐색하여 그 중 tatsu-lab과 hendrycks-lab을 published로 승격함.

## 이슈 제기
- (없음)
