---
modelId: solar-mini
domain: llm
status: published
updated: 2026-05-18
sources:
  - https://www.upstage.ai/blog/en/introducing-solar-mini-compact-yet-powerful
  - https://huggingface.co/upstage/SOLAR-10.7B-v1.0
  - https://arxiv.org/abs/2312.15166
features:
  fineTuning: true
highlights:
  - "10.7B 파라미터의 경량급 모델이면서 30B 이하 체급에서 세계 최고 수준 성능"
  - "Depth Up-scaling(DUS) 기법을 통한 효율적인 레이어 확장 및 성능 극대화"
  - "Apache-2.0 라이선스로 상업적 이용 및 자유로운 튜닝 가능"
relatedOrganization: upstage
---

# Solar Mini 소개

## 개요
Solar Mini는 대한민국의 AI 스타트업 업스테이지(Upstage)가 2023년 12월에 발표한 10.7B 파라미터 규모의 대규모 언어 모델(LLM)입니다. '작지만 강력한' 성능을 목표로 설계된 이 모델은 공개 직후 허깅페이스(Hugging Face) Open LLM 리더보드에서 1위를 차지하며 주목받았습니다. 특히 30B 이하의 파라미터를 가진 모델들 중 독보적인 성능을 보여주며, GPT-3.5와 대등하거나 그 이상의 성능을 훨씬 빠른 속도와 적은 자원으로 제공하는 것을 목표로 합니다.

## 기술 특징
Solar Mini의 가장 큰 혁신은 'Depth Up-scaling(DUS)'이라 불리는 독자적인 모델 확장 기술에 있습니다. DUS는 기존의 Mistral 7B 모델의 가중치를 기반으로 레이어를 효율적으로 중첩 및 확장하여, 단순히 파라미터 수만 늘리는 것이 아니라 모델의 깊이를 최적화하는 방식입니다. 이를 통해 복잡한 Mixture-of-Experts(MoE) 구조 없이도 뛰어난 성능을 달성했으며, 기존의 트랜스포머 아키텍처와 완벽하게 호환되어 다양한 오픈소스 프레임워크에서 쉽게 활용할 수 있습니다. 또한, 한국어와 영어 데이터셋을 균형 있게 학습하여 두 언어 모두에서 뛰어난 이해 및 생성 능력을 보유하고 있습니다.

## 사용 사례
Solar Mini는 경량화된 크기 덕분에 기업의 온프레미스(On-premise) 구축이나 개인용 디바이스(On-device) 배포에 매우 유리합니다. 업스테이지는 이 모델을 기반으로 한 'Solar-Instruct' 버전을 통해 지시어 이행 성능을 극대화했으며, 이는 RAG(Retrieval-Augmented Generation) 시스템이나 도메인 특화 챗봇 개발에 널리 사용됩니다. 특히 금융, 보험, 의료 등 보안과 비용 효율성이 동시에 요구되는 산업군에서 독자적인 모델 튜닝을 위한 기반 모델로 활발히 도입되고 있습니다.

## 한계
10.7B라는 크기는 효율성 면에서는 장점이지만, 수천억 개의 파라미터를 가진 초거대 모델(GPT-4 등)과 비교했을 때 방대한 지식의 깊이나 복잡한 다단계 추론 능력에는 한계가 있을 수 있습니다. 또한, 기본 모델은 범용적인 텍스트 생성에 최적화되어 있어, 특정 전문 분야나 고도의 대화형 인터페이스로 활용하기 위해서는 반드시 적절한 미세 조정(Fine-tuning)이나 정교한 프롬프트 엔지니어링이 수반되어야 합니다.
