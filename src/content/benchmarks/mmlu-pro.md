---
benchmarkId: mmlu-pro
domain: llm
status: published
updated: 2026-08-26
sources:
  - https://arxiv.org/abs/2406.01574
  - https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro
organization: tiger-lab
paperUrl: https://arxiv.org/abs/2406.01574
highlights:
  - "기존 MMLU의 10지선다 확장 및 추론 문항 추가"
  - "12K 복합 질문, 14개 학문 분야"
---

# MMLU-Pro

## 개요
MMLU-Pro(Massive Multitask Language Understanding Pro)는 기존 MMLU 벤치마크를 한층 더 발전시켜 대규모 언어 모델의 높은 지식 이해도와 추론 능력을 평가하기 위한 데이터셋입니다. 14개 전문 및 학문 분야에 걸쳐 12,000개의 복잡하고 추론 중심적인 질문을 포함하고 있습니다.

## 평가 방법
기존 MMLU가 4지선다형이었던 것과 달리, MMLU-Pro는 선택지를 10지선다형으로 확장하여 무작위로 정답을 맞힐 확률을 크게 낮추었습니다. 또한 기존 MMLU의 지나치게 단순하거나 노이즈가 있는 질문을 제거하고, Chain of Thought(CoT)와 같은 고차원적 추론을 요구하는 문제를 대거 포함하여 모델의 진정한 능력을 변별력 있게 측정합니다.

## 한계와 비판
선택지의 개수가 많고 문제의 난이도가 높기 때문에, 계산 비용과 평가 시간이 기존 MMLU에 비해 증가할 수 있습니다. 또한 평가 시 사용되는 프롬프트 방식(예: CoT vs Direct)에 따라 성능 격차가 크게 나타나므로, 평가 환경의 일관성이 중요합니다.
