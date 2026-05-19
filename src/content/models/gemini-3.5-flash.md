---
modelId: gemini-3.5-flash
domain: llm
status: published
updated: 2026-05-19
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
  - https://ai.google.dev/pricing
  - https://blog.google/innovation-and-ai/sundar-pichai-io-2026/
features:
  toolUse: true
  vision: true
  audioInput: true
  audioOutput: true
  extendedThinking: true
highlights:
  - "에이전트 워크플로우 및 코딩 작업에 최적화된 최첨단 성능"
  - "Gemini 3.1 Pro를 능가하는 추론 속도 및 에이전틱 벤치마크 점수"
  - "100만 토큰의 컨텍스트 윈도우와 경쟁사 대비 압도적인 출력 속도"
relatedOrganization: google
---

# Gemini 3.5 Flash 소개

## 개요
Gemini 3.5 Flash는 2026년 5월 Google I/O에서 발표된 Gemini 3.5 시리즈의 첫 번째 모델입니다. "Frontier intelligence with action"이라는 모토 아래 개발된 이 모델은 고도의 지능과 압도적인 속도를 결합하여 복잡한 에이전트 워크플로우를 처리하는 데 특화되어 있습니다. 기존 Flash 시리즈의 강점인 저지연성을 유지하면서도, 코딩과 에이전트 작업에서는 상위급 모델인 Gemini 3.1 Pro를 능가하는 성능을 보여줍니다. 현재 Gemini 앱과 Google 검색의 AI 모드 기본 모델로 적용되어 전 세계 수십억 명의 사용자에게 제공되고 있습니다.

## 기술 특징
Gemini 3.5 Flash는 '에이전트 중심' 아키텍처를 채택하여 장기적인 계획(long-horizon planning)과 도구 활용 능력이 대폭 강화되었습니다. Terminal-Bench 2.1(76.2%) 및 MCP Atlas(83.6%) 등 주요 에이전틱 벤치마크에서 선두를 차지하며 실질적인 문제 해결 능력을 입증했습니다. 특히 출력 속도(Tokens per second) 면에서 다른 프론티어 모델들보다 최대 4배 빠르며, Artificial Analysis의 지능 지수와 속도 비교에서 우상단(고성능-고속) 영역을 점유하고 있습니다. 104만(1M) 토큰의 컨텍스트 윈도우를 지원하여 방대한 코드베이스나 복잡한 금융 문서를 한 번에 처리할 수 있는 효율성을 제공합니다.

## 사용 사례
이 모델은 자동화된 코드베이스 마이그레이션(예: Next.js 전환), 대규모 데이터 분석, 그리고 24시간 중단 없는 정보 에이전트 구축에 최적입니다. Google의 'Antigravity' 플랫폼과 결합하여 여러 개의 협업 서브에이전트를 구동함으로써 복잡한 비즈니스 프로세스를 자동화할 수 있습니다. 예를 들어, Macquarie Bank는 100페이지가 넘는 복잡한 고객 온보딩 문서를 분석하는 데 활용하고 있으며, Shopify는 전 세계 가맹점의 성장을 예측하기 위한 데이터 분석 에이전트로 이 모델을 사용하고 있습니다. 또한 개인용 AI 에이전트인 'Gemini Spark'의 기반 모델로서 사용자의 일상 업무를 돕는 역할을 수행합니다.

## 한계
Gemini 3.5 Flash는 속도와 에이전트 성능에 최적화되어 있으나, 극도로 정교한 창의적 글쓰기나 매우 깊은 수준의 인문학적 추론에서는 향후 출시될 'Gemini 3.5 Pro'에 비해 상대적으로 밀릴 수 있습니다. 또한 에이전트 기반의 자율적인 도구 사용이 활발해짐에 따라, 잘못된 계획 수립으로 인한 연쇄적인 오류가 발생할 위험이 있으므로 Antigravity와 같은 개발 플랫폼 내에서의 인간 감독(Human-in-the-loop)이 권장됩니다. Frontier Safety Framework에 따라 강화된 사이버 및 CBRN 안전 가드레일이 적용되어 있으나, 복잡한 외부 도구와 상호작용하는 에이전틱 작업 환경에서는 여전히 신중한 모니터링이 필요합니다.
