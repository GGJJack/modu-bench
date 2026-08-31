---
modelId: swallow-mx-8x7b-instruct
domain: llm
status: published
updated: 2026-08-31
sources:
  - https://tokyotech-llm.github.io/
  - https://huggingface.co/tokyotech-llm/Swallow-MX-8x7b-instruct-v0.1
  - https://github.com/tokyotech-llm/swallow
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "도쿄공업대학(Tokyo Tech)과 산업기술종합연구소(AIST) 공동 연구팀이 Mistral AI의 Mixtral 8x7B를 기저로 개발한 고성능 MoE(Mixture-of-Experts) 일본어 특화 지시어 이행 모델"
  - "8개의 7B 전문가 네트워크 중 입력마다 2개의 전문가를 동적으로 활성화하여 47B 총 파라미터 중 활성 파라미터 13B 수준의 높은 추론 효율과 32,768 토큰 컨텍스트 지원"
  - "Apache-2.0 오픈소스 라이선스로 배포되어 연구 및 상업적 애플리케이션에 제한 없는 유연한 활용이 가능"
---

# Swallow MX 8x7B Instruct 소개

## 개요
Swallow MX 8x7B Instruct(Swallow-MX-8x7b-instruct-v0.1)는 도쿄공업대학(Tokyo Institute of Technology, 현 도쿄과학대학) Okazaki 연구실 및 Yokota 연구실과 일본 산업기술종합연구소(AIST) 인공지능연구센터 공동 연구팀이 개발하여 2024년 5월 27일 발표한 전문가 혼합(Mixture-of-Experts, MoE) 아키텍처 기반의 일본어 특화 지시어 이행(Instruct) 언어 모델입니다. Mistral AI의 오픈 가중치 MoE 모델인 Mixtral 8x7B v0.1을 베이스로 삼아 대규모 일본어 코퍼스의 지속 사전 학습(Continual Pre-training)과 정교한 지시어 미세조정을 결합하였습니다. Apache License 2.0으로 배포되어 상용 및 학술 연구에 제한 없이 활용 가능합니다.

## 기술 특징
Swallow MX 8x7B Instruct는 총 470억(47B) 파라미터 용량을 보유하고 있지만, 라우팅 게이트(Routing Gate) 메커니즘을 통해 토큰당 8개의 7B 전문가 네트워크 중 2개만 동적으로 선택 활성화함에 따라 실질적으로 130억(13B) 파라미터 수준의 연산 비용으로 높은 언어적표현력을 발휘합니다. 일본어 단어 분절 효율을 끌어올리기 위한 어휘 확장 작업과 더불어, 일본어 문맥 이해를 극대화하는 정제 코퍼스 지속 학습을 적용했습니다. 또한 32,768(32K) 토큰의 넓은 컨텍스트 윈도우를 기본 지원하고, 지시어 미세조정(SFT)과 Chat Vector 결합 기법을 활용하여 일본어 벤치마크 평가에서 유용한 지시어 이행 능력을 입증하였습니다.

## 사용 사례
32K 컨텍스트 확장성과 높은 MoE 추론 효율을 갖춘 Swallow MX 8x7B Instruct는 긴 일본어 서류 요약, 복잡한 지식 검색 기반 RAG(검색 증강 생성) 시스템, 다국어 문서 교차 번역, 상용 에이전트 서비스의 핵심 추론 백엔드로 다양하게 응용되고 있습니다. vLLM, SGLang, TensorRT-LLM 등 대표적인 오픈소스 대규모 언어 모델 추론 서빙 엔진과 완벽히 호환되며, 13B 파라미터 수준의 활성 연산량 덕분에 단일 고성능 GPU(예: A100 80GB) 환경에서도 신속한 응답 대기시간(Low Latency)을 확보할 수 있습니다. 완전한 Apache-2.0 라이선스 규정에 입각하여 기업 보안 인프라 내 온프레미스 배치가 용이합니다.

## 한계
Swallow MX 8x7B Instruct는 순수 텍스트 전용 트랜스포머 아키텍처로 설계되어 이미지나 영상, 오디오를 입력받는 시각 및 음성 멀티모달 기능을 다루지 못하는 한계가 존재합니다. 또한 전체 가중치 용량이 47B에 이르므로 비활성 전문가 파라미터를 포함한 총 GPU VRAM 메모리 요구량이 일반적인 단일 13B Dense 모델 대비 크다는 하드웨어 배치 특성이 있습니다. 아울러 MoE 아키텍처의 특성상 라우터 서빙 설정이 적절히 최적화되지 않을 경우 텐서 병렬화 효율이 저하될 가능성이 있으므로 전용 서빙 엔진 세팅이 필요합니다.
