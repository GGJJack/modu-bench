---
modelId: lfm2-5-350m-base
domain: llm
status: published
updated: 2026-06-30
sources:
  - https://www.liquid.ai/blog/lfm2-5-350m-no-size-left-behind
  - https://huggingface.co/LiquidAI/LFM2.5-350M-Base
  - https://huggingface.co/LiquidAI/LFM2.5-350M
features:
  toolUse: true
  vision: false
highlights:
  - "350M 파라미터 초소형 고성능 기본 모델"
  - "28T 토큰 학습 및 대규모 강화학습 적용"
  - "온디바이스 및 에지 컴퓨팅에 최적화된 하이브리드 아키텍처"
relatedOrganization: liquid
---

# LFM2.5-350M-Base 소개

## 개요
LFM2.5-350M-Base는 Liquid AI가 2026년 3월 31일에 발표한 초소형 고성능 기본(Base) 모델입니다. 이 모델은 Liquid Foundation Models(LFM)의 2.5세대 아키텍처를 기반으로 하며, 단 3억 5천만 개의 파라미터만으로 자신보다 두 배 이상 큰 모델들을 능가하는 성능을 보여줍니다. 특히 온디바이스(On-device) 환경과 에지 컴퓨팅에서 대규모 데이터 처리 및 지능형 에이전트 구축을 위해 설계되었습니다.

## 기술 특징
LFM2.5-350M-Base는 기존 LFM2 아키텍처를 계승하면서도 학습 데이터 규모를 10T에서 28T 토큰으로 대폭 확대하였습니다. 또한 대규모 다단계 강화학습(Reinforcement Learning)을 적용하여 기초 추론 능력을 강화했습니다. 이 모델은 10개의 이중 게이트 LIV 컨볼루션 블록과 6개의 GQA(Grouped Query Attention) 블록이 혼합된 하이브리드 구조를 가집니다. 이를 통해 클라우드 GPU뿐만 아니라 일반적인 CPU와 NPU 환경에서도 매우 빠른 추론 속도를 제공하며, 최대 32,768 토큰의 문맥 창을 지원합니다.

## 사용 사례
이 모델은 기본 모델로서 특정 언어(예: 한국어, 일본어)나 도메인(예: 의료, 법률)에 특화된 비서를 구축하기 위한 미세 조정(Fine-tuning)에 최적화되어 있습니다. 특히 데이터 추출, 구조화된 출력 생성, 그리고 에지 디바이스에서의 함수 호출(Function Calling) 작업에 강력한 성능을 발휘합니다. 저사양 하드웨어에서도 구동 가능하여 스마트폰, IoT 기기, 자동차 등 다양한 에지 환경에서 지능형 기능을 구현하는 데 사용될 수 있습니다.

## 한계
LFM2.5-350M-Base는 초소형 모델로서의 효율성을 극대화했으나, 고도의 지식 집약적인 작업이나 복잡한 수학, 프로그래밍, 그리고 창의적인 글쓰기 작업에는 적합하지 않습니다. 이러한 작업에는 더 큰 규모의 LFM 모델이나 전문화된 모델의 사용이 권장됩니다. 또한 기본 모델이므로 실제 대화형 인터페이스에 적용하기 위해서는 적절한 인스트럭션 튜닝(Instruction Tuning) 과정이 필수적입니다.
