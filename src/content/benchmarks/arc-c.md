---
benchmarkId: arc-c
domain: llm
status: draft
updated: 2026-05-12
sources:
  - https://arxiv.org/abs/1803.05457
organization: allen-ai
paperUrl: https://arxiv.org/abs/1803.05457
highlights:
  - "검색 기반 알고리즘과 단어 동시발생 알고리즘으로 풀 수 없는 초등학교 과학 문제"
  - "Challenge Set과 Easy Set으로 구성, 총 7,787개의 문제 포함"
---

# ARC-Challenge (ARC-C)

## 개요
ARC(AI2 Reasoning Challenge)는 고도화된 질문 답변 능력을 평가하기 위해 구축된 새로운 텍스트 말뭉치 및 벤치마크입니다. 이 중 ARC-Challenge (ARC-C) 데이터셋은 기존의 알고리즘들이 틀린 질문들만을 모아 놓아 보다 복잡한 지식과 추론을 요구합니다.

## 평가 방법
자연어로 작성된 초등학교 과학 문제로 구성되어 있으며, 단순 검색이나 단어 동시발생(word co-occurence)에 의존하는 모델로는 풀기 어려운 문제를 통해 평가합니다. SQuAD나 SNLI 챌린지보다 훨씬 강력한 지식 추론 능력을 측정합니다.

## 점수 해석
점수는 백분율(%)로 표기되며, 모델이 제공된 과학 문제에서 정답을 얼마나 올바르게 추론해 내는지를 나타냅니다.

## 한계와 비판
초기 연구 당시 대부분의 신경망 기반 모델들이 랜덤 베이스라인을 크게 넘어서지 못할 정도로 높은 난이도를 보였습니다. 모델이 단순 패턴 인식이 아닌 실제 추론 능력을 갖추었는지 검증하는 데 효과적입니다.
