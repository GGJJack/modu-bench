---
modelId: k-exaone-236b-a23b
domain: llm
status: published
updated: 2026-09-11
sources:
  - https://huggingface.co/LGAI-EXAONE/K-EXAONE-236B-A23B
  - https://arxiv.org/abs/2601.01739
  - https://github.com/LG-AI-EXAONE/K-EXAONE
features:
  toolUse: true
  vision: false
  extendedThinking: true
highlights:
  - "전체 236B 파라미터 중 추론 시 23B 파라미터만 활성화하는 MoE 구조"
  - "최대 256K(262,144) 토큰 컨텍스트 윈도우 및 3:1 하이브리드 어텐션 적용"
  - "Multi-Token Prediction(MTP) 및 추론(Reasoning)/비추론 모드 지원"
relatedOrganization: lg-ai-research
---

# K-EXAONE-236B-A23B 소개

## 개요
K-EXAONE-236B-A23B는 LG AI Research에서 개발한 국가 대표급 다국어 초거대 언어 모델이다. 총 2,360억(236B) 개의 파라미터 규모를 바탕으로 Mixture-of-Experts(MoE) 아키텍처를 채택하여 추론 시에는 230억(23B) 개 파라미터만 활성화하는 높은 효율성을 실현하였다. 한국어, 영어, 스페인어, 독일어, 일본어, 베트남어 등 6개 언어를 공식 지원하며, 추론(Reasoning) 모드와 비추론 모드를 통합 제공하여 고난도 문제 해결부터 저지연 응답 작성까지 광범위한 실무 과제에 최적화되어 있다.

## 기술 특징
이 모델은 128개의 전문가(Expert) 중 입력 토큰당 8개의 전문가와 1개의 공유 전문가를 활성화하는 라우팅 구조를 갖추고 있다. 네이티브 256K(262,144) 토큰 컨텍스트 윈도우를 지원하며, 슬라이딩 윈도우 어텐션(SWA)과 글로벌 어텐션을 3:1 비율로 배치한 하이브리드 어텐션 패턴을 도입해 장문 처리 시 메모리 사용량을 대폭 절감하였다. 또한 Multi-Token Prediction(MTP) 기법을 기반으로 자체 스펙큘러티브 디코딩(Self-Speculative Decoding)을 지원하여 추론 처리량을 약 1.5배 향상시켰고, 150,000개 어휘를 수용하는 SuperBPE 토크나이저를 적용해 토큰화 효율을 기존 대비 향상시켰다.

## 사용 사례
K-EXAONE-236B-A23B는 고난도 수학 및 코드 추론, 멀티에이전트 검색 및 도구 호출(Tool Calling) 연동, 대용량 엔터프라이즈 문서 RAG 구축 등에 최적화되어 있다. OpenAI 및 HuggingFace 도구 호출 규격을 모두 호환하여 자율형 AI 에이전트 시스템을 안정적으로 구축할 수 있으며, vLLM, SGLang, TensorRT-LLM 등 대표적인 분산 추론 엔진 환경에서 손쉽게 서빙 및 배치할 수 있다.

## 한계
전체 파라미터 양이 236B에 달하므로 단일 GPU 서버보다는 다중 H200 등 고성능 멀티 GPU 환경(Tensor Parallelism)에서의 서빙이 추천된다. 또한 확률적 언어 모델 고유의 특성으로 인해 검증되지 않은 정보나 복잡한 조건 제시 상황에서 일시적인 환각(Hallucination) 현상이 나타날 수 있으므로 주요 의사결정 프로세스 적용 시 사실 확인 절차가 요구된다.
