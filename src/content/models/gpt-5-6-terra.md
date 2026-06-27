---
modelId: gpt-5-6-terra
domain: llm
status: published
updated: 2026-06-27
sources:
  - https://openai.com/index/previewing-gpt-5-6-sol/
  - https://deploymentsafety.openai.com/gpt-5-6-preview
features:
  toolUse: true
  vision: true
highlights:
  - "GPT-5.6 시리즈 중 경제성과 성능을 절충한 저비용 대안 모델"
  - "플래그십에 준하는 고수준의 추론 능력 제공"
  - "보안 및 생물학 평가에서 소형 모델 최초로 'High' 등급 획득"
relatedOrganization: openai
---

# OpenAI GPT-5.6 Terra 소개

## 개요
GPT-5.6 Terra는 OpenAI의 GPT-5.6 제품군 중 하나로, 플래그십인 Sol의 강력한 추론 능력을 보다 저렴한 비용으로 제공하기 위해 설계된 모델입니다. '유능한 저비용 옵션(Capable lower-cost option)'을 표방하며, 특히 이전 세대의 최상위 모델인 GPT-5.5를 상회하는 성능을 목표로 합니다. 대규모 배포가 필요한 기업이나 비용 효율성이 중요한 복잡한 추론 작업에 적합합니다.

## 기술 특징
Terra는 Sol과 동일한 강화학습 기반 추론 아키텍처를 공유하지만, 매개변수 규모와 연산 효율성을 최적화하여 응답 속도와 비용 문제를 개선했습니다. 그럼에도 불구하고 성능 면에서는 타협하지 않아, 준비성 프레임워크(Preparedness Framework)의 사이버 보안 및 생물학 분야에서 소형/중형급 모델 계열로서는 최초로 'High' 등급의 역량을 인정받았습니다. Sol과 마찬가지로 사용자가 '사고 노력'을 직접 설정하여 문제의 복잡도에 최적으로 대응할 수 있는 가변적 성능 구조를 갖추고 있습니다.

## 사용 사례
고성능 추론이 필요하지만 비용 관리가 병행되어야 하는 대규모 데이터 요약, 의료 정보 분석 보조, 기업 내부 코드베이스의 유지보수 등에 활용됩니다. 특히 건강 관련 벤치마크인 HealthBench Professional 등에서 GPT-5.5를 실질적으로 능가하는 성과를 보여, 의료 및 생명과학 분야의 실용적인 도구로 주목받고 있습니다.

## 한계
모델 규모의 한계로 인해 Sol에 비해서는 초고난도 논리 문제에서의 해결 확률이 다소 낮을 수 있습니다. 또한 Sol과 마찬가지로 작업 완수에 대한 과도한 persistence 문제(예: 부주의한 데이터 덮어쓰기 위험)가 존재하므로, 자동화된 에이전트로 활용할 때 사용자의 지속적인 감독이 권장됩니다. 사고 과정(CoT) 제어 능력은 상위 모델인 Sol보다 다소 낮게 평가되기도 합니다.
