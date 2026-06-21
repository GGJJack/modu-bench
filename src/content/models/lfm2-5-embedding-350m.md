---
modelId: lfm2-5-embedding-350m
domain: llm
status: published
updated: 2026-06-21
sources:
  - https://www.liquid.ai/blog/lfm2-5-retrievers
  - https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M
features:
  toolUse: false
  vision: false
highlights:
  - "350M 파라미터 기반 고성능 임베딩 모델"
  - "LFM2.5 아키텍처의 양방향(Bidirectional) 인코더 변환"
  - "한국어 포함 11개 언어 지원 및 다국어 검색 최적화"
relatedOrganization: liquid-ai
---

# LFM2.5-Embedding-350M 소개

## 개요
LFM2.5-Embedding-350M은 Liquid AI가 2026년 6월 18일 출시한 고효율 다국어 리트리벌(Retrieval) 모델입니다. 3억 5천만 개의 파라미터를 보유한 이 모델은 Liquid Foundation Model(LFM) 제품군 중 처음으로 양방향(Bidirectional) 처리를 도입한 멤버입니다. 특히 단일 벡터 임베딩 방식을 사용하여 빠른 검색 속도와 낮은 인덱스 유지 비용을 목표로 설계되었습니다.

## 기술 특징
이 모델은 기존의 생성용 모델인 LFM2.5-350M-Base를 기반으로 하되, 리트리벌 작업에 최적화된 아키텍처 수정을 거쳤습니다.
- **양방향 인코더(Bidirectional Encoder)**: 인과적(Causal) 어텐션 마스크를 양방향 마스크로 교체하고, LFM의 핵심인 단기 합성곱(Short Convolutions)을 비인과적으로 수정하여 토큰이 문맥의 좌우를 모두 참조할 수 있게 했습니다.
- **다국어 및 교차 언어 지원**: 한국어, 영어, 아랍어, 독일어, 스페인어, 프랑스어, 이탈리아어, 일본어, 노르웨이어, 포르투갈어, 스웨덴어 등 11개 언어를 지원합니다.
- **CLS 스타일 풀링**: 전체 문서를 하나의 밀집 벡터(Dense Embedding)로 변환하여 검색 효율성을 극대화합니다.

## 사용 사례
LFM2.5-Embedding-350M은 특히 짧은 문맥의 검색 작업에 최적화되어 있습니다.
- **제품 카탈로그**: 대규모 이커머스 환경에서 저비용으로 고속 검색 인덱스를 구축할 때 적합합니다.
- **FAQ 및 고객 지원**: 다국어 고객 응대를 위한 지식 베이스 검색에 유용합니다.
- **온디바이스 검색**: 모델 크기가 작아 노트북이나 엣지 디바이스에서도 `llama.cpp` 등을 통해 낮은 지연 시간으로 구동이 가능합니다.

## 한계
- **문맥 길이 제한**: 주로 단일 문서나 짧은 조각(Snippet)을 검색하는 용도로 설계되었으며, 매우 긴 문서의 전역적 정보를 압축하는 데는 한계가 있을 수 있습니다.
- **정보 밀도**: 하나의 벡터로 모든 정보를 압축하는 Bi-Encoder 방식의 특성상, 세밀한 단어 일치나 복잡한 추론 검색에서는 ColBERT 방식에 비해 정확도가 소폭 낮을 수 있습니다.
