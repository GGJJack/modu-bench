---
modelId: solar-10.7b-base
domain: llm
status: published
updated: 2026-10-24
sources:
  - https://www.upstage.ai
  - https://huggingface.co/upstage/SOLAR-10.7B-v1.0
  - https://github.com/UpstageAI/SOLAR-10.7B
  - https://arxiv.org/abs/2312.15166
features:
  toolUse: false
  vision: false
highlights:
  - "DUS(Depth-Up Scaling) 아키텍처 확장 기법으로 구축된 10.7B 사전학습 베이스 모델"
  - "Llama 2 아키텍처 호환성 유지 및 업스테이지 독자 한국어/영어 사전학습 데이터 적용"
  - "소형 체급 대비 높은 지능 밀도로 도메인 파인튜닝용 기초 모델로 활용"
relatedOrganization: upstage
---

# Solar 10.7B Base 소개

## 개요
Solar 10.7B Base(솔라 10.7B 베이스)는 대한민국 AI 스타트업 업스테이지(Upstage)가 2023년 12월 공개한 107억(10.7B) 매개변수 규모의 사전학습 언어 모델이다. 기존 7B 체급 사전학습 모델의 레이어를 확장하고 재구축하는 DUS(Depth-Up Scaling) 기술을 적용하여 탄생하였으며, 정렬(Alignment) 후처리가 적용되지 않은 순수 파운데이션 사전학습 웨이트(v1.0)를 제공한다.

## 기술 특징
Solar 10.7B Base의 핵심 기술은 Depth-Up Scaling(DUS)으로, 32개 레이어의 7B 아키텍처에서 중간 레이어를 복제·연결한 뒤 재학습시킴으로써 48개 레이어의 10.7B 모델로 효율적으로 확장한 아키텍처이다. 4,096 토큰의 컨텍스트 윈도우를 지원하며, Llama 2 트랜스포머 구조와 완벽히 호환되어 기존 Llama 생태계의 학습 및 추론 툴킷(Transformers, vLLM, DeepSpeed 등)을 그대로 활용할 수 있다. Apache-2.0 라이선스로 공개되어 상업적 목적의 파인튜닝 및 제품 서비스 구현이 가능하다.

## 사용 사례
이 모델은 한국어 및 영어 도메인에 특화된 SFT(지도 미세조정), DPO, ORPO 등 독자적인 인스트럭션 튜닝을 수행하고자 하는 연구자 및 엔터프라이즈 개발팀에 최적의 베이스 모델을 제공한다. 특히 금융, 공공, 의료 등 사내 고유 데이터셋으로 가동할 경량 온프레미스 LLM을 구축할 때 훌륭한 출발점이 된다.

## 한계
대화형 지시 이행이나 안전성 정렬(Safety Alignment)이 적용되지 않은 사전학습 Base 웨이트이므로, 사용자의 질문에 직접 응답하는 챗봇으로 바로 사용하기에는 적절하지 않으며 반드시 추가 튜닝 과정이 요구된다. 또한 기본 컨텍스트 윈도우가 4,096 토큰 수준으로 제한되어 있어 초대형 장문 문맥 분석 시 RoPE 확장 기술이나 입력 분할 처리가 고려되어야 한다.
