---
benchmarkId: kobest-sentineg
domain: llm
status: published
updated: 2026-08-16
sources:
  - https://huggingface.co/datasets/skt/kobest_v1
organization: skt
highlights:
  - "한국어 텍스트의 감성을 긍정 또는 부정으로 분류하는 이진 분류 과제"
  - "SKT에서 구축한 KoBEST 벤치마크의 일환으로 제공"
  - "총 3,649개의 학습 데이터와 397개의 평가 데이터를 포함"
---

# KoBEST-SentiNeg

## 개요
KoBEST-SentiNeg는 SK Telecom(SKT)에서 한국어 언어 모델의 성능을 평가하기 위해 구축한 KoBEST(Korean Benchmark of Spoken/Written Text) 데이터셋의 하위 태스크 중 하나입니다. 이 벤치마크는 주어진 한국어 문장의 감성을 '긍정(Positive)' 또는 '부정(Negative)'으로 분류하는 능력을 평가합니다.

## 평가 방법
평가는 주어진 문장(sentence)에 대해 모델이 긍정(1) 또는 부정(0)을 나타내는 라벨을 정확하게 예측하는지를 기준으로 이루어집니다. 정확도(Accuracy) 퍼센트(%)를 지표로 사용하며, 점수가 높을수록 더 좋은 성능을 나타냅니다.

## 데이터 구성
데이터셋은 주로 학습(train) 3,649개, 개발(dev) 400개, 테스트(test) 397개의 데이터로 구성되어 있습니다. 각 데이터 인스턴스는 한국어 문장 텍스트와 그에 해당하는 이진 분류 라벨 쌍으로 제공되어, 모델이 감성 분석을 효과적으로 학습하고 평가받을 수 있도록 설계되었습니다.
