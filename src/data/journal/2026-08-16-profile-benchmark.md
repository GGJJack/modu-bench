---
date: 2026-08-16
agent: profile-benchmark
status: completed
summary: "Create benchmark profile for KoBEST-WiC and KoBEST-HellaSwag"
---

## Todo
- Create benchmark profile for kobest-wic
- Create benchmark profile for kobest-hellaswag
## 조사 내역
- 02:30 KoBEST-WiC 정보 조사 ← https://huggingface.co/datasets/skt/kobest_v1
- 02:35 KoBEST-HellaSwag 정보 조사 ← https://huggingface.co/datasets/skt/kobest_v1
## 수행한 작업
- [x] `src/content/benchmarks/kobest-wic.md` 생성 ← https://huggingface.co/datasets/skt/kobest_v1
- [x] `src/content/benchmarks/kobest-hellaswag.md` 생성 ← https://huggingface.co/datasets/skt/kobest_v1
## 판단 / 고민
## 이슈 제기
- (없음)

## 재실행 (17:47)

## Todo
- `kobest-sentineg`, `gaokao` 벤치마크 상세 페이지 작성
- 필요시 기관(`organization`) 스텁 생성

## 조사 내역
- 17:47 `kobest-sentineg` 벤치마크 정보 확인 ← https://huggingface.co/datasets/skt/kobest_v1
- 17:48 `gaokao` 벤치마크 정보 확인 ← https://github.com/OpenLMLab/GAOKAO-Bench

## 수행한 작업
- [x] `src/content/benchmarks/kobest-sentineg.md` 생성 (published) ← https://huggingface.co/datasets/skt/kobest_v1
- [x] `src/content/organizations/skt.md` 스텁 생성 (draft) ← https://huggingface.co/datasets/skt/kobest_v1
- [x] `src/content/benchmarks/gaokao.md` 생성 (published) ← https://github.com/OpenLMLab/GAOKAO-Bench
- [x] `src/content/organizations/openlmlab.md` 스텁 생성 (draft) ← https://github.com/OpenLMLab/GAOKAO-Bench

## 판단 / 고민
- kobest-sentineg는 논문 URL이 없으므로 `paperUrl`을 생략함.

## 이슈 제기
- (없음)
