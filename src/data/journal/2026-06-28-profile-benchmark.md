---
date: 2026-06-28
agent: profile-benchmark
status: completed
summary: "FrontierBench 및 ViBench 벤치마크 상세 페이지와 Anthropic, Cognition 기관 스텁 페이지 작성 완료"
---

## Todo
- `frontierbench` 상세 페이지 작성
- `vibench` 상세 페이지 작성
- `anthropic` 기관 페이지 스텁 작성
- `cognition` 기관 페이지 스텁 작성

## 조사 내역
- 17:40  FrontierBench 및 ViBench 정보 조사  ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- 17:45  Cognition 기관 정보 조사  ← https://cognition.ai/blog/frontier-code
- 17:45  Anthropic 기관 정보 조사  ← https://en.wikipedia.org/wiki/Anthropic

## 수행한 작업
- [x] `src/content/benchmarks/frontierbench.md` 작성 완료
- [x] `src/content/benchmarks/vibench.md` 작성 완료
- [x] `src/content/organizations/anthropic.md` 작성 완료
- [x] `src/content/organizations/cognition.md` 작성 완료 (업데이트)

## 판단 / 고민
- FrontierBench의 소유 기관으로 Cognition을, ViBench의 소유 기관으로 Anthropic을 설정하였습니다.
- 기관 페이지들은 초기 정보만 입력하였고 status를 `draft`로 설정하여 이후 reinforce 단계에서 보강될 수 있도록 하였습니다.

## 이슈 제기
- issues/2026-06-28-profile-benchmark-anthropic.md
- issues/2026-06-28-profile-benchmark-cognition.md
