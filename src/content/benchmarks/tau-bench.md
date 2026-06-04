---
benchmarkId: tau-bench
domain: llm
status: published
updated: 2026-06-04
sources:
  - https://github.com/sierra-research/tau-bench
  - "https://arxiv.org/abs/2406.12045"
paperUrl: "https://arxiv.org/abs/2406.12045"
highlights:
  - "에이전트, 실제 사용자(LLM 시뮬레이션), 환경(도구 API) 간의 상호작용 평가"
  - "도메인 특화 API 도구 및 정책 가이드라인 준수 능력 테스트"
  - "일관성 측정을 위한 새로운 지표 pass^k 제안"
---

# tau-Bench

## 개요
tau-Bench(τ-bench)는 언어 모델로 시뮬레이션된 사용자(User)와 도메인 특화 API 도구 및 정책 가이드라인이 주어진 언어 에이전트(Agent) 간의 동적 대화를 에뮬레이션하는 벤치마크입니다. 기존 벤치마크들이 정적인 환경에서 에이전트의 단일 답변 능력을 평가했다면, tau-Bench는 실제 사용자와의 상호작용 및 복잡한 비즈니스 규칙(정책)을 준수하는 능력을 테스트하여 실세계 환경(예: 항공, 소매 등)에 배포 가능한지를 가늠합니다.

## 평가 방법
평가는 대화 종료 시점의 데이터베이스 상태를 사람이 주석을 단 목표 상태(goal state)와 비교하는 방식으로 이루어집니다. 평가 단위는 %를 사용합니다. 여러 번의 시도에 걸친 에이전트의 안정적이고 일관된 동작을 측정하기 위해 `pass^k`라는 새로운 지표를 활용합니다.
