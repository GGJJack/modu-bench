---
modelId: qwen-2-5-max
domain: llm
status: published
updated: 2026-08-28
sources:
  - https://qwenlm.github.io/blog/qwen2.5-max/
  - https://www.alibabacloud.com/help/en/model-studio/developer-reference/what-is-qwen-llm
  - https://huggingface.co/spaces/Qwen/Qwen2.5-Max-Demo
features:
  toolUse: true
  vision: false
highlights:
  - "20조 개 이상의 토큰으로 사전 학습된 알리바바의 대규모 MoE 플래그십 모델"
  - "Arena-Hard, LiveBench, LiveCodeBench, GPQA-Diamond 등 주요 벤치마크에서 우수한 성과 기록"
  - "Alibaba Cloud Model Studio API 및 Qwen Chat 서비스를 통한 공식 제공"
relatedOrganization: alibaba
---

# Qwen2.5-Max 소개

## 개요
Qwen2.5-Max는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 2025년 1월 28일 발표한 대규모 혼합 전문가(Mixture-of-Experts, MoE) 기반 언어 모델입니다 ([Qwen2.5-Max Blog](https://qwenlm.github.io/blog/qwen2.5-max/)). 20조(Trillion) 개 이상의 고품질 토큰으로 사전 학습(Pre-training)되었으며, 엄선된 지도 미세조정(SFT)과 인간 피드백 기반 강화학습(RLHF) 아키텍처를 거쳐 완성되었습니다 ([Qwen2.5-Max Blog](https://qwenlm.github.io/blog/qwen2.5-max/)).

## 기술 특징 및 성능
Qwen2.5-Max는 대규모 MoE 아키텍처의 스케일링 효율성을 극대화하여 추론 성능 및 일반화 능력을 크게 향상시켰습니다. 대학 수준의 복합 지식 문제를 평가하는 MMLU-Pro, 코드 생성 능력을 측정하는 LiveCodeBench, 종합 능력을 다루는 LiveBench, 그리고 인간 선호도를 근사하는 Arena-Hard 벤치마크 평가에서 세계적인 프라이어터리 모델 및 최첨단 오픈웨이트 모델들과 대등하거나 상회하는 우수한 성과를 입증하였습니다 ([Qwen2.5-Max Blog](https://qwenlm.github.io/blog/qwen2.5-max/)).

## 제공 방식 및 한계
Qwen2.5-Max는 알리바바 클라우드의 Model Studio(DashScope) 서비스에서 OpenAI API 호환 형태로 API(`qwen-max-2025-01-25`)가 제공되며, Qwen Chat 웹 인터페이스 및 HuggingFace Space 데모를 통해 직접 대화나 아티팩트 생성을 체험할 수 있습니다 ([Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/developer-reference/what-is-qwen-llm), [HuggingFace Demo](https://huggingface.co/spaces/Qwen/Qwen2.5-Max-Demo)). 다만 비공개 상용 API 모델로서 구체적인 가중치 다운로드나 로컬 배포는 지원하지 않습니다.
