---
modelId: gemini-1-5-pro
domain: llm
status: published
updated: 2026-10-19
sources:
  - https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/
  - https://ai.google.dev/gemini-api/docs/models
  - https://deepmind.google/technologies/gemini/pro/
features:
  toolUse: true
  vision: true
  audioInput: true
  fineTuning: true
highlights:
  - "MoE(Mixture-of-Experts) 아키텍처 적용으로 1.0 Ultra 급 성능 및 높은 연산 효율 구현"
  - "최대 100만~200만 토큰의 초대형 롱 컨텍스트 창(Context Window) 지원"
  - "텍스트, 이미지, 오디오, 비디오, PDF 등 광범위한 멀티모달 입력 통합 처리"
relatedOrganization: google-research
---

# Gemini 1.5 Pro 소개

## 개요
Gemini 1.5 Pro는 Google 및 Google DeepMind가 2024년 2월 처음 발표한 차세대 미드사이즈 멀티모달 대형 언어 모델입니다. 이전 세대의 최상위 모델인 Gemini 1.0 Ultra 수준의 높은 지능과 추론 능력을 유지하면서도 훨씬 뛰어난 연산 효율성을 달성하도록 설계되었습니다.

Gemini 1.5 Pro의 가장 혁신적인 특징은 기존 상용 모델들의 컨텍스트 한계를 뛰어넘는 초대형 컨텍스트 창(Context Window)입니다. 정식 출시 및 API 제공을 통해 기본 128,000 토큰에서 시작해 최대 100만 토큰(이후 최대 200만 토큰 확장)에 달하는 대용량 데이터를 한 번에 처리할 수 있는 능력을 선보였습니다.

## 기술 특징
Gemini 1.5 Pro는 희소 혼합 전문가(Sparse Mixture-of-Experts, MoE) 아키텍처를 기반으로 구축되었습니다. 전통적인 단일 트랜스포머 네트워크와 달리 신경망이 여러 전문 패스웨이로 분할되어 입력 유형에 따라 필요한 부분만 선택적으로 활성화되므로, 모델 훈련 및 추론 효율성이 크게 향상되었습니다.

100만 토큰 이상의 롱 컨텍스트 창을 활용해 약 1시간 분량의 동영상, 11시간 이상의 오디오, 3만 줄 이상의 코드베이스, 또는 70만 단어가 넘는 문서를 단일 프롬프트로 분석할 수 있습니다. 장문 복합 정보 검색 평가인 NIAH(Needle In A Haystack) 테스트에서 100만 토큰 데이터 내의 특정 사실을 99% 이상의 정확도로 찾아내는 성능을 보였습니다. 또한 Kalamang어 문법서 입력을 통한 인컨텍스트 학습(In-context learning) 실험에서도 외부 파인튜닝 없이 사람 수준의 번역 능력을 학습할 수 있음을 입증했습니다.

## 사용 사례
Gemini 1.5 Pro는 대규모 코드베이스의 리팩토링 및 버그 수정, 장문 계약서 및 학술 문서의 심층 요약, 긴 비디오 및 오디오 녹음 파일에서의 주요 정보 추출 등 복잡한 데이터 분석 분야에 널리 활용됩니다. 개발자와 기업들은 Google AI Studio 및 Vertex AI 플랫폼을 통해 Gemini 1.5 Pro API를 통합하여 자율형 에이전트 및 멀티모달 검색 기반 시스템을 구축하고 있습니다.

## 한계
수백만 토큰 수준의 초대형 컨텍스트 프롬프트를 처리할 때 기본 프롬프트 대비 응답 지연 시간(Latency)이 증가할 수 있습니다. 또한 매우 긴 비디오나 복잡한 다중 오디오 스트림이 포함된 프롬프트에서는 세부 시각/음향 맥락 파악 시 일부 정보 누락이 발생할 수 있어 정밀한 데이터 전처리와 템플릿화가 권장됩니다.
