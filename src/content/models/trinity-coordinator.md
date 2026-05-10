---
modelId: trinity-coordinator
domain: llm
status: published
updated: 2026-05-10
sources:
  - https://sakana.ai/trinity/
  - https://arxiv.org/abs/2512.04695
  - https://openreview.net/forum?id=5HaRjXai12
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "진화 알고리즘으로 최적화된 초경량 LLM 코디네이터"
  - "Thinker, Worker, Verifier 역할을 통한 멀티 에이전트 오케스트레이션"
  - "LiveCodeBench SOTA 기록 (86.2% pass@1)"
relatedOrganization: sakana-ai
---

# Trinity Coordinator 소개

## 개요
Trinity Coordinator는 Sakana AI가 ICLR 2026에서 발표한 혁신적인 멀티 에이전트 오케스트레이션 시스템입니다. 단일 거대 모델을 구축하는 전통적인 방식 대신, 서로 다른 강점을 가진 여러 전문 AI 모델들을 진화적으로 학습된 코디네이터가 지휘하도록 설계되었습니다. 이 시스템은 복잡한 문제를 해결하기 위해 최적의 모델에게 적절한 역할을 부여하며, 단일 모델의 성능 한계를 뛰어넘는 '협업적 AI 생태계'를 지향합니다.

## 기술 특징
Trinity의 핵심은 2만 개 미만의 학습 파라미터를 가진 초경량 코디네이터입니다. 이 코디네이터는 소형 언어 모델의 은닉 상태(Hidden States)와 소형 라우팅 헤드를 활용하여, 매 턴마다 외부 LLM 풀에 다음 세 가지 역할 중 하나를 할당합니다:
1. **Thinker**: 고차원적인 전략을 수립하고 현재 상태를 분석합니다.
2. **Worker**: 구체적인 문제 해결 단계를 실행합니다.
3. **Verifier**: 도출된 솔루션의 완성도와 정확성을 평가합니다.

전통적인 강화 학습(REINFORCE)이나 지도 학습(SFT) 대신, Sakana AI는 미분 불가능한 최적화 문제를 해결하기 위해 자연 유래 '진화 알고리즘'을 도입했습니다. 이를 통해 복잡한 다중 턴 상호작용 환경에서 코디네이터가 최적의 결정을 내리도록 훈련되었습니다.

## 사용 사례
Trinity는 특히 복잡한 논리적 사고와 코딩 능력이 요구되는 영역에서 탁월한 성능을 발휘합니다. 공개 당시 LiveCodeBench에서 86.2%의 pass@1 점수를 기록하며 새로운 SOTA(State-of-the-art)를 달성했습니다. 또한 retrain 없이도 AIME(수학), BigCodeBench(코딩), GPQA(대학 수준 과학 추론) 등 다양한 벤치마크에서 뛰어난 제로샷(Zero-shot) 일반화 능력을 입증했습니다. 이 기술은 현재 Sakana AI의 멀티 에이전트 제품인 'Sakana Fugu'의 핵심 엔진으로 활용되고 있습니다.

## 한계
Trinity 자체는 독립적인 추론 모델이 아니라 '지휘자' 역할을 하는 시스템이므로, 성능은 연결된 외부 모델(Constituent Models)의 성능에 의존적입니다. 또한 다중 턴 프로세스를 거치기 때문에 단일 모델 호출보다 추론 레이턴시가 길어질 수 있는 구조적 특성이 있습니다. 현재는 텍스트 기반 추론 및 코딩 작업에 최적화되어 있으며, 이미지나 오디오와 같은 멀티모달 데이터의 직접적인 통합 조정에 대해서는 추가적인 연구가 필요할 수 있습니다.
