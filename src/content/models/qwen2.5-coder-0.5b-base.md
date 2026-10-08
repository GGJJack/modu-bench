---
modelId: qwen2.5-coder-0.5b-base
domain: llm
status: published
updated: 2026-10-08
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-0.5B
  - https://arxiv.org/abs/2409.12186
  - https://github.com/QwenLM/Qwen2.5-Coder
features:
  fineTuning: true
highlights:
  - "총 0.49B 파라미터 (비임베딩 0.36B) 기반 Qwen2.5-Coder 시리즈의 초경량 Base 모델"
  - "총 5.5조 토큰 데이터셋 pre-training 및 40개 이상 프로그래밍 언어 지원"
  - "32,768 토큰 컨텍스트 윈도우 및 Fill-in-the-Middle (FIM) 메커니즘 제공"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-0.5B 소개

## 개요
Qwen2.5-Coder-0.5B는 알리바바 클라우드(Alibaba Cloud)의 Qwen 팀이 2024년 11월 공개한 초경량 오픈소스 코드 특화 베이스 언어 모델이다. 전체 0.49B(비임베딩 0.36B) 파라미터 규격을 갖추고 있으며, 리소스가극히 제한된 디바이스 환경이나 실시간 코드 완성이 요구되는 엣지 환경에 최적화되어 있다.

본 모델은 Apache 2.0 오픈소스 라이선스로 발급되어 연구 및 상업용 솔루션 구축에 용이하다. Qwen2.5-Coder 라인업 공통 사전 학습 데이터셋인 5.5조(5.5 Trillion) 토큰 규모의 고품질 소스코드 및 프로그래밍 관련 텍스트 데이터를 학습하여 경량 체급 대비 탁월한 코드 기초 이해력을 보유하고 있다.

## 기술 특징
Qwen2.5-Coder-0.5B는 24개 레이어와 14개 Query Attention Head 및 Grouped Query Attention(GQA, 2 KV Head) 아키텍처로 설계되었다. RoPE, SwiGLU, RMSNorm 구조를 내장하여 안정적인 추론 속도와 효율적인 메모리 사용량을 보장하며, 기본 32,768 토큰(32K) 컨텍스트 윈도우를 지원한다.

또한 개발자 도구 및 에디터 연동을 위한 Fill-in-the-Middle(FIM) 메커니즘을 지원하여 실시간 중간 코드 생성 및 인라인 제안 기능을 수행할 수 있다. 40개 이상의 프로그래밍 언어 지식을 보유하며 경량 스케일에도 불구하고 기초적인 코드 구조 파악 및 수학 능력을 지니고 있다.

## 사용 사례 및 한계
Qwen2.5-Coder-0.5B 베이스 모델은 모바일/온디바이스 가벼운 코드 작성 보조 도구, 경량화 연구 및 소형 파인튜닝(SFT) 실험, 초고속 초저지연 코드 파싱/검증 엔진 구축 등에 적합하다. 최저 수준의 메모리 부담으로 자체 사후 학습 모델을 구현할 수 있다는 장점이 있다.

하지만 0.5B 미만의 극초경량 모델 파라미터 특성상 복잡한 멀티스텝 소스코드 설계나 긴 알고리즘 추론에는 한계가 명확하며, 사후 인스트럭트 정렬이 거쳐지지 않은 베이스 모델이므로 자연어 대화 및 복잡한 명령 수행을 위해서는 별도의 미세조정이 필요하다.
