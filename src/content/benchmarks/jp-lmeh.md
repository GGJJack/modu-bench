---
benchmarkId: jp-lmeh
domain: llm
status: published
updated: 2026-10-21
sources:
  - https://github.com/Stability-AI/lm-evaluation-harness
organization: stability-ai
highlights:
  - "Stability AI가 제공하는 일본어 언어 모델 평가 프레임워크"
  - "JCommonsenseQA, JNLI, MARC-ja 등 주요 데이터셋 포괄"
---

# JP-LMEH

## 개요
JP-LMEH(Japanese Language Model Evaluation Harness)는 Stability AI에서 제공하는 일본어 대규모 언어 모델의 성능 평가를 위한 하네스(harness)입니다. JCommonsenseQA, JNLI, MARC-ja, JSQuAD 등 여러 주요 평가 데이터셋들을 포괄하여 퓨샷(few-shot) 평가를 일괄 수행할 수 있도록 구성되어 있습니다.

## 평가 방법
Autoregressive 언어 모델을 대상으로 프롬프트 템플릿(prompt template)을 설정한 후 퓨샷(few-shot) 환경에서 모델의 응답 성능을 측정합니다. 다양한 일본어 특화 데이터셋을 통합하여 한 번의 스크립트 실행(harness.sh)으로 일괄 평가합니다.

## 점수 해석
통합된 각 데이터셋의 기준(예: 정확도)에 맞춰 점수가 집계되며, 전체적으로 높은 점수는 모델의 전반적인 일본어 추론 및 이해 능력이 우수함을 나타냅니다.

## 한계와 비판
프레임워크 자체이므로 데이터셋 고유의 편향성이나 오류를 그대로 상속받을 수 있으며, 프롬프트 템플릿의 형식에 따라 모델의 성능이 민감하게 변동될 수 있습니다.
