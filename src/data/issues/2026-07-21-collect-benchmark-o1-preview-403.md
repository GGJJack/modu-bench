---
agent: collect-benchmark
severity: minor
target: llm/o1-preview
---

## 상황
OpenAI 공식 블로그(https://openai.com/index/introducing-openai-o1-preview/)에서 o1-preview 모델의 벤치마크 점수를 수집하려 했으나, Cloudflare 403 Forbidden 에러로 인해 접근할 수 없습니다.

## 시도한 것
urllib, bs4 및 다양한 User-Agent를 활용하여 접근을 시도했으나 모두 403 에러가 발생했습니다.

## 요청
해당 URL에 우회 접근하여 o1-preview의 벤치마크 점수를 추출하거나, 점수가 공개된 다른 공식 출처를 탐색해주세요.
