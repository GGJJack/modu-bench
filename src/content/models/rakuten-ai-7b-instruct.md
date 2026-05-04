---
modelId: rakuten-ai-7b-instruct
domain: llm
status: published
updated: 2024-03-21
sources:
  - https://corp.rakuten.co.jp/news/press/2024/0321_01.html
  - https://huggingface.co/Rakuten/RakutenAI-7B-instruct
  - https://arxiv.org/abs/2403.15484
features:
  toolUse: false
  vision: false
highlights:
  - "Mistral-7B 기반의 일본어 최적화 오픈소스 LLM"
  - "일본어 특화 토크나이저(48k vocabulary) 적용으로 텍스트 처리 효율 극대화"
  - "LM Evaluation Harness 기준 오픈소스 일본어 모델 중 최상위권 성능"
relatedOrganization: rakuten
---

# Rakuten AI 7B Instruct 소개

## 개요
Rakuten AI 7B Instruct는 2024년 3월 락텐(Rakuten) 그룹이 발표한 일본어 특화 70억 파라미터 규모의 대규모 언어 모델입니다. Mistral AI의 Mistral-7B 아키텍처를 기반으로 하며, 방대한 일본어 및 영어 데이터를 사용하여 지속적 학습(Continuous Pre-training)을 거쳤습니다. 이 모델은 특히 일본어 문맥 이해와 지시 이행(Instruction Following) 성능을 극대화하여 개발되었으며, Apache 2.0 라이선스로 공개되어 상업적 활용이 가능합니다.

## 기술 특징
Rakuten AI 7B Instruct의 가장 큰 특징은 일본어에 최적화된 독자적인 형태소 분석기(토크나이저)를 사용한다는 점입니다. 기존 32k였던 어휘 사전(Vocabulary) 규모를 48k로 확장하여, 토큰당 포함되는 평균 문자 수를 늘렸습니다. 이를 통해 텍스트 처리의 효율성을 높였으며, 동일한 컨텍스트 내에서 더 많은 정보를 처리할 수 있게 되었습니다. 성능 평가 측면에서는 LM Evaluation Harness 기준 일본어 평가에서 77.3점을 기록하며, 공개 당시 비슷한 크기의 다른 오픈소스 일본어 모델들을 상회하는 결과를 보여주었습니다.

## 사용 사례
이 모델은 일본어 요약, 질의응답, 대화 시스템 구축 등 다양한 텍스트 생성 작업에 최적화되어 있습니다. 특히 락텐 에코시스템(경제권) 내에서 고객 서비스 자동화나 일본어 기반의 비즈니스 문서 분석을 위해 활용될 수 있도록 설계되었습니다. 오픈소스 라이선스 덕분에 일본 시장을 타겟으로 하는 스타트업이나 기업들이 자체 인프라에 모델을 배포하여 보안을 유지하면서도 고성능 일본어 서비스를 구축하는 데 널리 사용될 수 있습니다.

## 한계
Rakuten AI 7B Instruct는 7B라는 모델 크기의 한계로 인해, 수천억 단위의 파라미터를 가진 초거대 모델들에 비해 복잡한 추론이나 깊이 있는 전문 지식을 요구하는 작업에서는 성능이 낮을 수 있습니다. 또한, 일본어와 영어 데이터 위주로 학습되었기 때문에 다른 언어에 대한 대응 능력은 제한적입니다. 모든 대규모 언어 모델과 마찬가지로 할루시네이션(환각) 현상이나 편향된 출력을 생성할 가능성이 있으므로, 실제 서비스 적용 시 적절한 안전 장치가 필요합니다.
