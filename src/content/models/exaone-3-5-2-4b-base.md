---
modelId: exaone-3-5-2-4b-base
domain: llm
status: published
updated: 2026-08-23
sources:
  - https://www.lgresearch.ai/blog/view?seq=507
  - https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Base
  - https://github.com/LG-AI-EXAONE/EXAONE-3.5
  - https://arxiv.org/abs/2412.04862
features:
  toolUse: false
  vision: false
highlights:
  - "2.4B 파라미터 경량 규격의 EXAONE 3.5 파운데이션 Base 모델"
  - "32K 토큰 컨텍스트 윈도우 및 초경량 온디바이스/에지 환경 최적화"
  - "경량화 도메인 미세조정 및 리소스 제약 인프라용 기초 모델"
relatedOrganization: lg-ai-research
---

# EXAONE 3.5 2.4B Base 소개

## 개요
EXAONE 3.5 2.4B Base는 LG AI Research가 2024년 12월 공개한 24억(2.4B) 파라미터 초경량 규모의 사전학습 언어모델(Foundation Base Model)이다. 제한된 컴퓨팅 리소스 환경에서도 빠른 추론과 효율적인 메모리 사용이 가능하도록 경량화 설계되었으며, 정렬(Alignment) 적용 이전의 사전학습 웨이트를 제공한다.

## 기술 특징
2.4B 파라미터의 소형 규격임에도 32,768(32K) 토큰의 넓은 컨텍스트 윈도우를 완벽히 지원하며, 상위 규격 모델과 동일한 철저한 데이터 정제 및 한국어/영어 고품질 텍스트 코퍼스로 사전학습되었다. 에지 디바이스나 보급형 GPU 단일 인스턴스에서도 최소한의 메모리 풋프린트로 구동할 수 있어 높은 효율성을 갖췄다.

## 사용 사례
모바일, IoT, 에지 컴퓨팅 및 온디바이스(On-device) 환경에서 작동하는 초경량 특화 LLM 개발의 기초 모델로 주로 사용된다. 연구자 및 개발자는 소규모 도메인 데이터셋을 통해 로컬 경량 SFT/LoRA 파인튜닝을 진행하거나 모듈형 에이전트의 컴팩트 백엔드 서빙 모델로 활용할 수 있다.

## 한계
파라미터 수의 정량적 한계로 인해 복잡한 다단계 추론, 전문 학술 지식 답변, 초고난도 코드 작성 등에서는 대형 모델 대비 성능 제약이 명확할 수 있다. 또한 대화 정렬이 적용되지 않은 Base 웨이트이므로 사용자 대화형 응용 시 반드시 추가 파인튜닝이 필요하며, NC 라이선스 정책을 준수해야 한다.
