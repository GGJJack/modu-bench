---
modelId: google-antigravity-2.0
domain: llm
status: published
updated: 2026-05-20
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
  - https://antigravity.google/blog/introducing-google-antigravity-2-0
features:
  toolUse: true
  vision: true
highlights:
  - "에이전트 중심(Agent-first) 개발 및 실행 플랫폼"
  - "Gemini 3.5 Flash와 연동된 다중 에이전트 협업 지원"
  - "복잡한 멀티스텝 워크플로우 및 코드 현대화 최적화"
relatedOrganization: google
---

# Google Antigravity 2.0 소개

## 개요
Google Antigravity 2.0은 2026년 Google I/O에서 발표된 에이전트 중심(Agent-first)의 개발 플랫폼이자 실행 환경입니다. 단순한 모델 호출을 넘어, 복합적인 '에이전틱 워크플로우(Agentic Workflows)'를 설계, 구축 및 실행하는 데 최적화되어 있습니다. 특히 Gemini 3.5 Flash와 결합하여 대규모 수평적 협업 에이전트(Collaborative Subagents)를 구동하는 핵심 엔진 역할을 수행합니다.

## 기술 특징
Antigravity 2.0의 가장 큰 특징은 '에이전트 하네스(Antigravity Harness)'를 통한 워크플로우 제어 능력입니다. 이 시스템은 비정형 자산의 자동 분류, 레거시 코드베이스의 현대화(예: Next.js 전환), 복잡한 게임 로직의 자율적 개선 루프 등 장기적이고 복잡한 과업을 안정적으로 수행합니다. 기술적으로는 멀티스텝 워크플로우의 상태 관리와 에이전트 간의 컨텍스트 공유를 최적화하여, 기존의 단일 모델 호출 방식보다 훨씬 높은 신뢰성과 확장성을 제공합니다.

## 사용 사례
Antigravity 2.0은 기업용 자동화와 소프트웨어 엔지니어링 분야에서 강력한 성능을 발휘합니다. 대표적인 사례로 두 개의 에이전트(빌더와 플레이어)가 상호작용하며 6시간 만에 완전한 게임을 개발하거나, 수천 개의 비정형 자산을 동적 기준에 따라 자동으로 카테고리화하고 이름을 변경하는 작업 등이 있습니다. 또한 금융 문서 준비나 복잡한 코드 유지보수와 같이 수작업이 많이 필요한 영역을 에이전트 군단(Swarm)을 통해 자동화하는 데 활용됩니다.

## 한계
Antigravity 2.0은 Gemini 3.5 시리즈 모델에 최적화되어 있어 타사 모델과의 호환성이나 성능 최적화 정도는 제한적일 수 있습니다. 또한 고도의 에이전틱 워크플로우를 구동하는 과정에서 발생하는 지연 시간(Latency)과 비용은 단순한 텍스트 생성 작업보다 높을 수 있으며, 자율 에이전트의 오작동을 방지하기 위한 정교한 감독(Supervision) 시스템 구축이 필수적으로 요구됩니다.
