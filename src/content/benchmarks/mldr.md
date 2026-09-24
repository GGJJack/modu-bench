---
benchmarkId: mldr
domain: llm
status: draft
updated: 2026-09-25
sources:
  - https://arxiv.org/abs/2402.03216
organization: baai
paperUrl: https://arxiv.org/abs/2402.03216
highlights:
  - "Multi-Linguality, Multi-Functionality, Multi-Granularity Text Embeddings"
---

# MLDR

## 개요
M3-Embedding(MLDR) 모델은 다국어(Multi-Linguality), 다기능(Multi-Functionality), 다양한 입력 길이(Multi-Granularity)를 지원하는 임베딩 모델의 성능을 평가하기 위한 벤치마크입니다. 100개 이상의 언어에 대한 의미론적 검색(semantic retrieval) 기능을 통합적으로 지원합니다.

## 평가 방법
밀집 검색(dense retrieval), 다중 벡터 검색(multi-vector retrieval), 희소 검색(sparse retrieval)이라는 세 가지 일반적인 검색 기능을 동시에 수행할 수 있는지를 평가합니다. 또한 짧은 문장부터 긴 문서까지 다양한 입력 길이를 효과적으로 처리하는 능력을 측정합니다.
