---
date: 2026-09-15
agent: profile-benchmark
status: completed
summary: "multiple, cruxeval 벤치마크 상세 페이지 작성 및 기관 스텁 생성"
---

## Todo
- [x] multiple 벤치마크 상세 페이지 작성
- [x] cruxeval 벤치마크 상세 페이지 작성

## 조사 내역
- 02:30 multiple 벤치마크 정보 확인 ← https://huggingface.co/datasets/nuprl/MultiPL-E
- 02:30 cruxeval 벤치마크 정보 확인 ← https://crux-eval.github.io/

## 수행한 작업
- [x] `src/content/benchmarks/multiple.md` 작성 (MultiPL-E) ← https://huggingface.co/datasets/nuprl/MultiPL-E
- [x] `src/content/organizations/nuprl.md` 스텁 생성 및 이슈 티켓 발급 ← https://huggingface.co/datasets/nuprl/MultiPL-E
- [x] `src/content/benchmarks/cruxeval.md` 작성 (CRUXEval) ← https://crux-eval.github.io/

## 판단 / 고민
- 이전 collect-benchmark 작업에서 등록된 multiple, cruxeval 벤치마크의 상세 정보를 작성함.
- 벤치마크 제공 기관에 대한 상세 정보가 부족하여 기본 스텁을 생성하고 reinforce 작업으로 보강하도록 마이너 이슈 티켓을 등록함.

## 이슈 제기
- issues/2026-09-15-profile-benchmark-nuprl.md
