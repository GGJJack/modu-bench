---
modelId: mistral-small-3-1
domain: llm
status: published
updated: 2026-06-25
sources:
  - https://mistral.ai/news/mistral-small-3-1/
  - https://huggingface.co/mistralai/Mistral-Small-3.1-24B-Instruct-2503
features:
  toolUse: true
  vision: true
highlights:
  - "24B 파라미터, 체급 내 최고 수준 성능"
  - "Apache 2.0 라이선스로 공개"
  - "128k 컨텍스트 창 및 초당 150 토큰의 빠른 속도"
relatedOrganization: mistral-ai
---

# Mistral Small 3.1 소개

## 개요
Mistral Small 3.1은 2025년 3월 17일에 공개된 Mistral AI의 효율성 중심 모델입니다. 이전 세대인 Mistral Small 3를 기반으로 텍스트 성능, 멀티모달 이해력, 그리고 컨텍스트 창을 대폭 개선하였습니다. 특히 24B 파라미터 체급에서 Gemma 3나 GPT-4o Mini와 같은 모델을 능가하는 성능을 보이면서도, 초당 150 토큰에 달하는 빠른 추론 속도를 제공하는 것이 특징입니다.

## 기술 특징
*   **라이선스 및 접근성**: Mistral Small 3.1은 Apache 2.0 라이선스로 공개되어 상업적 이용과 수정이 자유롭습니다.
*   **멀티모달 능력**: 텍스트뿐만 아니라 이미지 이해 능력을 갖추고 있어 문서 검증, 객체 탐지 등 시각적 데이터가 포함된 작업에 활용 가능합니다.
*   **확장된 컨텍스트**: 최대 128k 토큰의 컨텍스트 창을 지원하여 긴 문서 분석이나 복잡한 대화 맥락 유지에 유리합니다.
*   **효율적인 추론**: 단일 RTX 4090 GPU 또는 32GB RAM을 탑재한 Mac에서 구동 가능할 만큼 가벼워 온디바이스(On-device) 환경에 적합합니다.

## 사용 사례
*   **가상 비서 및 실시간 상담**: 빠른 응답 속도가 필요한 대화형 애플리케이션에 최적화되어 있습니다.
*   **에이전트 및 함수 호출**: 저지연(Low-latency) 함수 호출 기능을 지원하여 자율적인 워크플로우나 에이전트 시스템의 기반 모델로 사용됩니다.
*   **도메인 특화 미세 조정**: 법률, 의료, 기술 지원 등 특정 분야의 데이터를 학습시켜 전문 모델로 구축하기에 적합한 기초 모델(Foundation Model)입니다.

## 한계
Mistral Small 3.1은 효율성에 최적화된 모델이므로, Mistral Large 시리즈와 같은 대규모 모델에 비해 매우 복잡한 추론이나 방대한 지식이 필요한 작업에서는 성능 차이가 존재할 수 있습니다. 공식적으로 명시된 특정 언어나 작업에 대한 세부적인 실패 사례는 공개되지 않았으나, 일반적인 소형 모델의 제약을 공유할 것으로 보입니다.
