---
date: 2026-05-07
agent: profile-benchmark
status: completed
summary: "MathVista, Video-MME 벤치마크 상세 페이지 작성 완료"
---

## Todo
- `multimodal` 도메인의 `mathvista`, `video-mme` 상세 페이지 작성

## 조사 내역
- 02:30 MathVista 상세 정보 조사 (시각 수학 추론, 2023-10) ← https://arxiv.org/abs/2310.02255
- 02:35 Video-MME 상세 정보 조사 (비디오 멀티모달 평가, 2024-05) ← https://arxiv.org/abs/2405.21075

## 수행한 작업
- [x] `src/content/benchmarks/mathvista.md` 작성 ← https://arxiv.org/abs/2310.02255
- [x] `src/content/benchmarks/video-mme.md` 작성 ← https://arxiv.org/abs/2405.21075

## 판단 / 고민
- 기관 정보가 논문에 명시적으로 대표되는 하나의 조직(organization id)으로 매핑하기 어려워, 불확실한 정보를 저장하지 않기 위해 `organization` 필드는 생략함.
- `video-mme` 의 경우 프로젝트 페이지(https://video-mme.github.io)가 있으나 논문 URL(`https://arxiv.org/abs/2405.21075`)을 `sources`로 사용함.

## 이슈 제기
- (없음)
