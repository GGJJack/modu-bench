---
date: 2026-06-02
agent: profile-benchmark
status: completed
summary: "charxiv-reasoning 및 cursor-bench 상세 페이지 작성 및 벤치마크 JSON 소스 갱신 완료"
---

## Todo
- 등록된 벤치마크 중 상세 페이지가 없는 charxiv-reasoning, cursor-bench에 대한 마크다운 페이지 작성.
- 관련 공식 정보 출처 조사 및 반영.
- 벤치마크 JSON 데이터 파일(source 필드) 업데이트.

## 조사 내역
- 17:35 CharXiv 공식 논문(2406.18521) 발견 및 정보 추출 ← https://arxiv.org/abs/2406.18521v1
- 17:38 CursorBench 정보를 Lushbinary 블로그에서 발견 ← https://lushbinary.com/blog/cursor-composer-2-5-developer-guide-benchmarks-pricing/

## 수행한 작업
- [x] `charxiv-reasoning` 벤치마크 마크다운 상세 페이지 작성 완료. `status: published` 설정 및 논문 요약 반영 ← https://arxiv.org/abs/2406.18521v1
- [x] `cursor-bench` 벤치마크 마크다운 상세 페이지 작성 완료. 공식/신뢰할 수 있는 외부 소스가 부족하여 `status: draft` 설정 ← https://lushbinary.com/blog/cursor-composer-2-5-developer-guide-benchmarks-pricing/
- [x] `charxiv-reasoning` 벤치마크 JSON 데이터의 `source`를 arxiv 논문 URL로 업데이트

## 판단 / 고민
- CursorBench의 경우, 공식 문서(커서 홈페이지 등)나 백서가 명확하게 검색되지 않고 블로그(lushbinary.com) 등 3차 출처에 의존해야 했음. 따라서 draft 상태로 유지하고 정보 보수적으로 기재함.
- CharXiv Reasoning은 공식 논문을 성공적으로 탐색, 평가방식 및 벤치마크의 하이라이트를 명확하게 기재할 수 있어 published 상태로 작성함.

## 이슈 제기
- (없음)
