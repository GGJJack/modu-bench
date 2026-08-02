---
modelId: baichuan2-13b-base
domain: llm
status: published
updated: 2026-08-02
sources:
  - https://www.baichuan-ai.com/
  - https://huggingface.co/baichuan-inc/Baichuan2-13B-Base
  - https://arxiv.org/abs/2309.10305
  - https://github.com/baichuan-inc/Baichuan2
features:
  toolUse: false
  vision: false
highlights:
  - "Baichuan Intelligent Technology가 개발한 13B 크기의 대형 오픈소스 기초(Base) 언어 모델"
  - "2.6조 개 토큰의 방대한 고품질 데이터셋으로 처음부터 훈련되어 강력한 언어 표현력 제공"
  - "ALiBi(Attention with Linear Biases) 위치 인코딩 채택을 통한 고효율 어텐션 연산 보장"
relatedOrganization: baichuan
---

# Baichuan2-13B-Base 소개

## 개요
Baichuan2-13B-Base는 백천지능(Baichuan Intelligent Technology)이 2023년 9월에 공개한 차세대 대형 언어 모델 제품군(Baichuan 2)의 130억 파라미터급 오픈소스 기초(Base) 언어 모델입니다. 이 모델은 사전 학습(Pre-training) 단계에서 정밀하게 구성된 초대형 고품질 한자 및 다국어 말뭉치를 풍부하게 학습하여, 특정 작업에 치우치지 않는 뛰어난 범용 언어 표현력을 갖추고 있습니다. 고성능 추론 및 가벼운 로컬 배포를 원하는 연구자와 개발자에게 탄탄한 기초 지식을 제공하며, 다운스트림 애플리케이션이나 도메인 특화 미세 조정(Fine-tuning)을 위한 정교한 백본 모델로서 매우 탁월한 효율성을 발휘합니다.

## 기술 특징
Baichuan2-13B-Base는 2조 6천억(2.6T) 개의 대규모 다국어 토큰을 통해 처음부터 학습되었습니다. 아키텍처 관점에서 Baichuan 2-13B 모델은 기존 7B 모델에 적용된 RoPE(Rotary Position Embedding) 대신 ALiBi(Attention with Linear Biases) 위치 인코딩 방식을 채택하여 고효율 어텐션 연산과 유연한 장문 처리 메커니즘을 제공하는 차별점을 가집니다. 학습 안정성을 비약적으로 높이기 위해 혁신적인 훈련 안정화 모니터링 기법과 최적화 하이퍼파라미터 스케줄러를 도입함으로써, 모델 가중치 분산을 정밀하게 제어하고 학습 수렴률을 극대화하였습니다. 또한 정규화(Normalization) 기법으로 RMSNorm을 사용하는 등 최신 트랜스포머 디자인 아키텍처 설계를 적극 수용하였습니다.

## 사용 사례
Baichuan2-13B-Base는 주로 고품질 도메인 특화 모델 개발을 위한 미세 조정(SFT)의 출발점으로 널리 사용됩니다. 금융, 법률, 의료와 같이 정확하고 전문적인 어휘력 및 사실 관계 판독 능력이 요구되는 분야에서 사전 학습 지식을 보강한 뒤 독자적인 서비스용 모델을 구축하기에 이상적인 구조를 가지고 있습니다. 또한, 퓨샷(Few-shot) 또는 제로샷(Zero-shot) 프롬프트 작성 방식을 통해 요약, 번역, 개체명 인식, 정보 추출 등 기본적인 문서 처리 태스크를 빠르게 수행하는 엔터프라이즈 데이터 처리 파이프라인의 백그라운드 엔진으로도 훌륭하게 기능합니다. 개방된 커뮤니티 라이선스(Baichuan 2 Community License) 규정을 준수하는 범위 내에서 상업적 응용 분야로의 확장 배포 역시 지원됩니다.

## 한계
이 모델은 지시사항 이행 및 유저 대화 목적으로 가다듬어지지 않은 기초(Base) 가중치 자체이므로, 챗봇과 같이 자연스러운 대화 형식의 상호작용이나 복잡한 명령어 구조를 직접 실행하기에는 정렬(Alignment) 조율이 필수적이라는 제약을 안고 있습니다. 입력 가능한 최대 컨텍스트 윈도우가 4K(4096 토큰) 스펙에 머물러 있어, 수십만 토큰에 이르는 초대형 서류나 전체 레포지토리를 한 번에 통째로 처리하는 문맥 제어 태스크에서는 성능상의 불안정을 노출할 수 있습니다. 마지막으로, 원천 텍스트 정보의 연산에만 최적화된 고정형 디코더 아키텍처이기에 컴퓨터 비전, 정밀 오디오 판독 등 최신 동향의 다중 모달리티 데이터 처리는 근본적으로 수용할 수 없습니다.
