---
modelId: granite-4.1-8b
domain: llm
status: published
updated: 2026-05-23
sources:
  - https://www.ibm.com/granite/docs/models/granite4-1
  - https://huggingface.co/blog/ibm-granite/granite-4-1
  - https://www.ibm.com/granite/trust
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "8B 파라미터의 효율적인 밀집(Dense) 언어 모델"
  - "이전 세대 32B MoE 모델을 능가하는 지시 이행 및 도구 사용 성능"
  - "최대 512k 컨텍스트 지원 및 Apache 2.0 라이선스 기반 배포"
relatedOrganization: ibm
---

# Granite 4.1 8B 소개

## 개요
Granite 4.1 8B는 IBM이 2026년 5월 18일에 공개한 Granite 4.1 제품군의 범용 모델입니다. 80억 개의 파라미터를 가진 밀집(Dense) 디코더 전용 아키텍처를 채택하고 있으며, 엔터프라이즈 환경에서 가장 균형 잡힌 성능과 효율성을 제공하도록 설계되었습니다. 특히 이 모델은 이전 세대의 훨씬 더 큰 모델인 Granite 4.0-H-Small(32B 파라미터, 9B 활성 파라미터 MoE)과 대등하거나 이를 상회하는 성능을 보여주며, 오픈 소스 커뮤니티와 기업 사용자를 위해 Apache 2.0 라이선스로 제공됩니다.

## 기술 특징
Granite 4.1 8B는 약 15조(15T) 개의 토큰으로 구성된 데이터셋을 통해 5단계의 정교한 사전 훈련 과정을 거쳤습니다. 초기에는 웹 데이터 중심의 일반 훈련으로 시작하여, 후반부에는 수학, 코드, 고품질 합성 데이터의 비중을 대폭 높여 추론 능력을 극대화했습니다. 특히 'High-Quality Data Annealing' 기법을 통해 모델이 가장 가치 있는 정보에 집중하도록 유도했으며, GRPO(Group Relative Policy Optimization)와 DAPO 손실 함수를 활용한 다단계 강화 학습 파이프라인을 거쳐 지시 이행 및 도구 사용 능력을 완성했습니다. 기본적으로 128k 컨텍스트 윈도우를 제공하며, 기술적으로는 최대 512k까지 확장 가능한 설계를 가지고 있습니다.

## 사용 사례
이 모델은 일반적인 챗봇부터 복잡한 워크플로우 자동화, 텍스트 분석, 코드 보조 등 다양한 기업용 애플리케이션에 적합합니다. 특히 향상된 도구 사용(Tool Calling) 능력을 통해 API를 호출하거나 외부 데이터베이스와 연동하는 에이전트 기반 작업에서 뛰어난 역량을 발휘합니다. 또한, FP8 양자화 기술을 지원하여 메모리 점유율을 50% 수준으로 낮추면서도 높은 처리 속도를 유지할 수 있어, 자원이 제한된 환경에서도 안정적인 서비스 운영이 가능합니다.

## 한계
Granite 4.1 8B는 텍스트와 코드 처리에 특화된 모델로, 이미지나 오디오를 직접 처리하는 멀티모달 기능은 내장되어 있지 않습니다. 시각적 정보 처리가 필요한 경우 별도의 Granite Vision 모델과 함께 사용해야 합니다. 또한, 30B 모델과 비교했을 때 매우 복잡한 추론이나 고도의 전문 지식이 필요한 작업에서는 성능 차이가 존재할 수 있으므로, 요구되는 작업의 난이도에 따라 적절한 모델 크기를 선택하는 것이 권장됩니다.
