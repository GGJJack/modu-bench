---
modelId: mixtral-8x7b
domain: llm
status: published
updated: 2026-11-04
sources:
  - https://mistral.ai/news/mixtral-of-experts/
  - https://arxiv.org/abs/2401.04088
  - https://huggingface.co/mistralai/Mixtral-8x7B-v0.1
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "총 46.7B 중 토큰당 12.9B만 활성화하는 희소 혼합 전문가(SMoE) 구조"
  - "Llama 2 70B 대비 6배 빠른 추론 속도로 동등 이상의 성능 달성"
  - "32k 컨텍스트 윈도우 및 영어, 프랑스어, 독일어, 스페인어, 이탈리아어 다국어 처리"
relatedOrganization: mistralai
---

# Mixtral 8x7B 소개

## 개요
Mixtral 8x7B는 Mistral AI가 2023년 12월 11일 발표한 오픈 웨이트 희소 혼합 전문가(Sparse Mixture of Experts, SMoE) 언어 모델이다. 오픈소스 AI 모델의 패러다임을 단일 밀집(Dense) 모델에서 고효율 희소(Sparse) 아키텍처로 확장시킨 선구적 모델로 평가받는다. Apache 2.0 라이선스로 공개되어 상업적 서비스와 학술 연구에 자유롭게 쓰일 수 있으며, 대부분의 벤치마크에서 Llama 2 70B 및 GPT-3.5와 대등하거나 이를 상회하는 성능을 보이면서도 추론 시 6배 빠른 처리 속도를 달성하였다.

## 기술 특징
Mixtral 8x7B는 Mistral 7B의 디코더 기반 트랜스포머 아키텍처를 계승하되 피드포워드 계층을 8개의 독립된 전문가 블록으로 구성하였다.
- **라우터 기반 토큰 디스패치 (Router Network)**: 각 레이어에서 토큰마다 라우터 네트워크가 8개의 전문가 중 가장 적합한 2개 전문가를 동적으로 선택하여 결과를 결합한다.
- **연산 및 메모리 효율성**: 전체 파라미터는 46.7B(약 47B)에 달하지만, 각 토큰이 처리되는 동안에는 12.9B(약 13B) 파라미터만 활성화되므로 13B급 모델과 동일한 연산 비용 및 속도로 70B급의 고지능 출력을 생성한다.
- **긴 문맥 및 다국어 지원**: 최대 32,768(32k) 토큰의 컨텍스트 창을 지원하며, 영어뿐만 아니라 프랑스어, 독일어, 스페인어, 이탈리아어 등 유럽 주요 언어와 소스 코드 생성에서 뛰어난 성능을 발휘한다.

## 사용 사례
Mixtral 8x7B는 고성능 기업용 대화 에이전트, 다국어 문서 요약 및 번역, 복잡한 소프트웨어 소스 코드 생성 워크플로우에 최적화되어 있다. vLLM의 Megablocks CUDA 커널 및 Flash Attention 2 지원을 통해 단일 멀티 GPU 서버에서도 효율적인 프로덕션 배포가 가능하다. 또한 SFT(지도 학습 미세 조정)와 DPO(직접 선호 최적화)가 적용된 지시형 모델(Mixtral 8x7B Instruct)은 MT-Bench 점수 8.30을 기록하며 고지능 챗봇 구축의 핵심 기반으로 활용된다.

## 한계
Mixtral 8x7B는 토큰당 활성 파라미터 수가 12.9B로 적어 연산 속도는 매우 빠르지만, 8개의 전문가 가중치 전체(46.7B)가 GPU 메모리에 적재되어야 하므로 최소 90GB 이상의 VRAM(FP16 기준) 또는 4비트/8비트 양자화 기술이 필수적으로 요구된다. 또한 사전 훈련 베이스 모델 특성상 자체적인 안전 가드레일이 내장되어 있지 않아 민감한 상용 환경 배포 시 시스템 프롬프트 및 안전 검열 필터링 파이프라인의 구축이 필요하다.
