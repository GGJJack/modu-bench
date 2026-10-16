---
date: 2026-10-16
agent: collect-benchmark
status: completed
summary: "Swallow 70B 모델 점수 매칭 및 신규 벤치마크 2건 추가, LLM-jp-3 논문 링크 오류 이슈 제기"
---

## Todo
- [x] Swallow 70B 모델(`swallow-3-70b`, `swallow-3-70b-instruct`) 벤치마크 점수 등록
- [x] LLM-jp-3 논문 출처 URL 오류 확인 및 이슈 제기

## 조사 내역
- 01:30 JMMLU, JHumanEval 벤치마크 부재 확인 및 생성 ← https://github.com/nlp-waseda/JMMLU, https://github.com/shunk031/JHumanEval
- 01:35 Swallow 70B 모델 벤치마크 점수 수집 ← https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-v0.1, https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1
- 01:40 LLM-jp-3 모델의 paper URL(2411.08502)이 양자 컴퓨팅 논문임을 발견하여 오기재 확인 ← https://arxiv.org/abs/2411.08502

## 수행한 작업
- [x] JMMLU, JHumanEval 벤치마크 `create`
- [x] `swallow-3-70b` 점수 7건 등록 (JMMLU, MGSM-ja, JHumanEval, MMLU, GSM8K, BBH, HumanEval) ← https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-v0.1
- [x] `swallow-3-70b-instruct` 점수 7건 등록 (JMMLU, MGSM-ja, JHumanEval, MMLU, GSM8K, BBH, HumanEval) ← https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1

## 판단 / 고민
- Llama-3-Swallow-70B 모델의 Hugging Face 공식 모델 카드에서 MMLU 등 기본 벤치마크와 일본어 특화 벤치마크(JMMLU, JHumanEval, MGSM-ja) 점수를 확인하여 등록함.
- 이전 작업에서 LLM-jp-3 모델에 추가된 논문 링크가 실제로는 관련 없는 양자 컴퓨팅 논문임을 확인하여 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-10-16-collect-benchmark-llm-jp-3-paper.md
