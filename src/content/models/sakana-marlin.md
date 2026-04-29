---
modelId: sakana-marlin
domain: llm
status: published
updated: 2026-04-29
sources:
  - https://sakana.ai/marlin-beta/
  - https://sakana.ai/ab-mcts-jp/
  - https://openreview.net/forum?id=jAsr5GHt3P
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "AB-MCTS(적응형 분기 몬테카를로 트리 탐색) 기술 탑재"
  - "8시간 이상의 자율 리서치 수행 가능"
  - "NeurIPS 2025 Spotlight 논문 기술 기반"
relatedOrganization: sakana-ai
---

# Sakana Marlin 소개

## 개요
Sakana Marlin은 2026년 4월 2일 Sakana AI가 발표한 비즈니스용 자율형 리서치 에이전트 시스템입니다. 고성능 전략 기획 및 고도화된 의사결정 지원을 목적으로 설계되었으며, 사용자가 주제를 입력하면 인공지능이 최장 8시간 동안 자율적으로 리서치를 수행하여 수십 페이지의 구조화된 보고서와 요약 슬라이드를 생성합니다. 이는 단순한 채팅 서비스를 넘어 전문적인 실무를 지원하는 '가상 CSO(Chief Strategy Officer)'로서의 역할을 목표로 합니다.

## 기술 특징
Marlin의 핵심 기술은 효율적인 추론 스케이링(Inference Scaling)을 구현하는 AB-MCTS(Adaptive Branching Monte Carlo Tree Search)입니다. 이 기술은 추론 과정을 나무 형태의 탐색으로 간주하여 어떤 가설이 유망한지 평가하고 계산 자원을 집중할 경로를 자율적으로 판단합니다. NeurIPS 2025에서 Spotlight로 선정된 이 알고리즘을 통해 Marlin은 수천 번의 시행착오를 거치며 논점을 심화하거나 가설을 기각하는 등 전략적인 탐색을 수행합니다. 또한 'AI 사이언티스트' 연구에서 얻은 워크플로우 자율화 노하우를 결합하여 인간의 개입 없이 완결된 결과물을 도출합니다.

## 사용 사례
Sakana Marlin은 금융기관 및 기업의 경영전략부서, 컨설팅 팜, 씽크탱크 등 고도화된 조사가 필요한 영역에서 활용됩니다. 예를 들어, 지정학적 리스크 분석과 공급망 영향 평가와 같은 복잡한 주제에 대해 60페이지 이상의 상세 보고서를 생성할 수 있습니다. 또한 금융업계의 AI 트렌드 분석과 같은 실무 레벨의 변화를 특정하고 시나리오별 구체적인 시사점을 도출하는 데 사용됩니다.

## 한계
현재 Sakana Marlin은 클로즈드 베타 테스트 단계에 있으며, 모든 기능이 일반에 공개되지는 않았습니다. 또한 복잡한 비즈니스 환경에서의 불확실성을 다루기 위해 수 시간의 연산 시간이 필요하며, 이는 실시간 응답이 필요한 간단한 질의응답에는 적합하지 않을 수 있습니다.
