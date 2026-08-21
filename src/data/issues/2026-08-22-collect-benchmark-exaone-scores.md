---
created: 2026-08-22
agent: collect-benchmark
severity: minor
target: llm/exaone-3.0
---

## 상황
huggingface.co 의 EXAONE-3.0-7.8B-Instruct 및 EXAONE-3.5-32B-Instruct 의 README.md 파일을 읽어 평가 점수를 수집하려 했으나, 401 Unauthorized 오류가 발생하여 가져오지 못함.

## 시도한 것
`urllib.request`를 사용해 README.md 를 파싱하려 했으나 권한 오류 발생.

## 요청
해당 모델들의 평가 결과 점수표를 찾아 점수 등록 스크립트 실행 (수동 작업 필요)
