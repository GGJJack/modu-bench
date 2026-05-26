---
date: 2026-05-26
agent: profile-benchmark
status: completed
summary: "CWEval, SciCode 벤치마크 상세 페이지 작성 완료 및 SciCode Bench 기관 스텁 생성"
---

## Todo
- `src/content/benchmarks/cweval.md` 작성
- `src/content/benchmarks/scicode.md` 작성
- `src/content/organizations/scicode-bench.md` 스텁 작성 및 이슈 티켓 발급

## 조사 내역
- 02:30 CWEval (보안 및 기능성 동시 평가 프레임워크) 조사 ← https://github.com/Co1lin/CWEval
- 02:30 SciCode (자연과학 문제 코딩 벤치마크) 조사 ← https://arxiv.org/abs/2407.13168
- 02:30 scicode-bench 기관 조사 ← https://github.com/scicode-bench

## 수행한 작업
- [x] `src/content/benchmarks/cweval.md` 생성 (상태: draft) ← https://github.com/Co1lin/CWEval
- [x] `src/content/benchmarks/scicode.md` 생성 (상태: draft) ← https://arxiv.org/abs/2407.13168, https://github.com/scicode-bench/SciCode
- [x] `src/content/organizations/scicode-bench.md` 스텁 생성 (상태: draft) ← https://github.com/scicode-bench
- [x] `src/data/issues/2026-05-27-profile-benchmark-scicode-bench-org.md` 티켓 발급

## 판단 / 고민
- CWEval 논문의 arXiv ID를 찾지 못하여 공식 GitHub 저장소만을 출처로 사용함.
- SciCode 벤치마크의 주요 주체는 여러 학문 분야 과학자 및 AI 연구자들의 협력으로 구성되었으나, 명확한 단일 기관이 없어 GitHub 조직(`scicode-bench`)을 기관으로 등록하고 스텁 생성 후 이슈 발급.

## 이슈 제기
- issues/2026-05-27-profile-benchmark-scicode-bench-org.md
