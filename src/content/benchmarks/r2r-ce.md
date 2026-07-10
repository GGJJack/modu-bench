---
benchmarkId: r2r-ce
domain: llm
status: published
updated: 2026-07-10
organization: mistralai
sources:
  - https://mistral.ai/news/robostral-navigate/
highlights:
  - "단일 RGB 카메라를 이용한 자율 주행 로봇 내비게이션 성능 평가"
  - "Validation Seen 및 Unseen 환경에서의 Success Rate 측정"
---

# R2R-CE

## 개요
R2R-CE 벤치마크는 자율 주행 로봇 모델의 내비게이션 성능을 평가하기 위한 지표입니다. Mistral AI의 Robostral Navigate 모델 등의 성능을 검증하는 데 사용되며, 단일 RGB 카메라만으로 LiDAR나 깊이 센서 없이 작동하는 모델의 공간 인식 능력을 테스트합니다.

## 평가 방법
로봇이 주어진 목표에 얼마나 성공적으로 도달하는지를 Validation Seen과 Validation Unseen 환경에서 Success Rate(성공률)를 통해 평가합니다.
