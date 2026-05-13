---
modelId: gemma-3-12b
domain: llm
status: published
updated: 2026-05-13
sources:
  - https://www.deeplearning.ai/the-batch/google-releases-gemma-3-vision-language-models-with-open-weights
  - https://aws.amazon.com/bedrock/pricing/
features:
  toolUse: true
  vision: true
highlights:
  - "Google DeepMind의 3세대 오픈 모델 제품군 중 중간급 모델"
  - "12B 파라미터 규모로 효율성과 성능의 균형 최적화"
  - "Gemma 2 27B 수준의 성능을 더 적은 자원으로 구현"
relatedOrganization: google-research
---

# Gemma 3 12B 소개

## 개요
Gemma 3 12B는 Google DeepMind가 2025년 3월에 발표한 차세대 오픈 가중치(Open-weights) 모델입니다. Google의 플래그십 모델인 Gemini의 기술력을 바탕으로 설계되었으며, 1B, 4B, 27B와 함께 출시된 Gemma 3 라인업 중 성능과 자원 효율성 사이의 최적의 균형을 제공하는 모델입니다. 특히 12B 모델은 이전 세대의 훨씬 큰 모델인 Gemma 2 27B와 대등하거나 이를 능가하는 지능을 보유하면서도, 더 적은 계산 자원으로 구동이 가능하다는 점이 특징입니다.

## 기술 특징
Gemma 3 12B는 텍스트뿐만 아니라 이미지와 비디오 입력을 처리할 수 있는 네이티브 시각-언어 모델(Vision-Language Model)입니다. 아키텍처 측면에서는 메모리 효율을 위해 로컬 어텐션(Local Attention)과 글로벌 어텐션(Global Attention)을 교차로 사용하는 구조를 채택했습니다. 또한, 지식 증류(Knowledge Distillation) 기법을 통해 상위 모델의 지능을 효과적으로 학습했으며, 강화학습(RLHF, RLEF 등)을 통해 수학적 추론과 코딩 능력을 대폭 강화했습니다. 128K 토큰의 확장된 컨텍스트 윈도우를 지원하여 긴 문서나 복잡한 시각 정보를 처리하는 데 적합합니다.

## 사용 사례
이 모델은 중간 규모의 서버나 고사양 소비자 하드웨어에서 원활하게 구동될 수 있어, 기업용 지식 베이스 분석, 고성능 코딩 어시스턴트, 그리고 시각 정보가 포함된 멀티모달 에이전트 구축에 널리 활용됩니다. 특히 수학과 코딩 분야에서 강력한 성능을 보여주며, 도구 사용(Tool Use) 및 함수 호출 기능이 강화되어 외부 시스템과 상호작용하는 복잡한 워크플로우를 자동화하는 데 최적화되어 있습니다.

## 한계
Gemma 3 12B는 강력한 성능을 보여주지만, 텍스트 전용인 1B 모델과 달리 시각 인코더(SigLIP)를 포함하고 있어 구동 시 일정한 VRAM 용량이 필수적입니다. 또한, 오픈 가중치 모델로서 특정 사용 환경에 따른 미세 조정이 가능하지만, Google의 공식 상용 API 모델인 Gemini 1.5 Pro 등에 비해서는 전반적인 지식의 폭이나 복잡한 추론의 정교함에서 차이가 있을 수 있습니다. 모든 AI 모델과 마찬가지로 사실 관계가 틀린 내용을 생성하는 환각 현상이 발생할 수 있으므로 결과물에 대한 검증이 권장됩니다.
