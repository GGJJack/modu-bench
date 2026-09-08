---
benchmarkId: math-500
domain: llm
status: draft
updated: 2026-09-08
sources:
  - https://github.com/hendrycks/math
  - https://arxiv.org/pdf/2103.03874
organization: hendrycks-lab
paperUrl: https://arxiv.org/abs/2103.03874
highlights:
  - "MATH 데이터셋에서 엄선된 500개의 대표 문제로 구성된 벤치마크"
  - "다양한 난이도와 수학 분야(대수학, 기하학, 정수론 등) 포함"
---

# MATH-500

## 개요
MATH-500은 광범위한 수학 문제를 포함하는 기존 MATH 데이터셋(Measuring Mathematical Problem Solving With the MATH Dataset)의 크기와 평가 비용을 줄이기 위해, 대표성을 띠는 500개의 문제를 선별하여 구성한 벤치마크입니다. Hendrycks 연구진에 의해 처음 소개된 MATH 데이터셋의 핵심 난이도와 문제 분포를 유지하면서도, 빠른 모델 평가와 비교가 가능하도록 설계되었습니다.

## 평가 방법
기존 MATH 데이터셋과 동일하게 다양한 수학 분야(대수학, 기하학, 정수론, 확률 등)의 문제들이 포함되어 있으며, 모델이 제시한 답변이 정답과 일치하는지를 기준으로 정답률(%)을 측정합니다. 문제 해결 과정에서의 수학적 추론 능력과 기호 처리 정확성이 중요한 평가 요소로 작용합니다.

## 점수 해석
점수는 0에서 100 사이의 퍼센트(%)로 표시되며, 점수가 높을수록 수학적 문제 해결 능력이 우수함을 나타냅니다. 전체 데이터셋을 사용한 결과와 높은 상관관계를 가지므로, 효율적인 모델 성능 지표로 널리 사용됩니다.
