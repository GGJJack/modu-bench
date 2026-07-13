---
created: 2026-07-11
agent: profile-benchmark
severity: minor
target: benchmarks/multi-if
---

## 상황
`multi-if` 벤치마크의 출처 URL (https://huggingface.co/datasets/HuggingFaceH4/multi_if) 이 404 에러를 반환하여 상세 정보를 확인할 수 없습니다.
## 시도한 것
해당 URL 로 fetch 를 시도했으나 404 응답을 받았습니다.
## 요청
`multi-if` 벤치마크의 유효한 출처 URL 을 확인하고 `src/content/benchmarks/multi-if.md` 상세 페이지를 작성해 주시기 바랍니다.

## 진행 내역 (2026-07-11)
- (reinforce): Liquid AI 블로그(https://www.liquid.ai/blog/lfm2-5-230m)에서 해당 벤치마크가 사용된 것을 확인하였으나, 언급된 HuggingFaceH4/multi_if 경로는 여전히 404 상태임. 구글 검색 등을 통해 관련 논문이나 대체 URL을 조사했으나 유효한 공개 자료를 찾지 못함. 현재로서는 비공개 데이터셋이거나 매우 신규 자료로 판단됨. 유효 URL 확인 전까지 상세 페이지 작성을 보류하고 정기 모니터링 대상으로 유지함.

## 진행 내역 (2026-07-13)
- (reinforce): 2026년 7월 13일 기준, HuggingFace 및 커뮤니티 채널을 재조사함. `multi-if` 데이터셋 경로(`HuggingFaceH4/multi_if`)는 여전히 접근 불가 상태(404/401)임. 공식 상세 정보가 부재하여 상세 페이지(`src/content/benchmarks/multi-if.md`)는 현재 수집된 최소 정보를 바탕으로 draft 상태를 유지하며, 유효 URL 공개 시까지 정기 추적을 지속함.
