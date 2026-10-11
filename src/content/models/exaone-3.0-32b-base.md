---
modelId: exaone-3.0-32b-base
domain: llm
status: published
updated: 2026-10-11
sources:
  - https://www.lgresearch.ai/models/exaone
  - https://huggingface.co/LGAI-Research/EXAONE-3.0-32B
  - https://github.com/LG-AI-Research/EXAONE-3.0
  - https://arxiv.org/abs/2408.03541
features:
  toolUse: false
  vision: false
highlights:
  - "LG AI연구원이 공개한 32B 파라미터 기반의 고성능 오픈 파운데이션 베이스 모델"
  - "32,768(32K) 토큰 컨텍스트 윈도우 및 GQA 아키텍처 적용"
  - "EXAONE AI Model License 1.0 규격에 따른 연구 및 학술 목적 개방"
relatedOrganization: lg-ai-research
---

# EXAONE 3.0 32B Base 소개

## 개요
EXAONE 3.0 32B Base는 LG AI연구원이 2024년 10월에 정식으로 공개한 320억(32B) 매개변수 규모의 고성능 사전 학습(Pre-trained) 파운데이션 언어 모델입니다. 앞서 공개된 EXAONE 3.0 2.4B 및 7.8B 경량 라인업에 이어, 중대형 파라미터 범위에서 글로벌 수준의 정밀한 언어 이해와 추론 기초 지능을 확보하기 위해 개발되었습니다. 연구 및 학술적 목적을 위해 EXAONE AI Model License Agreement 1.0 라이선스로 오픈 가중치가 배포되었으며, 한국어와 영어 두 핵심 언어에 대한 깊이 있는 이해력과 정교한 문맥 처리 능력을 균형 있게 갖추고 있습니다.

## 기술 특징
EXAONE 3.0 32B Base는 추론 연산 효율화 및 메모리 점유율 절감을 위해 GQA(Grouped Query Attention) 기술을 채택하였습니다. 최대 32,768 토큰(32K)에 이르는 문맥 입력 창을 안정적으로 처리할 수 있어, 장문의 학술 논문이나 기술 서적, 복잡한 코드 파일 데이터에 대한 연속적 표현 추출과 맥락 파악이 가능합니다. 사전 학습 과정에서는 정제된 고품질 한국어 및 영어 데이터셋과 더불어 수학, 자연과학, 프로그래밍 소스코드 말뭉치가 대거 투입되었습니다. 지시 정렬(Alignment) 공정이 거쳐지지 않은 순수 베이스 체크포인트로서, 다양한 가공 및 커스텀 파인튜닝 실험의 최적 기틀을 제공합니다.

## 사용 사례
이 모델은 학계 및 기업 연구소에서 자체 사내 데이터나 특화 도메인(법률, 의료, 금융, 제조 등) 데이터셋을 활용해 전용 인스트럭션 모델(Instruct)이나 도구 실행 에이전트를 가공할 때 핵심 기반 가공용 베이스 모델로 활발히 사용됩니다. 지시 이행 레이어가 없는 상태이므로 문장 완성(Text Completion) 및 문맥 예측 작업에 적합하며, 인과적 언어 모델링(Causal Language Modeling) 기반의 연구 프로토타입 구축이나 도메인 특화 어휘 보강 사전 학습(Continued Pre-training) 연구에 유용합니다.

## 한계
EXAONE 3.0 32B Base는 지시어 미세조정(SFT)이나 선호도 최적화(DPO/RLHF)가 적용되지 않은 사전 학습 베이스 모델입니다. 따라서 사용자의 직관적인 질의나 대화형 챗봇 프롬프트에 바로 지응하기보다는, 이전 문맥에 이어지는 자연스러운 문장을 순차 생성하는 연장 생성 동작을 수행합니다. 실무 서비스나 대화형 시스템으로 배치하기 위해서는 추가적인 지시 미세조정 과정이 필수적입니다. 또한, FP16/BF16 원본 가중치 기준 약 64GB 이상의 VRAM을 요구하므로 단일 소형 GPU 환경에서 구동하려면 적절한 양자화(Quantization) 처리가 선행되어야 합니다.
