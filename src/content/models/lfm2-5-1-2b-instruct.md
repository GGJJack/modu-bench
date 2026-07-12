---
modelId: lfm2-5-1-2b-instruct
domain: llm
status: published
updated: 2026-07-12
sources:
  - https://www.liquid.ai/blog/lfm2-5-230m
  - https://docs.liquid.ai/lfm/models/complete-library
  - https://docs.liquid.ai/lfm/models/text-models
features:
  toolUse: true
  vision: false
highlights:
  - "1.2B 파라미터로 대형 모델급 성능 구현"
  - "LFM2 아키텍처 기반의 초고속 추론 속도"
  - "32,768 토큰 컨텍스트 윈도우 지원"
relatedOrganization: liquid-ai
---

## 개요
LFM2.5-1.2B-Instruct는 Liquid AI가 개발한 LFM2.5 시리즈 중 가장 범용적으로 추천되는 지시 이행 최적화 모델입니다. 12억 개(1.2B)의 비교적 적은 파라미터를 사용함에도 불구하고, Liquid만의 독자적인 LFM(Liquid Foundation Model) 아키텍처를 통해 훨씬 더 큰 규모의 모델과 대등한 성능을 발휘하도록 설계되었습니다. 특히 실시간 응답이 중요한 대화형 AI 서비스나 엣지 디바이스 환경에서 강력한 경쟁력을 보유하고 있습니다.

## 기술 특징
이 모델은 기존의 트랜스포머 아키텍처와 차별화된 LFM2 구조를 기반으로 합니다. 19조(19T) 개에 달하는 대규모 토큰으로 사전 학습되었으며, 지도 미세 조정(SFT), 직접 선호도 최적화(DPO), 그리고 다중 도메인 강화 학습(RL) 단계를 거쳐 지시 이행 및 도구 사용(Tool Use) 능력을 극대화했습니다. 32,768(32K) 토큰의 컨텍스트 윈도우를 지원하여 긴 문서의 처리와 복잡한 대화 맥락 유지에 유리하며, llama.cpp, vLLM, SGLang 등 다양한 추론 엔진과의 연동을 통해 다양한 하드웨어에서 최적의 성능을 낼 수 있도록 지원됩니다.

## 사용 사례
LFM2.5-1.2B-Instruct는 낮은 지연 시간(Low Latency)과 높은 정확도가 동시에 요구되는 지능형 에이전트 구축에 최적화되어 있습니다. 복잡한 워크플로우 내에서 도구 호출(Tool Calling)을 수행하거나, 정교한 텍스트 변환 및 요약 작업에 주로 사용됩니다. 또한 Android 및 iOS 기반의 모바일 기기나 Raspberry Pi와 같은 저사양 임베디드 장치에서도 원활하게 구동되어, 개인화된 온디바이스(On-device) 비서 서비스나 보안이 중요한 폐쇄망 환경의 텍스트 처리 도구로 유용하게 활용될 수 있습니다.

## 한계
매우 효율적인 모델임에도 불구하고, 1.2B라는 파라미터 크기의 한계로 인해 고도의 수학적 추론, 복잡한 코드 생성, 또는 방대한 지식을 요구하는 창의적 작문에서는 대형 모델(예: GPT-4급)에 비해 성능이 제한적일 수 있습니다. 또한 이 모델은 텍스트 전용 모델로 설계되어 이미지나 오디오를 직접 처리하는 멀티모달 기능은 지원하지 않으며, 해당 기능이 필요한 경우 시리즈 내의 다른 특화 모델(LFM2.5-VL 등)을 사용해야 합니다.
