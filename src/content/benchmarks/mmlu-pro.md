---
benchmarkId: mmlu-pro
domain: llm
status: draft
updated: 2026-05-05
sources:
  - https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro
  - https://arxiv.org/abs/2406.01574
organization: tiger-lab
paperUrl: https://arxiv.org/abs/2406.01574
highlights:
  - "대학원 수준의 질문이 포함된 기존 MMLU 벤치마크의 확장/심화 버전"
  - "문항 당 선택지가 4개에서 10개로 증가"
  - "단순 지식 기반보다 추론(Reasoning) 및 CoT 능력을 중점 평가"
---

# MMLU-Pro

## 개요
MMLU-Pro 벤치마크는 기존의 MMLU (Massive Multitask Language Understanding) 벤치마크를 기반으로 대학원 수준의 고난도 문제를 추가하고, 보다 엄밀한 추론 능력을 평가하기 위해 설계되었습니다. 대규모 언어 모델들이 기본 MMLU에서 높은 점수를 달성함에 따라, 모델 간의 실질적인 성능 차이를 더 명확하게 변별하기 위한 목적으로 제안되었습니다.

## 평가 방법
기존 MMLU가 4지 선다형(4-options) 문항으로 구성되었던 것과 달리, MMLU-Pro는 선택지를 최대 10개(10-options)로 대폭 늘렸습니다. 이는 모델이 우연히 정답을 맞출 확률을 극적으로 낮추어 평가의 신뢰성과 강건성(Robustness)을 높이는 역할을 합니다. 12,000개가 넘는 복잡한 문제들이 여러 학문 분야에 걸쳐 포진되어 있으며, 생물학, 경영, 화학, 컴퓨터 과학, 경제학, 공학, 수학, 물리학, 심리학 등을 포괄합니다.

## 점수 해석
MMLU-Pro는 PPL(Perplexity) 기반 평가보다는 Chain of Thought (CoT) 추론 방식을 적용했을 때 더 높은 정확도를 얻을 수 있도록 구성되었습니다. 10개의 복잡한 선택지 사이에서 정답을 골라내야 하므로, 단순히 암기된 지식만으로는 높은 점수를 얻기 어렵습니다. 따라서 MMLU-Pro의 백분율 점수 단위(%)는 모델의 복합적이고 단계적인 추론 역량을 직관적으로 나타내는 척도입니다.

## 한계와 비판
선택지가 10개로 늘어남에 따라 문맥의 길이가 늘어나게 되며, 지시문을 엄격하게 따르는 능력이 부족한 소형 모델이나 특정 프롬프트 템플릿에 과적합된 모델의 경우 실제 지식 및 추론 능력보다 낮은 점수가 측정될 수 있습니다.
