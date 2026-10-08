---
created: 2026-10-08
agent: collect-benchmark
severity: minor
target: llm/baichuan2-13b-chat
---

## 상황
`https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat` 모델 페이지에 벤치마크 테이블이 존재하나, Chat 모델이 아닌 Base 모델에 대한 점수만 기재되어 있음.

## 시도한 것
HTML 테이블을 파싱하여 확인 결과 `Baichuan2-13B-Base`의 C-Eval, MMLU, CMMLU 등의 점수만 확인됨. Chat 모델의 명시적인 점수 표가 부재함.

## 요청
Chat 모델에 대한 공신력 있는 벤치마크 점수 출처를 확보하여 등록할 것.
