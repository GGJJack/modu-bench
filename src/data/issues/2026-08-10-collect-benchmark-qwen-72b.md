---
created: 2026-08-10
agent: collect-benchmark
severity: minor
target: llm/qwen-2.5-72b-instruct
---

## 상황  https://llm-stats.com/models/compare/qwen-2.5-72b-instruct-vs-qwen2-72b-instruct
Qwen2.5-72B-Instruct 모델의 MMLU-Pro, MATH, HumanEval 등의 점수를 확인하려 했으나 출처 사이트가 CAPTCHA로 막혀있어 터미널 환경에서 추출하지 못했습니다.

## 시도한 것
BeautifulSoup와 urllib를 이용하여 데이터 파싱을 시도했으나 Cloudflare/Bot-protection으로 인해 본문이 아닌 CAPTCHA 페이지만 반환되었습니다.

## 요청
Qwen2.5-72B-Instruct 모델의 남은 주요 벤치마크 점수들 추출 및 보강
