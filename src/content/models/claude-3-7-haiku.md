---
modelId: claude-3-7-haiku
domain: llm
status: published
updated: 2026-06-13
sources:
  - https://www.anthropic.com/news/claude-3-7-sonnet
  - https://www.anthropic.com/pricing
  - https://docs.anthropic.com/en/docs/about-claude/models
features:
  toolUse: true
  vision: true
  extendedThinking: true
highlights:
  - "Claude 3.7 세대의 가장 빠르고 경제적인 모델"
  - "Haiku급 모델 최초로 확장 추론(Extended Thinking) 기능 지원"
  - "지연 시간에 민감하면서도 지능적인 처리가 필요한 작업에 최적화"
relatedOrganization: anthropic
---

# Claude 3.7 Haiku 소개

## 개요
Claude 3.7 Haiku는 2025년 3월 10일 Anthropic이 발표한 Claude 3.7 제품군의 가장 작고 빠른 모델입니다. 이전 세대인 Claude 3.5 Haiku의 성공을 바탕으로 설계되었으며, 저렴한 비용과 높은 속도를 유지하면서도 3.7 세대의 핵심 혁신인 '추론 능력'을 계승했습니다. 이 모델은 실시간 응답이 필요한 고객 서비스, 대규모 데이터 분류, 빠른 코드 제안 등 속도가 성능만큼 중요한 워크플로우에 최적화된 포지셔닝을 가지고 있습니다.

## 기술 특징
Claude 3.7 Haiku의 가장 큰 특징은 하위 티어 모델임에도 불구하고 '확장 추론(Extended Thinking)' 모드를 지원한다는 점입니다. 이를 통해 복잡한 지시사항 이행이나 논리적 단계가 필요한 작업에서 기존 소형 모델들의 한계를 극복했습니다. 또한 200,000 토큰의 넓은 컨텍스트 윈도우를 제공하여, 대량의 문서를 신속하게 분석하고 처리할 수 있는 능력을 갖추고 있습니다. 가격 측면에서는 입력 100만 토큰당 $0.25, 출력 100만 토큰당 $1.25로 책정되어, 고성능 추론 기능을 매우 경제적인 비용으로 활용할 수 있게 합니다.

## 사용 사례
Claude 3.7 Haiku는 대규모 텍스트 데이터의 실시간 요약 및 태깅, 멀티모달 능력을 활용한 이미지 캡셔닝 및 간단한 시각적 데이터 추출에 널리 사용됩니다. 특히 지연 시간(Latency)이 사용자 경험에 직결되는 인터랙티브한 웹 애플리케이션이나 실시간 챗봇 환경에서 강력한 성능을 발휘합니다. 개발자들은 가벼운 버그 수정이나 코드 완성 작업에서 Sonnet 모델 대신 Haiku를 사용하여 비용을 절감하면서도 3.7 세대 특유의 정확도를 유지할 수 있습니다.

## 한계
소형 모델의 특성상 Claude 3.7 Haiku는 복잡한 수학적 증명이나 대규모 아키텍처 설계와 같은 고난도의 작업에서는 상위 모델인 Sonnet이나 Opus에 비해 성능이 낮을 수 있습니다. 확장 추론 모드를 사용할 경우 응답 속도가 일반 모드에 비해 느려지며, 추론 과정에서 생성되는 토큰 역시 비용에 포함되므로 대규모 호출 시 비용 효율성을 면밀히 검토해야 합니다. 또한, 최신 지식 기반의 답변이 필요한 경우 모델의 지식 차단 시점(Knowledge Cutoff) 이후의 정보에 대해서는 할루시네이션이 발생할 가능성이 있습니다.
