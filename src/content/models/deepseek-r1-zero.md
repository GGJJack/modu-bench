---
modelId: deepseek-r1-zero
domain: llm
status: published
updated: 2026-09-17
sources:
  - https://github.com/deepseek-ai/DeepSeek-R1
  - https://huggingface.co/deepseek-ai/DeepSeek-R1-Zero
  - https://arxiv.org/abs/2501.12948
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "지도 학습(SFT) 데이터 없이 대규모 강화 학습(RL)만으로 훈련된 671B MoE 추론 모델"
  - "자생적 사고 사슬(Chain-of-Thought) 및 자가 검증(Self-verification) 능력 발현"
  - "DeepSeek-R1 파이프라인의 핵심 기초 연구 모델"
---

# DeepSeek-R1-Zero 소개

## 개요
DeepSeek-R1-Zero는 DeepSeek(深度求索)가 2025년 1월 논문("DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning")을 통해 공개한 실험적 추론 모델(Reasoning Model)입니다. 이 모델은 지도 학습 미세조정(SFT, Supervised Fine-Tuning) 단계를 완전히 배제하고, 순수한 대규모 강화 학습(Pure RL)만을 적용하여 언어 모델이 자생적으로 추론 능력을 개발할 수 있는지를 검증하기 위해 개발되었습니다. DeepSeek-R1 파이프라인의 모태가 되는 연구형 모델입니다.

## 기술 특징
DeepSeek-R1-Zero의 핵심 기술적 의의는 SFT 데이터셋 없이 강화 학습 보상 신호(Accuracy and Format Rewards)만으로 사고 사슬(Chain-of-Thought) 생성 및 자가 검증(Self-verification) 능력을 유도해냈다는 점에 있습니다. 강화 학습 프로세스가 진행됨에 따라 모델은 복잡한 문제를 해결하기 위해 스스로 생각하는 시간을 늘리고, 오류를 발견하면 이전 단계로 돌아가 수정을 시도하는 등 고도의 추론 행동을 보여주었습니다. 아키텍처 측면에서는 총 671B 파라미터에 토큰당 37B 파라미터가 활성화되는 Mixture-of-Experts(MoE) 구조를 채택하고 있습니다.

## 사용 사례
DeepSeek-R1-Zero는 복잡한 수학, 코딩 및 논리적 추론 능력을 평가하는 연구용 벤치마크에서 기존 LLM 대비 크게 향상된 성과를 보여주었습니다. AIME 2024 및 MATH-500과 같은 난이도 높은 수학 벤치마크에서 강화 학습만으로 OpenAI o1-mini 수준에 비견되는 추론 성과를 달성하며 RL 기반 추론 모델 연구의 중요 지표로 활용되고 있습니다. 연구자들은 모델이 출력하는 `<think>` 태그 내의 생성 과정을 관찰하여 RL 훈련에 따른 언어 모델의 추론 체계 형성 과정을 분석할 수 있습니다.

## 한계
SFT 가이드라인 없이 순수 강화 학습으로만 훈련되었기 때문에 가독성 저하, 동일 응답 내 다국어 혼용(Language Mixing), 반복적 문장 출력 등 사용자 경험 측면에서의 결함이 나타납니다. 또한 전체 671B 규모의 MoE 모델로서 추론 시 막대한 VRAM 자원을 요구한다는 한계가 있습니다. 이러한 R1-Zero의 가독성 및 언어 상호작용 한계를 보완하기 위해 소량의 Cold-start 데이터를 결합하여 발전시킨 버전이 최종 DeepSeek-R1 모델입니다.
