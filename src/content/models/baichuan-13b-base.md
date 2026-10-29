---
modelId: baichuan-13b-base
domain: llm
status: published
updated: 2026-10-29
sources:
  - https://www.baichuan-ai.com/
  - https://huggingface.co/baichuan-inc/Baichuan-13B-Base
  - https://github.com/baichuan-inc/Baichuan-13B
  - https://arxiv.org/abs/2309.10305
features:
  toolUse: false
  vision: false
highlights:
  - "Baichuan Intelligent Technology가 개발하여 2023년 7월 공개한 13B 파라미터 규모의 오픈소스 기초 모델"
  - "1.4조(1.4T) 개 토큰의 고품질 다국어 데이터셋을 기반으로 사전 학습 수행"
  - "ALiBi(Attention with Linear Biases) 위치 인코딩 적용으로 뛰어난 확장성과 긴 맥락 안정성 확보"
relatedOrganization: baichuan-inc
---

# Baichuan-13B-Base 소개

## 개요
Baichuan-13B-Base는 백천지능(Baichuan Intelligent Technology)이 2023년 7월에 전격 공개한 130억 파라미터 규모의 오픈소스 기초(Base) 대형 언어 모델입니다. 선행 모델인 Baichuan-7B의 성공을 바탕으로 파라미터 규모와 학습 데이터양을 대폭 확장하여 개발되었습니다. 사전 학습 단계에서 1조 4,000억(1.4T) 개 이상의 정제된 다국어 데이터셋을 학습하여 한층 강화된 언어 표현 능력과 논리적 추론 기본기를 제공합니다. 상업적 사용과 커뮤니티 활용을 고려하여 설계되었으며, 대화형 정렬을 수행하기 전의 순수 기초 가중치 상태로 제공되어 다양한 하위 태스크 미세 조정에 강력한 성능을 발휘합니다.

## 기술 특징
Baichuan-13B-Base는 트랜스포머 데코더 아키텍처를 기반으로 설계되었습니다. 특히 위치 인코딩 방식으로 ALiBi(Attention with Linear Biases) 기법을 채택하여 어텐션 연산 시 토큰 간의 거리에 따른 선형 바이어스를 부여합니다. 이를 통해 기존 RoPE 방식 대비 입력 길이 확장성이 뛰어나고, 길어진 컨텍스트 윈도우 환경에서도 추론 안정성을 유지하는 이점을 제공합니다. 또한 SwiGLU 활성화 함수 및 RMSNorm 정규화를 결합하여 대규모 데이터 학습 시 발생할 수 있는 수렴 불안정 문제를 최소화하고 모델의 전반적인 추론 정밀도를 개선했습니다.

## 사용 사례
Baichuan-13B-Base는 높은 기본 성능을 바탕으로 기업 및 연구소에서 전문 분야 맞춤형 지도 미세 조정(SFT) 모델을 구축할 때 핵심 백본 가중치로 널리 채택됩니다. 금융, 의료, 법률 등 전문 도메인 텍스트 분석 및 자동화 서비스 구축이나, 특정 요구사항에 맞춘 정교한 대화형 모델 개발의 출발점으로 이용하기 적합합니다. 또한 13B급 파라미터 크기는 단일 상용 GPU(예: A100/H100 또는 24GB VRAM GPU 환경)에서도 양자화 및 파이프라인 병렬화를 통해 원활한 추론 및 학습 가동이 가능합니다.

## 한계
이 모델은 대화형 정렬이나 지시 이행 정렬(Instruction Alignment) 단계를 거치지 않은 사전 학습 상태의 Base 가중치이므로, 별도의 미세 조정이나 인스트럭션 프롬프트 구성 없이 단순 대화 질문을 입력할 경우 의도한 답변 대신 연관 문장의 단순 반복이나 비정형 텍스트 완성을 출력할 가능성이 높습니다. 맥락 윈도우 스펙이 4,096(4K) 토큰으로 설정되어 있어 초장문 문서 일괄 해석이나 복잡한 프로젝트 단위 코드 분석에는 기술적 한계가 존재하며, 시각 및 음성 데이터를 직접 처리하는 멀티모달 기능은 제공되지 않습니다.
