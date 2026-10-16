---
modelId: swallow-13b-instruct
domain: llm
status: published
updated: 2026-10-16
sources:
  - https://tokyotech-llm.github.io/
  - https://huggingface.co/tokyotech-llm/Swallow-13b-instruct
  - https://arxiv.org/abs/2404.17790
features:
  toolUse: false
  vision: false
highlights:
  - "Llama 2 13B 기반 일본어 어휘집 확장 및 대규모 지속 사전학습(Continuous Pre-training) 적용"
  - "도쿄공업대학(Tokyo Tech) 및 산총련(AIST) 공동 연구 개발"
  - "130억 파라미터급의 고도화된 문맥 이해 및 정교한 일본어 지시 이행 능력 제공"
---

# Swallow 13B Instruct 소개

## 개요
Swallow 13B Instruct는 일본 도쿄공업대학(Tokyo Tech, 현 도쿄과학대학) 오카자키 연구실 및 요코타 연구실, 그리고 산업기술종합연구소(AIST) 연구팀이 공동 개발한 130억(13B) 파라미터 체급의 일본어 지시 추종 대규모 언어 모델(LLM)입니다. Meta의 Llama 2 13B 모델 가중치를 기반으로 삼아, 일본어 어휘집 확장 및 약 1,000억 토큰 분량의 일본어 코퍼스를 통한 지속 사전학습을 수행하고, 사용자의 의도에 적합한 응답을 도출하도록 정밀한 지도 미세조정(SFT)을 진행하였습니다.

## 기술 특징
Swallow 13B Instruct는 Llama 2 13B 모델 아키텍처의 강력한 표현력을 계승하면서도, 16,000개의 일본어 고유 토큰을 추가하여 총 48,000개의 어휘집을 구축했습니다. 이를 통해 일본어 인코딩 시 토큰 분할을 최소화하여 추론 연산의 효율성과 답변 생성 속도를 향상시켰습니다. 13B 체급에 달하는 거대한 파라미터를 바탕으로 7B 모델에 비해 복잡한 문맥 처리, 추론 능력, 유연한 자연어 생성 성능에서 우수한 품질을 보여줍니다.

## 사용 사례
Swallow 13B Instruct는 일본어 문서 분석, 자동 요약, 지시어 기반 기사 작성, 고도화된 대화형 AI 에이전트 구축 등에 폭넓게 응용됩니다. 일본 내 유수의 기업 및 기관에서 온프레미스 인프라 기반으로 구축하는 AI 도우미 서비스 백엔드로 채택되며, 오픈소스 라이선스(Llama 2 Community License)를 따라 유연한 커스터마이징이 가능합니다.

## 한계
이 모델 역시 Llama 2 13B 기본 아키텍처의 한계로 인해 최대 컨텍스트 윈도우 길이가 4,096 토큰(4K)으로 제한됩니다. 따라서 대용량 서적이나 수백 쪽에 이르는 텍스트를 동시에 주입하는 작업에는 한계가 따릅니다. 아울러 RLHF/DPO 기반의 인간 선호도 정렬 과정이 제외되어 있어, 프로덕션 상용 서비스 구성 시 프롬프트 엔지니어링 및 외부 유해성 필터 시스템 구축 조치가 필요합니다.
