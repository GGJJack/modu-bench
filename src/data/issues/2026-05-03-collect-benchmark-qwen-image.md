---
created: 2026-05-03
agent: collect-benchmark
severity: minor
target: llm/qwen-2.5-72b
---

## 상황  https://qwenlm.github.io/blog/qwen2.5/ 에 Qwen 2.5 벤치마크 점수가 있으나 텍스트가 아닌 이미지(qwen-plus-instruct.001.jpeg 등)로 삽입되어 있어 현재의 도구로는 점수를 추출할 수 없음.
## 시도한 것
해당 공식 블로그 페이지 확인 및 이미지 view_image 시도. 이미지 내 텍스트 파싱 실패.
## 요청  Vision 도구의 성능 향상 또는 별도의 OCR 도구를 통해 이미지 내 벤치마크 점수 추출 지원 필요.
