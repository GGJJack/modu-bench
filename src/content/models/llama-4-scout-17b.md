---
modelId: llama-4-scout-17b
domain: llm
status: published
updated: 2026-05-15
sources:
  - https://aws.amazon.com/bedrock/meta/
  - https://aws.amazon.com/blogs/aws/llama-4-models-from-meta-now-available-in-amazon-bedrock-serverless
  - https://aws.amazon.com/machine-learning/llama/
features:
  toolUse: true
  vision: true
highlights:
  - "Llama 4 제품군의 고성능 범용 멀티모달 모델"
  - "16명의 전문가(Experts)를 활용한 Mixture-of-Experts(MoE) 아키텍처"
  - "업계 최고 수준의 350만(3.5M) 토큰 컨텍스트 윈도우 지원"
relatedOrganization: meta
---

# Llama 4 Scout 17B 소개

## 개요
Llama 4 Scout 17B는 Meta가 2026년 4월에 공개한 Llama 4 시리즈의 범용 멀티모달 모델입니다. Scout 라인업은 이전 세대의 모든 Llama 모델을 능가하는 성능을 제공하면서도, 효율적인 연산을 통해 다양한 산업군에서 활용될 수 있도록 설계되었습니다. 특히 텍스트와 시각 데이터를 동시에 처리할 수 있는 네이티브 멀티모달 능력을 갖추고 있어, 복잡한 비즈니스 워크플로우와 지능형 에이전트 구축에 최적화되어 있습니다.

## 기술 특징
이 모델은 16명의 전문가를 포함하는 혼합 전문가(Mixture-of-Experts, MoE) 아키텍처를 채택하고 있습니다. 활성 파라미터는 17B 규모이지만 전체 파라미터는 109B에 달하여, 연산 효율성을 유지하면서도 방대한 지식과 추론 능력을 확보했습니다. 가장 주목할 만한 특징은 Amazon Bedrock 기준 350만(3.5M) 토큰에 달하는 압도적인 컨텍스트 윈도우입니다. 이는 수만 페이지의 문서나 대규모 코드 베이스를 한 번에 분석할 수 있게 하며, '얼리 퓨전(Early Fusion)' 기술을 통해 이미지와 텍스트 간의 정밀한 정렬과 추론을 가능하게 합니다.

## 사용 사례
Llama 4 Scout 17B는 대규모 문서 분석 및 코드 인텔리전스 분야에서 강력한 성능을 발휘합니다. 기업용 지능형 에이전트는 이 모델을 통해 방대한 내부 지식을 참조하여 도구와 워크플로우를 가로지르는 복잡한 추론을 수행할 수 있습니다. 또한 스크린샷이나 사진을 포함한 고객 지원 요청을 실시간으로 분석하거나, 다국어 지원 능력을 바탕으로 전 세계 사용자를 대상으로 한 시각 보조 챗봇 및 콘텐츠 생성 서비스에도 적합합니다.

## 한계
350만 토큰의 방대한 컨텍스트를 지원하지만, 매우 긴 입력값에 대해 모든 세부 정보를 완벽하게 기억하고 추론하는 '바늘 찾기(Needle In A Haystack)' 성능의 한계는 대규모 데이터 처리 시 고려해야 할 요소입니다. 또한 이미지 처리 능력은 뛰어나지만 실시간 고해상도 비디오 프레임의 연속적인 분석이나 전문적인 의료/법률 이미지 진단과 같은 특화된 영역에서는 추가적인 미세 조정(Fine-tuning)이나 검증이 필요할 수 있습니다.
