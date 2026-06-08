---
modelId: claude-3-7-sonnet
domain: llm
status: published
updated: 2026-06-08
sources:
  - https://www.anthropic.com/news/claude-3-7-sonnet
  - https://www.anthropic.com/claude-3-7-sonnet-system-card
  - https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking
features:
  toolUse: true
  vision: true
  extendedThinking: true
  computerUse: true
highlights:
  - "업계 최초의 하이브리드 추론(Hybrid Reasoning) 모델"
  - "사용자가 제어 가능한 가시적 사고 과정(Extended Thinking)"
  - "SWE-bench Verified 기준 세계 최고 수준의 코딩 성능"
relatedOrganization: anthropic
---

# Claude 3.7 Sonnet 소개

## 개요
Claude 3.7 Sonnet은 2025년 2월 24일 Anthropic이 발표한 최첨단 AI 모델로, 시장에 출시된 최초의 '하이브리드 추론(Hybrid Reasoning)' 모델입니다. 이 모델은 사용자에게 두 가지 모드를 제공하여, 즉각적인 응답이 필요한 일상적인 작업과 깊은 사고가 필요한 복잡한 문제를 하나의 모델 내에서 처리할 수 있도록 설계되었습니다. 특히 코딩과 프런트엔드 웹 개발 분야에서 비약적인 성능 향상을 보였으며, 새롭게 도입된 에이전트형 코딩 도구인 'Claude Code'와 결합하여 자율적인 소프트웨어 엔지니어링 작업을 수행할 수 있는 파트너로서의 입지를 굳혔습니다.

## 기술 특징
Claude 3.7 Sonnet의 핵심 차별점은 추론 능력을 모델에 통합한 방식에 있습니다. 기존의 추론 특화 모델들과 달리, 이 모델은 표준 응답과 '확장 추론(Extended Thinking)' 모드를 모두 지원하는 단일 시스템입니다. 사용자는 API를 통해 추론에 사용할 토큰 예산(최대 128K 토큰)을 직접 제어할 수 있어 속도와 품질 사이의 균형을 맞출 수 있습니다. 또한 Anthropic은 모델의 사고 과정(Chain-of-Thought)을 사용자에게 투명하게 공개하여, AI가 어떻게 결론에 도달했는지 확인하고 신뢰할 수 있도록 하였습니다. 벤치마크 결과, 실무 코딩 능력을 평가하는 SWE-bench Verified에서 70.3%(고성능 스캐폴딩 적용 시)의 점수를 기록하며 업계 선두 수준의 성능을 입증했습니다.

## 사용 사례
가장 대표적인 사용 사례는 'Claude Code'와의 결합을 통한 에이전트형 코딩입니다. Claude Code는 터미널에서 직접 실행되는 도구로, Claude 3.7 Sonnet의 추론 능력을 활용하여 복잡한 리팩토링, 테스트 작성, 버그 수정 등 실무 엔지니어링 작업을 자율적으로 수행합니다. 또한 수학, 물리학, 복잡한 지시사항 이행 등 고도의 논리력이 필요한 연구 분야에서 확장 추론 모드를 통해 정교한 답변을 얻을 수 있습니다. 기업 환경에서는 Canva, Vercel, Replit 등 주요 기술 기업들이 이 모델을 도입하여 복잡한 에이전트 워크플로우를 구축하고 고품질의 프로덕션 코드를 생성하는 데 활용하고 있습니다.

## 한계
Claude 3.7 Sonnet은 강력한 추론 기능을 제공하지만, 확장 추론 모드 사용 시 일반 모드보다 응답 지연 시간(Latency)이 상당히 길어집니다. 또한 API 사용 시 설정한 토큰 예산에 따라 결과물의 품질이 달라질 수 있으며, 추론 과정에서 소모되는 토큰 역시 출력 비용으로 청구된다는 점을 고려해야 합니다. Anthropic은 시스템 카드를 통해 프롬프트 인젝션 등 새로운 보안 위협에 대한 저항력을 높였음을 밝혔으나, 여전히 에이전트 환경에서 컴퓨터를 직접 제어하는 기능을 갖춘 만큼 오용 위험을 방지하기 위한 책임감 있는 배포와 가드레일 적용이 강조됩니다.
