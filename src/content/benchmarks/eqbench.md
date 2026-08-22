---
benchmarkId: eqbench
domain: llm
status: published
updated: 2026-08-22
sources:
  - https://github.com/eq-bench/eq-bench
  - https://arxiv.org/abs/2312.06281
organization: samuel-paech
paperUrl: https://arxiv.org/abs/2312.06281
highlights:
  - "대규모 언어 모델(LLM)의 감성 지능(Emotional Intelligence)을 평가하기 위한 벤치마크"
  - "대화 상황 속 캐릭터의 감정 강도를 예측하여 감정 이해 및 사회적 인지 능력 측정"
  - "MMLU 등 다른 종합 벤치마크와 높은 상관관계(r=0.97)를 보임"
---

# EQ-Bench

## 개요
EQ-Bench는 대규모 언어 모델(LLM)의 감성 지능(Emotional Intelligence)을 평가하기 위해 설계된 벤치마크입니다. 모델이 복잡한 감정과 사회적 상호작용을 얼마나 잘 이해하는지 평가합니다.

## 평가 방법
대화 시나리오가 주어지면, 모델은 대화 속 캐릭터의 가능한 감정적 반응의 강도를 특정 형식으로 예측하여 평가받습니다.
이전 버전에서는 60개의 영어 질문으로 구성되었으며, 버전 2에서는 171개의 질문으로 확장되어 모델 간의 성능 차이를 더 잘 구별할 수 있게 개선되었습니다.

## 특징
단순한 객관식 문제가 아니라 0-10 사이의 감정 강도를 주관적으로 예측해야 하므로, 프롬프트나 온도(temperature) 설정 등 미세한 변화에 민감하게 반응할 수 있습니다.
EQ-Bench의 점수는 MMLU와 같은 다른 대형 벤치마크의 점수와 강한 상관관계(r=0.97)를 보이며, 이는 감성 지능이 모델의 전반적인 지능과 연관이 있음을 시사합니다.
