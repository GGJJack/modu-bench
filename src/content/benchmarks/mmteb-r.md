---
benchmarkId: mmteb-r
domain: llm
status: published
updated: 2026-09-25
sources:
  - https://arxiv.org/abs/2210.07316
  - https://github.com/embeddings-benchmark/mteb
  - https://huggingface.co/spaces/mteb/leaderboard
organization: hugging-face
highlights:
  - "다국어 텍스트 임베딩 모델의 검색 성능을 평가하는 벤치마크"
---

# MMTEB (Retrieval)

## 개요
MMTEB (Massive Multilingual Text Embedding Benchmark) Retrieval은 기존 영어 중심의 임베딩 벤치마크를 확장하여 수십 개의 다양한 언어에 대한 텍스트 검색 성능을 포괄적으로 평가하는 시스템입니다. MTEB 프레임워크의 일환으로 구축되었으며 다국어 지원 임베딩 모델들의 교차 언어 및 단일 언어 검색 품질을 측정합니다.

## 평가 방법
다양한 언어권의 정보 검색(Information Retrieval) 데이터셋을 모아 모델이 주어진 질문(query)에 대해 관련성 높은 문서(document)를 정확하게 찾아내는지를 확인합니다. 언어별 성능 편차를 분석하여 모델이 자원이 부족한(low-resource) 언어에서도 얼마나 일관적인 검색 성능을 유지하는지를 함께 평가합니다.

## 점수 해석
점수가 높을수록 해당 모델이 영어뿐만 아니라 다양한 글로벌 언어 환경에서 정확하고 의미론적으로 유의미한 검색 결과를 제공함을 의미합니다. 다국어 기반의 RAG (Retrieval-Augmented Generation) 시스템이나 글로벌 검색 엔진을 구축할 때 핵심적인 성능 기준으로 활용됩니다.
