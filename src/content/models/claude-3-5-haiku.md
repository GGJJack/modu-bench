---
modelId: claude-3-5-haiku
domain: llm
status: published
updated: 2026-09-08
sources:
  - https://www.anthropic.com/news/claude-3-5-sonnet
  - https://www.anthropic.com/news/3-5-models-and-computer-use
  - https://www.anthropic.com/news/claude-3-family
features:
  toolUse: true
  vision: false
highlights:
  - "이전 세대 플래그십 모델 Claude 3 Opus 수준 이상의 지능 성능 제공"
  - "SWE-bench Verified 40.6% 달성으로 경량 모델 최고 수준의 코딩 능력 입증"
  - "낮은 지연 시간과 가격 대비 성능으로 서브에이전트 및 실시간 서비스에 최적화"
relatedOrganization: anthropic
---

# Claude 3.5 Haiku 소개

## 개요
Claude 3.5 Haiku는 Anthropic이 2024년 10월 발표하고 11월 출시한 경량 고성능 LLM으로, Claude 3.5 제품군의 가장 빠르고 경제적인 모델입니다. 이전 세대 Haiku(Claude 3 Haiku)와 동일한 수준의 빠른 응답 속도를 유지하면서도, 지능 및 성능 면에서는 이전 세대 최대 크기 모델이었던 Claude 3 Opus를 다수의 벤치마크 평가에서 넘어서는 혁신을 이루어냈습니다.

초기 출시에서는 텍스트 중심 모델로 배포되었으며, 백만 토큰당 입력 $0.80, 출력 $4.00 수준의 가격으로 설정되어 대규모 실시간 대화 및 서브에이전트 워크플로우 지원에 초점을 맞추었습니다.

## 기술 특징
Claude 3.5 Haiku의 가장 큰 기술적 성과는 경량급 모델임에도 불구하고 뛰어난 코딩 능력과 정교한 도구 활용 능력을 갖추었다는 점입니다. 소프트웨어 엔지니어링 벤치마크인 SWE-bench Verified에서 40.6%의 점수를 기록하였는데, 이는 초기 버전의 Claude 3.5 Sonnet이나 GPT-4o를 비롯한 많은 기존 플래그십 모델 기반 에이전트 성능을 상회하는 수치입니다.

또한 향상된 지시사항 준수(Instruction Following) 능력과 정확해진 도구 호출(Tool Use) 능력을 결합하여, 사용자 응답 지연을 최소화하면서도 여러 단계의 복잡한 요청을 처리할 수 있도록 설계되었습니다.

## 사용 사례
Claude 3.5 Haiku는 실시간 고객 대화 및 상호작용, 사용자 맞춤형 추천 생성, 대용량 비구조화 데이터(구매 내역, 가격표, 재고 기록 등)에서의 지식 추출에 매우 적합합니다. 특히 복잡한 시스템 내에서 전담 작업을 담당하는 서브에이전트(Sub-agent) 역할을 수행하거나 콘텐츠 모더레이션, 맞춤형 텍스트 처리 시스템을 구축할 때 비용 효율적인 솔루션으로 활용됩니다.

## 한계
Claude 3.5 Haiku는 초기에 텍스트 전용(Text-only)으로 출시되어 시각적 정보 분석(Vision) 능력이 제한적이라는 한계가 있었습니다. 또한 기존 Claude 3 Haiku 대비 가격이 조정되어 이전 Haiku보다는 단위 토큰당 가격이 높게 형성되어 있으며, 최고 난이도의 논리적 추론이나 대규모 아키텍처 설계 작업에서는 상위 모델인 Claude 3.5 Sonnet에 비해서는 다소 제한적인 성능을 보입니다.
