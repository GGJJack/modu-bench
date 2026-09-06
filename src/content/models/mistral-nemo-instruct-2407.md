---
modelId: mistral-nemo-instruct-2407
domain: llm
status: published
updated: 2026-09-06
sources:
  - https://mistral.ai/news/mistral-nemo/
  - https://huggingface.co/mistralai/Mistral-Nemo-Instruct-2407
  - https://github.com/mistralai/mistral-inference
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "Mistral AI와 NVIDIA가 공동 개발한 12B 모델"
  - "128k 컨텍스트 윈도우 및 Tekken 토크나이저 적용"
  - "FP8 양자화 인지 훈련(Quantization-aware training) 지원"
relatedOrganization: mistral-ai
---

# Mistral-Nemo-Instruct-2407 소개

## 개요
Mistral-Nemo-Instruct-2407은 Mistral AI와 NVIDIA가 공동 개발하여 2024년 7월 18일 발표한 120억(12B) 파라미터 규모의 오픈 소스 인스트럭션 튜닝 모델이다. Apache 2.0 라이선스로 공개되어 연구 및 상용 목적으로 자유롭게 활용 가능하며, 기존 Mistral 7B 배포 시스템 환경에 손쉽게 교체 장착(drop-in replacement)할 수 있는 표준 트랜스포머 아키텍처 구조를 갖추고 있다. 최대 128,000(128k) 토큰의 긴 컨텍스트 윈도우를 지원한다.

## 기술 특징
이 모델은 Tiktoken 기반의 신규 토크나이저인 Tekken을 도입하여 100개 이상의 언어 및 소스 코드 압축 효율을 향상시켰다. 특히 기존 SentencePiece 기반 토크나이저 대비 한국어 2배, 아랍어 3배, 소스 코드 및 주요 유로화 언어/중국어 등에서 30% 뛰어난 압축 성능을 제공한다. 또한 양자화 인지 훈련(Quantization-Aware Training) 기술을 적용해 성능 손실 없이 FP8 정밀도 추론을 수행할 수 있으며, NVIDIA NIM 미크로서비스 컨테이너 형태로도 함께 제공된다.

## 사용 사례 및 한계
Mistral-Nemo-Instruct-2407은 정교한 지시 이행, 추론, 멀티턴 대화, 다국어 처리, 함수 호출(Function Calling) 및 코딩 자동화 등 광범위한 워크플로우에 최적화되어 있다. mistral-inference 라이브러리와 mistral-finetune을 통한 파인튜닝을 공식 지원한다. 복잡한 추론 및 대규모 긴 문맥 분석 능력이 대폭 강화되었으나, 일반적인 오픈 LLM 특성상 사실 관계 오류나 환각 현상이 나타날 수 있으므로 도메인 특화 데이터 검증과 연동하여 사용하는 것이 권장된다.
