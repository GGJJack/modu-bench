---
benchmarkId: fid
domain: image-gen
status: published
updated: 2026-05-03
sources:
  - https://arxiv.org/abs/1706.08500
paperUrl: https://arxiv.org/abs/1706.08500
highlights:
  - "생성된 이미지와 실제 이미지 분포 간의 유사성 평가"
  - "Inception Score 보다 사람의 평가와 잘 부합함"
---

# FID (Fréchet Inception Distance)

## 개요
FID(Fréchet Inception Distance)는 생성적 적대 신경망(GAN)과 같은 모델들이 생성한 이미지의 품질을 평가하기 위해 도입된 벤치마크 지표입니다. 생성된 이미지가 실제 이미지와 얼마나 유사한지 측정하며, 이전의 Inception Score 지표의 한계를 극복하기 위해 설계되었습니다.

## 평가 방법
생성된 이미지 세트와 실제 이미지 세트를 특정 신경망(보통 Inception-v3)에 통과시켜 추출한 특성 벡터(feature map)의 통계적 분포(평균 및 공분산)를 비교합니다. 이 두 분포 사이의 Fréchet 거리를 계산한 값이 FID 점수가 되며, 점수가 낮을수록 생성된 이미지가 실제 이미지의 분포에 더 가깝고 품질이 높음을 의미합니다.

## 한계점 및 특징
Inception Score에 비해 실제 이미지 분포를 직접 비교하여 계산하기 때문에, 모드 붕괴(mode collapse) 현상을 더 잘 탐지하고 사람이 느끼는 시각적 품질과 상관관계가 높습니다. 그러나 특성 추출기로 사용되는 모델 구조 자체 편향의 영향을 받을 수 있습니다.
