---
benchmarkId: fim
domain: llm
status: draft
updated: 2026-09-25
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
이 벤치마크는 자기회귀 언어 모델이 문서 중간의 텍스트를 채워 넣는(infill) 능력을 평가합니다. 이는 문서 중간에 있는 텍스트 구간을 문서 끝으로 옮기는 간단한 데이터셋 변환 기법을 통해 이루어집니다.

## 평가 방법
이 벤치마크는 FIM 훈련을 적용한 후, 퍼플렉서티(perplexity) 및 샘플링 평가(sampling evaluations)를 통해 모델이 원래 가진 왼쪽에서 오른쪽으로 텍스트를 생성하는 능력(left-to-right generative capability)이 손상되지 않고 유지되는지를 측정합니다. 이를 통해 FIM 데이터 변환 방법의 효용성을 확인합니다.
