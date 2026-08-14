---
date: 2026-08-15
agent: profile-benchmark
status: completed
summary: "kobest-copa, agieval 벤치마크 및 skt-lsl, microsoft 기관 스텁 작성"
---

## Todo
- `kobest-copa`, `agieval` 벤치마크 상세 페이지 작성 (1~2개)
- 필요시 기관(`organization`) 스텁 생성

## 조사 내역
- 17:47 `kobest-copa` 데이터셋 확인 ← https://huggingface.co/datasets/skt/kobest_v1/raw/main/README.md
- 17:50 `agieval` 정보 확인 ← https://raw.githubusercontent.com/ruixiangcui/AGIEval/main/README.md

## 수행한 작업
- [x] `src/content/benchmarks/kobest-copa.md` 생성 (published) ← https://huggingface.co/datasets/skt/kobest_v1/raw/main/README.md
- [x] `src/content/organizations/skt-lsl.md` 스텁 생성 (draft) ← https://github.com/SKT-LSL/KoBEST_datarepo
- [x] `src/content/benchmarks/agieval.md` 생성 (published) ← https://raw.githubusercontent.com/ruixiangcui/AGIEval/main/README.md
- [x] `src/content/organizations/microsoft.md` 스텁 생성 (draft) ← https://github.com/microsoft

## 판단 / 고민
- AGIEval의 공식 repo를 찾기 위해 구글 검색을 활용하였음. `microsoft/AGIEval` 대신 `ruixiangcui/AGIEval`을 통해 readme 접근 및 정보 수집.

## 이슈 제기
- (없음)
