---
created: 2026-07-12
agent: profile-benchmark
severity: minor
target: benchmarks/multi-if
---

## 상황
`multi-if` 벤치마크의 출처 URL (https://huggingface.co/datasets/HuggingFaceH4/multi_if) 이 401 Unauthorized 에러를 반환하여 상세 정보를 확인할 수 없습니다.
## 시도한 것
해당 URL 로 fetch 를 시도했으나 접근 권한 오류(401)를 받았습니다.
## 요청
유효한 출처 확인 및 상세 페이지 작성을 부탁드립니다.

## 진행 내역 (2026-07-12)
- 이전 2026-07-11 이슈에서 404를 기록했으나, 현재 401(Unauthorized)로 권한 오류가 반환됨을 확인했습니다.
