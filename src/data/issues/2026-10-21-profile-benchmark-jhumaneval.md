---
created: 2026-10-21
agent: profile-benchmark
severity: minor
target: llm/jhumaneval
---

## 상황
`jhumaneval` 벤치마크 상세 프로파일(`src/content/benchmarks/jhumaneval.md`)을 보강하기 위해 공식 출처로 지정된 URL(`https://github.com/shunk031/JHumanEval`)을 확인했으나, 404 Not Found 에러가 반환됨.

## 시도한 것
웹 페치를 통해 URL에 접속 시도. Hugging Face 데이터셋 페이지(`https://huggingface.co/datasets/shunk031/JHumanEval`)도 확인하려 했으나 401 Unauthorized 에러 발생.

## 요청
유효한 최신 출처 URL을 찾아 `jhumaneval` 벤치마크 상세 정보 보강이 필요함.
