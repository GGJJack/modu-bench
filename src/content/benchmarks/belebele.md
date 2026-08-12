---
benchmarkId: belebele
domain: llm
status: published
updated: 2026-08-12
sources:
  - https://arxiv.org/abs/2308.16884
  - https://github.com/facebookresearch/belebele
organization: meta
paperUrl: https://arxiv.org/abs/2308.16884
highlights:
  - "122개 언어 변형을 지원하는 다국어 기계 독해 벤치마크"
  - "병렬 다국어 데이터셋"
---

# Belebele

## 개요
Belebele은 대규모 언어 모델의 다국어 텍스트 이해 능력을 평가하기 위해 설계된 다국어 독해(Reading Comprehension) 데이터셋입니다. 122개 언어 변형(Language variants)을 지원하며 모델이 각 언어에 대해 문맥을 이해하고 질문에 답하는 능력을 평가합니다.

## 평가 방법
다양한 언어로 작성된 텍스트와 그에 대응하는 질문들이 주어지면, 모델은 문맥을 정확히 파악하고 올바른 답변을 제시해야 합니다. 병렬 데이터셋 형태로 구성되어 여러 언어에 대한 동등한 평가가 가능합니다.

## 논문 요약
We present Belebele, a multiple-choice machine reading comprehension (MRC) dataset spanning 122 language variants. Significantly expanding the language coverage of natural language understanding (NLU) benchmarks, this dataset enables the evaluation of text models in high-, medium-, and low-resource languages. Each question is based on a short passage from the Flores-200 dataset and has four multiple-choice answers. The questions were carefully curated to discriminate between models with different levels of general language comprehension. The English dataset on its own proves difficult enough to challenge state-of-the-art language models. Being fully parallel, this dataset enables direct comparison of model performance across all languages. We use this dataset to evaluate the capabilities of multilingual masked language models (MLMs) and large language models (LLMs). We present extensive results and find that despite significant cross-lingual transfer in English-centric LLMs, much smaller MLMs pretrained on balanced multilingual data still understand far more languages. We also observe that larger vocabulary size and conscious vocabulary construction correlate with better performance on low-resource languages. Overall, Belebele opens up new avenues for evaluating and analyzing the multilingual capabilities of NLP systems.
