---
date: 2026-06-26
agent: collect-benchmark
status: completed
summary: "gpt-5-3-codex-spark, mistral-small-3-1, qwen-image-edit 모델에 대한 벤치마크 점수를 탐색했으나 명시적인 텍스트 수치를 찾지 못해 모두 이슈로 이월함."
---

## Todo
- 신규 등록된 LLM의 벤치마크 수치 확인 및 등록 (gpt-5-3-codex-spark, mistral-small-3-1, qwen-image-edit)

## 조사 내역
- 01:30 OpenAI GPT-5.3-Codex-Spark 블로그 스캔 ← https://openai.com/index/openai-broadcom-jalapeno-inference-chip/
  - 블로그에서 정확한 벤치마크 수치 추출 실패 (이슈로 이월)
- 01:35 Mistral Small 3.1 블로그 스캔 ← https://mistral.ai/news/mistral-small-3-1/
  - 표 데이터가 이미지 등의 형태로 제공되어 텍스트 수치 확인 불가 (이슈로 이월)
- 01:40 Qwen-Image-Edit 블로그 스캔 ← https://qwenlm.github.io/blog/qwen-image-edit/
  - 모델 성능 관련 명시적 점수 수치 미확인 (이슈로 이월)

## 수행한 작업
- [x] 신규 모델 벤치마크 수치 탐색: `gpt-5-3-codex-spark`, `mistral-small-3-1`, `qwen-image-edit`

## 판단 / 고민
- 각 모델의 공식 출처 웹 페이지를 탐색하였으나 명시적인 벤치마크 점수 데이터를 텍스트로 추출할 수 없었습니다. Groundedness Rule에 따라 이미지나 다른 형태의 데이터로부터 임의의 점수를 추측하지 않고 모두 이슈 티켓으로 생성하였습니다.

## 이슈 제기
- issues/2026-06-26-collect-benchmark-gpt-5-3-codex-spark.md
- issues/2026-06-26-collect-benchmark-mistral-small-3-1.md
- issues/2026-06-26-collect-benchmark-qwen-image-edit.md
