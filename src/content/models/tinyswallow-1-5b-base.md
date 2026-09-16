---
modelId: tinyswallow-1-5b-base
domain: llm
status: published
updated: 2026-09-16
sources:
  - https://sakana.ai/taid-jp/
  - https://huggingface.co/SakanaAI/TinySwallow-1.5B
  - https://arxiv.org/abs/2501.16937
features:
  toolUse: false
  vision: false
highlights:
  - "시변 적응적 보간 증류(TAID) 기법을 활용하여 구축된 1.5B 규모의 일본어 특화 베이스 언어 모델"
  - "도쿄공업대학 Swallow 팀과 Sakana AI의 협업으로 탄생한 일본어 파운데이션 모델"
  - "Qwen2.5-1.5B를 시작 모델로 삼아 대형 상위 모델의 지식을 정교하게 이전받아 생성 성능 극대화"
relatedOrganization: sakana-ai
---

# TinySwallow-1.5B 소개

## 개요
TinySwallow-1.5B는 사카나 AI(Sakana AI)와 도쿄공업대학(Tokyo Tech) Swallow 팀이 공동 개발하여 2025년 1월에 출시한 15억(1.5B) 매개변수 규모의 일본어 특화 사전 학습(Base / Pre-trained) 대형 언어 모델이다. 이 모델은 사카나 AI의 혁신적인 지식 증류 방법론인 TAID(Temporally Adaptive Interpolated Distillation, 시변 적응적 보간 증류) 기술을 사전 학습 및 지속 사전 학습 과정에 적용하여 만들어진 베이스 언어 모델로, 초경량 규격임에도 뛰어난 일본어 언어 표현력과 이해도를 자랑한다.

## 기술 특징
TinySwallow-1.5B는 Qwen2.5-1.5B 파운데이션 모델을 기초 구조로 활용하여, 대규모 일본어 텍스트 코퍼스와 고급 합성 데이터셋을 바탕으로 지속 사전 학습(Continued Pre-training)을 진행하였다. 특히 교사 모델인 Qwen2.5-32B의 고도화된 지식을 학생 모델인 1.5B 크기의 소형 모델로 전달하는 공정에서 TAID 기법을 적용하여 학습 시점별로 증류 손실(Distillation Loss)을 적응적으로 조율함으로써 정보 손실을 최소화하고 매개변수 당 지능 밀도를 비약적으로 높였다.

32K 토큰의 컨텍스트 윈도우를 기본 지원하며, 지시 이행 튜닝(Instruction Tuning)이나 얼라인먼트를 거치기 전의 순수 베이스 모델로서 파인튜닝, 도메인 특화 데이터 정제, 지식 증류 연구 등 다양한 하위 연구 및 상용 맞춤형 모델 구축의 단단한 기반을 제공한다.

## 사용 사례
TinySwallow-1.5B는 경량화된 베이스 모델로서 온디바이스(On-device) 환경 및 로컬 서버 구축을 목표로 하는 개발자나 연구자들에게 유용하게 활용된다. 특정 산업군(금융, 의료, 법률 등)에 특화된 일본어 소형 언어 모델(SLM)을 자체 파인튜닝하여 구축하고자 할 때 원형 모델(Base Model)로 활용하기 적합하다.

또한, 자원이 제한된 모바일 장치나 에지 컴퓨팅 디바이스 상에서 사전 학습 모델 기반의 텍스트 계속 생성, 언어 모델링 연구, 지식 증류 실험 등을 수행하는 연구 플랫폼으로 뛰어난 효율성과 낮은 연산 비용을 제공한다.

## 한계
지도 학습(SFT)이나 RLHF 등 인간 선호도 정렬이 적용되지 않은 순수 사전 학습 베이스 모델이므로, 대화형 질의응답이나 복잡한 지시 이행(Instruction Following) 시 추가 튜닝 없이는 기대하는 형식의 정제된 답변을 출력하지 못할 수 있다. 또한 1.5B 파라미터의 물리적 한계로 인해 다단계 수학적 증명이나 고난도 연산 추론 과업에서는 대형 모델에 비해 한계가 존재한다.
