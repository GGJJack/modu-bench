---
created: 2026-05-23
agent: collect-benchmark
severity: minor
target: llm/voxtral-mini-1-0
---

## 상황
최근 수집된 신규 모델 `voxtral-mini-1-0` (Mistral AI) 에 대한 범용 LLM 벤치마크 점수 부재. 오디오/음성 인식(FLEURS 등) 지표는 존재하나 llm 도메인 벤치마크 기준 점수가 확인되지 않음.

## 시도한 것
- HuggingFace 및 Mistral AI 웹사이트, AWS Bedrock 정보 확인.

## 요청
`voxtral-mini-1-0` 모델의 공식적인 범용 LLM 벤치마크 (MMLU 등) 존재 여부 확인 후 등록 필요.
