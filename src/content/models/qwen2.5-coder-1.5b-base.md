---
modelId: qwen2.5-coder-1.5b-base
domain: llm
status: published
updated: 2026-10-09
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B
  - https://arxiv.org/abs/2409.12186
  - https://github.com/QwenLM/Qwen2.5-Coder
features:
  fineTuning: true
highlights:
  - "총 1.54B 파라미터 (비임베딩 1.31B) 기반의 초경량 고성능 Qwen2.5-Coder Base 모델"
  - "총 5.5조 토큰 고품질 소스코드, 코드-텍스트 그라운딩, 합성 데이터 사전 학습"
  - "32,768 토큰 컨텍스트 윈도우 및 Fill-in-the-Middle (FIM) 메커니즘 지원"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-1.5B 소개

## 개요
Qwen2.5-Coder-1.5B는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 11월 공개한 소형 코드 특화 오픈소스 베이스 언어 모델이다. 전체 1.54B(비임베딩 1.31B) 파라미터로 설계되어 일반 단일 GPU, 엣지 컴퓨팅 및 온디바이스(On-device) 환경에서도 매우 적은 메모리 오버헤드로 빠르고 효율적으로 추론 및 미세조정을 수행할 수 있다.

본 모델은 Apache 2.0 오픈소스 라이선스 하에 공개되어 자유로운 상업적 및 연구적 활용이 가능하다. 5.5조(5.5 Trillion) 토큰 규모의 고품질 소스코드, 코드 관련 매뉴얼, 합성 코딩 데이터셋 등으로 학습되어 소형 파라미터 체급 대비 우수한 코드 이해 및 구문 생성 기초 역량을 보장한다.

## 기술 특징
Qwen2.5-Coder-1.5B는 28개 레이어와 12개 Query Attention Head 및 Grouped Query Attention(GQA, 2 KV Head) 아키텍처를 채택하였다. RoPE, SwiGLU, RMSNorm 메커니즘을 적용하여 기본 32,768 토큰(32K)의 시퀀스 길이를 안정적으로 처리할 수 있다.

또한 코드 자동 완성 및 코드 수정 도구 구축에 필수적인 Fill-in-the-Middle(FIM) 메커니즘을 기본 제공하므로 코드의 이전 문맥과 이후 문맥을 함께 고려한 정교한 코드 내 삽입 추론이 가능하다. 40개 이상의 프로그래밍 언어를 지원하며 수학적 추론 및 기본적인 일반 자연어 이해 능력도 조화롭게 갖추었다.

## 사용 사례 및 한계
Qwen2.5-Coder-1.5B 베이스 모델은 IDE 플러그인용 초고속 로컬 인라인 코드 자동완성(Code Completion), 도메인 특화 경량 소스코드 임베딩 및 커스텀 코드 정렬 파인튜닝 베이스라인으로 활용하기에 적합하다. 최저 수준의 하드웨어 리소스만으로도 구동되므로 엣지 기기 기반 로컬 개발 도구 구축에 최적이다.

다만 본 모델은 인스트럭션 튜닝이나 대화형 챗 정렬이 수행되지 않은 베이스(Base) 모델이므로 자연어 질의응답이나 복잡한 명령어 이행을 위한 챗봇 형태로 직접 사용하는 데에는 제한이 있다. 대화형 인터페이스나 특화 태스크에 사용할 경우 추가적인 SFT/DPO 등의 사후 정렬 학습 과정이 요구된다.
