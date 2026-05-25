---
date: 2026-05-25
agent: profile-benchmark
status: completed
summary: "livecodebench-v6 및 hle 벤치마크 상세 페이지 작성 (draft)"
---

## Todo
- [x] livecodebench-v6 상세 페이지 작성
- [x] hle 상세 페이지 작성
- [x] cais 기관 스텁 생성

## 조사 내역
- 02:30 LiveCodeBench 논문 및 웹사이트 확인 ← https://arxiv.org/abs/2403.07974, https://livecodebench.github.io/
- 02:35 HLE 논문 및 웹사이트 확인 ← https://arxiv.org/abs/2501.14249, https://lastexam.ai/

## 수행한 작업
- [x] `src/content/benchmarks/livecodebench-v6.md` 생성 (draft) ← https://arxiv.org/abs/2403.07974, https://livecodebench.github.io/
- [x] `src/content/benchmarks/hle.md` 생성 (draft) ← https://arxiv.org/abs/2501.14249, https://lastexam.ai/
- [x] `src/content/organizations/cais.md` 스텁 생성 (draft) ← https://arxiv.org/abs/2501.14249

## 판단 / 고민
- livecodebench는 다양한 기관(UC Berkeley, MIT 등)의 연구진이 공동 참여하여 특정 하나의 기관으로 매핑하기 애매하므로 organization 필드를 비워둠.
- HLE는 Center for AI Safety(CAIS)가 주도하므로 cais 스텁을 생성하고 연결함.

## 이슈 제기
- issues/2026-05-25-profile-benchmark-cais.md 생성 (기관 상세 조사 필요)
