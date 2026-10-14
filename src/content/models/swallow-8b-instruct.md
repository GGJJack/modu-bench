---
modelId: swallow-8b-instruct
domain: llm
status: published
updated: 2026-10-14
sources:
  - https://swallow-llm.github.io/llama3-swallow.ja.html
  - https://huggingface.co/tokyotech-llm/Llama-3-Swallow-8B-Instruct-v0.1
  - https://zenn.dev/tokyotech_lm/articles/f65989d76baf2c
features:
  toolUse: false
  vision: false
highlights:
  - "Meta Llama 3 8B 기반 일본어 지속 사전학습(Continual Pre-training) 모델"
  - "도쿄공업대학(Tokyo Tech / Science Tokyo) 및 산총련(AIST) 연구팀 공동 개발"
  - "Chat Vector 기법과 Mixtral 기반 모방학습 SFT 데이터 결합으로 고성능 지시 추종 능력 확보"
---

# Llama 3 Swallow 8B Instruct 소개

## 개요
Llama 3 Swallow 8B Instruct는 도쿄공업대학(Tokyo Institute of Technology / 현 도쿄과학대학) 오카자키 연구실 및 요코타 연구실, 그리고 산업기술종합연구소(AIST) 연구팀이 공동 개발한 일본어 지시 추종 대규모 언어 모델(LLM)이다. Meta의 Llama 3 8B를 베이스로 Swallow 웹 코퍼스와 대규모 일본어·영어 학습 데이터셋을 통해 지속 사전학습(Continual Pre-training)을 거친 후, 대화 및 지시 이행 능력 향상을 위해 지도 미세조정(SFT)을 적용하였다. Meta Llama 3 Community License를 유지하여 연구 및 상업적 목적으로 자유롭게 활용할 수 있다.

## 기술 특징
Llama 3 Swallow 8B Instruct는 이전 Swallow 시리즈(Llama 2, Mistral 기반)와 달리 Llama 3의 넓은 어휘집(128k 토큰)을 그대로 채택하여 어휘 확장 없이도 우수한 한국어/일본어 토큰 효율성을 확보했다. 지속 사전학습 과정에서는 웹 코퍼스 외에도 Cosmopedia(합성 Textbook 데이터), Laboro ParaCorpus(대역 코퍼스), OpenWebMath 및 AlgebraicStack(수학/코드) 데이터를 조합하여 이전 모델들의 단점이었던 산술 추론과 코드 생성 성능을 크게 보강했다. 특히 정렬(Alignment) 단계에서 Llama 3 Instruct의 파라미터 변화량을 추출한 **Chat Vector** 기술과, Mixtral-8x7B-Instruct를 활용한 모방 학습(Imitation Learning) 기반의 고품질 일본어 대화 데이터셋을 결합하여 지시 수행 능력을 대폭 개선하였다.

## 사용 사례 및 성능
Llama 3 Swallow 8B Instruct는 일본어 언어 이해 및 생성 평가(JCom, JEMHopQA, JSQuAD, JMMLU 등)에서 평균 0.4811점의 높은 종합 성능을 기록하여 동급 8B 오프닝 모델 중 최상위 수준의 일본어 이해력을 보여준다. 동시에 지속 사전학습 중 영어 능력 저하 폭을 최소화하여 영어 평가 벤치마크에서도 0.5743점의 우수한 성적을 나타낸다. 대화 능력 평가인 Japanese MT-Bench에서 0.4766의 스코어를 달성하여 자연스러운 대화 반응 및 문맥 유지를 지원하며, 대화형 도우미 및 일본어 가공 어플리케이션 개발에 널리 활용된다.

## 한계 및 주의사항
본 모델은 초기의 연구 및 오픈소스 생태계 기여를 위해 공개되었으며, RLHF나 DPO(Direct Preference Optimization)와 같은 선호도 최적화 기법은 아직 포함되어 있지 않다. 이에 따라 특정 안전성 또는 인간 의도 정렬 가이드라인 준수가 완벽히 보장되지 않을 수 있으므로, 실제 서비스 상용화 적용 시 안전성 검증 및 추가 유해 표현 필터링 적용이 권장된다.
