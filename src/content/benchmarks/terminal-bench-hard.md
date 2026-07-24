---
benchmarkId: terminal-bench-hard
domain: llm
status: published
updated: 2026-07-24
sources:
  - https://artificialanalysis.ai/evaluations/terminalbench-hard
  - https://tbench.ai/
organization: laude-institute
highlights:
  - "소프트웨어 엔지니어링, 시스템 관리, 데이터 처리 작업 등 에이전트 능력 평가"
  - "코드 컴파일, 모델 학습, 서버 구성, 게임 플레이, 시스템 디버깅 등 터미널 환경의 어려운(hard) 서브셋"
---

# Terminal-Bench Hard

## 개요
Terminal-Bench Hard는 AI 에이전트가 소프트웨어 엔지니어링, 시스템 관리, 데이터 처리 등의 실제 터미널 환경에서 수행하는 능력을 측정하기 위한 고난이도 벤치마크입니다. Laude Institute와 Stanford University가 개발한 Terminal-Bench 중 특히 어려운(hard) 하위 집합(subset)으로 구성되어 있습니다.

## 평가 방법
코드 컴파일, 모델 훈련, 서버 설정, 시스템 디버깅과 같은 터미널 사용 패턴을 재현한 시나리오가 포함되어 있으며, 에이전트는 출력 조건을 성공적으로 만족시켜야 합니다. 프로그래밍 방식으로 Docker 환경의 검증 스크립트를 통해 평가됩니다.