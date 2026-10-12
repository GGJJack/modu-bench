---
modelId: solar-10.7b-v1.0
domain: llm
status: published
updated: 2026-10-12
sources:
  - https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
  - https://arxiv.org/abs/2312.15166
  - https://www.upstage.ai/
features:
  toolUse: true
  vision: false
highlights:
  - "DUS(Depth-Up Scaling) 아키텍처로 7B 모델 레이어를 확장하여 구축한 10.7B 체급 고성능 지시 이행 모델"
  - "Hugging Face Open LLM Leaderboard 공개 직후 1위 기록 및 대형 모델급 추론 지능 달성"
  - "4,096 토큰 컨텍스트 창 및 정밀한 지시 준수 능력 기반 온프레미스 RAG 인프라 최적화"
relatedOrganization: upstage
---

# SOLAR 10.7B Instruct v1.0 소개

## 개요
SOLAR 10.7B Instruct v1.0(솔라 10.7B 인스트럭트 v1.0)은 대한민국 AI 스타트업 업스테이지(Upstage)가 2023년 12월 14일 공개한 경량 매개변수 기반 고성능 인스트럭션 언어 모델입니다. 107억 개의 매개변수(10.7B)를 보유한 이 모델은 독자적인 아키텍처 스케일링 및 후처리 미세 조정 과정을 거쳐 복잡한 지시 이행 능력과 논리 추론 지능을 크게 끌어올렸습니다. 출시 직후 Hugging Face Open LLM Leaderboard에서 상위권 성능을 석권하며 소형 언어 모델의 대표적인 모범 사례로 평가받았습니다.

## 기술 특징
SOLAR 10.7B Instruct v1.0의 핵심 혁신은 업스테이지 연구팀이 고안한 Depth-Up Scaling(DUS) 아키텍처 확장 기법에 있습니다. DUS는 기존 Llama 2 7B 체급 사전 학습 모델의 트랜스포머 레이어를 효율적으로 중복 복제하고 재구성한 후 계속 학습(Continual Pre-training)을 진행함으로써 연산 비용을 대폭 절감하며 10.7B 크기로 고성능 스케일업하는 방식입니다. 여기에 정밀한 지시 이행(Instruction Following) 데이터셋을 활용한 인스트럭션 튜닝과 정렬(Alignment) 후처리를 더해 소형 체급에서도 대규모 오픈소스 LLM에 필적하는 정확도와 지능 밀도를 확보했습니다.

## 사용 사례
SOLAR 10.7B Instruct v1.0은 연산 자원 소비가 적고 로컬 온프레미스(On-premise) 환경에 용이하게 배포할 수 있어 기업용 보안 사내 시스템 구축에 널리 쓰입니다. 대표적으로 기업 내부 문서 검색 및 데이터 분석을 결합한 RAG(Retrieval-Augmented Generation) 시스템, 고객 질의응답 챗봇, 요약 및 분류 서비스에 적합합니다. 특히 다국어 지시 이행 능력 및 정제된 한국어·영어 서술 성능을 바탕으로 공공, 금융, 의료 등 데이터 보안을 최우선으로 하는 자체 LLM 배포 환경에서 높은 가치를 제공합니다.

## 한계
10.7B라는 매개변수 한계상 수십만 줄 규모의 거대 프로젝트 코드 분석이나 고난도 멀티스텝 수학 증명과 같은 극도의 복잡성을 요구하는 작업에서는 대형 플래그십 파운데이션 모델에 비해 추론 한계가 드러날 수 있습니다. 또한 본 모델은 텍스트 전용 LLM으로 시각(Vision)이나 음성(Audio) 등 멀티모달 모달리티 입력을 처리하지 못하며, 기본 지원 컨텍스트 윈도우가 4,096 토큰으로 제한되어 초대형 단일 문서를 분석할 때는 서브 텍스트 분할 전처리가 요구됩니다.
