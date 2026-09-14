---
modelId: qwen2.5-coder-1.5b-base
domain: llm
status: published
updated: 2026-09-14
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B
  - https://arxiv.org/abs/2409.12186
features:
  fineTuning: true
highlights:
  - "총 1.54B 파라미터 (비임베딩 1.31B)"
  - "32,768 토큰 풀 컨텍스트 윈도우 지원"
  - "5.5조 토큰 데이터셋 pre-training 기초 모델"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-1.5B 소개

## 개요
Qwen2.5-Coder-1.5B는 알리바바 클라우드(Alibaba Cloud)의 Qwen 팀이 공개한 코드 특화 경량 베이스 언어 모델입니다. 2024년 11월 공식 출시된 Qwen2.5-Coder 시리즈는 0.5B부터 32B까지 총 6가지 파라미터 규격을 커버하며, 그중 1.5B 모델은 엣지 디바이스 및 하원 자원 환경에서 효율적인 코드 이해와 사후 학습(SFT/RLHF)의 기틀을 마련하기 위해 설계되었습니다.

## 기술 특징
Qwen2.5-Coder-1.5B는 총 1.54B 파라미터(Non-Embedding 1.31B)와 28개의 레이어, 12개의 Query Attention Head 및 Grouped Query Attention(GQA 2 KV Head) 구조를 기반으로 구성되어 있습니다. 사전 훈련 데이터셋은 소스 코드, 텍스트-코드 그라운딩 데이터, 합성 데이터 등을 포함해 총 5.5조(5.5 Trillion) 토큰 규모로 확장되었으며, 최대 32,768 토큰(32K)의 시퀀스 길이를 지원합니다. 본 모델은 대화형 정렬을 거치지 않은 순수 베이스(Base) 모델로서, 개발자가 자체 도메인 특화 코딩 데이터셋으로 미세조정(Fine-tuning)을 수행하거나 Fill-in-the-Middle(FIM) 태스크에 활용하기에 최적화된 기초 레이어를 제공합니다.

## 사용 사례 및 한계
Qwen2.5-Coder-1.5B 베이스 모델은 경량화된 온디바이스 자동완성 엔진 구축, 개인 맞춤형 오프라인 코드 파인튜닝 실험, 연구 목적의 인스트럭트 튜닝 베이스라인 등 다양한 용도로 활용됩니다. 특히 Apache 2.0 오픈소스 라이선스로 제공되어 상업적 서비스 결합 및 연구 보급이 용이합니다. 다만 지시 이행(Instruction Following) 튜닝이나 챗 템플릿 정렬이 적용되어 있지 않으므로 대화형 인터페이스로 바로 사용하기에는 적합하지 않으며, 사후 정렬 단계를 거치지 않을 경우 일반 텍스트 대화에서는 프롬프트 지시를 제대로 완수하지 못할 수 있습니다.
