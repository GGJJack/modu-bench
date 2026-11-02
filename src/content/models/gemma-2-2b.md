---
modelId: gemma-2-2b
domain: llm
status: published
updated: 2026-11-02
sources:
  - https://blog.google/technology/developers/gemma-2-2b-lightweight-ai-model/
  - https://huggingface.co/google/gemma-2-2b
  - https://github.com/google-deepmind/gemma
  - https://arxiv.org/abs/2408.00118
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "Google이 2024년 7월 공개한 2.6B(26억) 파라미터 규모의 온디바이스 최적화 기본(Base) 사전학습 모델"
  - "대형 Gemma 2 모델로부터의 지식 증류(Knowledge Distillation)를 사전학습 단계에 적용하여 체급 대비 뛰어난 언어 표현력 확보"
  - "모바일, 엣지 장치 및 경량 로컬 환경에서 도메인 특화 미세조정(Fine-tuning)을 위한 기초 가중치 제공"
relatedOrganization: google-research
---

# Gemma 2 2B 소개

## 개요
Gemma 2 2B는 Google이 2024년 7월에 공개한 온디바이스 및 엣지 컴퓨팅 환경 특화 26억(2.6B) 파라미터 규모의 오픈 가중치 기본 사전학습(Base) 언어 모델입니다. 구글 딥마인드와 연구진의 Gemini 모델군 개발 노하우 및 인프라를 바탕으로 개발되었으며, 2조(2T) 토큰의 대규모 텍스트 데이터를 통해 사전학습되었습니다. 지시 튜닝이나 정렬(Alignment)을 거치지 않은 순수 기본 가중치로서, 연구자 및 개발자가 자체 데이터셋을 이용해 다운스트림 태스크에 맞춰 파인튜닝할 수 있는 최적의 기반을 제공합니다.

## 기술 특징
Gemma 2 2B는 상위 체급 모델인 Gemma 2 27B 등 대규모 모델로부터 풍부한 지식을 전달받는 온더플라이 지식 증류(On-the-fly Knowledge Distillation) 기법을 학습 파이프라인에 통합하여 학습되었습니다. 이를 통해 총 파라미터 2.6B(비임베딩 2.02B, 임베딩 0.59B) 수준의 극소형 체급임에도 불구하고 광범위한 텍스트 표현 능력과 언어 모델링 완성도를 구현했습니다. 최대 8,192(8K) 토큰의 컨텍스트 길이를 지원하며, 256,000 크기의 대용량 어휘 사전(Vocabulary)을 탑재하여 다국어 및 코드 표현력이 우수합니다.

## 사용 사례
Gemma 2 2B는 스마트폰, 태블릿, 싱글보드 컴퓨터, 소형 로봇 및 엣지 TPU 등 컴퓨팅 리소스가 극도로 제약된 온디바이스 환경에서 맞춤형 모델을 구축하려는 개발자에게 이상적입니다. LoRA, QLoRA, 전역 파인튜닝(Full fine-tuning) 기법을 적용하여 도메인 특화 분류기, 텍스트 생성기, 문법 교정기 및 경량 온디바이스 에이전트를 개발하는 데 널리 활용됩니다. 또한 Hugging Face Transformers, Keras, JAX/Flax, Gemma.cpp, vLLM, Ollama 등 다양한 프레임워크와 완벽하게 호환됩니다.

## 한계
이 모델은 사전학습만 완료된 기본(Pretrained Base) 모델이므로 대화형 챗봇 형태로 즉시 사용하기에는 부적합하며, 사용자 지시어에 대한 자연스러운 대화 반응을 위해서는 추가적인 지도 미세조정(SFT) 및 RLHF/DPO 정렬 작업이 필요합니다. 또한 2.6B라는 파라미터 규모의 물리적 한계로 인해 복잡한 다단계 논리 추론이나 고난도 수학 문제 해결에는 대형 모델 대비 성능 격차가 존재하며, 텍스트 전용 모델이므로 시각(Vision)이나 오디오 등 멀티모달 입력은 처리할 수 없습니다.
