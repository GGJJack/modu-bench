---
modelId: qwen-2.5-32b
domain: llm
status: published
updated: 2026-10-17
sources:
  - https://qwenlm.github.io/blog/qwen2.5/
  - https://huggingface.co/Qwen/Qwen2.5-32B
  - https://github.com/QwenLM/Qwen2.5
  - https://arxiv.org/abs/2412.15115
features:
  toolUse: true
  fineTuning: true
highlights:
  - "Alibaba Cloud Qwen2.5 시리즈의 32B 매개변수 베이스 오픈 가중치 모델"
  - "128,000(128K) 토큰 입력을 지원하며 사전 학습 말뭉치 18조(18T) 토큰으로 확장"
  - "Apache-2.0 오픈소스 라이선스 적용으로 기업 및 연구자의 상업적 이용 및 파인튜닝 보장"
relatedOrganization: alibaba
---

# Qwen2.5 32B 소개

## 개요
Qwen2.5 32B는 Alibaba Cloud가 2024년 9월 19일 정식 출시한 Qwen2.5 대형 언어 모델 제품군의 320억(32B) 파라미터급 사전 학습(Base) 오픈 가중치 모델입니다. 이 모델은 대형 플래그십 모델(72B)급에 육박하는 뛰어난 언어 이해 및 논리 추론 역량을 갖추면서도 단일 GPU 인프라에서 효율적으로 서빙 및 파인튜닝이 가능하도록 균형 있게 설계되었습니다.

Apache-2.0 라이선스로 공개되어 연구자 및 기업이 제한 없이 상업적 서비스 구축, 도메인 특화 데이터 세트 기반 미세조정(Fine-tuning) 및 사내 온프레미스 배포에 유연하게 활용할 수 있습니다.

## 기술 특징
Qwen2.5 32B는 18조(18T) 토큰 이상의 대규모 고품질 사전 학습 데이터를 바탕으로 훈련되었습니다. 전작인 Qwen2 대비 코딩, 수학, 정형 데이터 이해 및 다국어 지식 표현 능력이 비약적으로 발전하였으며, 특히 128,000(128K) 토큰의 긴 컨텍스트 윈도우를 안정적으로 지원하여 장문 분석 능력이 우수합니다.

SwiGLU 활성화 함수, RoPE(Rotary Position Embedding), Grouped Query Attention(GQA) 아키텍처를 채택하여 추론 시 메모리 점유율을 줄이고 빠른 토큰 생성 속도를 보장합니다. 한국어, 영어, 중국어를 비롯한 29개 이상의 주요 다국어 환경에서 고른 종합 평가 성능을 발휘합니다.

## 사용 사례
32B 체급 특유의 높은 기초 성능 덕분에 특정 전문 도메인(법률, 금융, 의료 등)에 특화된 커스텀 언어 모델을 구축하기 위한 기본 베이스 모델로 광범위하게 쓰입니다. 연구기관이나 기업에서는 이 모델을 기반으로 지시어 미세조정(SFT)이나 DPO/PPO 같은 인간 선호도 정렬 학습을 직접 실시하여 최적화된 에이전트 솔루션을 개발합니다.

## 한계
Qwen2.5 32B는 지시어 미세조정을 거치지 않은 사전 학습 기본(Base) 모델이므로, 별도의 Prompt Engineering이나 SFT/Instruct 정렬 과정 없이는 대화형 질문에 대해 지시사항을 직접 수행하기보다 텍스트를 이어 쓰는 특성을 보입니다. 또한 이미지, 음성 등 멀티모달 입력 처리는 지원하지 않으며 순수 텍스트 처리 전용으로 구동됩니다.
