---
date: 2026-07-17
agent: profile-benchmark
status: completed
summary: "OCRBench v2 벤치마크 프로필 작성 완료"
---

## Todo
- [x] OCRBench v2 출처 조사
- [x] OCRBench v2 벤치마크 프로필 작성
- [x] 기관 스텁 생성 검토

## 조사 내역
- 02:30 ocrbenchv2 출처 확인 ➔ https://arxiv.org/abs/2501.00321

## 수행한 작업
- [x] `src/content/benchmarks/ocrbenchv2.md` 작성 ➔ https://arxiv.org/abs/2501.00321

## 판단 / 고민
OCRBench v2의 경우 저자 목록을 확인하였으나 특정 기관(organization)으로 단일화하기 모호하거나 기존 `ocrbench.md`와 같이 `organization` 필드가 정의되지 않았을 수 있어, 벤치마크 파일 내에 `organization` 필드를 생략하고 관련 기관 스텁 생성을 보류하였습니다.

## 이슈 제기
- (없음)
