---
modelId: qwen2.5-coder-14b-base
domain: llm
status: published
updated: 2026-10-05
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-14B
  - https://arxiv.org/abs/2409.12186
features:
  fineTuning: true
highlights:
  - "14.7B 파라미터(비임베딩 13.1B) 기반 Qwen2.5-Coder 시리즈의 미드레인지 고성능 Base 모델"
  - "총 5.5조 토큰 데이터 사전 학습 및 40개 이상의 프로그래밍 언어 지원"
  - "최대 128K 토큰 컨텍스트 지원 및 Fill-in-the-Middle (FIM) 미들 인필링 메커니즘 제공"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-14B 소개

## 개요
Qwen2.5-Coder-14B는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 11월 공개한 중간 체급의 오픈소스 코드 특화 Base 언어 모델이다. 전체 14.7B(비임베딩 13.1B) 파라미터 스케일을 보유하여, 단일 GPU 환경에서도 미세조정(Fine-tuning) 및 추론을 구동하기에 효율적인 최적의 가성비 및 성능 균형을 자랑한다.

본 모델은 Apache 2.0 오픈소스 라이선스로 발급되어 연구 목적은 물론 상업적 솔루션에 상용화하기에 용이하다. Qwen2.5-Coder 라인업의 공통 pre-training 데이터셋인 5.5조(5.5 Trillion) 토큰 규모의 고품질 소스코드 및 프로그래밍 관련 텍스트 데이터를 학습하여 뛰어난 코드 추론 및 생성 능력을 보장한다.

## 기술 특징
Qwen2.5-Coder-14B는 48개 레이어와 40개 어텐션 헤드(KV 헤드 8개의 Grouped-Query Attention) 구조의 트랜스포머 아키텍처를 적용했다. RoPE, SwiGLU, RMSNorm 및 QKV 편향 어텐션을 적용하여 우수한 학습 안정성을 자랑하며, 기본 32,768 토큰 및 YaRN 확장을 바탕으로 최대 131,072(128K) 토큰의 매시브 컨텍스트 윈도우를 지원한다.

아울러 코드 에디터 단에서 중간 코드 삽입 및 완성을 수행하는 Fill-in-the-Middle (FIM) 메커니즘을 지원한다. 40개 이상의 주요 프로그래밍 언어를 자유자재로 다루며, 코딩 능력을 한층 강화함과 동시에 일반 언어 이해 및 수학 문제 해결 역량도 균형 있게 보존하였다.

## 사용 사례 및 연구 활용
Qwen2.5-Coder-14B Base 모델은 14B 파라미터 체급 특유의 높은 효율성 덕분에 기업 전용 개발 보조 모델이나 자체 SFT/RLHF 튜닝을 실행하기 위한 최고의 베이스라인으로 각광받고 있다. 상대적으로 적은 GPU 리소스만으로도 파인튜닝(Fine-tuning)이 가능하여 사내 코드 스타일 학습에 널리 활용된다.

또한 128K 토큰의 장문 컨텍스트와 FIM 기능을 결합하여 VS Code, JetBrains 등 IDE 플러그인 기반 코드 자동 완성 엔진, Multi-file 레벨의 코드 구문 검사 도구, 실시간 코드 파싱 파이프라인 구축 연구 등 다양한 실무 개발 인프라 구축에 유용하다.
