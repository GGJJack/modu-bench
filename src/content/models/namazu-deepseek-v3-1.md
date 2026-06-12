---
modelId: namazu-deepseek-v3-1
domain: llm
status: published
updated: 2026-06-12
sources:
  - https://sakana.ai/namazu-alpha/
  - https://group.gmo/news/article/9704/
  - https://chat.sakana.ai/
features:
  toolUse: true
  vision: false
highlights:
  - "DeepSeek-V3.1-Terminus 기반 일본 특화 사후 학습 모델"
  - "정치적·민감 토픽에 대한 답변 거부율 0% 수준 개선"
  - "일본어 벤치마크(Nejumi, Swallow 등)에서 고성능 입증"
relatedOrganization: sakana-ai
---

# Namazu-DeepSeek-V3.1-Terminus 소개

## 개요
Namazu-DeepSeek-V3.1-Terminus는 Sakana AI가 개발한 'Namazu' 알파 시리즈 모델 중 가장 높은 성능을 자랑하는 주력 모델입니다. DeepSeek의 프론티어 모델인 DeepSeek-V3.1-Terminus를 기반으로 하여, 일본의 문화적·사회적 맥락에 최적화된 사후 학습(Post-training)을 거쳤습니다. 특히 글로벌 모델들이 보여주는 일본 관련 정보의 답변 거부 현상을 해결하는 데 탁월한 성과를 보였습니다.

## 기술 특징
이 모델은 사후 학습을 통해 베이스 모델의 핵심 능력은 보존하면서 응답의 유연성을 극대화했습니다. Sakana AI의 테스트 결과, 베이스 모델인 DeepSeek-V3.1-Terminus가 일본 관련 정치·역사 질문의 약 72%에 대해 답변을 거부했던 것과 달리, Namazu 버전은 답변 거부율을 거의 0%에 가깝게 개선했습니다. 또한 Nejumi Leaderboard4, Swallow LLM LeaderBoard v2 등 주요 일본어 벤치마크에서 베이스 모델이나 동급 규모의 타사 모델과 대등하거나 우수한 성능을 입증했습니다.

## 사용 사례
Sakana Chat의 기본 엔진 중 하나로 활용되며, 일본 고유의 사회적 문맥이 중요한 정교한 대화나 분석 작업에 주로 사용됩니다. 웹 검색 기능과 통합되어 실시간 뉴스를 기반으로 한 국내외 동향 비교, 심층적인 질의응답 등에 최적화되어 있습니다. Sakana AI는 이 모델을 통해 특정 국가나 조직의 이데올로기에 편향되지 않은 중립적이고 정확한 정보 제공 기술을 실증하고 있습니다.

## 한계
알파 버전 프로토타입으로서 기술 실증을 목적으로 하며, 웹 검색을 통합하지 않은 단독 모델 상태에서의 지식은 학습 시점에 국한될 수 있습니다. Sakana AI는 향후 공개될 테크니컬 리포트를 통해 이 모델의 구체적인 평가 지표와 학습 방법론을 상세히 공유할 예정입니다.
