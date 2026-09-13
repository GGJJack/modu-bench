---
modelId: qwen3-embedding-8b
domain: llm
status: published
updated: 2026-09-13
sources:
  - https://qwenlm.github.io/blog/qwen3-embedding/
  - https://huggingface.co/Qwen/Qwen3-Embedding-8B
  - https://github.com/QwenLM/Qwen3-Embedding
features:
  toolUse: false
  vision: false
highlights:
  - "MTEB 다국어 벤치마크 리더보드 1위 달성 (점수 70.58)"
  - "32K 컨텍스트 윈도우 및 최대 4096 임베딩 차원 지원 (MRL 가변 차원 지원)"
  - "100개 이상의 언어 및 다양한 프로그래밍 언어 지원"
relatedOrganization: alibaba
---

# Qwen3-Embedding-8B 소개

## 개요
Qwen3-Embedding-8B는 알리바바 클라우드 Qwen 팀이 2025년 6월 발표한 Apache 2.0 오픈소스 기반의 임베딩 전용 모델입니다. Qwen3 기반 파운드 모델의 텍스트 이해 및 논리적 추론 능력을 토대로 텍스트 검색, 코드 검색, 문서 분류, 클러스터링 및 비텍스트 마이닝을 수행할 수 있도록 최적화되었습니다.

이 모델은 공개 시점 MTEB 다국어 벤치마크 리더보드에서 1위(70.58점)를 기록하였으며, 8B 규모의 파라미터와 32K 토큰에 달하는 긴 문맥 길이를 지원합니다.

## 기술 특징
Qwen3-Embedding-8B는 이중 인코더(Dual-Encoder) 아키텍처와 LoRA 파인튜닝 기법을 활용하여 베이스 모델의 다국어 이해 능력을 손실 없이 계승했습니다. 매개변수 차원 감소(MRL, Matryoshka Representation Learning) 기법을 도입하여 사용자 요구에 따라 최소 32차원에서 최대 4096차원까지 임베딩 차원을 자율 조정할 수 있습니다.

또한 지시어 인식(Instruction-Aware) 기능을 내장하여 입력 쿼리에 태스크나 언어별 특화 지시어(Prompt)를 결합할 경우 검색 및 분류 정밀도를 1%~5%가량 추가 향상시킬 수 있습니다.

## 사용 사례
Qwen3-Embedding-8B는 Hugging Face `sentence-transformers`, `transformers`, `vLLM`, `Text Embeddings Inference (TEI)` 등 주요 프레임워크와 호환되어 용이하게 배포할 수 있습니다.

대표적으로 대규모 RAG(검색 증강 생성) 시스템의 벡터 데이터베이스 검색 인덱싱, 다국어 문서 검색 engine, 소스 코드 검색 시스템, 대규모 텍스트 자동 클러스터링 및 분류 서비스 구축 등에 널리 활용됩니다.

## 한계
8B 규모의 파라미터를 보유하여 0.6B 등 초경량 임베딩 모델 대비 높은 메모리 요구량(GPU VRAM)을 가집니다. 최적의 추론 속도 및 효율을 내기 위해서는 FlashAttention-2 기법 적용 및 GPU 인프라 배포가 권장됩니다.
