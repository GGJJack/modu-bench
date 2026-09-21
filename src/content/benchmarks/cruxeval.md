---
benchmarkId: cruxeval
domain: llm
status: published
updated: 2026-09-21
sources:
  - https://crux-eval.github.io/
  - https://arxiv.org/abs/2401.03065
  - https://github.com/facebookresearch/cruxeval
highlights:
  - "코드의 실행 결과를 예측하고 추론하는 능력을 평가"
  - "Code Reasoning, Understanding, and Execution Evaluation"
---

# CRUXEval

## 개요
CRUXEval(Code Reasoning, Understanding, and Execution Evaluation)은 코드의 실행 결과를 예측하고 추론하는 능력을 평가하기 위해 고안된 벤치마크입니다. 3-13줄 길이의 800개 Python 함수로 구성되며, 각 함수는 입력-출력 쌍과 함께 제공되어 입력 예측 및 출력 예측이라는 두 가지 자연스러운 작업을 유도합니다.

## 벤치마크 평가 방식
이 벤치마크는 스무 개의 코드 모델을 평가하였고, HumanEval에서 최근 높은 점수를 받은 모델 중 다수가 이 벤치마크에서는 동일한 수준의 개선을 보이지 않음을 발견했습니다. 간단한 CoT(Chain of Thought)와 미세 조정 방식을 통해 성능을 향상시킬 수는 있으나, 문제를 완전히 해결하기에는 아직 부족함이 확인되었습니다.

## 시사점
GPT-4에 CoT를 적용한 최고의 설정에서도 입력 및 출력 예측에서 각각 75%와 81%의 pass@1을 달성한 반면, Code Llama 34B는 50%와 46%에 그쳐 오픈소스와 클로즈드 소스 모델 간의 차이를 보여줍니다. 아직 CRUXEval을 완벽하게 해결하는 모델이 없는 가운데, 간단한 프로그램에서 GPT-4가 지속적으로 실패하는 사례들은 향후 모델 개선에 중요한 시사점을 제공합니다.
