---
modelId: llama-3-3-70b-instruct
domain: llm
status: published
updated: 2026-06-08
sources:
  - https://ai.meta.com/blog/llama-3-3/
  - https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct
  - https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_1/
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "70B 규모로 405B급 모델에 필적하는 가성비와 효율성"
  - "Llama 3.1 405B 모델의 지식을 증류(Distillation)하여 학습"
  - "8개 주요 언어 및 다국어 대화 지원 최적화"
relatedOrganization: meta
---

# Llama 3.3 70B Instruct 소개

## 개요
Llama 3.3 70B Instruct는 2024년 12월 6일 Meta가 출시한 고효율 오픈 소스 LLM입니다. 이 모델의 핵심 가치는 이전 세대의 초대형 모델인 Llama 3.1 405B에 필적하는 지능 수준을 훨씬 작은 70B 파라미터 규모에서 구현했다는 점에 있습니다. Meta는 '지식 증류(Distillation)' 기법을 사용하여 405B 모델의 강력한 성능을 70B 크기에 담아냄으로써, 기업들이 초대형 인프라 없이도 최첨단 수준의 AI 성능을 활용할 수 있도록 하였습니다. 이를 통해 뛰어난 가격 대비 성능과 빠른 추론 속도를 동시에 제공하며 오픈 소스 AI 생태계의 새로운 기준을 제시하였습니다.

## 기술 특징
Llama 3.3 70B는 Llama 3.1 대비 업그레이드된 아키텍처는 아니지만, 학습 데이터의 질과 증류 기술의 정밀도를 극대화하여 성능을 끌어올렸습니다. MMLU, IFEval, MATH 등 주요 벤치마크에서 Llama 3.1 405B와 대등하거나 심지어 능가하는 결과를 보여주기도 합니다. 기술적으로는 128k 토큰의 컨텍스트 윈도우를 지원하며, Grouped-Query Attention(GQA)을 적용하여 추론 효율성을 높였습니다. 또한 다국어 대화와 정교한 도구 사용(Tool Use) 능력에 최적화되어, 함수 호출이나 외부 API 연동 작업에서 높은 정확도를 유지합니다.

## 사용 사례
이 모델은 높은 성능과 상대적으로 낮은 운영 비용 덕분에 기업용 챗봇, 복잡한 텍스트 요약, 데이터 분석 에이전트 등 다양한 실무 환경에 적합합니다. 특히 오픈 소스 라이선스(Llama 3.3 Community License)를 통해 자체 서버에 배포할 수 있어 데이터 보안이 중요한 금융이나 의료 분야에서 매력적인 대안이 됩니다. 또한, 405B 모델에 비해 학습에 필요한 자원이 적기 때문에 특정 도메인에 맞춘 미세 조정(Fine-tuning) 작업에 활발히 사용되고 있으며, 합성 데이터 생성 및 소형 모델 학습을 위한 '교사 모델'로도 널리 활용되고 있습니다.

## 한계
Llama 3.3 70B Instruct는 텍스트 기반 작업에서는 압도적인 효율을 보여주지만, 공식적으로는 텍스트 입력과 출력만을 지원하는 모델입니다. 따라서 이미지, 오디오, 비디오를 직접 처리해야 하는 멀티모달 작업에는 별도의 비전 모델이나 보조 시스템이 필요합니다. 또한 Meta가 지정한 8개 언어(영어, 독일어, 프랑스어, 이태리어, 포르투갈어, 힌디어, 스페인어, 태국어) 외의 언어에서는 성능이 저하될 수 있으며, Llama 커뮤니티 라이선스에 따른 월간 활성 사용자 수 7억 명 이상의 대규모 플랫폼 기업은 별도의 승인이 필요하다는 상업적 제약 사항이 있습니다.
