---
benchmarkId: mmlu
domain: llm
status: published
updated: 2026-04-27
sources:
  - https://arxiv.org/abs/2009.03300
  - https://crfm.stanford.edu/helm/mmlu/latest/
paperUrl: https://arxiv.org/abs/2009.03300
highlights:
  - "57 diverse tasks"
---

# MMLU

## 개요
MMLU(Massive Multitask Language Understanding)는 대규모 언어 모델의 지식 획득, 추론 능력, 도메인 일반화 능력을 평가하기 위한 벤치마크입니다. 57개의 다양한 학문 및 전문 분야(기초 수학, 미국 역사, 컴퓨터 과학, 법률, 윤리, 의학 등)에 걸친 객관식 질문으로 구성되어 있습니다.

## 평가 방법
기본적인 수학부터 전문가 수준의 지식까지 포괄하는 고정된 형식의 객관식 테스트를 통해 평가가 이루어집니다.

## 한계와 비판
최근 모델들이 랜덤 확률을 훨씬 상회하는 점수를 기록하고 있으나, 특정 작업에서는 아직 인간 전문가 수준의 정확도에 도달하기 위해 추가적인 발전이 필요하다는 지적이 있습니다. 일부 사회적으로 중요한 주제(도덕, 법률 등)에서는 여전히 저조한 정확도를 보입니다.
