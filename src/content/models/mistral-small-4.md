---
modelId: mistral-small-4
domain: llm
status: draft
updated: 2026-06-10
sources:
  - https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03
  - https://mistral.ai/news/mistral-small-4/
features:
  toolUse: true
  vision: true
  extendedThinking: true
highlights:
  - "119B Sparse MoE (6.5B 활성 파라미터)"
  - "Magistral(추론), Pixtral(멀티모달), Devstral(코딩)의 능력을 하나로 통합"
  - "Apache 2.0 라이선스 적용"
relatedOrganization: mistral-ai
---

# Mistral Small 4 소개

## 개요
Mistral Small 4는 2026년 3월 Mistral AI가 발표한 차세대 하이브리드 거대 언어 모델입니다. 이 모델은 Mistral AI의 주요 특화 모델들인 Magistral(추론), Pixtral(멀티모달), 그리고 Devstral(코딩 에이전트)의 역량을 하나의 효율적인 아키텍처로 통합한 것이 특징입니다. 사용자는 더 이상 용도에 따라 모델을 교체할 필요 없이, Mistral Small 4 하나만으로 텍스트 채팅, 복잡한 추론, 이미지 분석 및 코딩 작업을 모두 수행할 수 있습니다.

## 기술 특징
Mistral Small 4는 희소 혼합 전문가(Sparse Mixture of Experts, MoE) 아키텍처를 채택하여 총 119B개의 파라미터를 보유하고 있으며, 토큰당 약 6.5B(임베딩 층 포함 시 8B)개의 파라미터만을 활성화하여 추론 효율성을 극대화했습니다. 또한 256k 토큰의 광범위한 컨텍스트 윈도우를 지원하여 긴 문서 분석 및 복잡한 상호작용에 최적화되어 있습니다. 특히 'reasoning_effort' 파라미터를 통해 답변의 깊이를 동적으로 조절할 수 있는데, 이를 통해 일상적인 대화를 위한 빠른 응답부터 복잡한 문제 해결을 위한 심층 추론까지 유연하게 대응 가능합니다.

## 사용 사례
이 모델은 높은 범용성과 효율성을 바탕으로 다양한 분야에서 활용될 수 있습니다. 개발자들에게는 고도의 코딩 자동화 및 코드베이스 탐색 도구로, 기업들에게는 문서 이해와 멀티모달 분석을 포함한 종합적인 AI 어시스턴트로 기능합니다. 또한 과학 연구자들은 모델의 강화된 추론 능력을 활용하여 수학 및 연구 과제를 수행할 수 있습니다. Apache 2.0 라이선스로 공개되어 있어 누구나 자유롭게 미세 조정하거나 독자적인 환경에 배포하여 사용할 수 있습니다.

## 한계 및 요구사항
Mistral Small 4는 효율적인 MoE 구조를 갖추고 있으나, 전체 모델 크기가 119B에 달하므로 원활한 구동을 위해서는 최소 4개의 NVIDIA HGX H100 또는 2개의 HGX H200 급 인프라가 권장됩니다. 또한 강력한 성능에도 불구하고, 고도의 추론 설정 시 응답 속도가 다소 느려질 수 있다는 점을 고려하여 사용 사례에 맞는 최적의 추론 노력을 설정하는 것이 중요합니다.
