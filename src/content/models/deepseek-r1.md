---
modelId: deepseek-r1
domain: llm
status: published
updated: 2026-05-18
sources:
  - https://github.com/deepseek-ai/DeepSeek-R1
  - https://huggingface.co/deepseek-ai/DeepSeek-R1
  - https://arxiv.org/abs/2501.12948
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "총 671B 파라미터, 토큰당 37B 활성화되는 MoE 아키텍처"
  - "대규모 RL(Reinforcement Learning)을 통한 자생적 추론 능력 확보"
  - "OpenAI o1 수준의 수학, 코딩 및 논리 추론 성능 달성"
relatedOrganization: deepseek
---

# DeepSeek-R1 소개

## 개요
DeepSeek-R1은 DeepSeek(深度求索)가 2025년 1월에 발표한 1세대 추론 모델(Reasoning Model)입니다. 이 모델은 기존의 지도 학습(SFT)에 의존하던 방식에서 벗어나, 대규모 강화 학습(RL)을 통해 모델 스스로 복잡한 문제를 해결하고 사고 과정을 전개하는 능력을 갖추도록 설계되었습니다. 특히 수학, 코딩, 논리적 추론 분야에서 OpenAI의 o1 모델과 대등한 성능을 보여주며, 모델 가중치와 훈련 과정의 핵심 알고리즘을 모두 공개하여 인공지능 커뮤니티에 큰 충격을 주었습니다.

## 기술 특징
DeepSeek-R1의 핵심은 지도 학습 없이 강화 학습만으로 훈련된 'DeepSeek-R1-Zero'와, 이를 개선한 'DeepSeek-R1'의 파이프라인에 있습니다. R1-Zero는 강화 학습 과정에서 스스로 자신의 답변을 검토(Self-verification)하고 더 나은 전략을 탐색하며 사고 사슬(Chain-of-Thought)을 길게 늘리는 특징이 자연적으로 발생했습니다. 최종 버전인 DeepSeek-R1은 R1-Zero의 가독성 저하 및 언어 혼용 문제를 해결하기 위해 약간의 콜드 스타트 데이터를 사용한 후 다시 RL을 수행하여 완성되었습니다. 또한, R1의 강력한 추론 능력을 Llama나 Qwen 기반의 소형 모델들에 전이시키는 지식 증류(Distillation) 기법을 통해, 비교적 작은 크기의 모델에서도 압도적인 추론 성능을 이끌어냈습니다.

## 사용 사례
이 모델은 극도로 복잡한 수학 문제 풀이, 알고리즘 구현, 논문 요약 및 다단계 논리 추론이 필요한 작업에 최적화되어 있습니다. AIME 2024에서 79.8%, MATH-500에서 97.3%의 높은 점수를 기록하는 등 학계와 산업계의 벤치마크에서 최정상급 성적을 거두었습니다. 사용자는 `<think>` 태그를 통해 모델이 최종 답변을 내놓기까지 어떤 논리적 단계를 거쳤는지 실시간으로 확인할 수 있으며, 이는 모델의 답변 근거를 투명하게 파악하는 데 도움을 줍니다. 또한 MIT 라이선스로 공개되어 연구 및 상업적 목적의 자유로운 활용이 가능합니다.

## 한계
전체 파라미터가 671B에 달하는 거대 모델이기에 원활한 추론을 위해서는 막대한 하드웨어 자원이 필요합니다. 비록 MoE(Mixture-of-Experts) 구조를 통해 실제 연산에 참여하는 파라미터를 37B로 줄였음에도 불구하고, 수백 GB에 달하는 VRAM을 확보해야 전체 모델을 로드할 수 있습니다. 또한 추론 성능을 극대화하기 위해 출력 온도를 낮게 설정하거나 특정 프롬프트를 강제하는 등의 가이드라인이 필요하며, 일반적인 대화나 단순 질의응답에서는 응답 속도가 다소 느리게 느껴질 수 있다는 단점이 있습니다.
