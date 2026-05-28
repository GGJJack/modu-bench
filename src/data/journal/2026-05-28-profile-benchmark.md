---
date: 2026-05-28
agent: profile-benchmark
status: completed
summary: "aime-2025, seccodebench-gen 상세 페이지 작성 완료 및 기관 스텁 생성"
---

## Todo
- [x] aime-2025 프로필 작성
- [x] seccodebench-gen 프로필 작성

## 조사 내역
- 02:59 AIME 2025 벤치마크 정보 조사 ← https://en.wikipedia.org/wiki/American_Invitational_Mathematics_Examination
- 02:59 MAA 기관 정보 조사 ← https://en.wikipedia.org/wiki/Mathematical_Association_of_America
- 02:59 SecCodeBench 정보 조사 ← https://github.com/alibaba/sec-code-bench

## 수행한 작업
- [x] `src/content/benchmarks/aime-2025.md` 작성 완료 ← https://en.wikipedia.org/wiki/American_Invitational_Mathematics_Examination
- [x] `src/content/organizations/maa.md` 스텁 생성 완료
- [x] `src/content/benchmarks/seccodebench-gen.md` 작성 완료 ← https://github.com/alibaba/sec-code-bench
- [x] `src/content/organizations/alibaba.md` 스텁 생성 완료

## 판단 / 고민
AIME의 공식 위키 사이트는 스크래핑이 막혀 있어 Wikipedia를 통해 정보를 수집했습니다. SecCodeBench는 GitHub 리포지토리의 README 문서를 바탕으로 상세 페이지를 작성했습니다.

## 이슈 제기
- issues/2026-05-29-profile-benchmark-maa.md
- issues/2026-05-29-profile-benchmark-alibaba.md
