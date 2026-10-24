---
modelId: exaone-3-5-32b-base
domain: llm
status: published
updated: 2026-10-24
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Base
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: false
  vision: false
highlights:
  - "32B 파라미터 규격의 EXAONE 3.5 파운데이션 Base 모델"
  - "최대 32,768(32K) 토큰 컨텍스트 윈도우 지원 및 높은 지능 밀도"
  - "도메인 특화 미세조정 및 인스트럭션 튜닝을 위한 고성능 기초 모델"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 32B Base 소개

## 개요
EXAONE 3.5 32B Base는 LG AI Research가 2024년 12월 공개한 320억(32B) 매개변수 규모의 파운데이션 언어 모델(Foundation Base Model)이다. EXAONE 3.5 오픈소스 라인업의 최고 성능 베이스 모델으로서, 정렬(Alignment) 후처리를 거치기 전의 사전학습 웨이트를 제공한다. 고품질 한국어 및 영어 데이터셋으로 대규모 사전학습을 거쳐 뛰어난 언어 이해력과 기초 지식 표현 능력을 보유하고 있다.

## 기술 특징
EXAONE 3.5 32B Base는 총 64개 트랜스포머 레이어와 GQA(Grouped Query Attention) 구조를 적용하여 메모리 연산 효율성을 높였다. 전체 32B 파라미터 중 임베딩 레이어를 제외한 non-embedding 파라미터 수는 30.95B 수준이다. 입력 컨텍스트 길이는 최대 32,768(32K) 토큰을 지원하여 장문 이해 및 파악에 강점을 보인다. 오픈소스 라이선스(EXAONE AI Model License Agreement 1.1 - NC)를 통해 연구자 및 기업이 독자적인 파인튜닝 연구를 수행할 수 있도록 지원한다.

## 사용 사례
이 모델은 자체 데이터 기반의 지도 미세조정(SFT), DPO/RLHF 정렬 학습, 도메인 특화(금융, 법률, 의료 등) 파운데이션 모델 구축의 기초 모델로 활용된다. 고성능 32B 체급의 기초 지식을 내장하고 있어, 인하우스 구축용 전용 LLM을 개발하려는 연구소 및 기업 엔지니어링 팀에 적합한 출발점을 제공한다.

## 한계
대규모 사전학습 상태의 Base 웨이트이므로 사용자 직관적인 대화형 응용이나 지시 이행 작업에 즉시 활용하기 위해서는 SFT 또는 정렬 학습 과정이 필수적이다. 또한 32B 크기 특성상 단일 고성능 GPU 메모리 요구량이 존재하므로, 양자화(AWQ, GGUF) 기술이나 분산 추론 환경을 구성하여 사용하는 것이 권장된다.
