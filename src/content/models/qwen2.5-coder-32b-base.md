---
modelId: qwen2.5-coder-32b-base
domain: llm
status: published
updated: 2026-10-05
sources:
  - https://qwenlm.github.io/blog/qwen2.5-coder-family/
  - https://huggingface.co/Qwen/Qwen2.5-Coder-32B
  - https://arxiv.org/abs/2409.12186
features:
  fineTuning: true
highlights:
  - "32.5B 파라미터(비임베딩 31.0B) 기반 Qwen2.5-Coder 시리즈의 최상위 플래그십 Base 모델"
  - "총 5.5조 토큰의 고품질 소스코드, 텍스트-코드 그라운딩, 합성 데이터 사전 학습"
  - "최대 128K 토큰 컨텍스트 지원 및 Fill-in-the-Middle (FIM) 미들 인필링 지원"
relatedOrganization: alibaba
---

# Qwen2.5-Coder-32B 소개

## 개요
Qwen2.5-Coder-32B는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 11월 공개한 코드 특화 오픈소스 플래그십 Base 언어 모델이다. 전체 32.5B(비임베딩 31.0B) 파라미터 스케일을 보유하며, 0.5B부터 32B까지 이어지는 Qwen2.5-Coder 제품군 중 가장 뛰어난 추론 성능과 코드 이해 능력을 갖춘 기둥 모델이다.

본 모델은 Apache 2.0 오픈소스 라이선스로 공개되어 연구 및 상업적 애플리케이션 구축에 자유롭게 활용할 수 있다. 소스코드, 코드-텍스트 대응 데이터, 고품질 합성 데이터 등 총 5.5조(5.5 Trillion) 토큰 규모의 대규모 데이터셋으로 사전 훈련을 거쳐, 오픈소스 코드 LLM 분야에서 상용 모델인 GPT-4o 수준에 비견되는 강력한 기본 코딩 역량을 달성했다.

## 기술 특징
Qwen2.5-Coder-32B는 64개 레이어와 40개의 어텐션 헤드(KV 헤드 8개의 Grouped-Query Attention) 구조의 트랜스포머 아키텍처를 적용했다. RoPE, SwiGLU, RMSNorm 및 QKV 편향 어텐션을 채택하였으며, 기본 32,768 토큰 및 YaRN 기법 확장을 통해 최대 131,072(128K) 토큰의 매시브 컨텍스트 윈도우를 안정적으로 처리한다.

또한 에디터 및 IDE 자동 완성을 위한 Fill-in-the-Middle (FIM) 메커니즘을 지원하며, 40개 이상의 프로그래밍 언어에 대해 뛰어난 생성 및 구문 분석 정확도를 보인다. 코드 생성뿐만 아니라 수학적 추론 및 일반 자연어 이해 능력도 높은 수준으로 유지하도록 설계되어 복잡한 멀티스텝 추론 과업에 적합하다.

## 사용 사례 및 연구 활용
Qwen2.5-Coder-32B는 사후 훈련(Post-training, 예: SFT, RLHF)이나 인스트럭션 튜닝, 기업 전용 도메인 특화 코드 모델을 가공하기 위한 독보적인 기반(Base) 스타팅 포인트로 활용된다. 고성능 파라미터 체급을 바탕으로 사내 코드베이스 자동 완성을 위한 지속적 사전 훈련(Continued Pre-training) 및 LoRA/QLoRA 미세조정에 널리 쓰인다.

아울러 128K 토큰의 장문 컨텍스트를 활용하여 복잡한 오픈소스 프로젝트 전체 파일 분석, 대규모 레거시 코드의 리팩토링, 코드 에이전트(Code Agent) 프레임워크의 자율 추론 엔진 연구 등 다양한 산업 및 학술 분야의 핵심 베이스라인으로 자리잡고 있다.
