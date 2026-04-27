---
benchmarkId: humaneval
domain: llm
status: published
updated: 2026-04-27
sources:
  - https://arxiv.org/abs/2107.03374
organization: openai
paperUrl: https://arxiv.org/abs/2107.03374
highlights:
  - "코드 생성 평가"
---

# HumanEval

## 개요
HumanEval은 언어 모델의 코드 생성 및 프로그래밍 능력을 평가하기 위한 벤치마크입니다. 주어진 독스트링(docstring)을 바탕으로 기능적으로 올바른 Python 프로그램을 합성하는 능력을 측정합니다.

## 평가 방법
기본적인 알고리즘과 수학, 언어 이해를 평가하는 프로그래밍 문제들로 구성되어 있으며, 생성된 코드 샘플이 유닛 테스트를 통과하는지 확인하는 `pass@k` 메트릭을 통해 기능적 정확성(functional correctness)을 평가합니다.

## 한계와 비판
생성된 코드가 올바르더라도 알고리즘적으로 비효율적일 수 있으며, 긴 작업 사슬을 요하거나 변수 조작이 복잡한 프롬프트에서 모델이 실패할 확률이 증가하는 경향이 관찰되었습니다.
