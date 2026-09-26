---
benchmarkId: fim
domain: llm
status: draft
updated: 2026-09-26
sources:
  - https://arxiv.org/abs/2207.14255
organization: openai
paperUrl: https://arxiv.org/abs/2207.14255
highlights:
  - "Autoregressive language models can learn to infill text after we apply a straightforward transformation to the dataset"
  - "Simply moves a span of text from the middle of a document to its end"
---

# Fill-in-the-Middle (FIM)

## 개요
이 벤치마크는 자기회귀 언어 모델이 문서 중간의 텍스트를 채워 넣는(infill) 능력을 평가합니다. 이는 문서 중간에 있는 텍스트 구간을 문서 끝으로 옮기는 간단한 데이터셋 변환 기법을 통해 이루어집니다. FIM(Fill-in-the-Middle) 방식은 모델 학습 과정에서 데이터를 효율적으로 재구성하여 문맥을 파악하고 누락된 부분을 생성할 수 있게 합니다.

## 평가 방법
이 벤치마크는 FIM 훈련을 적용한 후, 퍼플렉서티(perplexity) 및 샘플링 평가(sampling evaluations)를 통해 모델이 원래 가진 왼쪽에서 오른쪽으로 텍스트를 생성하는 능력(left-to-right generative capability)이 손상되지 않고 유지되는지를 측정합니다. 데이터 변환 빈도, 변환 구조, 인필링(infill) 구간 선택 방법 등 주요 하이퍼파라미터에 대한 광범위한 실험을 통해 최적의 학습 환경을 제안합니다.

## 의의 및 활용
연구진은 문서의 일부를 끝으로 이동시키는 데이터 증강 기법이 텍스트 생성 능력에 악영향을 주지 않으면서도 모델의 활용도를 크게 높인다는 사실을 입증했습니다. 그 결과, 향후 자기회귀 기반 언어 모델 학습 시 기본 설정으로 FIM 방식을 채택하는 것을 권장하며, 관련된 최적의 실무(best practices)와 평가 벤치마크를 함께 제공하여 후속 연구를 지원합니다.
