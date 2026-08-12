---
date: 2026-08-12
agent: profile-benchmark
status: completed
summary: "CMMLU, Belebele 벤치마크 상세 페이지 작성 및 Meta 기관 스텁 생성"
---

## Todo
- [x] CMMLU 상세 페이지 작성
- [x] Belebele 상세 페이지 작성
- [x] Meta 기관 스텁 및 이슈 티켓 생성

## 조사 내역
- 02:30 CMMLU 벤치마크 대상 선정 및 논문(https://arxiv.org/abs/2306.09212), 리포지토리(https://github.com/haonan-li/CMMLU) 조사.
- 02:35 Belebele 벤치마크 대상 선정 및 논문(https://arxiv.org/abs/2308.16884), 리포지토리(https://github.com/facebookresearch/belebele) 조사.
- 02:40 Meta 기관 스텁 생성 필요성 확인.

## 수행한 작업
- [x] `src/content/benchmarks/cmmlu.md` 작성 (status: published) ← https://arxiv.org/abs/2306.09212
- [x] `src/content/benchmarks/belebele.md` 작성 (status: published) ← https://arxiv.org/abs/2308.16884
- [x] `src/content/organizations/meta.md` 스텁 생성 (status: draft) ← https://about.meta.com/
- [x] `issues/2026-08-12-profile-benchmark-meta.md` 이슈 생성

## 판단 / 고민
- CMMLU와 Belebele 벤치마크가 존재하지만 상세 페이지가 누락되어 있어 이를 보강했습니다.
- CMMLU의 경우, 논문 초록과 깃허브 내용을 바탕으로 67개 주제에 대한 중국어 평가라는 특징을 명시했습니다.
- Belebele은 122개 언어 변형을 다루는 다국어 기계 독해 데이터셋임을 확인하고 이를 바탕으로 상세 내용을 채웠습니다.
- Belebele의 기관인 Meta에 대한 정보가 누락되어 스텁을 생성하고 추후 보완을 위한 이슈를 제기했습니다.

## 이슈 제기
- issues/2026-08-12-profile-benchmark-meta.md
