---
modelId: deepseek-v4-preview
domain: llm
status: published
updated: 2026-07-02
sources:
  - https://api-docs.deepseek.com/zh-cn/news/news260424
  - https://www.deepseek.com/
  - https://api-docs.deepseek.com/zh-cn/quick_start/pricing
features:
  toolUse: true
  vision: false
  extendedThinking: true
highlights:
  - "DeepSeek-V4 시리즈의 프리뷰 버전으로 공개"
  - "Agentic Coding 분야에서 Sonnet 4.5 이상의 사용자 경험 제공"
  - "100만(1M) 토큰의 초장기 문맥과 DSA(DeepSeek Sparse Attention) 도입"
relatedOrganization: deepseek
---

# DeepSeek-V4 Preview 소개

## 개요
DeepSeek-V4 Preview는 2026년 4월 24일 DeepSeek(深度求索)가 발표한 차세대 언어 모델 제품군의 초기 공개 버전입니다. 이 모델은 '백만 컨텍스트의 보편화 시대'를 선언하며, 모든 공식 서비스에 100만(1M) 토큰 컨텍스트를 기본 사양으로 도입했습니다. 오픈 소스 커뮤니티와 상업용 AI 시장 모두에서 최정상급 추론 성능과 에이전트 능력을 입증하며, 특히 소프트웨어 개발 에이전트 분야에서 독보적인 가성비와 성능을 보여주고 있습니다.

## 기술 특징
DeepSeek-V4 Preview는 기존의 어텐션 메커니즘을 혁신한 DSA(DeepSeek Sparse Attention)를 도입했습니다. 토큰 차원에서의 압축 기술과 희소 어텐션을 결합하여, 100만 토큰에 달하는 방대한 문맥을 처리할 때 발생하는 계산 리소스와 메모리 요구량을 획기적으로 줄였습니다. 또한, DeepSeek-V4-Pro와 DeepSeek-V4-Flash 두 가지 버전으로 나뉘어 제공되며, Pro 버전은 1.6조 개(1.6T)의 파라미터(활성 49B)를 가진 MoE 구조를 통해 세계 최고 수준의 수학 및 STEM 추론 성능을 구현했습니다. 특히 에이전틱 코딩(Agentic Coding) 벤치마크에서 기존 오픈 소스 모델 중 최고 수준을 기록했습니다.

## 사용 사례
DeepSeek-V4 Preview는 복잡한 다단계 워크플로우가 필요한 에이전트 환경에 최적화되어 있습니다. Claude Code, OpenClaw, CodeBuddy 등 주요 개발 에이전트 프레임워크와의 긴밀한 최적화를 통해 뛰어난 코드 생성 및 문서화 능력을 발휘합니다. 또한, 'Thinking Mode'를 통해 복잡한 수학 문제 해결이나 고난도 논리 추론 작업에서 심층적인 사고 과정을 수행할 수 있습니다. 1M 컨텍스트를 활용한 대규모 기술 문서 분석, 법률 검토, PPT 생성 자동화 등 지식 집약적인 비즈니스 시나리오에서 강력한 도구로 활용됩니다.

## 한계
프리뷰 버전인 만큼 일부 최고 난이도의 에이전트 작업에서는 OpenAI의 o1이나 Anthropic의 Opus 4.6(사고 모드) 대비 지능의 격차가 존재할 수 있음을 개발사측에서도 명시하고 있습니다. 또한, 텍스트와 코드의 논리적 구조 처리에 집중된 DSA 아키텍처 특성상 시각 자료나 음성 등 멀티모달 데이터를 직접 이해하는 기능은 포함되어 있지 않아, 해당 기능이 필요한 경우 별도의 특화 모델과의 연동이 필요합니다.
