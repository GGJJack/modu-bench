---
benchmarkId: mteb-r
domain: llm
status: published
updated: 2026-09-22
sources:
  - https://arxiv.org/abs/2210.07316
  - https://huggingface.co/spaces/mteb/leaderboard
  - https://github.com/embeddings-benchmark/mteb
organization: hugging-face
paperUrl: https://arxiv.org/abs/2210.07316
highlights:
  - "대규모 텍스트 임베딩 모델 평가의 표준 벤치마크"
  - "다양한 작업(8개 작업)과 58개의 데이터셋 통합"
---

# MTEB (Retrieval)

## 개요
MTEB(Massive Text Embedding Benchmark)는 텍스트 임베딩 모델의 성능을 포괄적으로 평가하기 위해 설계된 대규모 벤치마크입니다. 기존의 임베딩 평가가 시맨틱 텍스트 유사도(STS)와 같은 단일 작업에 편중되어 있던 문제를 해결하기 위해, 다양한 텍스트 처리 작업을 아우르는 종합적인 평가 기준을 제시합니다.

## 평가 방법
전체 MTEB는 8개의 주요 작업과 총 58개의 데이터셋, 그리고 112개의 언어를 포괄하도록 구성됩니다. 이 벤치마크를 통해 텍스트 임베딩 모델이 의미론적 텍스트 유사도(STS)를 넘어 클러스터링, 리랭킹(reranking), 정보 검색(retrieval) 등 다양한 작업에 걸쳐 일관된 성능을 제공하는지 평가할 수 있습니다.

## 점수 해석
MTEB 평가 결과는 단일 텍스트 임베딩 방식이 모든 작업에서 우위를 점하지 않음을 시사하며, 범용적인 텍스트 임베딩 방법을 향한 모델의 유연성을 반영합니다. 점수가 높을수록 임베딩 모델이 다양한 형태의 사용자 데이터와 검색 작업 환경에서도 안정적인 성능을 확보할 수 있음을 나타냅니다.
