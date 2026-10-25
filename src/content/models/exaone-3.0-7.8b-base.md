---
modelId: exaone-3.0-7.8b-base
domain: llm
status: published
updated: 2026-10-25
sources:
  - https://www.lgresearch.ai/models/exaone
  - https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base
  - https://github.com/LG-AI-Research/EXAONE-3.0
  - https://arxiv.org/abs/2408.03541
features:
  toolUse: true
  vision: false
highlights:
  - "LG AI연구원이 2024년 8월 공개한 EXAONE 3.0 시리즈의 7.8B(비임베딩 6.98B) 규모 파운데이션 모델"
  - "8조 토큰 분량의 다국어 고품질 데이터셋 학습 및 32K 토큰 컨텍스트 지원"
  - "GQA 메커니즘 채택으로 연산 소모량 절감 및 뛰어난 추론 효율성 보유"
relatedOrganization: lg-ai-research
---

# EXAONE 3.0 7.8B Base 소개

## 개요
EXAONE 3.0 7.8B Base는 LG AI연구원이 2024년 8월 연구 및 비상업적 목적으로 전면 개방한 EXAONE 3.0 라인업의 기본 파운데이션 언어 모델입니다. LG AI연구원의 '실용주의 AI(Pragmatic AI)' 비전을 대표하는 모델로서, 총 파라미터 7.8B 중 실제 연산을 담당하는 비임베딩 파라미터 6.98B를 갖추고 있습니다. 경량화된 구조 속에서 글로벌 최고 수준의 언어 이해 및 논리 처리 능력을 구현하도록 설계되었습니다.

## 기술 특징
이 모델은 한국어와 영어를 중심으로 정제된 약 8조 개 토큰의 대규모 코퍼스로 사전 학습되었습니다. Transformer 기반 디코더 구조 위에 GQA(Grouped Query Attention) 기술을 도입하여 키-값(KV) 캐시 메모리 소모를 효율화하고 추론 지연 시간을 경감시켰습니다. 최대 32,768(32K) 토큰의 넓은 컨텍스트 윈도우를 지원하여 복잡한 긴 문맥 텍스트 추론 및 요약 과제에 뛰어난 성과를 보여주며, 동급 체급 오픈 모델 벤치마크 평가에서도 높은 경쟁력을 인정받았습니다.

## 사용 사례
다양한 도메인 특화 데이터셋을 적용한 지도 미세조정(SFT) 및 RLHF/DPO 최적화 연구의 기반 모델로 널리 활형됩니다. 독자적인 파인튜닝 프로세스를 거쳐 기업 사내 RAG 검색 시스템, 산업별 문서 분석 솔루션, 전문 영역 Q&A 모델 등 고성능 커스텀 AI 모델 제작에 적합합니다.

## 한계
이 모델은 사전 학습 전용 베이스 모델로, 별도의 후속 지시 정밀 튜닝(Instruction Tuning) 없이 직접 대화형 대답을 기대할 경우 원하는 형태의 결과를 얻기 어려울 수 있습니다. multimodal 기능이 포함되지 않은 순수 텍스트 전용 디코더 모델이며, 생성형 언어 모델의 본질적인 할루시네이션 특성을 극복하기 위한 서비스 단 검증 장치가 함께 배치되어야 합니다.
