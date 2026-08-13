---
date: 2026-08-14
agent: profile-benchmark
status: completed
summary: "MuSR 및 KoBEST-BoolQ 벤치마크 상세 페이지 작성 완료"
---

## Todo
- [x] llm 도메인 벤치마크 목록 확인
- [x] 누락된 벤치마크 (MuSR, KoBEST-BoolQ) 상세 조사
- [x] 벤치마크 및 관련 기관(TAUR Lab, SK Telecom) 상세 페이지 작성

## 조사 내역
- 02:30 MuSR 데이터셋 정보 확인 ← https://huggingface.co/datasets/TAUR-Lab/MuSR
- 02:32 KoBEST-BoolQ 데이터셋 정보 확인 ← https://huggingface.co/datasets/skt/kobest_v1

## 수행한 작업
- [x] `src/content/benchmarks/musr.md` 작성 (상태: published) ← https://huggingface.co/datasets/TAUR-Lab/MuSR
- [x] `src/content/organizations/taur-lab.md` 기관 스텁 생성 ← https://huggingface.co/datasets/TAUR-Lab/MuSR
- [x] `src/content/benchmarks/kobest-boolq.md` 작성 (상태: published) ← https://huggingface.co/datasets/skt/kobest_v1
- [x] `src/content/organizations/sk-telecom.md` 기관 스텁 생성 ← https://huggingface.co/datasets/skt/kobest_v1

## 판단 / 고민
- MuSR 및 KoBEST-BoolQ 두 개의 벤치마크를 처리하여 한 세션 3개 초과 금지 룰을 준수함.
- 출처(source) URL과 논문 URL을 명확하게 파악하여 기입함.
- 상세페이지를 세 문단 이상의 내용과 3개 이상의 출처를 확보하여 draft에서 published 상태로 승격함.

## 이슈 제기
- (없음)
