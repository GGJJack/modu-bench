---
modelId: gemini-3-5-pro
domain: llm
status: published
updated: 2026-06-01
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
features:
  toolUse: true
  vision: true
  audioInput: true
  audioOutput: true
highlights:
  - "에이전트 워크플로우 및 코딩에 최적화된 차세대 프론티어 모델"
  - "복잡한 장기적 과제(Long-horizon tasks) 수행 능력 대폭 강화"
  - "Gemini 3.1 Pro를 능가하는 추론 및 멀티모달 이해 성능"
relatedOrganization: google
---

# Gemini 3.5 Pro 소개

## 개요
Gemini 3.5 Pro는 Google이 2026년 6월 1일에 정식 출시한 차세대 프론티어 모델 시리즈 중 최상위 모델입니다. 이 모델은 지능과 행동(Action)을 결합하여 복잡한 에이전틱(Agentic) 워크플로우를 실행하도록 설계되었습니다. 특히 장기적인 계획 수립과 실행이 필요한 과제에서 뛰어난 성능을 보이며, 개발자와 기업이 자율적인 AI 에이전트를 구축하고 배포하는 데 핵심적인 역할을 수행합니다.

## 기술 특징
Gemini 3.5 Pro는 복잡한 코딩 및 추론 벤치마크에서 이전 세대인 Gemini 3.1 Pro를 능가하는 성능을 보여줍니다. 특히 Terminal-Bench, GDPval-AA, MCP Atlas와 같은 에이전틱 작업 중심의 지표에서 압도적인 성과를 기록하며, 멀티모달 이해 능력(CharXiv Reasoning 등)에서도 최고 수준의 성능을 유지합니다. 또한 프론티어 안전 프레임워크(Frontier Safety Framework)를 기반으로 개발되어 사이버 보안 및 유해 콘텐츠 생성 방지에 대한 강력한 보호 조치를 포함하고 있으며, 모델의 내적 추론 과정을 확인할 수 있는 해석 가능성(Interpretability) 도구를 지원합니다.

## 사용 사례
이 모델은 대규모 코드베이스 유지보수, 금융 문서 준비, 새로운 애플리케이션 개발과 같은 장기적인 에이전틱 작업에 이상적입니다. Google의 에이전트 지향 개발 플랫폼인 'Antigravity'와 결합하여 다중 서브에이전트(Subagents)를 조율하고 복잡한 다단계 워크플로우를 자동화하는 데 사용됩니다. 예를 들어, 레거시 코드베이스를 Next.js로 변환하거나, 단 몇 시간 만에 논문을 분석하고 게임을 구현하는 등의 고난도 작업을 수행할 수 있습니다.

## 한계
Gemini 3.5 Pro는 강력한 에이전틱 능력을 갖추고 있으나, 여전히 자율적인 행동 시 인간의 감독(Supervision)이 권장됩니다. 특히 실세상의 복잡한 변수가 존재하는 환경에서는 다단계 워크플로우의 실행 결과에 대한 최종 검증이 필요할 수 있습니다. 또한 프론티어 모델로서 높은 연산 자원을 요구하며, 최적의 성능을 발휘하기 위해서는 Antigravity와 같은 전용 하네스와의 긴밀한 통합이 중요합니다.
