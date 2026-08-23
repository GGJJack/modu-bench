---
modelId: exaone-3-5-7-8b-base
domain: llm
status: published
updated: 2026-08-23
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: false
  vision: false
highlights:
  - "7.8B 파라미터 규격의 EXAONE 3.5 파운데이션 Base 모델"
  - "32K 토큰 컨텍스트 윈도우 및 한국어/영어 고성능 사전학습"
  - "도메인 특화 미세조정(Fine-tuning) 및 연구용 베이스라인에 최적화"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 7.8B Base 소개

## 개요
EXAONE 3.5 7.8B Base는 LG AI Research가 2024년 12월 공개한 78억(7.8B) 파라미터 규모의 사전학습 언어모델(Foundation Base Model)이다. 인라인 지시 이행이나 대화 미세조정(Alignment)이 적용되기 전 단계의 기본 웨이트 모델로서, 우수한 한국어 및 영어 텍스트 이해와 생성 역량을 바탕으로 한 기초 오픈 웨이트 모델이다.

## 기술 특징
7.8B 파라미터 규격임에도 32,768(32K) 토큰의 넓은 컨텍스트 윈도우를 기본 지원하며, 고품질 데이터 필터링 기법을 통해 다국어 및 전문 분야 데이터셋으로 사전학습되었다. 효율적인 메모리 사용량과 유연한 트랜스포머 아키텍처를 기반으로 단일 GPU 인프라에서도 고속 추론 및 추가 학습이 용이하도록 설계되었다.

## 사용 사례
기업 또는 연구 기관이 자체 데이터셋을 활용해 도메인 특화 지도 미세조정(SFT)이나 강화학습(RLHF/DPO) 모델을 구축할 때 핵심 베이스라인 모델로 활용된다. 또한 한국어와 영어가 혼용되는 특수 기계 번역, 문서 임베딩 및 표현 학습, 사전학습 웨이트 분석 등 연구용 용도로 활발히 쓰인다.

## 한계
지도 미세조정(SFT)이나 DPO 등의 안전성·대화형 정렬 단계가 적용되지 않은 Base 모델이므로, 별도의 미세조정 없이 단순 대화용 인터페이스로 사용할 경우 지시를 정확히 수행하지 못하거나 예기치 않은 출력을 생성할 수 있다. 비영리/연구 목적 위주의 독자적인 NC 라이선스가 적용되므로 상업적 이용 시 권리 범위를 사전 확인해야 한다.
