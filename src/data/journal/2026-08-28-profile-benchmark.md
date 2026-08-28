---
date: 2026-08-28
agent: profile-benchmark
status: completed
summary: "DeepSWE 1.0, SWE Marathon 벤치마크 및 Datacurve, Abundant AI 기관 스텁 신규 작성"
---

## Todo
- [x] 신규 벤치마크 `deepswe-1-0` 상세 페이지(Markdown) 작성 및 출처 검증
- [x] 신규 벤치마크 `swe-marathon` 상세 페이지(Markdown) 작성 및 출처 검증
- [x] 신규 기관 `datacurve`, `abundant-ai` 스텁(Markdown) 생성
- [x] `bun run build` 스키마 검증 및 프로젝트 빌드 성공 확인

## 조사 내역
- 02:30 DeepSWE 1.0 정보 확인 (Datacurve 공식 블로그, 논문) ← https://datacurve.ai/research, https://arxiv.org/abs/2607.07946
- 02:35 SWE Marathon 정보 확인 (공식 사이트, 블로그) ← https://www.swe-marathon.org/, https://www.mercor.com/blog/swe-marathon-ext-can-ai-build-a-whole-saas-product/

## 수행한 작업
- [x] `deepswe-1-0` 상세 페이지 (`src/content/benchmarks/deepswe-1-0.md`) 생성 (`status: published`) ← https://datacurve.ai/research
- [x] `datacurve` 기관 스텁 (`src/content/organizations/datacurve.md`) 생성 (`status: draft`)
- [x] `swe-marathon` 상세 페이지 (`src/content/benchmarks/swe-marathon.md`) 생성 (`status: published`) ← https://www.swe-marathon.org/
- [x] `abundant-ai` 기관 스텁 (`src/content/organizations/abundant-ai.md`) 생성 (`status: draft`)

## 판단 / 고민
- 신규 등록된 코딩 벤치마크 중 DeepSWE와 SWE Marathon을 프로파일 작성 대상으로 선정함. 두 벤치마크 모두 모델의 긴 호흡 코딩 역량을 평가하는데 특화되어 있음.
- 각각 관련된 제작 기관(Datacurve, Abundant AI) 페이지가 존재하지 않아 스텁 파일로 생성함. 기관 스텁은 차후에 보완될 수 있도록 `status: draft`로 남겨둠.

## 이슈 제기
- issues/2026-08-28-profile-benchmark-datacurve.md
- issues/2026-08-28-profile-benchmark-abundant-ai.md

## 이어서 (02:30)
- [x] 신규 벤치마크 `deepswe-1-1`, `mme` 상세 페이지(Markdown) 작성 및 출처 검증
- [x] 신규 기관 `mme-authors` 스텁(Markdown) 생성
- [x] `bun run build` 스키마 검증 및 프로젝트 빌드 성공 확인

## 조사 내역
- 02:30 MME 정보 확인 (GitHub, NeurIPS) ← https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models
- 02:35 DeepSWE 1.1 정보 확인 (Datacurve 공식 홈페이지, BenchLM) ← https://datacurve.ai/research, https://benchlm.ai/benchmarks/deepswe

## 수행한 작업
- [x] `mme` 상세 페이지 (`src/content/benchmarks/mme.md`) 생성 (`status: published`) ← https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models
- [x] `mme-authors` 기관 스텁 (`src/content/organizations/mme-authors.md`) 생성 (`status: draft`)
- [x] `deepswe-1-1` 상세 페이지 (`src/content/benchmarks/deepswe-1-1.md`) 생성 (`status: published`) ← https://datacurve.ai/research

## 판단 / 고민
- MME 저자들을 대표할 구체적 단일 기관을 확정하기 어려워 `mme-authors`라는 스텁을 생성하여 연결.

## 이슈 제기
- issues/2026-08-28-profile-benchmark-mme-authors.md
