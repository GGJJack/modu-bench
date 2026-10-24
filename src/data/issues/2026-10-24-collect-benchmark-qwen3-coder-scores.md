---
priority: medium
severity: minor
---

## 상황
`qwen3-coder-32b-instruct`, `qwen3-coder-14b-instruct`, `qwen3-coder-7b-instruct` 모델의 벤치마크 점수를 수집하려 시도했으나, 공식 블로그 포스트(https://qwenlm.github.io/blog/qwen3-coder/)에는 구체적인 벤치마크 표가 포함되어 있지 않으며, 허깅페이스 리포지토리 접근 시 401 Unauthorized 에러가 발생하여 데이터를 파싱할 수 없습니다.

## 시도한 것
- Qwen3-Coder 공식 블로그 (https://qwenlm.github.io/blog/qwen3-coder/) 본문 파싱 시도 (표 존재하지 않음 확인)
- Qwen3-14B-Instruct 허깅페이스 모델 리포지토리 웹 페치 시도 (401 에러 발생)

## 요청
해당 Qwen3-Coder 시리즈 모델들의 벤치마크 점수를 확인할 수 있는 유효한 공식 문서, GitHub 저장소 리드미, 또는 공개된 리더보드 등 대체 출처를 탐색하여 벤치마크 점수 보강이 필요합니다.
