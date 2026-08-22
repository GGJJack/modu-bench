---
benchmarkId: winogrande
domain: llm
status: published
updated: 2026-08-22
sources:
  - https://arxiv.org/abs/1907.10641
  - https://epoch.ai/benchmarks/wino-grande
  - https://deepeval.com/docs/benchmarks-winogrande
organization: allen-ai
paperUrl: https://arxiv.org/abs/1907.10641
highlights:
  - "대규모 상식 추론 평가"
  - "어휘적 편향(annotation artifacts) 최소화"
  - "44K 이진 선택 문제 구성"
---

# WinoGrande

## 개요
WinoGrande는 자연어 처리 모델의 상식 추론(commonsense reasoning) 능력을 평가하기 위해 고안된 대규모 벤치마크입니다. 기존의 Winograd Schema Challenge(WSC)가 가진 규모의 한계와 데이터셋에 내재된 어휘적 편향(annotation artifacts) 문제를 해결하고자 개발되었습니다.

## 평가 방법
총 4만 4천 개의 이진 선택(binary-choice) 문제로 구성되어 있으며, 모호한 대명사가 지칭하는 올바른 대상을 상식과 세상에 대한 지식을 바탕으로 추론해야 합니다. 문제를 구성하는 오답(distractor)들이 정교하게 설계되어 있어 단순한 휴리스틱이나 단어 연상만으로는 높은 점수를 얻기 어렵습니다. DeepEval과 같은 평가 프레임워크에서는 0에서 1 사이의 점수로 정확도(Exact Match)를 측정하며, 퓨샷(few-shot) 프롬프팅을 적용하여 모델의 답변 형식을 안정화할 수 있습니다.

## 점수 해석
모델의 점수는 전체 질문 중 정확한 정답('A' 또는 'B')을 맞춘 비율로 계산됩니다. 점수가 높을수록 모델이 문맥 내의 엔티티와 인과 관계를 정확하게 추적하고 상식적인 추론을 수행할 수 있음을 의미합니다.

## 한계와 비판
WinoGrande는 정교한 알고리즘(AfLite)을 통해 모델이 기계적으로 감지할 수 있는 편향을 줄였으나, 여전히 초대형 언어 모델들이 인간 수준(94%)에 근접한 높은 성능을 보이고 있습니다. 이는 벤치마크가 모델의 진정한 상식 능력을 과대평가할 가능성이 있음을 시사하며, 지속적인 난이도 조정과 새로운 평가 방식의 도입이 필요함을 보여줍니다.
