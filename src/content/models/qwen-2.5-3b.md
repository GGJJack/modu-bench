---
modelId: qwen-2.5-3b
domain: llm
status: published
updated: 2026-08-19
sources:
  - https://huggingface.co/Qwen/Qwen2.5-3B
  - https://qwenlm.github.io/blog/qwen2.5/
  - https://github.com/QwenLM/Qwen2.5
  - https://arxiv.org/abs/2412.15115
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "3.09B 파라미터 체급의 고성능 소형 사전학습(Base) 모델"
  - "Grouped Query Attention(GQA) 구조 적용으로 최대 128K 컨텍스트 윈도우 수용"
  - "29개 이상 다국어 사전학습 토큰 대폭 확충으로 우수한 가스텀 파인튜닝 기반 제공"
relatedOrganization: alibaba
---

# Qwen2.5 3B 소개

## 개요
Qwen2.5 3B는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 9월 19일 공개한 Qwen2.5 오픈소스 대형 언어모델 시리즈의 30억 파라미터(3.09B) 체급 사전학습(Base) 기반 모델이다. 지시 이행 정렬(Instruction tuning)을 거치지 않은 순수 언어 모델로서, 방대한 다국어 텍스트 및 코드 데이터셋을 바탕으로 언어 모델링 능력을 극대화하였다. 연구자 및 개발자가 특정 도메인 데이터셋으로 커스텀 미세조정(Fine-tuning)을 수행하거나 기초 연구를 진행하기 위한 핵심 베이스 모델로 활용된다.

## 기술 특징
Qwen2.5 3B는 Transformer 기반 아키텍처 위에 RoPE(Rotary Position Embedding), SwiGLU 활성화 함수, RMSNorm 및 Tied Word Embeddings 구조를 적용하였다. 총 36개 트랜스포머 레이어와 GQA(Grouped Query Attention, Query Head 16개 / Key-Value Head 2개) 기술을 탑재하여 메모리 효율성을 크게 개선하였으며, 사전학습 단계에서 최대 128,000(128K) 토큰의 광범위한 컨텍스트 윈도우를 수용한다. 한국어를 포함한 29개 이상의 다양한 다국어 토큰을 효율적으로 인코딩하는 어휘집(Tokenizer)을 사용하여 텍스트 연속 생성 및 다운스트림 과제 적응 능력이 뛰어나다.

## 사용 사례
3B의 경량화된 파라미터 덕분에 단일 저사양 GPU나 엣지 디바이스 환경에서도 손쉽게 사전학습 가중치를 로드하고 파인튜닝 파이프라인(LoRA, QLoRA 등)을 구축할 수 있다. 도메인 특화 데이터(의료, 법률, 금융, 사내 문서 등) 기반의 지화형 언어 모델 개발, 문장 완성 및 이어쓰기, 텍스트 임베딩 모델의 백본 및 연구용 대용량 코퍼스 지식 평가 표준으로 활발히 활용된다.

## 한계
이 모델은 지시 미세조정(SFT) 및 RLHF 과정이 적용되지 않은 Base 사전학습 모델이므로, 사용자의 질문에 직접 답변하거나 대화 프롬프트를 수행할 때 지시사항을 이행하지 않고 입력 텍스트를 단순 계속 이어쓰는 특성을 보인다. 대화형 서비스나 도구 호출(Tool Use) 에이전트에 바로 투입하기 위해서는 전용 지시 데이터셋을 활용한 추가적인 정렬 학습 과정이 필수적이다.
