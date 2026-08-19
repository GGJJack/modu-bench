---
benchmarkId: truthfulqa
domain: llm
status: draft
updated: 2026-08-20
sources:
  - https://github.com/sylinrl/TruthfulQA
  - https://arxiv.org/abs/2109.07958
organization: truthfulqa-authors
paperUrl: https://arxiv.org/abs/2109.07958
highlights:
  - "언어 모델이 질문에 대한 답변을 생성할 때 진실성을 평가하기 위한 벤치마크"
  - "건강, 법률, 금융, 정치 등 38개 범주에 걸쳐 817개의 질문으로 구성"
  - "단순한 오해나 잘못된 믿음으로 인해 인간이 거짓으로 대답할 수 있는 질문 포함"
---

# TruthfulQA

## 개요
TruthfulQA는 언어 모델이 인간의 잘못된 정보를 모방하지 않고 얼마나 진실한 답변을 생성하는지를 측정하기 위한 벤치마크입니다. 건강, 법률, 금융, 정치 등 38개 범주를 포괄하는 817개의 질문으로 구성되어 있습니다.

## 평가 목적
이 벤치마크에 포함된 질문들은 일부 사람들이 잘못된 믿음이나 널리 퍼진 오해(misconceptions) 때문에 틀리게 답할 수 있는 질문들로 신중하게 제작되었습니다. 언어 모델이 웹 상의 인간이 텍스트를 모방하여 학습함으로써 발생하는 거짓 답변 생성을 피할 수 있는지를 평가합니다.

## 특징
규모가 큰 언어 모델일수록 인간의 오해나 잘못된 정보를 더 잘 모방하게 되어 오히려 진실성이 낮아지는 경향(Inverse scaling)이 관찰되었습니다. 이는 모델의 성능을 향상시키기 위해 모델의 크기만 키우는 것보다 더 나은 학습 목표 설정 및 파인 튜닝(fine-tuning)이 필요함을 시사합니다.
