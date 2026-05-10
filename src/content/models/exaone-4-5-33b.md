---
modelId: exaone-4-5-33b
domain: llm
status: published
updated: 2026-05-10
sources:
  - https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B
  - http://arxiv.org/abs/2604.08644
  - https://github.com/LG-AI-EXAONE/EXAONE-4.5
features:
  toolUse: true
  vision: true
  extendedThinking: true
highlights:
  - "LG AI Research의 첫 오픈 웨이트 비전-언어 모델(VLM)"
  - "33B 파라미터 규모 및 256K 토큰의 초장문 컨텍스트 지원"
  - "추론(Reasoning) 모드 기본 탑재 및 한국어 문맥 이해 특화"
relatedOrganization: lg-ai-research
---

# EXAONE 4.5 33B 소개

## 개요
EXAONE 4.5 33B는 LG AI연구원이 2026년 4월에 공개한 차세대 초거대 AI 모델로, 시리즈 최초로 오픈 웨이트(Open-weight) 방식으로 배포된 비전-언어 모델(Vision-Language Model, VLM)입니다. 기존 EXAONE 4.0 프레임워크를 기반으로 전용 비전 인코더를 통합하여 멀티모달 능력을 확장했습니다. 특히 330억 개의 파라미터를 갖춘 이 모델은 문서 이해와 한국어 문맥 추론 분야에서 동급 크기의 글로벌 모델들을 능가하는 성능을 목표로 개발되었습니다.

## 기술 특징
이 모델은 31.7B 크기의 언어 모델과 1.29B 크기의 비전 인코더가 결합된 구조를 가집니다. 아키텍처 측면에서는 하이브리드 어텐션 패턴(Hybrid Attention Pattern)과 NoPE(No Rotary Positional Embedding) 글로벌 어텐션을 혼합하여 사용하며, 최대 262,144개(256K)의 방대한 토큰 컨텍스트를 지원합니다. 특히 '추론(Reasoning) 모드'가 기본적으로 활성화되어 있어, 복잡한 수학 문제나 논리적 사고가 필요한 질문에 대해 단계별 사고 과정을 거쳐 답변을 도출합니다. 학습 데이터는 2024년 12월까지의 최신 정보를 반영하고 있습니다.

## 사용 사례
EXAONE 4.5는 특히 산업 현장에서의 실용성을 강조합니다. 문서 구조 분석(OmniDocBench), 차트 해석(ChartQAPro), 한국어 시각 추론(K-Viscuit) 등에서 강력한 성능을 보여주며, 이를 통해 기업용 문서 자동화나 복잡한 데이터 시각화 분석 도구로 활용될 수 있습니다. 또한 에이전트 도구 사용(Agentic Tool Use) 능력이 강화되어, MCP(Model Context Protocol) 등을 통한 외부 도구 연동 및 자율적 작업 수행이 가능합니다. 단일 H200 GPU나 4개의 A100 GPU 환경에서 원활한 서빙이 가능한 효율성도 갖추고 있습니다.

## 한계
오픈 웨이트 모델임에도 불구하고 'EXAONE AI Model License Agreement 1.2 - NC' 라이선스가 적용되어 비상업적 용도로 제한될 수 있습니다. 다른 멀티모달 모델과 마찬가지로 최신 정보의 부재나 편향된 응답 생성 가능성이 존재하며, 특히 텍스트 생성 과정에서 통계적 확률에 의존함에 따라 문법적 또는 의미적 오류가 발생할 수 있습니다. 또한 고성능 추론 모드 사용 시 일반 모드 대비 더 많은 연산 자원과 응답 시간이 소요될 수 있다는 점을 고려해야 합니다.
