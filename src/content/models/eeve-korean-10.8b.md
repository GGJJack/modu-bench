---
modelId: eeve-korean-10.8b
domain: llm
status: published
updated: 2026-05-15
sources:
  - https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0
  - https://arxiv.org/abs/2402.14714
  - https://github.com/yanolja/EEVE-Korean
features:
  toolUse: false
  vision: false
highlights:
  - "Upstage SOLAR-10.7B를 기반으로 한 한국어 어휘 확장 모델"
  - "8,960개의 한국어 토큰 추가 및 효율적인 7단계 학습 기법 적용"
  - "Apache-2.0 라이선스로 상업적 이용 및 수정이 자유로움"
relatedOrganization: yanolja
---

# EEVE-Korean-10.8B 소개

## 개요
EEVE-Korean-10.8B는 야놀자(Yanolja)의 NEXT LLM 팀이 2024년 2월에 공개한 한국어 특화 대규모 언어 모델입니다. 이 모델은 Upstage의 SOLAR-10.7B-v1.0을 베이스 모델로 하여, 영어 중심의 기존 모델을 한국어 환경에 맞게 효율적으로 적응시킨 것이 특징입니다. 특히 한국어 웹 데이터와 정밀하게 선정된 어휘를 바탕으로 사전 학습되어, 한국어의 문맥 이해와 생성 능력에서 우수한 성능을 보여줍니다.

## 기술 특징
이 모델의 핵심 기술은 '효율적이고 효과적인 어휘 확장(Efficient and Effective Vocabulary Expansion)' 방식입니다. 연구진은 한국어 웹 코퍼스에서 빈도가 높은 8,960개의 한국어 토큰을 엄선하여 기존 토크나이저에 추가했습니다. 학습 과정에서는 매개변수 동결(Parameter Freezing)을 포함한 7단계의 점진적 학습 기법을 도입하여, 입력 임베딩부터 전체 파라미터에 이르기까지 순차적으로 최적화했습니다. 이를 통해 베이스 모델이 가진 영어 추론 능력은 보존하면서도 한국어 처리 효율과 품질을 획기적으로 높였습니다.

## 사용 사례
EEVE-Korean-10.8B는 한국어 텍스트 생성, 요약, 문단 분류 등 다양한 자연어 처리 작업에 적합합니다. 특히 오픈 소스 기반의 Apache-2.0 라이선스를 채택하고 있어, 기업들이 내부 인프라에 구축하여 보안이 중요한 한국어 챗봇 서비스를 운영하거나 특정 도메인에 맞게 미세 조정(Fine-tuning)하여 사용하기에 용이합니다. 또한 모델 크기가 10.8B 수준으로 비교적 작아 소비자용 GPU에서도 구동이 가능하다는 장점이 있습니다.

## 한계
이 모델은 지시어 기반 미세 조정(Instruction Fine-tuning)이 적용되지 않은 베이스 모델(v1.0 기준)이므로, 사용자의 질문에 직접 답하는 대화형 서비스를 구현하기 위해서는 추가적인 인스트럭션 튜닝이나 RLHF 과정이 권장됩니다. 또한 베이스 모델인 SOLAR의 특성을 계승하므로, 컨텍스트 윈도우의 크기나 특정 복잡한 논리 추론 작업에서 최신 초거대 모델들과 비교했을 때 상대적인 성능 차이가 존재할 수 있습니다.
