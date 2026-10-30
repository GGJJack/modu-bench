---
modelId: qwen-2.5-coder-7b
domain: llm
status: published
updated: 2026-10-30
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-7B
  - https://arxiv.org/abs/2409.12186
features:
  toolUse: true
  vision: false
highlights:
  - "총 5.5조(5.5T) 토큰의 대규모 소스 코드 및 기술 데이터로 사전 학습된 7B Base 코딩 파운데이션 모델"
  - "기본 32K 및 YaRN 기술을 통한 최대 128K(131,072) 토큰 롱 컨텍스트 지원"
  - "92개 이상의 프로그래밍 언어 지원 및 DeepSeek-Coder-V2-Lite, CodeStral-22B를 상회하는 7B급 최고 수준의 베이스 성능"
  - "Apache-2.0 오픈소스 라이선스 적용으로 기업 온프레미스 및 자유로운 파인튜닝 지원"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-7B 소개

## 개요
Qwen2.5-Coder-7B는 Alibaba Cloud Qwen 팀이 2024년 9월 19일 공식 발표한 코드 특화 대형 언어 모델 시리즈 Qwen2.5-Coder(구 CodeQwen)의 70억(7B) 매개변수 기반 Base 파운데이션 모델입니다. 이 모델은 지시어 미세조정(SFT/DPO)이 적용되기 이전의 순수 사전 학습(Pre-training) 모델로, 광범위한 소스 코드 코퍼스와 수학, 일반 다국어 지식을 집약하여 차세대 코드 지능 연구 및 맞춤형 개발 모델 제작의 튼튼한 토대를 제공합니다.

## 기술 특징
Qwen2.5-Coder-7B는 소스 코드, 텍스트-코드 그라운딩 데이터, 고품질 합성 데이터 등 총 5.5조(5.5 Trillion) 토큰에 달하는 방대한 데이터셋으로 계속 사전 학습(Continual Pre-training)을 거쳤습니다. RoPE(Rotary Position Embedding), SwiGLU 활성화 함수, RMSNorm, GQA(Grouped Query Attention) 구조를 채택하였으며 비임베딩 기준 6.53B의 파라미터로 동작합니다. 기본 32,768 토큰 문맥을 제공하며, YaRN 기법을 통해 최대 131,072 토큰(128K)의 초장문 입력 처리를 지원합니다. Python, C++, Java, JavaScript, Rust 등 92개 이상의 주요 프로그래밍 언어 문법과 디자인 패턴을 학습하였으며, 동급 또는 그 이상의 매개변수를 지닌 대형 오픈소스 베이스 모델들을 능가하는 코드 생성 및 수학적 추론 능력을 입증하였습니다.

## 사용 사례
Qwen2.5-Coder-7B는 특정 도메인이나 기업 전용 프로그래밍 프레임워크에 최적화된 사내 코딩 어시스턴트 구축을 위한 기초 모델로 널리 사용됩니다. 지시어 데이터셋을 결합한 지도 미세조정(SFT), 인간 피드백 강화학습(RLHF), 또는 FIM(Fill-In-the-Middle) 코드 자동 완성 모델 학습의 출발점으로 매우 적합합니다. 또한 Apache-2.0 오픈소스 라이선스로 공개되어 상업적 목적의 서비스 개발 및 로컬 GPU 인프라 환경에서의 보안 격리 배포가 자유롭습니다.

## 한계
본 모델은 사전 학습 단계의 Base 모델이므로 일반 사용자와의 지시어 준수 대화나 챗봇 형태의 대화형 인터페이스에 직접 투입하기에는 정제된 응답을 제공하지 못할 수 있습니다. 실제 대화형 코드 보조 도구로 활용하려면 Qwen2.5-Coder-7B-Instruct 모델을 사용하거나 별도의 정렬 튜닝(Post-training)을 수행해야 합니다. 아울러 순수 텍스트 및 코드 토큰만을 처리하므로 이미지, 오디오 등의 멀티모달 입력 분석은 지원하지 않습니다.
