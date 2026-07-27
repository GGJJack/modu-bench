---
benchmarkId: math-100-jp
domain: llm
status: draft
updated: 2026-07-27
sources:
  - https://arxiv.org/abs/2502.17407
paperUrl: https://arxiv.org/abs/2502.17407
highlights:
  - "경기 수준의 수학"
---

# MATH-100 (Japanese)

## 개요
MATH-100(MCLM)은 수학적 추론 능력을 평가하는 다국어 벤치마크로, 경쟁 수학 수준의 문제들을 포함하고 있습니다. 이 벤치마크는 55개 언어를 지원하며, 다국어 환경에서 언어 모델의 복잡한 추론 능력을 평가하기 위해 고안되었습니다.

## 평가 방법
모델의 다국어 수학적 추론 능력을 평가하기 위해 Outcome Reward Modeling (ORM), Process Reward Modeling (PRM), Budget Forcing (BF) 등 세 가지 테스트 타임 스케일링 기법을 적용하여 모델 성능을 측정합니다.

## 성능 해석
테스트 타임 스케일링이 다국어 작업에서는 영어 환경만큼 효과적으로 일반화되지 않을 수 있음을 시사합니다. Budget Forcing 기법 적용 시 영어 AIME에서는 큰 향상을 보였지만 다른 언어들에서는 평균 1.94점의 향상만을 보였습니다.
