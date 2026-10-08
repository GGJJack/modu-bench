---
modelId: qwen2.5-coder-3b-base
domain: llm
status: published
updated: 2026-10-08
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-3B
  - https://arxiv.org/abs/2409.12186
  - https://github.com/QwenLM/Qwen2.5-Coder
features:
  fineTuning: true
highlights:
  - "총 3.09B 파라미터 (비임베딩 2.77B) 기반 Qwen2.5-Coder 시리즈의 경량 고성능 Base 모델"
  - "총 5.5조 토큰 고품질 소스코드 및 프로그래밍 데이터 사전 학습"
  - "32,768 토큰 컨텍스트 윈도우 지원 및 Fill-in-the-Middle (FIM) 메커니즘 지원"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-3B 소개

## 개요
Qwen2.5-Coder-3B는 알리바바 클라우드(Alibaba Cloud)의 Qwen 팀이 2024년 11월 공개한 코드 특화 오픈소스 베이스 언어 모델이다. 전체 3.09B(비임베딩 2.77B) 파라미터 규격을 갖추고 있으며, 소형 GPU 환경 및 엣지 디바이스에서도 효율적으로 구동되면서 우수한 코드 이해 및 생성 기반을 제공한다.

본 모델은 Apache 2.0 오픈소스 라이선스로 공개되어 상업적 활용과 연구 보급이 모두 자유롭다. 5.5조(5.5 Trillion) 토큰 규모의 고품질 소스코드, 코드-텍스트 그라운딩 데이터, 합성 데이터 등으로 pre-training 되었으며, 사후 학습(SFT/RLHF)을 통해 전용 코딩 에이전트나 IDE 도구를 구축하기 위한 완벽한 베이스라인을 제공한다.

## 기술 특징
Qwen2.5-Coder-3B는 36개 레이어와 16개 Query Attention Head 및 Grouped Query Attention(GQA, 2 KV Head) 아키텍처를 채택했다. RoPE, SwiGLU, RMSNorm 메커니즘을 적용하여 안정적인 추론 및 사후 정렬 성능을 보장하며, 기본 32,768 토큰(32K)의 시퀀스 길이를 지원한다.

또한 코드 작성 도구 및 IDE 통합을 위해 필수적인 Fill-in-the-Middle(FIM) 메커니즘을 내장하고 있어, 코드 상·하한 문맥을 고려한 중간 코드 삽입 및 자동 완성 능력이 뛰어나다. 40개 이상의 주요 프로그래밍 언어를 지원하며 일반 언어 이해 및 수학적 추론 역량도 조화롭게 갖추고 있다.

## 사용 사례 및 한계
Qwen2.5-Coder-3B 베이스 모델은 경량화된 로컬 코드 자동완성 시스템, 사내 도메인 특화 코딩 파인튜닝 실험, 연구 목적의 인스트럭트 튜닝 베이스라인 등으로 폭넓게 사용된다. 특히 낮은 파라미터 수 대비 뛰어난 코딩 사전 지식을 제공하므로 자체 정렬 데이터셋을 적용하려는 개발팀에 적합하다.

다만 지시 이행(Instruction Following) 튜닝 및 챗 템플릿 정렬이 들어가지 않은 순수 베이스 모델이므로 대화형 챗봇 형태로 즉시 사용하기에는 한계가 있다. 대화형 인터페이스나 특화 태스크에 사용할 경우 추가적인 SFT/DPO 등의 사후 학습 과정이 필요하다.
