---
modelId: gemma-2-27b-it
domain: llm
status: published
updated: 2026-09-06
sources:
  - https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
  - https://huggingface.co/google/gemma-2-27b-it
  - https://github.com/google-deepmind/gemma
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "27B 파라미터 경량 오픈 모델"
  - "단일 NVIDIA H100 GPU 또는 TPU 호스트에서 추론 지원"
  - "동급 체급 대비 최고 수준의 성능 및 효율 제공"
relatedOrganization: google
---

# Gemma 2 27B IT 소개

## 개요
Gemma 2 27B IT는 Google DeepMind에서 개발하여 2024년 6월 27일 공개된 경량 오픈 대규모 언어 모델(LLM)이다. Gemini 모델을 구축하는 데 사용된 동일한 연구 및 기술을 기반으로 설계되었으며, 270억(27B) 파라미터 크기의 지시 이행 전용(Instruction-tuned) 변형 모델이다. 이 모델은 단일 NVIDIA H100 Tensor Core GPU 또는 Google Cloud TPU 호스트에서 전체 정밀도 추론이 가능하도록 최적화되어, 프라이빗 온프레미스 및 클라우드 환경에서 배포 비용을 크게 절감할 수 있다.

## 기술 특징
Gemma 2 27B IT는 재설계된 아키텍처를 기반으로 추론 효율성과 성능을 크게 향상시켰다. 13조(13 Trillion) 토큰의 웹 문서, 코드, 수학 전문 데이터셋으로 사전 학습되었으며, JAX 및 ML Pathways 시스템을 활용해 TPUv5p 인프라에서 효율적으로 훈련되었다. MMLU 75.2, HellaSwag 86.4, GSM8K 74.0 등 주요 벤치마크 평가에서 동일 체급 오픈 모델 대비 뛰어난 성과를 나타내며, 자기보다 두 배 이상 큰 가중치를 지닌 모델과 경쟁 가능한 성능을 구현했다.

## 사용 사례 및 한계
이 모델은 질의응답, 문서 요약, 논리적 추론, 코드 생성 및 대화형 AI 시스템 구축 등 다양한 자연어 처리 과제에 적합하다. Hugging Face Transformers, vLLM, Ollama, Gemma.cpp, NVIDIA TensorRT-LLM 등 주요 프레임워크 및 파이프라인과의 광범위한 호환성을 제공한다. 다만 언어적 뉘앙스나 모호성에 대한 한계 및 환각(Hallucination) 현상이 발생할 수 있으므로, 구글의 책임 있는 Generative AI 툴킷과 연동한 안전 가이드라인 준수가 권장된다.
