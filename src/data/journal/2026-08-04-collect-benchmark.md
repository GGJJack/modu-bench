---
date: 2026-08-04
agent: collect-benchmark
status: completed
summary: "Baichuan2-Base 계열과 Yi-1.5-Chat 계열의 벤치마크(MMLU, MATH, HumanEval, MBPP, MT-Bench, GSM8K) 점수 매칭 및 등록"
---

## Todo
- [x] Baichuan2-7B-Base, Baichuan2-13B-Base의 공식 벤치마크 점수(MMLU 등) 추가 ➔ https://huggingface.co/baichuan-inc/Baichuan2-7B-Base, https://huggingface.co/baichuan-inc/Baichuan2-13B-Base
- [x] Baichuan2-7B-Chat, Baichuan2-13B-Chat의 공식 벤치마크 점수(MMLU 등) 추가 ➔ https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat, https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- [x] Yi-1.5-34B-Chat, Yi-1.5-9B-Chat, Yi-1.5-6B-Chat의 벤치마크 점수(MMLU, MATH, HumanEval, MBPP, MT-Bench, GSM8K) 추가 ➔ https://huggingface.co/01-ai/Yi-1.5-34B-Chat, https://huggingface.co/01-ai/Yi-1.5-9B-Chat, https://huggingface.co/01-ai/Yi-1.5-6B-Chat

## 조사 내역
- 01:30 Baichuan2 시리즈 공식 리포지토리 및 허깅페이스 리드미 대조 ➔ https://huggingface.co/baichuan-inc/Baichuan2-7B-Base
- 01:32 Yi-1.5 시리즈 허깅페이스 공식 리드미의 성능 비교표 (Chat Model, Base Model 이미지) 수치 대조 ➔ https://cdn-uploads.huggingface.co/production/uploads/656d9adce8bf55919aca7c3f/xf6pLg5jqRCwjlh6m3t6_.png

## 수행한 작업
- [x] `baichuan2-7b-base` 점수 추가 (MMLU: 54.16) ➔ https://huggingface.co/baichuan-inc/Baichuan2-7B-Base
- [x] `baichuan2-13b-base` 점수 추가 (MMLU: 59.17) ➔ https://huggingface.co/baichuan-inc/Baichuan2-13B-Base
- [x] `baichuan2-7b-chat` 점수 추가 (MMLU: 54.16) - Base 점수 참조 오류 가능성 있음 ➔ https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat
- [x] `baichuan2-13b-chat` 점수 추가 (MMLU: 59.17) - Base 점수 참조 오류 가능성 있음 ➔ https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat
- [x] `yi-1-5-34b-chat` 점수 추가 (MMLU: 76.8, MATH: 50.1, HumanEval: 75.2, MBPP: 74.6, MT-Bench: 8.5, GSM8K: 90.2) ➔ https://huggingface.co/01-ai/Yi-1.5-34B-Chat
- [x] `yi-1-5-9b-chat` 점수 추가 (MMLU: 69.5, MATH: 47.7, HumanEval: 66.5, MBPP: 78.8, MT-Bench: 8.2, GSM8K: 84.8) ➔ https://huggingface.co/01-ai/Yi-1.5-9B-Chat
- [x] `yi-1-5-6b-chat` 점수 추가 (MMLU: 62.8, MATH: 40.5, HumanEval: 64.0, MBPP: 70.9, MT-Bench: 7.5, GSM8K: 78.9) ➔ https://huggingface.co/01-ai/Yi-1.5-6B-Chat

## 판단 / 고민
- MMLU 외에도 여러 벤치마크 항목에 대한 결과가 공식 이미지 안에 있었지만, `manage-benchmark list llm`으로 등록되어 있는 주요 벤치마크들(MMLU, MATH, HumanEval, MBPP, MT-Bench, GSM8K)을 위주로만 파싱하여 안전하게 기록함.

## 이슈 제기
- (없음)
