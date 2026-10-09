---
modelId: qwen2.5-coder-7b-base
domain: llm
status: published
updated: 2026-10-09
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-7B
  - https://arxiv.org/abs/2409.12186
  - https://github.com/QwenLM/Qwen2.5-Coder
features:
  fineTuning: true
highlights:
  - "총 7.61B 파라미터 (비임베딩 6.53B) 기반 Qwen2.5-Coder 시리즈의 핵심 주력 Base 모델"
  - "총 5.5조 토큰 고품질 소스코드, 코드-텍스트 그라운딩, 합성 데이터 사전 학습"
  - "32,768 토큰 컨텍스트 윈도우 지원 및 Fill-in-the-Middle (FIM) 메커니즘 제공"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-7B 소개

## 개요
Qwen2.5-Coder-7B는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 11월 공개한 코드 특화 오픈소스 베이스 언어 모델이다. 전체 7.61B(비임베딩 6.53B) 파라미터 규격을 가지고 있으며, 단일 오픈소스 모델 체급에서 대형 모델에 필적하는 우수한 코드 이해, 생성 및 추론 기초 역량을 발휘한다.

본 모델은 Apache 2.0 오픈소스 라이선스로 제공되어 기업 및 연구진이 제약 없이 상업적으로 활용하고 커스텀 미세조정을 진행할 수 있다. 5.5조(5.5 Trillion) 토큰 규모의 대규모 고품질 코드, 문서 그라운딩 데이터, 합성 프로그램 데이터를 pre-training 하여 코드 전문 에이전트 구축 및 IDE 인텔리코드 확장 프로그램의 기초 베이스라인 역할을 다한다.

## 기술 특징
Qwen2.5-Coder-7B는 28개 레이어와 28개 Query Attention Head 및 Grouped Query Attention(GQA, 4 KV Head) 아키텍처를 적용하였다. RoPE, SwiGLU, RMSNorm 메커니즘을 적용하여 최대 32,768 토큰(32K)의 시퀀스 길이를 안정적으로 처리하며 우수한 메모리 효율성과 추론 속도를 보장한다.

코드 편집 및 보완 도구 개발에 핵심적인 Fill-in-the-Middle(FIM) 메커니즘을 내장하고 있어, 코드 상단과 하단의 맥락을 종합 고려한 정밀한 중간 코드 생성이 가능하다. 40개 이상의 프로그래밍 언어 지원과 더불어 수학적 추론 능력과 일반 지식 베이스 능력도 탄탄하게 갖추고 있다.

## 사용 사례 및 한계
Qwen2.5-Coder-7B 베이스 모델은 고성능 로컬 IDE 자동완성 서빙, 사내 자체 코드베이스 기반 SFT/DPO 파인튜닝, 코드 복잡도 분석 및 리팩토링 특화 모듈 개발 등에 광범위하게 활용된다. 7B 체급이 주는 최적의 자원 대 효율 비율 덕분에 많은 개발 환경에서 표준 코딩 베이스 모델로 자리 잡고 있다.

단, 본 모델은 인스트럭션 정렬(Instruction Alignment) 및 대화 템플릿 학습이 거치지 않은 베이스(Base) 모델이므로 Chat 대화형 인터페이스나 자연어 대화 지시 이행 목적으로는 바로 활용하기 어렵다. 사용자 대화형 도구로 구성할 경우 추가적인 SFT 및 DPO/RLHF 정렬 단계가 필요하다.
