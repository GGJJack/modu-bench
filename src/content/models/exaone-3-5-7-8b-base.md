---
modelId: exaone-3-5-7-8b-base
domain: llm
status: published
updated: 2026-10-25
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: true
  vision: false
highlights:
  - "LG AI연구원이 2024년 12월 공개한 7.8B(실제 비임베딩 파라미터 6.98B) 규모의 오픈 파운데이션 모델"
  - "32K 토큰 컨텍스트 지원 및 GQA(Grouped Query Attention) 기술을 통한 효율적인 데이터 처리 성능"
  - "글로벌 상용 8B 이하 오픈 모델 대비 한국어 이해, 코딩, 연산 등 벤치마크 분야 최고 수준의 성능 달성"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 7.8B Base 소개

## 개요
EXAONE 3.5 7.8B Base는 LG AI연구원이 2024년 12월에 정식 공개한 EXAONE 3.5 제품군의 7.8B 규모 오픈소스 파운데이션 언어 모델입니다. 비상업적 연구 목적으로 개방되어 연구자와 개발자 커뮤니티가 한국어와 영어 중심의 고성능 기본 언어 모델을 활용할 수 있도록 지원합니다. 총 7.8B 파라미터 중 임베딩 레이어를 제외한 실제 연산 파라미터는 6.98B로 설계되었으며, 높은 연산 효율성을 바탕으로 경량화 파운데이션 모델의 새로운 표준을 제시합니다.

## 기술 특징
EXAONE 3.5 7.8B Base는 최신 디코더 전용(Decoder-only) 아키텍처를 기반으로 설계되었으며 GQA(Grouped Query Attention) 메커니즘을 적용하여 추론 과정에서 메모리 소모와 지연 시간을 현저히 낮췄습니다. 32K(32,768 토큰) 길이의 컨텍스트 윈도우를 지원하여 긴 문맥 추론 및 문서 이해 작업에 강점을 가집니다. 사전 학습 단계에서 엄격하게 정제된 다국어 데이터셋을 활용하여 동급 파라미터 체급의 Llama 3.1 8B, Gemma 2 9B 등 대표적인 글로벌 오픈 모델들과 비교해 뛰어난 벤치마크 성능을 기록하였습니다.

## 사용 사례
지시 정밀 미세조정(Instruction Tuning)이나 도메인 특화 SFT(Supervised Fine-Tuning), DPO(Direct Preference Optimization) 모델 구축을 위한 기본 파운데이션 베이스로 최상의 선택지를 제공합니다. 사내 문서 분류, RAG(검색 증강 생성) 기반 정보 검색 시스템, 한국어 및 영어 도메인 맞춤형 사전 학습 모델 구축 등 엔터프라이즈 환경에서의 다양한 사춤형 인공지능 솔루션 개발에 널리 쓰일 수 있습니다.

## 한계
사전 학습(Pre-trained) 베이스 모델이므로 대화형 응답이나 명령어 수행(Instruction Following)을 직접 실행하기 위해서는 정교한 SFT 또는 Alignment 튜닝 절차가 선행되어야 합니다. 또한 텍스트 전용 디코더 모델로 설계되어 visual/audio 등 멀티모달 입력 처리 기능은 내장되어 있지 않으며, 대용량 언어 모델 고유의 생성적 할루시네이션 특성이 남아있을 수 있어 검증 레이어 조율이 필요합니다.
