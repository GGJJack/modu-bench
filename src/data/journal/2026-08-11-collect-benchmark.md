---
date: 2026-08-11
agent: collect-benchmark
status: completed
summary: "LLM-jp, Baichuan2, Yi-1.5, TinySwallow 모델 벤치마크 수집 완료 및 Swallow/Rakuten 모델 벤치마크 이슈 생성"
---

## Todo
- [x] llm-jp-3-13b-instruct 벤치마크 점수 등록
- [x] llm-jp-3-1.8b-instruct 벤치마크 점수 등록
- [x] swallow-7b-instruct 벤치마크 점수 등록 (접근 불가로 이슈 생성)
- [x] swallow-13b-instruct 벤치마크 점수 등록 (접근 불가로 이슈 생성)
- [x] rakuten-ai-3-0-instruct 벤치마크 점수 등록 (접근 불가로 이슈 생성)
- [x] yi-1-5-9b-chat 벤치마크 점수 갱신
- [x] yi-1-5-6b-chat 벤치마크 점수 갱신
- [x] baichuan2-7b-base 벤치마크 점수 갱신 및 등록
- [x] baichuan2-13b-base 벤치마크 점수 갱신 및 등록
- [x] tinyswallow-1-5b 벤치마크 점수 등록

## 조사 내역
- 01:30 llm-jp-3-13b-instruct 및 llm-jp-3-1.8b-instruct 벤치마크 점수 확보 ← https://huggingface.co/llm-jp/llm-jp-3-13b-instruct
- 01:35 baichuan2-7b-base 및 baichuan2-13b-base 벤치마크 점수 확보 ← https://github.com/baichuan-inc/Baichuan2
- 01:40 yi-1-5-9b-chat 및 yi-1-5-6b-chat 벤치마크 점수 확보 ← https://github.com/01-ai/Yi-1.5, https://cdn-uploads.huggingface.co/production/uploads/656d9adce8bf55919aca7c3f/xf6pLg5jqRCwjlh6m3t6_.png
- 01:45 tinyswallow-1-5b 벤치마크 점수 확보 ← https://arxiv.org/abs/2501.16937

## 수행한 작업
- [x] 신규 벤치마크 cmmlu 등록 ← https://github.com/haonan-li/CMMLU
- [x] baichuan2-7b-base 점수 수정/추가 (mmlu, c-eval, cmmlu, bbh) ← https://github.com/baichuan-inc/Baichuan2
- [x] baichuan2-13b-base 점수 수정/추가 (mmlu, c-eval, cmmlu, bbh) ← https://github.com/baichuan-inc/Baichuan2
- [x] yi-1-5-9b-chat 점수 수정 (mmlu, gsm8k, math, humaneval, mbpp, mt-bench) ← https://github.com/01-ai/Yi-1.5
- [x] yi-1-5-6b-chat 점수 수정 (mmlu, gsm8k, math, humaneval, mbpp, mt-bench) ← https://github.com/01-ai/Yi-1.5
- [x] tinyswallow-1-5b 점수 추가 (mmlu, trivia-qa, arc-c, piqa, hellaswag) ← https://arxiv.org/abs/2501.16937
- [x] llm-jp-3-13b-instruct 점수 추가 (mt-bench) ← https://huggingface.co/llm-jp/llm-jp-3-13b-instruct
- [x] llm-jp-3-1.8b-instruct 점수 추가 (mt-bench) ← https://huggingface.co/llm-jp/llm-jp-3-1.8b-instruct

## 판단 / 고민
- Swallow 및 Rakuten 모델들의 HuggingFace 원본 README.md 에 접근하려 했으나 HTTP 401 Unauthorized 오류로 인해 점수를 확인할 수 없었습니다.
- tinyswallow 모델은 논문 (https://arxiv.org/abs/2501.16937) 에서 점수를 찾을 수 있었습니다.

## 이슈 제기
- issues/2026-08-11-collect-benchmark-swallow-rakuten.md (Swallow 및 Rakuten 모델 HuggingFace 401 권한 오류)
