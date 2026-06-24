---
modelId: qwen-3-embedding-0-6b
domain: llm
status: published
updated: 2026-06-24
sources:
  - https://qwenlm.github.io/blog/qwen3-embedding/
  - https://huggingface.co/Qwen/Qwen3-Embedding-0.6B
  - https://github.com/QwenLM/Qwen3-Embedding
highlights:
  - "0.6B 파라미터 규모의 고성능 텍스트 임베딩 모델"
  - "MTEB 리더보드 상위권 기록 및 뛰어난 다국어 지원 (100개 이상의 언어)"
  - "32K 컨텍스트 윈도우 및 유연한 벡터 차원 정의(MRL) 지원"
relatedOrganization: alibaba
---

# Qwen3-Embedding-0.6B 소개

## 개요
Qwen3-Embedding-0.6B는 Alibaba Cloud의 Qwen 팀이 2025년 6월 5일에 공개한 Qwen3 파운데이션 모델 기반의 텍스트 임베딩 모델입니다. 이 모델은 텍스트 검색(Retrieval), 의미론적 유사도 계산, RAG(Retrieval-Augmented Generation) 시스템의 핵심 구성 요소로 설계되었으며, 비교적 작은 파라미터 규모에도 불구하고 강력한 성능을 제공합니다.

## 기술 특징
Qwen3-Embedding 시리즈는 이중 인코더(Dual-encoder) 아키텍처를 채택하고 있으며, LoRA 미세 조정을 통해 베이스 모델인 Qwen3의 텍스트 이해 능력을 보존 및 강화했습니다. 0.6B 모델은 28개의 레이어로 구성되어 있으며, 최대 32,768 토큰의 긴 컨텍스트를 지원합니다. 특히 임베딩 벡터의 차원을 유연하게 조정할 수 있는 MRL(Matryoshka Representation Learning) 기술을 지원하여, 성능과 저장 공간 사이의 균형을 맞출 수 있습니다. 훈련 과정에서는 대규모 약지도 학습(Weakly supervised training)과 고품질 라벨링 데이터를 활용한 다단계 학습 패러다임을 따랐습니다.

## 사용 사례
이 모델은 다국어 검색 시스템, 코드 검색, 대규모 문서 분석 및 RAG 워크플로우에 최적화되어 있습니다. 100개 이상의 언어와 다양한 프로그래밍 언어를 지원하여 글로벌 서비스 및 기술 문서 검색에 강점을 가집니다. 또한 사용자 정의 명령(Instruction-aware) 기능을 통해 특정 언어나 시나리오에 맞춰 임베딩 성능을 향상시킬 수 있습니다.

## 한계
0.6B 모델은 효율성에 초점을 맞춘 모델로, 더 큰 파라미터를 가진 Qwen3-Embedding-8B 등 상위 모델에 비해서는 절대적인 정확도 면에서 차이가 있을 수 있습니다. 따라서 매우 정밀한 재순위화(Reranking)가 필요한 경우에는 Qwen3-Reranker 시리즈와 함께 사용하는 것이 권장됩니다.
