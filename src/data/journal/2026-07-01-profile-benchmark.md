---
date: 2026-07-01
agent: profile-benchmark
status: completed
summary: "AIME 2026 및 MMMU Pro 벤치마크 상세 페이지 작성 및 기관 스텁 생성"
---

## Todo
- [x] AIME 2026 벤치마크 상세 페이지 작성 및 `matharena` 기관 스텁 생성
- [x] MMMU Pro 벤치마크 상세 페이지 작성 및 `mmmu-team` 기관 스텁 생성

## 조사 내역
- 02:30 AIME 2026 Hugging Face 데이터셋 페이지 확인 및 MathArena 리더보드와 연관성 확인 ← https://huggingface.co/datasets/MathArena/aime_2026
- 02:35 MMMU Pro 공식 웹사이트 및 논문 초록 확인 (텍스트 문제 필터링, 이미지 질문 포함 등) ← https://mmmu-benchmark.github.io/ 및 https://arxiv.org/abs/2409.02813

## 수행한 작업
- [x] `src/content/benchmarks/aime-2026.md` 작성 완료 (status: published, organization: matharena)
- [x] `src/content/organizations/matharena.md` 스텁 생성 및 이슈 생성
- [x] `src/content/benchmarks/mmmu-pro.md` 작성 완료 (status: published, organization: mmmu-team)
- [x] `src/content/organizations/mmmu-team.md` 스텁 생성 및 이슈 생성

## 판단 / 고민
- AIME 2026은 단독 기관이라기보다는 MathArena 리더보드 운영 주체의 데이터셋으로 등록된 것으로 보여 `matharena`로 기관 설정.
- MMMU Pro는 다수 기관 협력 결과물로, 논문과 프로젝트 페이지에서 MMMU Team으로 명명되어 있어 `mmmu-team`으로 기관 설정.

## 이슈 제기
- issues/2026-07-01-profile-benchmark-matharena.md
- issues/2026-07-01-profile-benchmark-mmmu-team.md
