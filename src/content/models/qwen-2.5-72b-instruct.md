---
modelId: qwen-2.5-72b-instruct
domain: llm
status: published
updated: 2026-09-09
sources:
  - https://qwenlm.github.io/blog/qwen2.5/
  - https://huggingface.co/Qwen/Qwen2.5-72B-Instruct
  - https://arxiv.org/abs/2412.15115
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "18조 개 이상의 프리트레이닝 토큰으로 학습된 Alibaba Cloud의 72B 플래그십 오픈 가중치 지시 이행 모델"
  - "128k 컨텍스트 윈도우 및 최대 8k 토큰 생성 지원, 강력한 코딩 및 수학 능력을 겸비"
  - "MMLU-Pro, MATH, HumanEval 등 주요 벤치마크에서 기존 최고 레벨 오픈소스 모델을 압도"
relatedOrganization: alibaba
---

# Qwen2.5 72B Instruct 소개

## 개요
Qwen2.5 72B Instruct는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2024년 9월 발표한 Qwen2.5 시리즈의 최상위 플래그십 지시 이행(Instruction-tuned) 오픈 가중치 언어 모델입니다 ([Qwen2.5 Release Blog](https://qwenlm.github.io/blog/qwen2.5/)). 18조(Trillion) 개 이상의 고품질 데이터 토큰으로 사전 학습되었으며, 정교한 지시어 정렬 및 강화학습(RLHF/DPO) 기법을 거쳐 완성되었습니다 ([Qwen2.5 Tech Report](https://arxiv.org/abs/2412.15115)). MMLU-Pro, MATH, LiveCodeBench 등 주요 벤치마크에서 폐쇄형 상용 API 모델들과 대등하거나 능가하는 독보적인 성능을 보여줍니다.

## 기술 특징
Qwen2.5 72B Instruct는 128k 토큰의 넓은 입력 컨텍스트 윈도우와 함께 최대 8,192 토큰의 장문 생성을 안정적으로 지원합니다 ([Hugging Face Qwen2.5-72B-Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct)). 지식 이해력, 전문적인 코딩 작성, 고난도 수학적 논리 추론 성능이 폭넓게 향상되었으며, 구조화된 데이터(JSON, YAML 등) 이해 및 외부 도구 활용(Tool Use/System Instructions) 능력이 크게 향상되었습니다. 다국어 지원 역시 한국어를 비롯한 29개 이상의 주요 언어로 확장되어 글로벌 서비스 구축에 적합합니다.

## 사용 사례 및 한계
Qwen2.5 72B Instruct는 엔터프라이즈급 AI 에이전트, 복잡한 소프트웨어 코드 자동 생성, 학술 연구 지원, 고성능 RAG(검색 증강 생성) 파이프라인 등 최첨단 AI 시스템 구축에 널리 활용됩니다 ([Qwen2.5 Release Blog](https://qwenlm.github.io/blog/qwen2.5/)). Qwen Research License 기반으로 허용 기준 내에서 상용 서비스 및 맞춤형 튜닝이 가능합니다. 다만 720억 개의 대규모 Dense 파라미터를 탑재하고 있어, 효율적으로 구동하기 위해서는 A100/H100급 고성능 GPU 인프라 또는 적절한 양자화(Quantization) 기술 적용이 요구됩니다.
