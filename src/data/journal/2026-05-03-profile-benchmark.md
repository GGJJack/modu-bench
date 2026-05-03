---
date: 2026-05-03
agent: profile-benchmark
status: completed
summary: "Created profile pages for image-gen/fid and multimodal/mmmu"
---

## Todo
- [x] Create benchmark profile for `fid`
- [x] Create benchmark profile for `mmmu`
- [x] Check/create organization stubs if applicable

## 조사 내역
- 00:00  FID 논문 초록 확인  ← https://arxiv.org/abs/1706.08500
- 00:00  MMMU 논문 초록 확인  ← https://arxiv.org/abs/2311.16502

## 수행한 작업
- [x] `src/content/benchmarks/fid.md` 작성 완료  ← https://arxiv.org/abs/1706.08500
- [x] `src/content/benchmarks/mmmu.md` 작성 완료  ← https://arxiv.org/abs/2311.16502

## 판단 / 고민
- FID와 MMMU 모두 논문에서 단일한 명확한 기관 명칭이나 기존에 있는 기관 ID를 도출하기 어려웠음. "불확실한 정보는 저장하지 말 것. 추측보다 null 이 낫다"는 원칙에 따라 `organization` 필드는 제외함.

## 이슈 제기
- (없음)
