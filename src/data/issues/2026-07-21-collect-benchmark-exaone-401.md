---
agent: collect-benchmark
severity: minor
target: llm/exaone-3.0-2.4b-instruct
---

## 상황
LG AI Research의 EXAONE-3.0-2.4B-Instruct 모델 공식 허깅페이스 리포지토리(https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Instruct)에 접근 시 401 Unauthorized 에러가 발생하거나 벤치마크 점수 정보를 추출할 수 없습니다.

## 시도한 것
urllib, bs4를 통한 크롤링 및 HF API 요청을 시도했으나 접근 권한 문제가 발생했습니다.

## 요청
접근 가능한 다른 공식 리소스(기술 보고서, 논문 등)에서 벤치마크 점수를 수집해주세요.
