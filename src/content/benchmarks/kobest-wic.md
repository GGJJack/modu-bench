---
benchmarkId: kobest-wic
domain: llm
status: published
updated: 2026-08-16
sources:
  - https://huggingface.co/datasets/skt/kobest_v1
  - https://arxiv.org/abs/2204.04541
  - https://github.com/SKT-LSL/KoBEST_datarepo
organization: sk-telecom
paperUrl: https://arxiv.org/abs/2204.04541
highlights:
  - "문맥 속 단어의 의미 일치 여부를 판별하는 평가"
  - "KoBEST (Korean Balanced Evaluation of Significant Tasks) 벤치마크의 일부"
---

# KoBEST-WiC

## 개요
KoBEST-WiC(Words-in-Context)는 한국어 언어 모델이 문맥 속에서 단어의 의미를 정확하게 파악하는지 평가하기 위한 벤치마크입니다. KoBEST 벤치마크 스위트의 5개 하위 태스크 중 하나로, 동일한 단어가 두 개의 서로 다른 문장에서 쓰였을 때 그 의미가 일치하는지를 판별합니다.

## 평가 방법
모델은 하나의 대상 단어(target word)와 그 단어가 포함된 두 개의 문맥 문장(context_1, context_2)을 입력으로 받습니다. 모델은 두 문장에서 대상 단어가 동일한 의미로 사용되었는지(True, 1) 아니면 다른 의미로 사용되었는지(False, 0)를 예측해야 합니다.

## 점수 해석
점수는 백분율(%) 단위로 제공되며, 모델이 단어의 의미 일치 여부를 올바르게 예측한 비율을 나타냅니다. 높은 점수는 모델이 문맥에 따른 다의어의 미세한 의미 차이를 잘 구분하고 이해할 수 있음을 의미합니다.

## 한계와 비판
두 문장의 의미가 정확히 일치하는지를 이분법적으로 판단해야 하므로, 의미의 미묘한 확장이나 은유적 표현이 포함된 복잡한 문맥에서는 평가의 한계가 있을 수 있습니다.
