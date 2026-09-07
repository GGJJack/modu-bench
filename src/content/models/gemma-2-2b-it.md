---
modelId: gemma-2-2b-it
domain: llm
status: published
updated: 2026-09-07
sources:
  - https://blog.google/technology/developers/gemma-2-2b-lightweight-ai-model/
  - https://huggingface.co/google/gemma-2-2b-it
  - https://github.com/google-deepmind/gemma
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "Google이 2024년 7월 공개한 2.6B(26억) 파라미터 온디바이스 최적화 오픈 모델"
  - "대형 Gemma 2 모델로부터의 지식 증류(Knowledge Distillation)를 통해 체급 대비 압도적인 추론 능력 달성"
  - "모바일, 엣지 디바이스 및 경량 로컬 환경 배포에 특화"
relatedOrganization: google-research
---

# Gemma 2 2B IT 소개

## 개요
Gemma 2 2B IT는 Google이 2024년 7월에 공개한 온디바이스 및 경량 컴퓨팅 환경 특화 26억(2.6B) 파라미터 규모의 오픈 가중치 대화형 언어 모델입니다. Gemini 모델군 개발 노하우와 고도화된 아키텍처를 바탕으로 구축되었으며, 2B급 소형 언어 모델 카테고리에서 비약적인 성능과 높은 추론 가성비를 제공하도록 설계되었습니다.

## 기술 특징
Gemma 2 2B IT는 상위 체급 모델인 Gemma 2 27B 및 9B로부터 고품질 표현 능력을 전수받는 지식 증류(Knowledge Distillation) 기술을 적용하여 학습되었습니다. 이를 통해 2B 파라미터 수준의 경량 모델임에도 이전 세대의 대형 모델들과 경쟁할 만한 놀라운 텍스트 이해 및 지시어 이행 성능을 보여줍니다. 8192(8K) 토큰 컨텍스트 창을 지원하며, 엣지 TPU, 모바일 GPU, CPU 및 소형 VRAM 환경에서도 극도로 빠르고 적은 메모리 점유율로 구동됩니다.

## 사용 사례
Gemma 2 2B IT는 스마트폰, 태블릿, 에지 컴퓨팅 디바이스 등 리소스가 제약된 온디바이스 인공지능 애플리케이션에 최적화되어 있습니다. 오프라인 챗봇, 실시간 요약 도구, 스마트 키보드 보조 시스템, 경량 로컬 RAG 파이프라인 구축 등에 폭넓게 활용되며, Hugging Face Transformers, vLLM, Ollama, MediaPipe, Gemma.cpp 등 다양한 런타임 프레임워크와 유기적으로 통합됩니다.

## 한계
2.6B 파라미터 초경량 아키텍처 특성상 수십억~수천억 파라미터급 플래그십 LLM에 비해 복잡한 다단계 논리 추론이나 전문 학술 문제 해결에는 한계가 존재합니다. 또한 입력 정보가 제한되거나 매우 길고 복잡한 문맥 처리 시 주의가 분산될 수 있으며, 텍스트 전용 모델로서 이미지나 오디오 등 멀티모달 데이터는 직접 수용하지 못합니다.
