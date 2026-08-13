---
benchmarkId: musr
domain: llm
status: published
updated: 2026-08-14
sources:
  - https://huggingface.co/datasets/TAUR-Lab/MuSR
  - https://arxiv.org/abs/2310.16049
  - https://github.com/Zayne-sprague/MuSR
organization: taur-lab
paperUrl: https://arxiv.org/abs/2310.16049
highlights:
  - "Multistep Soft Reasoning Benchmark"
  - "살인 미스터리를 해결하는 다단계 추론 평가"
  - "Chain-of-thought의 한계를 테스트"
---

# MuSR (Multistep Soft Reasoning)

## 개요
MuSR(Multistep Soft Reasoning)은 대규모 언어 모델의 다단계 추론 능력을 평가하기 위해 고안된 벤치마크입니다. 특히 상식적인 추론을 결합하여 복잡한 문제를 해결하는 능력을 중점적으로 측정합니다.

## 평가 방법
ChatGPT를 활용하여 생성된 살인 미스터리 등 다단계 추론이 필요한 문제들로 구성되어 있습니다. 모델은 주어진 상황과 단서들을 종합하여 가장 가능성 있는 범인을 추론해내야 합니다.

## 점수 해석
점수는 백분율(%) 단위로 제공되며, 모델이 올바른 범인 또는 결론을 추론해 낸 비율을 의미합니다. 점수가 높을수록 모델의 다단계 추론 능력이 뛰어남을 나타냅니다.

## 한계와 비판
문제들이 ChatGPT를 통해 생성되었기 때문에, 생성 과정에서의 편향이나 오류가 문제에 포함될 수 있습니다. 또한, 살인 미스터리라는 특정 도메인에 치우쳐 있어 모델의 전반적인 추론 능력을 완벽하게 대변하기에는 한계가 있을 수 있습니다.
