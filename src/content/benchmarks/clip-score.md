---
benchmarkId: clip-score
domain: image-gen
status: published
updated: 2026-05-04
sources:
  - https://arxiv.org/abs/2104.08718
paperUrl: https://arxiv.org/abs/2104.08718
highlights:
  - "텍스트 프롬프트와 생성 이미지 간 의미적 유사도 평가"
  - "참조 이미지가 필요 없는(reference-free) 자동화 평가 지표"
---

# CLIP Score

## 개요
CLIP Score는 텍스트 프롬프트와 생성된 이미지 간의 의미적 정합성을 평가하는 지표입니다. 이미지 캡셔닝 및 텍스트-이미지 생성 모델의 결과물에 대해 인간의 판단과 높은 상관관계를 보여줍니다.

## 평가 방법
대규모 이미지-텍스트 쌍(약 4억 개)으로 사전 학습된 CLIP(Contrastive Language-Image Pre-training) 모델을 사용합니다. 생성된 이미지와 텍스트 프롬프트를 각각 CLIP의 이미지 인코더와 텍스트 인코더에 통과시켜 임베딩 벡터를 추출하고, 두 벡터 간의 코사인 유사도를 계산하여 점수를 산출합니다. 참조용 정답 이미지 없이도(reference-free) 평가가 가능하다는 점이 특징입니다.
