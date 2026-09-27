---
benchmarkId: mldr
domain: llm
status: published
updated: 2026-09-25
sources:
  - https://arxiv.org/abs/2402.03216
  - https://github.com/FlagOpen/FlagEmbedding
  - https://huggingface.co/datasets/Shitao/MLDR
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

## 성능 향상 기법
연구진은 M3-Embedding의 성능을 극대화하기 위해 다중 기능에 대한 자가 지식 증류(self-knowledge distillation) 방식을 제안했습니다. 이를 통해 서로 다른 검색 기능의 관련성 점수를 교사 신호(teacher signal)로 통합하여 학습 품질을 향상시켰습니다. 또한 배치(batching) 전략을 최적화하여 대규모 배치 사이즈와 높은 훈련 처리량을 확보함으로써 임베딩의 변별력을 높였습니다.

## 의의
이 모델은 다국어, 교차 언어(cross-lingual), 장문 문서 검색 벤치마크에서 기존의 최고 성능(state-of-the-art)을 갱신했습니다. 단일 모델로 100개가 넘는 언어 환경과 세 가지 주요 검색 방식, 그리고 가변적인 입력 길이를 모두 처리할 수 있어, 글로벌 검색 시스템 및 다양한 정보 검색 애플리케이션 구축에 핵심적인 기반 기술을 제공합니다.
