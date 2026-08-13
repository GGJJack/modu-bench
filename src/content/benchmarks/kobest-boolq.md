---
benchmarkId: kobest-boolq
domain: llm
status: published
updated: 2026-08-14
sources:
  - https://huggingface.co/datasets/skt/kobest_v1
  - https://arxiv.org/abs/2204.04541
  - https://github.com/SKT-LSL/KoBEST_datarepo
organization: sk-telecom
paperUrl: https://arxiv.org/abs/2204.04541
highlights:
  - "한국어 독해 능력을 평가하는 예/아니오 질의응답"
  - "KoBEST (Korean Balanced Evaluation of Significant Tasks) 벤치마크의 일부"
---

# KoBEST-BoolQ

## 개요
KoBEST-BoolQ는 한국어 언어 모델의 독해 능력을 평가하기 위한 벤치마크입니다. KoBEST(Korean Balanced Evaluation of Significant Tasks) 벤치마크 스위트의 5개 하위 태스크 중 하나로, 주어진 단락(paragraph)과 질문(question)에 대해 참(True) 또는 거짓(False)으로 답변하는 능력을 측정합니다.

## 평가 방법
모델은 짧은 단락과 그에 대한 질문을 입력받습니다. 질문은 단락의 내용에 기반하여 예(True, 1) 또는 아니오(False, 0)로 답할 수 있는 형태로 구성됩니다. 모델은 단락의 맥락을 정확히 이해하고 올바른 답변을 도출해야 합니다.

## 점수 해석
점수는 백분율(%) 단위로 제공되며, 전체 질문 중 모델이 올바른 답변(참/거짓)을 맞춘 비율을 의미합니다. 점수가 높을수록 모델의 한국어 독해 및 논리적 추론 능력이 우수함을 나타냅니다.

## 한계와 비판
참/거짓이라는 이분법적인 답변만을 요구하기 때문에, 모델이 복잡한 서술형 답변을 생성하거나 뉘앙스를 파악하는 능력을 평가하기에는 부족합니다. 또한, 질문과 단락이 상대적으로 짧아 깊이 있는 장문 독해 능력을 측정하기에는 한계가 있습니다.
