---
benchmarkId: kobest-hellaswag
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
  - "문맥에 이어질 가장 자연스러운 문장을 선택하는 상식 추론 평가"
  - "KoBEST (Korean Balanced Evaluation of Significant Tasks) 벤치마크의 일부"
---

# KoBEST-HellaSwag

## 개요
KoBEST-HellaSwag는 한국어 언어 모델의 상식 추론 능력을 평가하는 벤치마크입니다. 영어로 된 HellaSwag 데이터셋의 한국어 버전과 같은 성격을 가지며, KoBEST 벤치마크 스위트의 일부로 제공됩니다. 주어진 문맥 다음에 이어질 가장 자연스러운 상황을 객관식 보기 중에서 선택하는 능력을 측정합니다.

## 평가 방법
모델은 어떤 상황을 묘사하는 문맥(context) 문장을 입력으로 받습니다. 그리고 이어서 발생할 가능성이 가장 높은 결말(ending)을 4개의 선택지(ending_1 ~ ending_4) 중에서 골라야 합니다. 정답은 0부터 3까지의 레이블로 주어지며, 모델은 한국어 상식과 문맥 흐름을 이해하여 가장 타당한 결말을 예측해야 합니다.

## 점수 해석
점수는 백분율(%) 단위로 측정되며, 전체 문제 중에서 모델이 올바른 결말을 선택한 비율을 의미합니다. 점수가 높을수록 일상적인 상황과 상식에 대한 이해도가 높음을 나타냅니다.

## 한계와 비판
모델이 진정한 상식적 인과관계를 이해했다기보다는 데이터셋 내의 표면적인 언어 패턴이나 통계적 분포에 의존하여 정답을 맞출 위험이 있습니다. 이는 모델의 실제 상식 추론 능력을 과대평가하게 만들 수 있습니다.
