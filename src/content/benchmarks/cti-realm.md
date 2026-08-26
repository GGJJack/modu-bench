---
benchmarkId: cti-realm
domain: llm
status: published
updated: 2026-08-27
sources:
  - https://www.microsoft.com/en-us/research/publication/cti-realm-benchmark-to-evaluate-agent-performance-on-security-detection-rule-generation-capabilities/
  - https://arxiv.org/abs/2603.13517
organization: microsoft
paperUrl: https://arxiv.org/abs/2603.13517
highlights:
  - "보안 분석가의 실제 워크플로우를 모방한 사이버 위협 인텔리전스(CTI) 해석 평가"
  - "Linux, Cloud, Azure Kubernetes Service(AKS) 환경 전반의 탐지 규칙 생성 검증"
  - "최종 탐지 결과와 의사결정 경로(Trajectory)를 결합한 리워드 기반 평가 방식"
---

# CTI-REALM

## 개요
CTI-REALM (Cyber Threat Real World Evaluation and LLM Benchmarking)은 AI 에이전트가 사이버 위협 인텔리전스(CTI, Cyber Threat Intelligence)를 해석하고 효과적인 탐지 규칙(Detection Rules)을 자율적으로 개발할 수 있는 능력을 평가하기 위해 설계된 벤치마크입니다. Microsoft Research 팀이 구축한 이 벤치마크는 보안 분석가들이 실제로 수행하는 워크플로우와 유사한 사실적인 환경을 제공합니다. 에이전트는 CTI 보고서를 검토하고, 시스템에 쿼리를 실행하며, 스키마 구조를 이해한 후 이를 바탕으로 탐지 규칙을 작성하는 전체 과정을 수행해야 합니다.

## 평가 방법
CTI-REALM은 단일 환경에 국한되지 않고, Linux 시스템, 다양한 클라우드 플랫폼, 그리고 Azure Kubernetes Service (AKS) 환경에 걸쳐 다양한 복잡성을 가진 공격을 에뮬레이션하여 평가를 진행합니다.

에이전트는 제공된 CTI 정보를 바탕으로 자율적으로 의사 결정을 내리고 규칙을 도출해야 합니다. 평가의 정확성을 보장하기 위해 모든 시뮬레이션 공격에는 명확한 정답 데이터(Ground Truth)가 포함되어 있습니다. 에이전트가 작성한 탐지 규칙이 실제 위협을 정확하게 식별하는지 여부(최종 탐지 결과)뿐만 아니라, 에이전트가 목표에 도달하기 위해 어떤 정보 수집 및 분석 경로를 거쳤는지(Trajectory)를 종합적으로 분석하여 보상(Reward) 점수를 부여합니다.

## 점수 해석
CTI-REALM의 점수는 0에서 1 사이의 보상 점수(Trajectory Reward Score)로 측정되며, 점수가 높을수록(1.0에 가까울수록) 에이전트가 CTI를 정확하게 이해하고 효과적인 탐지 규칙을 성공적으로 생성했음을 의미합니다.

이 점수는 단순히 결과적으로 올바른 규칙을 생성했는지 여부만 따지는 것이 아니라, 에이전트의 효율적이고 논리적인 의사결정 과정을 반영합니다. 연구 결과에 따르면 CTI 분석에 특화된 도구를 사용할 경우 에이전트의 퍼포먼스가 눈에 띄게 향상되며, 초기 프롬프트에 유용한 맥락(Context)을 제공하는 메모리 증강(Memory Augmentation) 기법이 소형 모델과 대형 모델 간의 성능 격차를 크게 줄일 수 있는 것으로 나타났습니다.

## 한계와 비판
에이전트가 높은 점수를 획득하더라도, 실제 기업의 보안 관제(SOC) 환경은 벤치마크 에뮬레이션보다 훨씬 더 복잡하고 예상치 못한 노이즈(정상 트래픽)가 섞여 있을 수 있습니다. 따라서 AI 에이전트가 생성한 탐지 규칙은 여전히 사람(보안 전문가)의 튜닝과 검증을 거쳐야 한다는 점이 한계로 작용합니다. 이 벤치마크는 탐지 엔지니어링의 '노동 집약적인 작업'을 AI가 어디까지 보조할 수 있는지 그 잠재력을 보여주지만, 에이전트의 결과물을 맹신할 수 없는 단계임을 시사합니다.
