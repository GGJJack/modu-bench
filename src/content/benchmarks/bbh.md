---
benchmarkId: bbh
domain: llm
status: published
updated: 2026-08-11
sources:
  - https://arxiv.org/abs/2210.09261
  - https://huggingface.co/datasets/Joschka/big_bench_hard
organization: google-research
paperUrl: https://arxiv.org/abs/2210.09261
highlights:
  - "BIG-Bench에서 언어 모델이 인간 평가자 평균을 넘지 못한 23개 난제 세트"
  - "Chain-of-Thought (CoT) 프롬프팅 적용 시 모델 성능 평가에 유용"
---

# BBH (BIG-Bench Hard)

## 개요
BIG-Bench Hard (BBH)는 BIG-Bench 협력 벤치마크 중 기존 언어 모델들이 인간 평가자의 평균 성능을 뛰어넘지 못한 23개의 어려운 과제들로 구성된 평가 세트입니다. 산술 다단계 계산, 논리적 추론, 날짜 이해 등 다양한 분야의 난제를 포함하고 있습니다.

## 평가 방법
BBH는 모델이 복잡한 다단계 추론을 수행할 수 있는지를 중점적으로 평가합니다. 특히 Chain-of-Thought (CoT) 프롬프팅 기법을 적용했을 때 모델의 성능이 얼마나 향상되는지를 분석하는 데 널리 활용됩니다. 원본 논문에서는 CoT 프롬프팅을 통해 PaLM과 Codex 모델이 여러 과제에서 인간 수준을 넘어서는 결과를 보여주었습니다.

## 점수 해석
점수는 백분율(%) 단위로 제공되며, 높을수록 좋습니다. 각 과제별 정확도를 측정하여 평균을 내거나 특정 논리적 작업에 대한 모델의 적성을 판단하는 지표로 사용됩니다.

## 한계와 비판
모델의 크기와 CoT 프롬프팅 기법에 따라 성능 편차가 크게 나타날 수 있습니다. 또한, 평가 세트가 비교적 소규모이므로 모델의 전체 추론 능력을 100% 대변하기에는 한계가 있을 수 있습니다.
