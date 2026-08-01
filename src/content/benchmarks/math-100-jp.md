---
benchmarkId: math-100-jp
domain: llm
status: published
updated: 2026-08-01
sources:
  - https://arxiv.org/abs/2502.17407
paperUrl: https://arxiv.org/abs/2502.17407
highlights:
  - "다국어 수학적 추론 능력을 평가하는 경기 수준 벤치마크"
---

# MATH-100 (Japanese)

## 개요
MATH-100(MCLM)은 언어 모델의 복잡한 수학적 추론 능력을 평가하기 위해 고안된 다국어 벤치마크입니다. 영어로 된 기존 AIME 및 MATH-500과 같은 높은 난이도의 경쟁 수학 수준 문제들을 55개 언어로 확장하여 구성되었으며, 여기에는 일본어도 포함됩니다. 이를 통해 모델이 다국어 환경에서도 복잡한 수학적 문제를 일관되게 해결할 수 있는지를 확인합니다.

## 평가 방법
이 벤치마크는 주로 테스트 타임 스케일링(Test-Time Scaling) 기법들이 다국어 환경에서 얼마나 잘 일반화되는지를 평가하는 데 사용됩니다. Outcome Reward Modeling (ORM), Process Reward Modeling (PRM), Budget Forcing (BF) 등의 기법을 적용해 성능 변화를 측정합니다.

## 성능 해석 및 한계
연구 결과에 따르면, 테스트 타임 스케일링 기법들이 영어에서는 큰 성능 향상을 가져오지만 다국어 환경에서는 그 효과가 일관되지 않고 미미한 것으로 나타났습니다. 예를 들어, Budget Forcing 기법을 적용했을 때 영어 AIME에서는 20점 향상되었지만 다른 언어들에서는 평균 1.94점 상승하는 데 그쳤습니다. Qwen2.5-1.5B Math 모델에 ORM을 적용했을 때 MCLM에서 35.8점을 달성하였고, MR1-1.5B 모델에 BF를 적용했을 때 35.2점을 기록했습니다. 이는 최신 모델과 테스트 타임 스케일링 기법들이 영어 외의 언어에서는 여전히 교차 언어 추론의 한계를 보인다는 점을 시사합니다.
