---
benchmarkId: kobest-copa
domain: llm
status: published
updated: 2026-08-15
sources:
  - https://huggingface.co/datasets/skt/kobest_v1
organization: skt-lsl
paperUrl: https://arxiv.org/abs/2204.04541
highlights:
  - "한국어 인과관계 추론 능력 평가"
  - "주어진 전제에 대한 원인 또는 결과를 두 개의 대안 중 선택"
  - "Train: 3,076 / Dev: 1,000 / Test: 1,000"
---

# KoBEST-COPA

## 개요
KoBEST(Korean Balanced Evaluation of Significant Tasks)-COPA는 한국어 언어 모델의 상식적인 인과관계 추론 능력을 평가하기 위한 벤치마크입니다. 영어로 된 COPA (Choice of Plausible Alternatives) 데이터셋의 형식을 차용하여 한국어 데이터로 구성되었습니다. 모델은 주어진 전제(premise)와 질문(question, 원인 또는 결과)을 바탕으로 두 개의 대안(alternative_1, alternative_2) 중 논리적으로 타당한 하나를 선택해야 합니다.

## 평가 방법
평가는 모델에게 전제와 질문을 제시하고, 두 가지 대안 중 올바른 것을 선택하도록 하는 이진 분류(Binary Classification) 형태로 진행됩니다. 질문은 주로 '결과' 또는 '원인'을 묻는 형태로 구성됩니다.
데이터셋은 학습용(Train) 3,076개, 검증용(Dev) 1,000개, 평가용(Test) 1,000개로 구성되어 있습니다.

## 점수 해석
점수는 전체 질문 중 모델이 올바른 대안을 선택한 비율(정확도, %)로 계산됩니다. 점수가 높을수록 모델이 한국어로 된 상황에 대한 원인과 결과를 논리적으로 잘 추론하고 상식에 부합하는 판단을 내릴 수 있음을 의미합니다. (0~100%)
