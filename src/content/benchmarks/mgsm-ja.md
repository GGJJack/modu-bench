---
benchmarkId: mgsm-ja
domain: llm
status: published
updated: 2026-10-15
sources:
  - https://arxiv.org/abs/2210.03057
  - https://huggingface.co/datasets/juletxara/mgsm
paperUrl: https://arxiv.org/abs/2210.03057
---

# MGSM (Japanese)

Multilingual Grade School Math (Japanese subset)

## 개요
MGSM(Multilingual Grade School Math)은 "Language Models are Multilingual Chain-of-Thought Reasoners" 논문(2022)에서 제안된 다국어 초등 수학 문제 벤치마크입니다. GSM8K 데이터셋의 250개 문제를 일본어를 포함한 10개 언어로 번역하여 언어 모델의 다국어 추론 능력을 평가합니다.

## 평가 방법
언어 모델이 주어진 일본어 수학 단어 문제를 풀고 올바른 최종 답변을 도출할 수 있는지 정확도를 측정합니다.
