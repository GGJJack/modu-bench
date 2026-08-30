---
modelId: swallow-70b-instruct
domain: llm
status: published
updated: 2026-08-30
sources:
  - https://tokyotech-llm.github.io/
  - https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1
  - https://zenn.dev/tokyotech_lm/articles/f65989d76baf2c
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "도쿄공업대학(Tokyo Tech)과 산업기술종합연구소(AIST) 공동 연구팀이 Meta의 Llama 3 70B를 기저로 개발한 고성능 70B 대규모 일본어 특화 지시어 이행 모델"
  - "대규모 일본어 말뭉치를 통한 지속 사전 학습(Continual Pre-training) 및 Supervised Fine-Tuning(SFT), Chat Vector 기술을 접목하여 뛰어난 자연어 이해력 보유"
  - "Meta Llama 3 Community License를 준수하여 연구자 및 오픈소스 개발자 커뮤니티에 공개 배포"
---

# Swallow 70B Instruct 소개

## 개요
Swallow 70B Instruct는 도쿄공업대학(Tokyo Institute of Technology, 현 도쿄과학대학) Okazaki 연구실 및 Yokota 연구실과 일본 산업기술종합연구소(AIST) 인공지능연구센터 공동 연구팀이 개발한 700억 파라미터 규모의 일본어 특화 지시어 이행(Instruct) 언어 모델입니다. Meta의 Llama 3 70B 오픈 가중치 모델을 기저 아키텍처로 삼아 지속 사전 학습(Continual Pre-training)과 정교한 미세조정 절정을 거쳐 공개되었습니다. 이 모델은 일본어 환경에서의 고차원적 대화 처리와 맥락 이해 역량을 크게 고도화하였으며, Meta Llama 3 Community License 규정에 따라 학술적 탐구 및 상용 서비스 응용에 널리 활용되고 있습니다.

## 기술 특징
Swallow 70B Instruct는 Llama 3 70B가 보유한 강력한 토크나이저와 다국어 사전 학습 표현력을 바탕으로, 고품질 일본어 웹 말뭉치와 자체 정제 코퍼스를 추가 투입하여 지속 사전 학습을 진행하였습니다. 지시어 준수(Instruction-following) 미세조정 과정에서는 OpenAssistant 대화 데이터셋과 Mixtral-8x7B-Instruct-v0.1로 생성한 고품질 응답 세트 등을 결합한 Supervised Fine-Tuning(SFT) 방식을 채택했습니다. 또한 Chat Vector 기법을 활용해 기저 모델의 우수한 지식과 일본어 특화 가중치를 효과적으로 융합함으로써 JCom, JEMHopQA, MT-Bench JA 등 일본어 언어 평가 벤치마크에서 우수한 성과를 달성했습니다.

## 사용 사례
체급이 70B 규모로 확장된 Swallow 70B Instruct는 고난도 일본어 문장 요약, 다국어 교차 번역, 복잡한 비즈니스 문서 작성 및 전문 학술 질의응답 시스템의 핵심 추론 엔진으로 널리 응용되고 있습니다. vLLM, SGLang, TensorRT-LLM 등 대표적인 대규모 언어 모델 추론 서빙 프레임워크와 직접 호환되어, 높은 토큰 처리량과 효율적인 텐서 병렬화(Tensor Parallelism) 배치가 가능합니다. 특히 기업 로컬 서버나 공공기관 데이터센터 내부에서 독립된 정보 보좌역(RAG) 인프라를 구축할 때 신뢰도 높은 로컬 챗봇 모델로 선택받고 있습니다.

## 한계
Swallow 70B Instruct는 기본적으로 텍스트 입출력 전용 Transformer 아키텍처로 설계되었기 때문에 멀티모달 이미지 해석이나 오디오 음성 처리 기능을 직접 지원하지 않는 구조적 한계가 존재합니다. 또한 700억 파라미터에 달하는 대용량 가중치 특성상 원활한 추론을 수행하려면 최소 4장 이상의 고성능 GPU(예: A100 80GB 또는 H100) 인프라가 필수적으로 요구되어 소규모 서버 환경에서의 운용 제약이 존재합니다. 아울러 Meta Llama 3 Community License 조건 규정에 따라 월간 활성 사용자(MAU) 기준을 초과하는 대규모 서비스 도입 시 적합한 라이선스 컴플라이언스 사전 점검이 필요합니다.
