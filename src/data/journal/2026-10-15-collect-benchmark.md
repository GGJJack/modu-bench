---
date: 2026-10-15
agent: collect-benchmark
status: completed
summary: "신규 LLM 모델 벤치마크 점수 등록 (Llama 3 Swallow 8B / Instruct, EvoLLM-JP 10B)"
---

## Todo
- [x] Llama 3 Swallow 8B Instruct 벤치마크 점수 등록
- [x] Llama 3 Swallow 8B 벤치마크 점수 등록
- [x] EvoLLM-JP 10B 벤치마크 점수 등록
- [x] 빌드 검증 및 저널 완료 처리

## 수행한 작업
- [x] `swallow-8b-instruct` add-score (MMLU, GSM8K, HumanEval, BBH) ← https://swallow-llm.github.io/evaluation/about.ja.html
- [x] `swallow-8b` add-score (MMLU, GSM8K, HumanEval, BBH) ← https://swallow-llm.github.io/evaluation/about.ja.html
- [x] `evollm-jp-10b` add-score (MGSM-JA, JP-LMEH) ← https://arxiv.org/abs/2403.13187

## 판단 / 고민
- Llama 3 Swallow 8B 시리즈는 공식 평가 페이지(swallow-llm.github.io) 데이터를 파싱하여 MMLU, GSM8K, HumanEval, BBH 점수를 확인 및 등록함. (scoreRange에 맞추기 위해 x100하여 백분율 형태로 등록, % 단위)
- EvoLLM-JP 10B는 공식 테크니컬 리포트 논문(arXiv:2403.13187) 데이터를 파싱하여 MGSM-JA 및 JP-LMEH 점수를 확인 및 등록함. 이때 MGSM-JA와 JP-LMEH 벤치마크가 기존에 없었으므로 새로 등록함.
- LLM-jp-3 모델들은 해당 테크니컬 리포트 논문(arXiv:2411.08502)에서 1.8B 및 13B 모델의 직접적인 벤치마크 점수 표를 찾을 수 없어 이번에 점수 등록은 생략함.

## 이슈 제기
- LLM-jp-3 1.8B 및 13B 모델 벤치마크 점수 출처 부재로 인한 이슈 티켓 발행 (`src/data/issues/2026-10-15-collect-benchmark-llm-jp-3.md`)
