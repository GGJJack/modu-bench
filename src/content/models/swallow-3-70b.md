---
modelId: swallow-3-70b
domain: llm
status: published
updated: 2026-10-15
sources:
  - https://swallow-llm.github.io/llama3-swallow.ja.html
  - https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-v0.1
  - https://arxiv.org/abs/2404.17790
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "도쿄공업대학(Tokyo Tech)과 일본 산업기술종합연구소(AIST) 연구팀이 개발한 70B 규모의 Llama 3 기반 일본어 지속 사전 학습 모델"
  - "Llama 3 70B의 128k 어휘집(Tokenizer)을 그대로 유지하면서 고품질 Swallow 웹 코퍼스, Cosmopedia, OpenWebMath 데이터셋을 추가 학습"
  - "Meta Llama 3 License 규정에 따라 오픈소스로 배포되어 일본어 연구 및 미세조정(Fine-Tuning)의 기초 모델로 활용"
---

# Llama 3 Swallow 70B 소개

## 개요
Llama 3 Swallow 70B는 도쿄공업대학(Tokyo Institute of Technology, 현 도쿄과학대학) Okazaki 연구실, Yokota 연구실 및 일본 산업기술종합연구소(AIST) 인공지능연구센터 연구팀이 공동으로 개발하여 2024년 7월에 발표한 700억 파라미터 규모의 오픈 가중치 대규모 언어 모델입니다. 오픈소스 LLM 중에서 강력한 성능을 발휘하는 Meta의 Llama 3 70B 모델을 기저 아키텍처로 채택하였으며, 연구팀이 구축한 정제된 웹 코퍼스인 Swallow 코퍼스를 투입하여 고성능 지속 사전 학습(Continual Pre-training)을 진행했습니다. 본 모델은 Meta Llama 3 License 준수 조건 하에 학술 연구 및 상업적 목적 모두에 자유롭게 활용할 수 있습니다.

## 기술 특징
Llama 3 Swallow 70B는 기존 Llama 2 및 Mistral 기반 Swallow 모델들과 달리 별도의 어휘집 확장(Vocabulary Extension)을 적용하지 않고, Llama 3의 128k 토크나이저 어휘 구조를 그대로 채택했습니다. Llama 3 자체의 어휘집에 이미 다수의 일본어 단어가 포함되어 있어, 토큰화 효율 손실을 최소화하면서 모델 마이지 및 호환성을 극대화했습니다. 또한, 단순 웹 텍스트뿐만 아니라 교과서 풍 합성 데이터인 Cosmopedia, 수학 텍스트 OpenWebMath, 소스코드 데이터셋 AlgebraicStack 및 정교한 한일/영일 대역 코퍼스(Laboro ParaCorpus)를 조합하여 지속 사전 학습 데이터셋을 대대적으로 개선했습니다. 이를 통해 일본어 지식 표현력, 수학적 추론 능력, 번역 역량을 대폭 강화했습니다.

## 사용 사례
Llama 3 Swallow 70B는 사후 학습(Post-training)이 적용되지 않은 기초 언어 모델(Base Model)로서, 도메인 특화 미세조정(Fine-tuning) 및 지시어 학습(Instruction Tuning)을 위한 고품질 기저 가중치로 널리 사용됩니다. 금융, 의료, 법률 등 일본어 전문 분야 데이터셋을 활용해 고성능 맞춤형 대화형 AI를 구축하거나, 특정 기업 전용 도메인 지식에 맞춘 튜닝 프로젝트에 최적의 토대를 제공합니다. 아울러 대규모 파라미터를 기반으로 일본어와 영어 간 고품질 기계 번역 및 텍스트 요약 연구의 파운데이션 모델로도 적극 활용됩니다.

## 한계
Llama 3 Swallow 70B는 지속 사전 학습만을 거친 Base 모델이므로, 별도의 지시어 미세조정(Instruction Tuning) 과정을 거치지 않은 경우 사용자의 질의에 직접 정교한 대화형 답변을 생성하기 어렵습니다. 또한 텍스트 전용 언어 모델로 설계되어 이미지, 오디오 등 멀티모달 inputs을 직접 인식할 수 없는 한계가 존재합니다. 70B 체급 특성상 원활한 지속 학습 및 추론을 수행하려면 대용량 VRAM 메모리를 갖춘 멀티 GPU 엔터프라이즈 서버 인프라가 필수적입니다.
