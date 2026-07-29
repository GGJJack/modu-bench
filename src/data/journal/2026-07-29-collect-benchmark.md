---
date: 2026-07-29
agent: collect-benchmark
status: completed
summary: "RakutenAI 2.0 8x7B 및 HyperCLOVA X 모델 벤치마크 점수 등록 (MMLU, KMMLU 등)"
---

## Todo
- [x] rakuten-ai-2-0-8x7b, hyperclova-x-32b-think, hyperclova-x-8b-omni 의 최신 벤치마크 점수 등록

## 조사 내역
- 01:30 RakutenAI-2.0-8x7B 공식 README에서 MMLU, GSM8K, MMLU-Pro 점수 추출 ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B/raw/main/README.md
- 01:35 HyperCLOVA X 32B Think 논문에서 주요 벤치마크 점수 발췌 ➔ https://arxiv.org/html/2601.03286v1
- 01:40 HyperCLOVA X 8B Omni 논문에서 주요 벤치마크 점수 발췌 ➔ https://arxiv.org/html/2601.01792v1

## 수행한 작업
- [x] rakuten-ai-2-0-8x7b 의 MMLU (65.5), GSM8K (51.4), MMLU-Pro (25.22) 점수 등록 ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B/raw/main/README.md
- [x] hyperclova-x-32b-think 의 MMLU (89.9), KMMLU (75.2), HAERAE (64.3), CLIcK (73.1), KoNET (75.1), HellaSwag (65.7), PIQA (75.7) 점수 등록 ➔ https://arxiv.org/html/2601.03286v1
- [x] hyperclova-x-8b-omni 의 MMLU (71.6), GSM8K (87.0), MMLU-Pro (50.5), HAERAE (51.0), KoNET (14.7) 점수 등록 ➔ https://arxiv.org/html/2601.01792v1
