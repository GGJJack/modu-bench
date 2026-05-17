---
benchmarkId: arena-hard-v2
domain: llm
status: published
updated: 2026-05-17
sources:
  - https://github.com/lm-sys/arena-hard-v2
  - https://lmsys.org/blog/2024-04-19-arena-hard/
organization: lmsys
highlights:
  - "Chatbot Arena의 실제 사용자 쿼리 중 가장 어려운 프롬프트 500개 선별"
  - "LLM-as-a-judge (GPT-4-Turbo)를 통해 기준 모델 대비 승률 산출"
  - "인간 선호도(Chatbot Arena)와 89.1%의 높은 일치도(Agreement) 달성"
---

# Arena Hard Auto v2

## 개요
Arena Hard Auto v2는 대규모 언어 모델(LLM)의 복잡한 문제 해결 능력을 평가하기 위한 고품질 벤치마크입니다. 실제 사용자들이 Chatbot Arena에 입력한 20만 개의 쿼리 중 다중 추론, 도메인 지식, 문제 해결력 등 7가지 엄격한 기준을 충족하는 가장 어려운 프롬프트 500개를 선별하여 구성되었습니다. 기존의 정적인 벤치마크(예: MT-Bench)와 달리 지속적으로 업데이트되며 모델 간의 변별력(Separability)이 뛰어난 것이 특징입니다.

## 평가 방법
평가는 자동화된 파이프라인(LLM-as-a-judge)을 통해 이루어집니다. 평가 대상 모델이 생성한 답변은 강력한 기준 모델(예: GPT-4-0314)의 답변과 비교됩니다. 강력한 심판 모델(주로 GPT-4-Turbo)이 두 답변을 평가하여 어느 쪽이 더 나은지 판단하며, 잠재적인 위치 편향(Position Bias)을 방지하기 위해 모델의 순서를 바꿔 두 번 평가하는 2게임 설정(Two-game setup)을 채택합니다. 최종 점수는 모든 비교 결과를 Bradley-Terry 모델로 분석하여 산출됩니다.

## 점수 해석
점수는 0에서 100 사이의 수치로 나타나며, 기준 모델 대비 상대적 성능 혹은 승률을 의미합니다. 점수가 높을수록 복잡하고 까다로운 실제 사용자의 프롬프트에서 모델이 더 우수한 답변을 생성했음을 나타냅니다. 이 점수는 Chatbot Arena의 인간 선호도와 약 89.1%의 높은 일치도를 보이는 것으로 알려져 있습니다.

## 한계와 비판
심판으로 사용되는 LLM에 의해 편향이 발생할 수 있습니다. 예를 들어 특정 모델이 자신과 같은 계열의 모델이 생성한 답변을 더 선호하는 '자기 편향(Self-bias)'이나, 응답이 길수록 더 높은 점수를 주는 '장황함 편향(Verbosity Bias)'의 영향을 받을 가능성이 존재합니다. 또한 단일 턴 질의응답만을 평가하기 때문에 다중 턴 상호작용 능력을 완전히 반영하지 못하는 한계가 있습니다.
