---
benchmarkId: frontiercode-diamond
domain: llm
status: published
updated: 2026-07-13
sources:
  - https://cognition.ai/blog/frontier-code
  - https://www.anthropic.com/news/claude-fable-5-mythos-5
organization: cognition
highlights:
  - "모델이 고품질의 유지보수 가능한 프로덕션 코드를 얼마나 잘 작성하는지 평가"
  - "단순한 기능적 정확성을 넘어 실제 코드 품질과 미세한 인간의 선호도를 측정"
  - "다이아몬드(Diamond) 난이도는 가장 어려운 50개의 작업으로 구성"
---

# FrontierCode (Diamond)

## 개요
FrontierCode는 AI 모델이 실제 프로덕션 코드베이스의 높은 표준을 충족하는 고품질의 유지보수 가능한 코드를 작성할 수 있는지 평가하는 벤치마크입니다. 다이아몬드(Diamond) 등급은 이 벤치마크에서 가장 난이도가 높은 50개의 작업으로 구성된 하위 집합입니다.

## 평가 방법
기존 벤치마크가 기능적 정확성(Functional Correctness)에만 초점을 맞춘 것과 달리, FrontierCode는 코드의 품질과 미세한 인간의 선호도를 측정합니다. 과제는 20명 이상의 오픈소스 유지관리자가 수작업으로 선정하였으며, 복수의 PR 체인 및 자유형 요청을 기반으로 구성되었습니다. 에이전트는 장황한 프롬프트 대신 간결한 작업 설명과 저장소의 일반적인 가이드라인(예: AGENTS.md)만 제공받아, 인간 기여자와 동일한 문맥에서 유지관리자의 의도를 추론해야 합니다.

## 점수 해석
점수(Score)와 통과율(Pass rate) 두 가지 지표를 사용하며, 각 모델은 가용한 모든 추론 수준에서 5회씩 테스트를 거쳐 최고 추론 수준에서의 평균 점수를 기록합니다. 높은 점수는 모델이 단순히 동작하는 코드를 넘어서, 프로덕션 수준의 고품질 코드를 성공적으로 작성했음을 의미합니다.

## 한계와 비판
수작업 검토와 품질 평가가 포함되므로 평가 기준의 주관성이 완전히 배제되기 어려울 수 있습니다.
