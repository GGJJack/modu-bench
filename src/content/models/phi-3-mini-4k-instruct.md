---
modelId: phi-3-mini-4k-instruct
domain: llm
status: published
updated: 2026-11-05
sources:
  - https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/
  - https://huggingface.co/microsoft/Phi-3-mini-4k-instruct
  - https://arxiv.org/abs/2404.14219
features:
  toolUse: true
highlights:
  - "3.8B 파라미터 경량 고성능 SLM"
  - "고품질 합성 데이터(Textbook-like data) 및 엄격하게 필터링된 웹 데이터 훈련 (3.3T 토큰)"
  - "ONNX Runtime, Windows DirectML, 모바일 디바이스 온디바이스 실행 최적화"
  - "MIT 라이선스"
relatedOrganization: microsoft
---

# Phi-3-mini-4k-instruct 소개

## 개요
Phi-3-mini-4k-instruct는 2024년 4월 Microsoft가 발표한 3.8B 파라미터 규모의 초경량 고성능 소형 언어 모델(Small Language Model, SLM)입니다. Phi-1, Phi-1.5, Phi-2로 이어지는 Microsoft의 '데이터 품질 중심' 접근법("Textbooks Are All You Need")을 계승하고 확장하여, 스마트폰과 엣지 디바이스 등 하드웨어 자원이 극도로 제한된 환경에서도 대형 언어 모델에 필적하는 언어 이해 및 추론 성능을 온디바이스로 제공합니다.

## 기술 특징
Phi-3-mini-4k-instruct는 3.8B 파라미터의 고밀도(Dense) 디코더 전용 트랜스포머 아키텍처를 기반으로 설계되었습니다. 훈련 데이터는 총 3.3조(3.3T) 토큰으로 구성되어 있으며, 웹 데이터를 방대하게 긁어모으는 대신 고도로 선별된 교육용 웹 콘텐츠와 엄격한 기준으로 생성된 합성 데이터(Synthetic 'textbook-like' data)를 집중 활용했습니다. 또한 감독 미세 조정(SFT)과 직접 선호 최적화(DPO)를 거쳐 인간의 지시 수행 능력과 정렬(Alignment)을 크게 향상시켰습니다. 4K 컨텍스트 윈도우 버전은 로컬 환경 및 실시간 서비스에서 빠른 응답 속도와 적은 메모리 점유율을 보장하며, ONNX Runtime과 DirectML을 통해 모바일 CPU 및 다양한 GPU 환경에서 높은 효율성을 발휘합니다.

## 사용 사례
Phi-3-mini-4k-instruct는 클라우드 연결이 제한적이거나 지연 시간(Latency)이 극도로 중요한 시나리오에 적합합니다. 대표적으로 스마트폰이나 PC 등 엣지 기기에서의 개인 맞춤형 오프라인 어시스턴트, 현장 농업 솔루션(예: 인도 ITC Krishi Mitra 코파일럿), 현장 기기 내 지시 따르기 및 요약 도구 등으로 널리 활용됩니다. 또한 MIT 라이선스로 배포되어 학술 연구뿐만 아니라 상용 소프트웨어와 엣지 애플리케이션에 제약 없이 통합할 수 있습니다.

## 한계
이 모델은 주로 영어 텍스트 중심(Cutoff: 2023년 10월)으로 훈련되어 한국어를 비롯한 비영어권 언어에서는 지시 이행 및 문장 완성도가 영어 대비 낮을 수 있습니다. 또한 3.8B라는 물리적인 파라미터 크기의 한계로 인해 방대한 세계 지식(World Knowledge)이나 세부 사실 관계를 자체 기억에만 의존해 답변할 경우 환각(Hallucination)이 발생할 수 있으므로, 최신 사실 검증이나 지식 검색이 필요한 작업에는 검색 증강 생성(RAG) 파이프라인과의 결합이 권장됩니다.
