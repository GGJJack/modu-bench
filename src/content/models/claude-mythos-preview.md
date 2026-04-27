---
modelId: claude-mythos-preview
domain: llm
status: published
updated: 2026-04-27
sources:
  - https://www.anthropic.com/glasswing
  - https://red.anthropic.com/2026/mythos-preview
  - https://anthropic.com/claude-mythos-preview-system-card
features:
  toolUse: true
  vision: true
  extendedThinking: true
  computerUse: true
highlights:
  - "사이버 보안 특화 프론티어 모델"
  - "제로데이 취약점 탐지 및 자율 익스플로잇 생성"
  - "Project Glasswing의 핵심 엔진"
relatedOrganization: anthropic
---

# Claude Mythos Preview 소개

## 개요
Claude Mythos Preview는 2026년 4월 Anthropic이 발표한 사이버 보안 특화 프론티어 모델로, 전 세계의 핵심 소프트웨어 인프라를 보호하기 위한 'Project Glasswing'의 중추 역할을 담당합니다. 이 모델은 일반적인 텍스트 생성 능력을 넘어 코딩과 논리적 추론에서 비약적인 발전을 이루었으며, 특히 컴퓨터 보안 작업에서 인간 전문가를 능가하는 수준의 역량을 보여줍니다. 현재 일반 대중에게는 공개되지 않았으며, AWS, Google, Microsoft, NVIDIA 등 주요 기술 파트너와 일부 오픈소스 보안 조직을 대상으로 한정된 프리뷰가 제공되고 있습니다.

## 기술 특징
Claude Mythos Preview의 가장 혁신적인 점은 제로데이(Zero-day) 취약점을 스스로 찾아내고 이를 증명하는 익스플로잇(Exploit) 코드를 자율적으로 생성할 수 있다는 것입니다. Anthropic의 테스트 결과에 따르면, 이 모델은 수십 년간 발견되지 않았던 OpenBSD의 27년 된 취약점이나 FFmpeg의 16년 된 취약점을 찾아내는 성과를 거두었습니다. 특히 단순한 버그 탐지를 넘어, 여러 취약점을 복합적으로 연결하여 운영체제나 웹 브라우저의 샌드박스를 우회하는 '취약점 체이닝(Vulnerability Chaining)' 작업에서도 놀라운 정확도를 보여줍니다.

이러한 성능은 모델을 별도로 보안 전용으로 학습시킨 결과가 아니라, 범용적인 코드 이해 능력과 에이전트 기반 추론 능력이 향상되면서 나타난 창발적(Emergent) 현상으로 분석됩니다. SWE-bench Pro에서 77.8%, CyberGym에서 83.1%의 높은 점수를 기록하며 기존의 Claude 4 Opus 모델을 크게 압도하는 성능을 입증했습니다.

## 주요 활용 사례
현재 이 모델은 주로 방어적인 보안 강화 목적으로 사용됩니다. Project Glasswing 파트너들은 이 모델을 활용하여 자사 및 오픈소스 소프트웨어의 소스 코드를 스캔하고, 잠재적인 취약점을 사전에 패치하는 데 집중하고 있습니다. 또한 폐쇄 소스 바이너리에 대한 역공학(Reverse Engineering)을 수행하여 보안 허점을 찾아내거나, 알려진 취약점(N-day)에 대한 패치가 배포되기 전 대응 방안을 마련하는 데에도 활용됩니다. Anthropic은 오픈소스 보안 조직에 1억 달러 상당의 모델 사용 크레딧과 직접적인 기부금을 제공하여 생태계 전반의 방어 역량을 높이고 있습니다.

## 한계점
Claude Mythos Preview는 그 강력한 성능만큼이나 오용될 경우 발생할 수 있는 위험성도 매우 큽니다. 따라서 Anthropic은 이 모델을 일반에 공개하지 않고 철저히 통제된 파트너십 하에서만 운영하고 있습니다. 또한 모델이 생성하는 익스플로잇 코드가 항상 완벽한 것은 아니며, 실제 시스템 환경에 따라 작동 여부가 달라질 수 있는 기술적 불확실성이 존재합니다. 높은 추론 성능을 유지하기 위해 막대한 연산 자원을 소모하므로, 사용 비용이 기존 모델 대비 높게 책정되어 있다는 점도 실제 도입 시 고려해야 할 제약 사항입니다.
