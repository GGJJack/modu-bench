---
modelId: eeve-korean-instruct-10.8b
domain: llm
status: published
updated: 2026-06-18
sources:
  - https://huggingface.co/yanolja/YanoljaNEXT-EEVE-Instruct-10.8B-v1.0
  - https://arxiv.org/abs/2402.14714
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "Upstage SOLAR-10.7B 기반의 한국어 특화 인스트럭션 모델"
  - "Direct Preference Optimization (DPO)를 통한 성능 최적화"
  - "Open LLM 리더보드에서 우수한 한국어 성능 입증"
relatedOrganization: yanolja
---

# EEVE-Korean-Instruct-10.8B 소개

## 개요
EEVE-Korean-Instruct-10.8B는 야놀자(Yanolja)의 NEXT LLM 팀이 개발한 한국어 특화 지시어 미세 조정 모델입니다. Upstage의 SOLAR-10.7B를 베이스로 하여 한국어 어휘를 확장한 EEVE-Korean-10.8B 모델에 DPO(Direct Preference Optimization) 기법을 적용하여 완성되었습니다. 이 모델은 한국어 사용자의 복잡한 지시를 정확하게 이해하고 유창하게 답변하는 것을 목표로 합니다.

## 기술 특징
이 모델은 '효율적이고 효과적인 어휘 확장(EEVE)' 기법을 통해 기존 영어 중심 모델의 한계를 극복했습니다. 토크나이저에 8,960개의 한국어 토큰을 추가하여 한국어 처리 효율을 높였으며, Axolotl 프레임워크를 활용한 DPO 학습을 통해 모델의 선호도와 응답 품질을 정밀하게 튜닝했습니다. 특히 Open LLM 리더보드 평가에서 MMLU, HellaSwag 등 주요 지표에서 체급 대비 뛰어난 성적을 거두며 기술력을 증명했습니다.

## 사용 사례
EEVE-Korean-Instruct-10.8B는 대화형 AI 서비스, 문서 요약, 복잡한 질의응답 시스템 구축에 적합합니다. 특히 인스트럭션 튜닝이 완료된 모델이므로 별도의 추가 학습 없이도 즉시 서비스에 도입할 수 있는 수준의 한국어 생성 능력을 갖추고 있습니다. Apache-2.0 라이선스를 따르고 있어 상업적 활용이 자유로우며, 로컬 환경에서도 구동 가능한 크기로 보안이 중요한 기업 내부용 챗봇 구현에 유리합니다.

## 한계
이 모델은 10.8B 규모의 파라미터를 가진 모델로, 수천억 단위의 초대형 모델과 비교했을 때 지식의 깊이나 복잡한 추론 능력에서 차이가 있을 수 있습니다. 또한 베이스 모델인 SOLAR의 특성을 계승하므로, 4096 토큰 수준의 컨텍스트 윈도우 크기 제한이 있어 매우 긴 문서를 한 번에 처리하는 작업에는 제약이 따를 수 있습니다.
