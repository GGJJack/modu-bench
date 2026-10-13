---
modelId: rakuten-ai-7b
domain: llm
status: published
updated: 2026-10-13
sources:
  - https://corp.rakuten.co.jp/innovation/ai/
  - https://huggingface.co/Rakuten/RakutenAI-7B
  - https://github.com/Rakuten/RakutenAI-7B
features:
  fineTuning: true
  toolUse: false
  vision: false
highlights:
  - "라쿠텐 그룹이 Mistral-7B 기반으로 독자 사전 학습 및 튜닝한 70억 파라미터(7B) 규모의 오픈소스 일본어/영어 특화 언어 모델"
  - "LM Eval Harness 기반 일본어 LLM 벤치마크 평가에서 동급 크기 오픈소스 모델 중 최상위권 성적 기록"
  - "32,768(32k) 토큰 확장 컨텍스트 윈도우 지원 및 Apache-2.0 오픈소스 라이선스 채택"
relatedOrganization: rakuten
---

# Rakuten AI 7B 소개

## 개요
Rakuten AI 7B는 일본의 글로벌 IT 대기업인 라쿠텐 그룹(Rakuten Group, Inc.)이 독자적인 일본어 및 영어 데이터셋을 활용해 개발한 70억 파라미터(7B) 규모의 오픈소스 파운데이션 언어 모델입니다. 2024년 3월 21일에 공개된 본 모델은 오픈소스 아키텍처인 Mistral-7B-v0.1을 기반으로 고품질의 일본어 웹 필터링 데이터와 정밀 사후 학습 데이터를 대량 주입하여 재학습되었습니다. 기업 및 개인 개발자들이 제약 없이 활용할 수 있도록 상업적 이용이 가능한 Apache-2.0 라이선스로 배포되었습니다.

## 기술 특징
본 모델은 32,768(32k) 토큰 범위의 확장 컨텍스트 윈도우를 지원하여 긴 문서 이해와 대용량 컨텍스트 기반 텍스트 생성에 우수한 성능을 보여줍니다. 라쿠텐 연구진은 LM Evaluation Harness 프레임워크를 수정한 일본어 평가 벤치마크셋(JGLUE, JSQuAD 등)을 적용하여 모델을 정밀 검증하였으며, 기존 7B 크기의 타 오픈소스 일본어 모델들에 비해 텍스트 요약, 질문 답변, 문맥 추론 부문에서 탁월한 정확도를 입증하였습니다. 또한 라쿠텐이 제공하는 전용 토크나이저를 결합해 일본어 토큰화 효율을 극대화하였습니다.

## 사용 사례
Rakuten AI 7B는 일본 시장을 대상으로 한 비즈니스 자동화, 이커머스 상품 설명 생성, 고객 서포트 챗봇, 텍스트 요약 시스템 구축 등 다양한 시나리오에 적용하기 용이합니다. 또한 파이인튜닝(Fine-tuning)을 위한 유연한 사전 학습 파운데이션 모델로서, 금융·통신·유통 등 특정 산업군의 사내 데이터나 지식 기반 문서(RAG)를 연동하여 맞춤형 일본어 AI 솔루션을 독립 구축하는 데 적합합니다.

## 한계
Rakuten AI 7B는 기본 사전 학습(Base) 모델 상태에 가까우므로 정교한 멀티턴 대화나 엄격한 지시 수행(Instruction Following) 능력을 즉시 활용하기 위해서는 추가적인 지시 이행 튜닝(Instruct/Chat Fine-tuning)이 필요할 수 있습니다. 또한 pure text 모델로서 멀티모달 비전 기능을 포함하지 않으며, 한국어나 기타 제3의 다국어 처리에서는 성능이 상이할 수 있습니다.
