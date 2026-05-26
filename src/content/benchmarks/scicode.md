---
benchmarkId: scicode
domain: llm
status: draft
updated: 2026-05-26
sources:
  - https://arxiv.org/abs/2407.13168
  - https://github.com/scicode-bench/SciCode
organization: scicode-bench
paperUrl: https://arxiv.org/abs/2407.13168
highlights:
  - "과학 연구 문제 해결 능력을 평가하는 코딩 벤치마크"
  - "수학, 물리학, 화학 등 16개 분야 과학자들이 직접 큐레이션"
---

# SciCode

## 개요
SciCode는 수학, 물리학, 화학, 생물학, 재료 과학 등 16개 자연 과학 분야의 과학자들과 AI 연구자들이 참여하여 만든 고품질 코딩 벤치마크입니다. 언어 모델이 실제 과학 연구 문제를 해결하기 위한 코드를 생성할 수 있는지를 평가합니다.

## 문제 구성
총 80개의 주요 도전 문제에서 분해된 338개의 하위 문제로 구성되며, 각 문제는 지식 회상, 추론 및 코드 합성을 요구합니다.

## 평가 방법
모델이 생성한 코드에 대해 과학자들이 주석 처리한 정답 코드 및 테스트 케이스를 기반으로 평가가 이루어집니다.
