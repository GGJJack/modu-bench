---
modelId: evollm-jp-10b
domain: llm
status: published
updated: 2026-10-14
sources:
  - https://sakana.ai/evolutionary-model-merge-jp/
  - https://huggingface.co/SakanaAI/EvoLLM-JP-v1-10B
  - https://arxiv.org/abs/2403.13187
features:
  toolUse: false
  vision: false
highlights:
  - "진화적 알고리즘(Evolutionary Model Merge) 기반의 자동 모델 융합"
  - "Shisa Gamma 7B v1, WizardMath 7B V1.1, Abel 7B 002 결합"
  - "MGSM 일본어 수학 추론 및 일반 일본어 LLM 벤치마크 최고 성능 달성"
relatedOrganization: sakana-ai
---

# EvoLLM-JP v1 10B 소개

## 개요
EvoLLM-JP v1 10B는 Sakana AI가 2024년 3월에 발표한 실험적 범용 일본어 대규모 언어 모델(LLM)이다. 이 모델은 경사하강법 기반의 오차역전파 훈련 방식 대신, 자연선택과 생물학적 진화 원리에서 영감을 얻은 **진화적 모델 마지(Evolutionary Model Merge)** 기법을 사용하여 자동으로 발견된 조합 알고리즘을 통해 구축되었다. 기존 오픈소스 모델들의 전문성과 집단지성을 효율적으로 융합함으로써, 막대한 컴퓨팅 자원과 훈련 데이터 없이도 고성능 기반 모델을 자동 생성할 수 있음을 증명했다.

## 기술 특징
EvoLLM-JP v1 10B는 일본어 특화 언어 모델인 Shisa Gamma 7B v1과 영어 수학 특화 모델인 WizardMath 7B V1.1, Abel 7B 002를 유전 알고리즘 기반으로 탐색하여 병합하였다. 진화적 모델 마지는 트랜스포머의 레이어(Layer) 레벨에서 선택 및 재배열 알고리즘을 탐색함과 동시에, 가중치(Weight) 레벨에서 수치적 믹싱 비율을 자동 최적화하는 2단계 접근 방식을 사용한다. 이 과정을 통해 전문가의 경험적 시도로는 발견하기 어려웠던 "일본어 언어 능력"과 "수학적 추론 능력" 간의 비직관적이고 혁신적인 레이어 결합 방식을 자동으로 찾아냈다.

## 사용 사례 및 성능
EvoLLM-JP v1 10B는 다국어 수학 추론 벤치마크인 MGSM-JA(일본어 세트)에서 원본 소스 모델들의 성과를 대폭 상회하는 정답률을 기록했다. 또한, 수학 영역뿐만 아니라 `lm-evaluation-harness` 기반의 9개 일반 일본어 이해 평가 종합 스코어(Avg)에서 당대 70B 미만의 일본어 LLM 중 최고 점수를 달성했으며, 일부 70B급 모델보다 뛰어난 범용 언어 능력을 보여주었다. 일본의 전통적인 문화적 맥락(예: 節分, 鯉のぼり)과 수학적 계산을 결합한 복잡한 질의에도 자연스럽고 정확한 답변을 제공한다.

## 한계 및 주의사항
EvoLLM-JP v1 10B는 연구 및 프로토타입 검증 목적으로 공개된 실험적 모델이다. 포함된 소스 모델 중 WizardMath의 라이선스 제약(Microsoft Research License Terms)을 승계하므로 연구 및 개발 목적으로 활용되며 commercial 배포 시 주의가 필요하다. 또한 정교한 인간 의도 정렬(Alignment)이나 안성성 튜닝이 완전하지 않으므로 미션 크리티컬한 운영 환경에 직접 투입하기 전에 별도의 후속 정렬 작업이 요구된다.
