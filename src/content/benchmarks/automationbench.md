---
benchmarkId: automationbench
name: AutomationBench
nameKo: AutomationBench (도구 사용)
category: agent
domain: llm
status: published
updated: 2026-07-03
organization: "zapier"
sources:
  - https://arxiv.org/abs/2604.18934
  - https://www.anthropic.com/news/claude-fable-5-mythos-5
paperUrl: https://arxiv.org/abs/2604.18934
highlights:
  - "Zapier 플랫폼의 실제 워크플로우 패턴 기반"
  - "REST API를 통한 교차 애플리케이션 워크플로우 오케스트레이션 평가"
  - "엔드포인트 발견, 비즈니스 규칙 준수, 올바른 데이터 기록 능력 테스트"
---

# AutomationBench

## 개요
AutomationBench는 소프트웨어 자동화를 위한 에이전트의 교차 애플리케이션 조정, 자율적인 API 발견, 정책 준수 능력을 평가하는 벤치마크입니다. Zapier 플랫폼의 실제 워크플로우 패턴을 활용하여 영업, 마케팅, 운영, 지원, 재무, 인사 등 다양한 도메인에 걸친 REST API 기반 워크플로우 오케스트레이션을 테스트합니다.
에이전트는 적절한 엔드포인트를 스스로 찾아내고, 여러 단계의 비즈니스 규칙을 따르며, 불필요하거나 잘못된 기록이 있는 환경을 탐색하여 올바른 시스템에 정확한 데이터를 기록해야 합니다.

## 평가 방법
평가 단위는 %를 사용합니다.
