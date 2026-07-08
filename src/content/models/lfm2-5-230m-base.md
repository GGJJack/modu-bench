---
modelId: lfm2-5-230m-base
domain: llm
status: published
updated: 2026-07-08
sources:
  - https://www.liquid.ai/blog/lfm2-5-230m
  - https://huggingface.co/LiquidAI/LFM2.5-230M-Base
features:
  toolUse: false
  vision: false
highlights:
  - "19T 토큰으로 사전 학습된 230M 파라미터 초소형 베이스 모델"
  - "32K 문맥 창 지원 및 유연한 미세 조정 기반 제공"
  - "오픈 웨이트(Open-weight) 공개로 온디바이스 개발 지원"
  - "동급 모델 대비 압도적인 추론 속도 및 적은 메모리 사용량"
relatedOrganization: liquid
---

# LFM2.5-230M-Base 소개

## 개요
LFM2.5-230M-Base는 2026년 6월 25일 Liquid AI가 공개한 초경량 베이스 모델입니다. 2억 3천만 개의 파라미터를 보유한 이 모델은 특정 도메인이나 작업에 맞게 미세 조정(Fine-tuning)하려는 개발자들을 위해 설계되었습니다. 소형화된 크기에도 불구하고 강력한 언어 이해 능력을 갖추고 있어, 에이전틱 워크플로우나 온디바이스 AI 애플리케이션의 기반 레이어로 최적화되어 있습니다.

## 기술 특징
이 모델은 총 19T 토큰의 방대한 데이터셋을 통해 사전 학습되었으며, 학습 과정에서 32K 문맥 창(Context Window) 확장을 거쳤습니다. LFM2 아키텍처 특유의 높은 효율성을 바탕으로, 유사한 규모의 SSM(State Space Model) 하이브리드나 Gated Delta Network 모델보다 빠른 추론 속도를 구현합니다. 베이스 모델로서 사후 학습(Post-training)이 최소화되어 있어, 다운스트림 애플리케이션에 맞춘 유연한 적응이 가능합니다.

## 사용 사례
LFM2.5-230M-Base는 특정 기업 내부 데이터 추출, 특수 목적용 챗봇, 또는 초소형 임베디드 기기용 AI 제어 인터페이스 등을 개발하려는 환경에서 출발점으로 사용됩니다. 오픈 웨이트로 공개되어 Hugging Face 등을 통해 자유롭게 다운로드 및 미세 조정이 가능하며, llama.cpp, MLX 등 다양한 로컬 추론 프레임워크와 즉시 호환됩니다.

## 한계
베이스 모델이므로 지시 이행(Instruction following)이나 채팅, 도구 사용 기능이 사전에 최적화되어 있지 않습니다. 따라서 실제 서비스에 활용하기 위해서는 별도의 지도 학습(SFT)이나 강화 학습(RL) 과정이 필수적입니다. 또한 모델 규모의 한계로 인해 복잡한 추론이나 고난도 코딩 작업에는 적합하지 않습니다.
