---
modelId: mistral-3
domain: llm
status: published
updated: 2026-06-14
sources:
  - https://mistral.ai/news/mistral-3/
  - https://huggingface.co/collections/mistralai/ministral-3
  - https://arxiv.org/abs/2601.08584
features:
  toolUse: true
  vision: true
  audioInput: false
  audioOutput: false
  fineTuning: true
highlights:
  - "Mistral Large 3(MoE)와 Ministral 3(Dense) 시리즈 포함"
  - "전 모델 Apache 2.0 라이선스 적용"
  - "이미지 이해 및 40개 이상의 다국어 지원"
relatedOrganization: mistral-ai
---

# Mistral 3 시리즈 소개

## 개요
Mistral 3는 Mistral AI가 2025년 12월에 발표한 차세대 모델 제품군입니다. 이 시리즈는 최상위 성능의 거대 모델인 'Mistral Large 3'와 에지(Edge) 및 로컬 환경에 최적화된 소형 모델인 'Ministral 3' 시리즈(14B, 8B, 3B)를 모두 포함합니다. Mistral 3 제품군의 모든 모델은 Apache 2.0 라이선스로 공개되어, 개발자들이 자유롭게 상업적 이용 및 최적화를 수행할 수 있도록 지원합니다.

## 기술 특징
Mistral 3 시리즈는 사용 목적에 따라 두 가지 주요 아키텍처를 채택했습니다. Mistral Large 3는 675B 총 파라미터(41B 활성 파라미터)를 가진 희소 혼합 전문가(MoE) 구조로 설계되어 프론티어급 성능을 제공합니다. 반면 Ministral 3 시리즈는 3B, 8B, 14B 크기의 고밀도(Dense) 모델로, 에지 디바이스에서의 고성능 추론을 목적으로 합니다. 전 모델이 이미지 이해(Vision) 역량을 기본으로 갖추고 있으며, 40개 이상의 언어를 지원하는 강력한 다국어 능력을 보여줍니다. 또한 NVIDIA와의 협업을 통해 TensorRT-LLM 및 SGLang 등의 최신 추론 엔진에 최적화되었습니다.

## 사용 사례
이 제품군은 데이터 센터부터 온디바이스 AI까지 폭넓은 사용 사례를 지원합니다. Mistral Large 3는 복잡한 추론, 대규모 코딩 프로젝트, 고도화된 에이전트 워크플로우에 적합하며, Ministral 3 시리즈는 스마트폰, 노트북, 로봇 등 로컬 환경에서의 실시간 번역, 문서 요약, 시각적 보조 기능 구현에 최적화되어 있습니다. 특히 추론 시 생성되는 토큰 수를 줄이면서도 정확도를 높여 비용 효율적인 서비스 구축이 가능합니다.

## 한계
Ministral 3 시리즈는 소형 모델임에도 뛰어난 성능을 보이지만, 매우 복잡한 논리 추론이나 전문적인 지식이 필요한 작업에서는 Mistral Large 3나 전용 추론 모델인 Reasoning 변체(Coming soon 언급)에 비해 성능이 낮을 수 있습니다. 또한 모든 모델이 이미지 이해는 가능하나, 비디오 이해나 오디오 입력을 직접 처리하는 네이티브 멀티모달 기능은 갖추고 있지 않습니다.
