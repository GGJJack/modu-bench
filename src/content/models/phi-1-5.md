---
modelId: phi-1-5
domain: llm
status: published
updated: 2026-11-06
sources:
  - https://huggingface.co/microsoft/phi-1_5
  - https://arxiv.org/abs/2309.05463
  - https://www.microsoft.com/en-us/research/publication/textbooks-are-all-you-need-ii-phi-1-5-technical-report/
features:
  toolUse: false
highlights:
  - "1.3B 파라미터 소형 트랜스포머 언어 모델"
  - "Textbooks Are All You Need II 논문 기반 자연어 상식 추론 특화"
  - "웹 크롤링(Common Crawl 등) 데이터를 배제하고 엄선된 합성 데이터 중심 학습"
  - "MIT 라이선스"
relatedOrganization: microsoft
---

# Phi-1.5 소개

## 개요
Phi-1.5는 2023년 9월 Microsoft Research가 발표한 1.3B 파라미터 규모의 소형 트랜스포머 언어 모델입니다. 선행 연구인 Phi-1의 "Textbooks Are All You Need" 철학을 코드 영역에서 자연어 상식 추론(Common Sense Reasoning)과 일반 언어 이해 영역으로 확장한 후속작입니다.

웹 크롤링 데이터(예: Common Crawl)를 의도적으로 배제하고 고품질 합성 데이터(Synthetic Text)를 대규모로 투입함으로써, 10B 미만 소형 모델 중 최상위권의 상식 추론 및 초등 수학 문제 해결 성능을 입증했습니다.

## 기술 특징
Phi-1.5는 디코더 전용 트랜스포머 구조로, Phi-1의 훈련 데이터셋에 대규모 자연어 합성 텍스트 데이터를 추가하여 총 300억 토큰 데이터셋에서 1,500억 토큰 분량을 학습했습니다.

1. **안전성과 합성 데이터 중심 파이프라인**:
   - 독성(Toxicity)과 편향을 줄이고 데이터 순도를 높이기 위해 무작위 웹 스크래핑 데이터를 완전히 배제했습니다.
   - 다양한 도메인의 자연어 상식 추론, 요약, 문맥 이해를 유도하는 정교한 합성 텍스트를 생성하여 사전 훈련에 활용했습니다.
2. **복합적 추론 능력의 발현**:
   - 1.3B라는 작은 파라미터 크기에도 불구하고 최대 5배 이상 큰 모델들과 대등한 상식 추론 성능을 보였습니다.
   - 초등 수학(Grade-school mathematics), 단계별 사고(Step-by-step thinking), 기초적인 인컨텍스트 학습(Rudimentary In-context Learning) 등의 복합 능력을 발현했습니다.

## 사용 사례
Phi-1.5는 오픈소스 커뮤니티와 연구자들이 소형 언어 모델의 안전성, 독성 완화 메커니즘, 편향 분석 등을 제약 없이 연구할 수 있도록 MIT 라이선스로 공개되었습니다.

- 오픈 도메인 연구 베이스라인: 사전 훈련 직후(RLHF 미적용) 모델의 제어 가능성 및 안전성 연구
- 엣지 환경 상식 추론: 경량 디바이스 환경에서의 텍스트 요약, 이메일 초안 작성, 스토리 생성
- 소형 모델 파인튜닝 베이스: 특정 도메인 태스크를 위한 가벼운 백본(Backbone) 모델로 활용

## 한계
Phi-1.5는 순수 베이스 모델(Pretrained Base Model)로 제공되며, 지시문 준수 미세 조정(SFT)이나 인간 피드백 기반 강화학습(RLHF)을 거치지 않았습니다.

- 질문에 답한 뒤 불필요하거나 반복적인 텍스트를 지속해서 생성하는 경향이 있습니다.
- 표준 영어(Standard English) 위주로 학습되어 다국어(한국어 등)나 비표준 은어, 복잡한 지시문 이해에는 한계가 있습니다.
- 웹 크롤링 데이터를 배제했음에도 불구하고 환각(Hallucination) 및 유도된 질문에 따른 유해 텍스트 생성 위험이 상존하므로, 연구용 출발점으로 취급해야 하며 실 서비스 적용 시 추가적인 가드레일과 미세 조정이 요구됩니다.
