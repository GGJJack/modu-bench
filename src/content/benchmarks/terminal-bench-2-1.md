---
benchmarkId: terminal-bench-2-1
domain: llm
status: draft
updated: 2026-05-21
sources:
  - https://arxiv.org/abs/2605.12233
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
  - https://www.tbench.ai/benchmarks
paperUrl: https://arxiv.org/abs/2605.12233
highlights:
  - "터미널 환경에서 에이전트의 자율적 태스크 해결 능력 측정"
  - "소프트웨어 엔지니어링, 머신러닝, 시스템 관리 등 다양한 도메인 포함"
  - "환경 내 지시사항의 맥락적 이해 및 우선순위 판단 능력 평가"
---

# Terminal-Bench 2.1

## 개요
Terminal-Bench 2.1은 에이전트가 터미널 환경에서 자율적으로 작업을 수행하는 능력을 측정하는 벤치마크입니다. 소프트웨어 개발, 데이터 사이언스, 보안 등 다방면에 걸친 태스크를 제공하여 모델의 도구 활용과 문제 해결 능력을 검증합니다.

## 평가 방법
모델은 주어진 터미널 인터페이스를 이용해 종속성 설치, 명령어 실행, 파일 수정 등의 과정을 반복하며 문제를 해결해야 합니다. 환경 내에 존재하는 README, 코드 주석 등 다양한 컨텍스트를 올바르게 해석하고 유효한 지시사항만을 선별해 따르는 역량(Task Alignment)을 중점적으로 평가합니다.

## 한계와 비판
기존 벤치마크들은 모델이 불필요한 단서까지 맹목적으로 따르거나 아예 무시하는 행동 패턴을 충분히 걸러내지 못하는 한계가 지적되었습니다. 이에 파생된 TAB(Task Alignment Benchmark) 연구는 에이전트가 필수적인 단서와 방해 요소(distractor)를 어떻게 구분하고 대처하는지를 더욱 정밀하게 측정하려는 시도를 보여줍니다.
