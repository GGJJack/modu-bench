---
modelId: lfm2-5-8b-a1b
domain: llm
status: published
updated: 2026-06-17
sources:
  - https://www.liquid.ai/blog/lfm2-5-8b-a1b
  - https://huggingface.co/LiquidAI/LFM2.5-8B-A1B
  - https://artificialanalysis.ai/models/lfm2-5-8b-a1b
features:
  toolUse: true
  vision: false
  extendedThinking: true
highlights:
  - "8.3B 파라미터(1.5B 활성), 하이브리드 MoE 아키텍처"
  - "128k 토큰 컨텍스트 윈도우 및 대폭 개선된 다국어 지원"
  - "추론(Reasoning) 과정 명시를 통한 에이전트 및 도구 사용 성능 극대화"
relatedOrganization: liquid-ai
---

# LFM2.5-8B-A1B 소개

## 개요
LFM2.5-8B-A1B는 Liquid AI가 2026년 5월 28일에 발표한 에지(Edge) 디바이스 최적화 하이브리드 모델입니다. 이전 세대인 LFM2-8B-A1B를 계승하면서도 38조 개에 달하는 토큰 학습과 대규모 강화학습(RL)을 통해 성능을 비약적으로 끌어올렸습니다. 특히 소비자용 하드웨어에서 빠르게 실행될 수 있도록 설계되었으며, 온디바이스 환경에서 복잡한 지시 이행과 도구 호출(Tool calling)을 수행하는 개인용 비서 모델로서의 정체성을 가집니다.

## 기술 특징
이 모델은 전문가 혼합(MoE), 그룹 쿼리 주의집중(GQA), 그리고 게이트 짧은 컨볼루션(Gated Short Convolution) 블록이 결합된 독자적인 LFM 아키텍처를 사용합니다. 총 83억 개의 파라미터 중 추론 시에는 15억 개만 활성화되어 매우 높은 효율성을 보여줍니다. 이전 모델의 32k였던 컨텍스트 윈도우를 128k 토큰으로 대폭 확장하였으며, 어휘집(Vocabulary) 크기를 두 배로 늘려 한국어를 포함한 비라틴계 언어의 토큰화 효율을 개선했습니다. 또한, 답변 전 명시적인 '사고 체인(Chain of Thought)'을 생성하는 추론 전용 모델로 설계되어 논리적 정확도를 높였습니다.

## 사용 사례
LFM2.5-8B-A1B는 인터넷 연결 없이 로컬 환경에서 작동하는 AI 에이전트 구축에 최적화되어 있습니다. Liquid AI의 'Localcowork' 데모에서 보여준 것처럼, 수십 개의 도구를 오케스트레이션하여 시스템 아키텍처 매핑이나 코드 리뷰 같은 복잡한 워크플로우를 처리할 수 있습니다. 또한 빠른 입출력 속도(M5 Max 기준 253 t/s)를 바탕으로 모바일 기기나 노트북에서 실시간 대화형 서비스, 다국어 번역, 긴 문서 요약 등에 활용됩니다.

## 한계
에지 디바이스용 소형 모델인 만큼 지식 집약적인 질의응답이나 매우 복잡한 프로그래밍 작업에서는 수천억 개의 파라미터를 가진 거대 모델들에 비해 성능이 낮을 수 있습니다. Liquid AI는 지식 부족으로 인한 환각을 줄이기 위해 강화학습을 통해 모르는 질문에 대해서는 답변을 자제(Abstention)하도록 훈련했으나, 고도의 전문 지식이 필요한 경우에는 검색 증강 생성(RAG)과의 결합이 권장됩니다.
