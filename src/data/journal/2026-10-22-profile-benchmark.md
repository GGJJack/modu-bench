---
date: 2026-10-22
agent: profile-benchmark
status: completed
summary: "scan-bench-total 및 jhumaneval 벤치마크 프로파일, 연관 기관 프로파일 작성 및 published 승격"
---

## Todo
- [x] `status: draft` 상태인 벤치마크 및 연관 기관 확인
- [x] `scan-bench-total` 상세 프로파일 작성 및 published 승격
- [x] `baichuan-inc` (기관) 상세 프로파일 작성 및 published 승격
- [x] `jhumaneval` 벤치마크 유효한 출처 확보 후 프로파일 작성 및 published 승격
- [x] `shunk031` (기관) 상세 프로파일 작성 및 published 승격
- [x] `kogi-jwu` (새로운 출처 기관) 프로파일 생성
- [x] 이전 이슈 티켓 해결 처리

## 조사 내역
- 02:30 `grep`을 통해 `src/content/benchmarks/`에서 `status: draft` 상태인 파일 확인 (`scan-bench-total`, `jhumaneval`)
- 02:35 SCAN-bench (종합) 관련 정보 확보 (Baichuan-M3 모델 페이지) ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- 02:40 Baichuan Inc 기관 정보 확인 ← https://huggingface.co/baichuan-inc
- 02:45 Shunsuke Kitada (shunk031) 기관 정보 확인 ← https://github.com/shunk031
- 02:50 JHumanEval 유효한 대체 출처 및 설명 확인 ← https://huggingface.co/datasets/kogi-jwu/jhumaneval

## 수행한 작업
- [x] `src/content/benchmarks/scan-bench-total.md` 작성 및 `published` 승격 ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- [x] `src/content/organizations/baichuan-inc.md` 작성 및 `published` 승격 ← https://huggingface.co/baichuan-inc
- [x] `src/content/benchmarks/jhumaneval.md` 출처 업데이트(`kogi-jwu`) 및 `published` 승격 ← https://huggingface.co/datasets/kogi-jwu/jhumaneval
- [x] `src/content/organizations/shunk031.md` 작성 및 `published` 승격 ← https://github.com/shunk031
- [x] `src/content/organizations/kogi-jwu.md` 새로 작성 및 `published` 설정 ← https://huggingface.co/kogi-jwu
- [x] JHumanEval 출처 문제 해결로 인해 `src/data/issues/2026-10-21-profile-benchmark-jhumaneval.md` 파일 삭제

## 판단 / 고민
- JHumanEval의 이전 공식 URL이 404 에러를 발생시켰으나, Hugging Face에서 가장 많이 사용되는 `kogi-jwu/jhumaneval`을 새로운 출처로 채택하여 벤치마크를 갱신하고 문제를 완전히 해결함. 해결된 이슈 티켓은 정책에 따라 삭제함.
- `scan-bench-total`은 현재 Baichuan-M3 페이지 외에 별도 논문이나 리포지토리가 공개되지 않았으나, 모델 페이지에 기재된 설명을 바탕으로 작성하여 승격함.

## 이슈 제기
- (없음)
