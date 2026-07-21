---
date: 2026-07-21
agent: collect-benchmark
status: completed
summary: "mistral-large-2 및 solar-10.7b 점수 등록, o1-mini 등 접근 불가 이슈 티켓 생성"
---

## Todo
- [x] mistral-large-2 점수 매칭
- [x] solar-10.7b 점수 매칭
- [x] o1-mini, o1-preview, exaone-3.0-2.4b-instruct 등 접근 불가 출처에 대해 이슈 티켓 생성

## 조사 내역
- 16:55 mistral-large-2 출처 확인 ➔ https://mistral.ai/news/mistral-large-2407/
- 16:56 solar-10.7b 출처 확인 ➔ https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
- 16:57 o1-mini 출처 접근 실패 (403 Forbidden) ➔ https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/
- 16:57 o1-preview 출처 접근 실패 (403 Forbidden) ➔ https://openai.com/index/introducing-openai-o1-preview/
- 16:57 exaone-3.0-2.4b-instruct 출처 접근 실패 (401 Unauthorized) ➔ https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Instruct

## 수행한 작업
- [x] mistral-large-2 MMLU 점수(84.0) 추가 ➔ https://mistral.ai/news/mistral-large-2407/
- [x] mistral-large-2 MMMLU 점수(84.0) 추가 ➔ https://mistral.ai/news/mistral-large-2407/
- [x] mistral-large-2 MT-Bench 점수(8.4) 추가 ➔ https://mistral.ai/news/mistral-large-2407/
- [x] mistral-large-2 HumanEval 점수(92.0) 추가 ➔ https://mistral.ai/news/mistral-large-2407/
- [x] mistral-large-2 MATH 점수(76.7) 추가 ➔ https://mistral.ai/news/mistral-large-2407/
- [x] mistral-large-2 GSM8K 점수(91.1) 추가 ➔ https://mistral.ai/news/mistral-large-2407/
- [x] solar-10.7b MMLU 점수(74.20) 추가 ➔ https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
- [x] o1-mini 출처 403 에러로 인한 이슈 티켓 생성 ➔ src/data/issues/2026-07-21-collect-benchmark-o1-mini-403.md
- [x] o1-preview 출처 403 에러로 인한 이슈 티켓 생성 ➔ src/data/issues/2026-07-21-collect-benchmark-o1-preview-403.md
- [x] exaone-3.0-2.4b-instruct 출처 401 에러로 인한 이슈 티켓 생성 ➔ src/data/issues/2026-07-21-collect-benchmark-exaone-401.md
