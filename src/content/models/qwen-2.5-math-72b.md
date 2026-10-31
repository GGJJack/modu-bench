---
modelId: qwen-2.5-math-72b
domain: llm
status: published
updated: 2026-10-31
sources:
  - https://qwenlm.github.io/blog/qwen2.5-math/
  - https://huggingface.co/Qwen/Qwen2.5-Math-72B
  - https://github.com/QwenLM/Qwen2-Math
  - https://arxiv.org/abs/2409.12122
features:
  fineTuning: true
highlights:
  - "Qwen2.5 기반 최고 성능의 72.7B 수학 특화 사전학습 플래그십 베이스 모델"
  - "1조 개(1T+) 이상의 고품질 수리 데이터 코퍼스로 사전학습"
  - "MATH, GSM8K, GaoKao 등 주요 수리 평가에서 기존 오픈소스 모델 압도"
relatedOrganization: alibaba
---

# Qwen2.5-Math-72B 소개

## 개요
Qwen2.5-Math-72B는 알리바바 클라우드(Alibaba Cloud)가 2024년 9월 19일 공개한 수학 특화 플래그십 베이스 대형 언어 모델입니다. 총 727억(72.7B) 파라미터 규모를 가진 이 모델은 Qwen2.5-72B의 아키텍처 및 기초 가중치를 바탕으로 고난도 수리 추론과 과학 계산에 집중하도록 심화 사전학습되었습니다. Qwen2.5-Math-72B-Instruct 및 보상 모델인 Qwen2.5-Math-RM-72B의 모태가 되는 핵심 베이스 모델입니다.

## 기술 특징
Qwen Math Corpus v2로 명명된 1조 개(1T) 이상의 수리 전문 토큰을 학습에 사용했습니다. 이전 세대 Qwen2-Math-72B-Instruct가 생성한 정밀한 합성 문제 및 풀이 과정 데이터와 함께, 다주기 리콜(recall) 방식을 통해 전 세계 웹, 전문 학술 서적, 수학/알고리즘 코드에서 수집된 고품질 데이터를 집중 주입했습니다. 4,096 토큰의 컨텍스트 윈도우를 지원하며, Few-shot 프롬프팅만으로도 기존 세대 72B 베이스 모델 대비 MATH 벤치마크 점수를 6.3점 이상 향상시키는 등 탁월한 수리 기초 역량을 보입니다.

## 사용 사례
Qwen2.5-Math-72B는 연구 기관 및 산업체에서 고난도 수학, 통계, 물리학, 금융 모델링 분야의 지시어 미세조정(SFT) 및 인간/AI 피드백 기반 강화학습(RLHF/PPO/GRPO)을 수행하기 위한 최상위 베이스 모델로 활용됩니다. 또한 학술 연구 및 산업 현장에서 고품질의 합성 데이터 생성기(Synthetic Data Generator)로 활용되어 소형 모델들의 훈련 데이터를 생성하고 검증하는 데 핵심적인 역할을 수행합니다.

## 한계
사전학습 베이스 모델이므로 대화형 챗봇 형태의 질의응답이나 즉각적인 지시문 수행 인터페이스는 제공하지 않으며, 실서비스 활용을 위해서는 도메인 지시어 튜닝이나 Few-shot 프롬프트 구성이 필수적입니다. 72.7B의 대규모 파라미터로 인해 실행 시 다중 GPU(최소 A100/H100 80GB 등) 환경 및 상당한 VRAM 자원이 요구됩니다. 또한 4,096 토큰의 컨텍스트 윈도우 한계로 인해 초대형 코드베이스나 복잡한 장편 수식 논문 전체를 단일 컨텍스트에 처리하는 데 한계가 있습니다.
