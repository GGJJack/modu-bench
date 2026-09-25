---
modelId: llama-3-8b
domain: llm
status: published
updated: 2026-09-25
sources:
  - https://ai.meta.com/blog/meta-llama-3/
  - https://huggingface.co/meta-llama/Meta-Llama-3-8B
  - https://github.com/meta-llama/llama3
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "15조 개 이상의 토큰으로 사전 학습된 Meta의 8B 오픈 가중치 대표 언어 모델"
  - "Grouped-Query Attention(GQA) 도입을 통한 추론 효율성 극대화"
  - "Llama 3 커뮤니티 라이선스 기반 상용 이용 및 맞춤형 파인튜닝 지원"
relatedOrganization: meta
---

# Llama 3 8B 소개

## 개요
Llama 3 8B는 Meta가 2024년 4월 발표한 3세대 오픈 가중치(Open-weights) 파운데이션 언어 모델 시리즈의 핵심 라인업입니다 ([Meta Llama 3 Announcement](https://ai.meta.com/blog/meta-llama-3/)). 이전 세대인 Llama 2 대비 7배 이상 늘어난 15조(Trillion) 개 이상의 고품질 토큰 데이터셋으로 사전 학습되었으며, 80억 개 파라미터 체급에서 당대 최고 수준의 지식 이해와 추론 능력을 제시하였습니다 ([Hugging Face Meta-Llama-3-8B](https://huggingface.co/meta-llama/Meta-Llama-3-8B)).

## 기술 특징
Llama 3 8B는 연산 효율성과 메모리 가용성을 개선하기 위해 128k 어휘집(Vocabulary) 크기를 가진 새 바이트 페어 인코딩(BPE) 토크나이저를 채택하였습니다 ([GitHub Meta Llama 3](https://github.com/meta-llama/llama3)). 또한, 기존 대형 라인업에만 적용되던 GQA(Grouped-Query Attention) 아키텍처를 8B 모델에도 전면 적용하여 Key-Value(KV) 캐시 메모리 점유율을 줄이고 빠른 응답 속도를 확보하였습니다 ([Meta Llama 3 Announcement](https://ai.meta.com/blog/meta-llama-3/)). 지도 미세조정(SFT)과 거부 샘플링(Rejection Sampling), DPO(Direct Preference Optimization)를 결합한 Post-training 파이프라인을 통해 지시 이행률과 안전성을 강화했습니다.

## 사용 사례 및 한계
이 모델은 단일 GPU 환경이나 로컬 개발 서버, 엣지 기기 상에서 경량 LLM 서비스나 RAG(검색 증강 생성) 시스템을 구축할 때 널리 활용됩니다. Llama 3 커뮤니티 라이선스를 통해 상용 서비스 서비스 적용 및 도메인 특화 데이터 기반 파인튜닝(Fine-tuning)이 자유롭게 지원됩니다 ([Hugging Face Meta-Llama-3-8B](https://huggingface.co/meta-llama/Meta-Llama-3-8B)). 다만, 컨텍스트 윈도우가 8,192 토큰으로 제한되어 초장문 문서 분석에는 제약이 있으며, 8B 체급의 특성상 복잡한 고난도 수학 증명이나 수천 단계 연쇄 추론에서는 추가적인 파인튜닝이나 도구 활용이 필요합니다.
