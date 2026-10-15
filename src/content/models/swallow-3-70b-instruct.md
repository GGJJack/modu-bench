---
modelId: swallow-3-70b-instruct
domain: llm
status: published
updated: 2026-10-15
sources:
  - https://swallow-llm.github.io/llama3-swallow.ja.html
  - https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1
  - https://arxiv.org/abs/2404.17790
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "도쿄공업대학(Tokyo Tech)과 일본 산업기술종합연구소(AIST) 연구팀이 발표한 Llama 3 Swallow 70B 기반 지시어 이행(Instruct) 언어 모델"
  - "Chat Vector 기술과 Mixtral-8x7B-Instruct 기반 튜닝 데이터셋, OpenAssistant2 대화 데이터를 활용해 우수한 지시 따름 성능 보유"
  - "Meta Llama 3 License 규정을 준수하며 일본어 다중 회차 대화(MT-Bench JA) 및 지식 이해 분야에서 높은 성능 달성"
---

# Llama 3 Swallow 70B Instruct 소개

## 개요
Llama 3 Swallow 70B Instruct는 도쿄공업대학(Tokyo Institute of Technology, 현 도쿄과학대학) Okazaki 연구실, Yokota 연구실 및 일본 산업기술종합연구소(AIST) 인공지능연구센터 연구팀이 개발한 700억 파라미터 규모의 대화형 지시어 이행(Instruct) 대규모 언어 모델입니다. 지속 사전 학습을 완료한 Llama 3 Swallow 70B 베이스 모델 위에 정교한 지시어 튜닝(Instruction Tuning) 및 Alignment 기법을 적용하여 2024년 7월에 공개되었습니다. 상용 및 연구 목적 모두 활용 가능한 Meta Llama 3 License를 따릅니다.

## 기술 특징
Llama 3 Swallow 70B Instruct의 정렬(Alignment) 학습 과정에서는 Chat Vector 및 모방 학습(Imitation Learning) 접근법을 효과적으로 병행했습니다. Llama 3 Instruct 모델과 Base 모델 가중치 간의 차분 벡터인 Chat Vector를 지속 사전 학습 모델에 가산하여, Llama 3 고유의 강력한 대화 구조와 정렬 능력을 보존했습니다. 나아가, OpenAssistant1(oasst1)을 번역한 뒤 Mixtral-8x7B-Instruct-v0.1을 통해 재정제한 고품질 대화 응답 데이터셋과 OpenAssistant2(oasst2) 최고 평가 대화 데이터를 결합하여 Supervised Fine-Tuning(SFT)을 수행했습니다. 이로 인해 일본어 표현의 자연스러움과 다중 회차 대화(Multi-turn Dialogue) 응답 정확도가 크게 강화되었습니다.

## 사용 사례
Llama 3 Swallow 70B Instruct는 고난도 일본어 텍스트 요약, 다국어 상호 번역, 복잡한 비즈니스 문서 자동 작성, 전문 대화형 AI 시스템의 추론 엔진으로 활용됩니다. vLLM, SGLang, TensorRT-LLM 등 오픈소스 LLM 추론 서빙 인프라에 즉시 탑재 가능하며, 텐서 병렬화(Tensor Parallelism) 환경에서 빠른 추론 속도를 보장합니다. 보안과 정보 보호가 중시되는 공공기관 및 기업 내부망에서 로컬 RAG(검색 증강 생성) 챗봇 파이프라인 구축 시 신뢰할 수 있는 고성능 백엔드 모델로 선택받고 있습니다.

## 한계
본 모델은 텍스트 전용 LLM으로 구축되었기 때문에 이미지, 비디오, 음성 등 멀티모달 inputs을 직접 처리하지 못합니다. 또한 70B라는 거대한 파라미터 사이즈로 인해 실시간 추론을 서비스하기 위해서는 최소 2~4장 이상의 고성능 엔터프라이즈 GPU(예: A100 80GB, H100) 환경이 필요합니다. Meta Llama 3 License 조건을 따르므로 월간 활성 사용자(MAU) 기준을 충족하는 대규모 상용 서비스 전개 시 해당 라이선스 조건에 대한 법적 검토가 수반되어야 합니다.
