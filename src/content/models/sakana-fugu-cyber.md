---
modelId: sakana-fugu-cyber
domain: llm
status: published
updated: 2026-07-22
sources:
  - https://sakana.ai/fugu-cyber-release/
  - https://sakana.ai/fugu/
  - https://www.nikkei.com/prime/digital-governance/article/DGXZQOUC071OG0X00C26A7000000
features:
  toolUse: true
  vision: false
highlights:
  - "보안 위협 대응 및 취약점 검증에 특화된 오케스트레이션 모델"
  - "CyberGym 86.9%, CTI-REALM 72.1%로 업계 최고 수준의 실무 보안 성능 입증"
  - "단일 모델 의존성을 극복한 사카나 AI의 멀티 에이전트 아키텍처 기반"
relatedOrganization: sakana-ai
---

# Sakana Fugu Cyber 소개

## 개요
Sakana Fugu Cyber는 사카나 AI(Sakana AI)가 2026년 7월 21일에 공식 발표한 보안 영역 특화 대규모 언어 모델(LLM) 기반 오케스트레이션 시스템입니다. 이 모델은 복잡하고 다단계로 진행되는 현대 기업의 사이버 보안 방어 및 위협 인텔리전스 분석을 자동화하도록 정밀 설계되었습니다. 기존 단일 신경망 모델들의 구조적 한계와 특정 벤더 의존성 리스크를 혁신적으로 극복하기 위해 다수의 전문 하위 에이전트(Sub-agent)들을 유기적으로 조율하는 멀티 에이전트 아키텍처를 채택하고 있는 것이 가장 큰 특징입니다.

## 기술 특징
Fugu Cyber는 실무 환경을 모사한 까다로운 보안 벤치마크 평가에서 세계 최고 수준(State-of-the-Art)의 능력을 입증했습니다. 소스 코드 분석을 통해 실제 작동 가능한 취약점을 찾아내고 검증하는 능력을 측정하는 CyberGym 평가에서 86.9%의 높은 성공률을 기록했으며, 가공되지 않은 보안 위협 첩보 보고서를 탐지 규칙(Detection Rules)으로 자동 번역 및 정형화하는 CTI-REALM 벤치마크에서는 72.1%의 성공률을 도출했습니다. 이는 GPT-5.5-Cyber나 Anthropic의 Mythos Preview와 같은 글로벌 최정상급 프론티어 보안 특화 모델들과 대등하거나 이를 상회하는 성능입니다.

## 사용 사례
이 모델은 주로 대규모 금융 기관, 정부 인프라, 그리고 보안 관제 센터(SOC) 등 엄격한 정보 보호 요건을 요구하는 엔터프라이즈 환경에서 핵심 솔루션으로 활약합니다. 사카나 AI의 엔터프라이즈 전담 팀(Applied Enterprise)과의 협업을 통해 현업 보안 전문가의 실무 경험 데이터 및 proprietary 소스 코드 저장소와 긴밀하게 연동될 수 있습니다. 이를 통해 보안 위협 징후를 발견하는 즉시 서브 에이전트들이 취약점 유효성을 정밀 검증하고, 오탐지(False Positive)를 최소화한 최적의 패치 시나리오를 인간의 개입 하에 즉각 제안 및 배포하는 일련의 자율 방어 워크플로우를 구현합니다.

## 한계
Fugu Cyber는 고도로 민감한 엔터프라이즈 자산과 인프라를 다루기 때문에, 보안 악용을 방지하기 위한 강력한 허용 사용자 정책(Acceptable Usage Policy)을 적용받습니다. 이에 따라 API 사용을 위해서는 활용 목적과 상세 연락처 정보를 검증받는 별도의 엄격한 수동 심사 승인 단계를 거쳐야만 실제 운영 환경에 도입할 수 있습니다. 또한 보안 오케스트레이션 및 코드 정밀 분석에 고도로 편향 및 튜닝되어 있으므로, 일반적인 자연어 대화나 범용 다국어 추론, 미디어 제작 등의 일반 목적 비서 작업에는 적합하지 않습니다.
