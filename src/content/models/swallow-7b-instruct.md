---
modelId: swallow-7b-instruct
domain: llm
status: published
updated: 2026-10-16
sources:
  - https://tokyotech-llm.github.io/
  - https://huggingface.co/tokyotech-llm/Swallow-7b-instruct
  - https://arxiv.org/abs/2404.17790
features:
  toolUse: false
  vision: false
highlights:
  - "Llama 2 7B 기반 일본어 어휘집 확장 및 대규모 지속 사전학습(Continuous Pre-training) 적용"
  - "도쿄공업대학(Tokyo Tech) 및 산총련(AIST) 공동 연구 개발"
  - "일본어 대화 및 지시 이행(Instruction Following) 미세조정을 거친 70억 파라미터 오픈소스 LLM"
---

# Swallow 7B Instruct 소개

## 개요
Swallow 7B Instruct는 일본 도쿄공업대학(Tokyo Tech, 현 도쿄과학대학) 오카자키 연구실 및 요코타 연구실, 그리고 산업기술종합연구소(AIST) 연구팀이 공동 개발하여 2023년 12월 정식 발표한 지시 추종(Instruction-tuned) 대규모 언어 모델(LLM)입니다. 이 모델은 Meta의 Llama 2 7B를 기반 백본으로 삼아 제작되었으며, 어휘집 확장과 약 1,000억 토큰 규모의 고품질 일본어 데이터셋을 활용한 지속 사전학습(Continuous Pre-training)을 완료한 후, 지시 수행 및 대화 응답에 최적화된 지도 미세조정(SFT)을 적용하였습니다.

## 기술 특징
Swallow 7B Instruct의 기술적 핵심은 기존 Llama 2의 영어 중심 토크나이저에 16,000개의 고유 일본어 토큰을 추가하여 어휘집을 총 48,000개 수준으로 확장한 점에 있습니다. 이를 통해 동일한 일본어 문장을 처리할 때 발생하는 토큰 수를 대폭 줄여 인코딩 및 생성 효율성을 극대화하였습니다. 또한 정렬(Alignment) 및 지도 미세조정 단계를 거쳐 사용자의 다채로운 질문과 지시어(Instruction)를 높은 정확도로 이해하고 체계적인 답변을 생성하도록 튜닝되었습니다.

## 사용 사례
Swallow 7B Instruct는 일본어 자연어 처리, 가벼운 챗봇 서비스, RAG(검색 증강 생성) 기반 질의응답 시스템 구축 등 다양한 어플리케이션 개발에 활발히 응용됩니다. 컴팩트한 7B 체급 특성상 온프레미스 서버나 단일 GPU 환경에서도 부담 없이 구동이 가능하여, 개인 연구자나 스타트업이 일본어 대화형 AI 프로토타입을 빠르게 구축하는 데 널리 활용되고 있습니다.

## 한계
본 모델은 초기의 연구 및 오픈소스 생태계 기여를 목적으로 개발되어, Llama 2 기본 아키텍처의 한계로 인해 컨텍스트 윈도우가 4,096 토큰(4K)으로 제한되어 있습니다. 이에 따라 수십 쪽에 달하는 대용량 문서 요약이나 복잡한 단기 기억이 필요한 정교한 대화 세션에는 한계가 존재합니다. 아울러 RLHF나 DPO와 같은 정교한 선호도 최적화 및 안전성 가이딩 프로세스가 완벽히 포함되어 있지 않아, 상용 서비스 배포 시 별도의 안전성 필터링 레이어가 요구될 수 있습니다.
