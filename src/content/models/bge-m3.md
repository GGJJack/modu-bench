---
modelId: bge-m3
domain: llm
status: published
updated: 2026-08-29
sources:
  - https://huggingface.co/BAAI/bge-m3
  - https://arxiv.org/abs/2402.03216
features:
  toolUse: false
  vision: false
highlights:
  - "100개 이상의 다국어 텍스트 검색 지원"
  - "Dense, Sparse(BM25 유사), Multi-Vector(ColBERT) 3가지 검색 방식의 단일 모델 통합"
  - "최대 8,192 토큰 입력 컨텍스트 처리 가능"
---

# BGE-M3 소개

## 개요
BGE-M3는 베이징 인공지능 연구원(BAAI, Beijing Academy of Artificial Intelligence)에서 공개한 다국어 텍스트 임베딩 모델이다 (출처: https://huggingface.co/BAAI/bge-m3). 모델명 M3는 Multi-Functionality(다중 기능성), Multi-Linguality(다국어성), Multi-Granularity(다중 입도성)라는 세 가지 핵심 특성에서 유래했다. 100개 이상의 언어를 지원하며, 단문부터 최대 8,192 토큰의 긴 문서까지 범용적으로 처리할 수 있도록 설계되었다 (출처: https://arxiv.org/abs/2402.03216).

## 기술 특징
BGE-M3는 단일 텍스트 임베딩 모델 내에서 Dense Retrieval(밀집 검색), Sparse Retrieval(희소 검색/어휘 매칭), Multi-Vector Retrieval(ColBERT 방식 다중 벡터 검색)을 동시에 지원하는 다중 기능(Multi-Functionality) 아키텍처를 채택했다 (출처: https://huggingface.co/BAAI/bge-m3).

1. **다중 검색 기능 통합**: 1024 차원의 단일 밀집 벡터 표상뿐만 아니라, BM25처럼 어휘 토큰별 가중치를 계산하는 희소 표상, 그리고 문맥화된 다중 벡터 간 상호작용을 계산하는 ColBERT 표현 방식을 단일 인코딩 과정에서 추출할 수 있다 (출처: https://arxiv.org/abs/2402.03216).
2. **자체 지식 증류(Self-Knowledge Distillation)**: 서로 다른 검색 모드의 예측 점수들을 통합하여 교사(Teacher) 신호로 활용함으로써, 개별 검색 성능(특히 희소 검색 및 ColBERT 다중 벡터 검색)을 극대화하는 훈련 기법을 적용했다 (출처: https://arxiv.org/abs/2402.03216).
3. **긴 문서 처리(Multi-Granularity)**: XLM-RoBERTa 기반 아키텍처의 최대 길이를 8,192 토큰으로 확장하고 RetroMAE 사전 학습 및 다국어 긴 문서 데이터셋(MLDR) 구축을 통해 긴 문맥에서의 검색 정교함을 확보했다 (출처: https://huggingface.co/BAAI/bge-m3, https://arxiv.org/abs/2402.03216).

## 사용 사례 및 검색 파이프라인
BGE-M3는 검색 증강 생성(RAG) 시스템의 파이프라인 구축에 널리 활용된다 (출처: https://huggingface.co/BAAI/bge-m3). 대표적으로 Dense 검색과 Sparse 검색을 조합하는 하이브리드 검색(Hybrid Retrieval) 구조에서 추가적인 모델 구성 비용 없이 두 유형의 임베딩을 동시에 생성할 수 있다. 생성된 후보 문서들은 bge-reranker 등 교차 인코더(Cross-Encoder) 재순위화 모델과 결합되어 하이브리드 검색 파이프라인의 검색 정밀도를 크게 향상시킨다 (출처: https://huggingface.co/BAAI/bge-m3).

## 한계
BGE-M3는 텍스트 임베딩 및 검색 특화 모델로서 생성형 언어 모델과 같은 텍스트 생성 기능이나 Tool Use, 도구 호출 기능은 제공하지 않는다 (출처: https://huggingface.co/BAAI/bge-m3). 또한 ColBERT 다중 벡터 모드나 희소 표상 모드를 복합적으로 운영할 경우 단일 밀집 임베딩 모드 대비 추론 시 메모리 요구량과 연산 지연 시간이 증가할 수 있다 (출처: https://arxiv.org/abs/2402.03216).
