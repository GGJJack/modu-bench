---
modelId: gemma-2-9b
domain: llm
status: published
updated: 2026-11-02
sources:
  - https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
  - https://huggingface.co/google/gemma-2-9b
  - https://github.com/google-deepmind/gemma
  - https://arxiv.org/abs/2408.00118
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "Google이 2024년 6월 공개한 9B(90억) 파라미터 규모의 고성능 오픈 기본(Base) 사전학습 모델"
  - "8조(8T) 토큰의 대규모 데이터셋과 27B 모델로부터의 지식 증류를 적용하여 동급 체급 최고 수준의 언어 모델링 능력 실현"
  - "단일 고성능 GPU 또는 워크스테이션 환경에서 높은 가성비의 맞춤형 파인튜닝 지원"
relatedOrganization: google-research
---

# Gemma 2 9B 소개

## 개요
Gemma 2 9B는 Google DeepMind와 연구팀이 2024년 6월에 공개한 90억(9B) 파라미터 규모의 차세대 오픈 가중치 기본 사전학습(Base) 언어 모델입니다. 구글의 플래그십 인공지능인 Gemini 모델 패밀리의 아키텍처 혁신과 학습 노하우를 계승하였으며, 8조(8T) 토큰에 달하는 방대한 웹 문서, 코드, 수학 데이터를 기반으로 사전학습되었습니다. 대화 튜닝이나 특정 태스크 정렬을 거치지 않은 원초적 사전학습 가중치로서, 연구자와 기업이 도메인 특화 모델을 구축하고 다양한 자연어 처리 연구를 수행할 수 있는 탄탄한 기반을 제공합니다.

## 기술 특징
Gemma 2 9B는 파라미터 대비 추론 효율성을 극대화하도록 전면 재설계된 트랜스포머 아키텍처를 채택했습니다. 8조 토큰을 학습하는 과정에서 대규모 상위 모델(Gemma 2 27B)의 예측 분포를 활용하는 사전학습 지식 증류(Pre-training Distillation) 기법이 적용되어, 동일한 크기의 기존 오픈 가중치 모델(Llama 3 8B 등)을 상회하는 언어 이해 및 추론 역량을 갖추었습니다. 8,192(8K) 토큰의 컨텍스트 창과 슬라이딩 윈도우 어텐션(Sliding Window Attention) 메커니즘을 지원하며, 256k 크기의 대형 토크나이저를 통해 다국어 표현력과 코드 처리 밀도를 향상시켰습니다.

## 사용 사례
Gemma 2 9B는 단일 소비자용 GPU(예: NVIDIA RTX 4090, 3090)나 단일 엔터프라이즈 가속기(A100, H100, TPU) 환경에서 효율적인 파인튜닝과 빠른 서빙이 가능합니다. 개발자는 본 기본 모델을 바탕으로 법률, 금융, 의학 등 특정 도메인의 지도 학습(SFT), 선호도 최적화(DPO/KTO), LoRA 미세조정을 수행하여 자체 특화 LLM을 구축할 수 있습니다. Hugging Face Transformers, Axolotl, Llama-Factory, Unsloth, vLLM, TensorRT-LLM 등 대표적인 오픈소스 생태계 툴체인과 유기적으로 호환됩니다.

## 한계
Gemma 2 9B는 정렬되지 않은 기본 사전학습 모델이므로 프롬프트에 대해 다음 토큰을 지속적으로 완성(Completion)하려는 경향을 보이며, 안전 필터나 대화 지침이 직접적으로 적용되어 있지 않습니다. 따라서 사용자 대상 서비스나 대화형 에이전트로 활용하기 위해서는 추가적인 안전성 정렬 및 지시어 튜닝 과정이 필수적입니다. 또한 수백억~수천억 파라미터급 초대형 모델에 비해 심층적인 다단계 계획 수립이나 복잡한 코드베이스 전체 합성 등에서는 한계가 있으며, 텍스트 전용 모델로서 멀티모달 입력은 지원하지 않습니다.
