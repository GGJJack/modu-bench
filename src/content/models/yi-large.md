---
modelId: yi-large
domain: llm
status: published
updated: 2026-06-28
sources:
  - https://www.lingyiwanwu.com/newsroom
  - https://www.01.ai/yi-models
  - https://github.com/01-ai/Yi/blob/main/README.md
  - https://arxiv.org/abs/2403.04652
features:
  toolUse: true
  vision: false
highlights:
  - "01.AI의 폐쇄형 플래그십 모델로 LMSYS Chatbot Arena에서 상위권 기록"
  - "수천억 개 규모의 파라미터를 가진 고성능 이중 언어(중/영) LLM"
  - "Llama 아키텍처를 기반으로 한 독자적인 데이터 및 훈련 파이프라인 구축"
relatedOrganization: 01-ai
---

# Yi-Large 소개

## 개요
Yi-Large는 01.AI(零一万物, 링이완우)에서 개발한 폐쇄형 플래그십 대규모 언어 모델(LLM)입니다. 2024년 5월 공개 당시, 국제적인 모델 평가 플랫폼인 LMSYS Chatbot Arena에서 중국 모델 최초로 상위권에 진입하며 GPT-4와 같은 글로벌 최상위 모델들과 대등한 성능을 입증했습니다. Yi-Large는 기업용 솔루션과 고도의 지적 작업이 필요한 시나리오를 위해 설계되었으며, 01.AI의 차세대 주력 모델인 Yi-Lightning의 기반이 되었습니다.

## 기술 특징
Yi-Large는 수천억 개의 파라미터를 가진 고성능 아키텍처를 채택하고 있습니다. 비록 아키텍처의 기반은 Llama를 따르고 있으나, 01.AI는 Llama의 가중치를 사용하지 않고 3T(3조) 토큰 규모의 고품질 다국어 코퍼스를 사용하여 처음부터 모델을 학습시켰습니다. 특히 데이터 정제 파이프라인과 인프라 구축을 독자적으로 수행하여, 코딩, 수학, 논리적 추론 및 지시어 이행 능력에서 기존 오픈소스 모델들을 크게 상회하는 성능을 보여줍니다.

## 사용 사례
Yi-Large는 복잡한 업무 프로세스를 자동화하는 멀티 에이전트 시스템(Multi-Agent System) 구축에 최적화되어 있습니다. 01.AI의 기업용 플랫폼인 'WanZhi(万智)'를 통해 HR 채용 보조, 시장 분석 리포트 생성, 비즈니스 전략 수립 등 전문적인 지식 업무에 활용됩니다. 또한 높은 이중 언어(중국어 및 영어) 능력을 바탕으로 다국어 번역 및 글로벌 비즈니스 시나리오에서도 강력한 성능을 발휘합니다.

## 한계
Yi-Large는 폐쇄형 모델로 제공되어 모델의 가중치를 직접 다운로드하거나 로컬에서 구동할 수 없으며, 01.AI의 공식 API나 플랫폼을 통해서만 접근 가능합니다. 또한 고도의 지능을 제공하는 만큼 추론 비용과 지연 시간이 경량 모델에 비해 높을 수 있습니다. 01.AI는 추후 성능과 비용의 균형을 맞춘 Yi-Lightning 등의 후속 모델을 통해 이러한 경제성 문제를 보완하고 있습니다.
