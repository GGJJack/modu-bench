---
benchmarkId: mbpp
domain: llm
status: published
updated: 2026-08-26
sources:
  - https://arxiv.org/abs/2108.07732
  - https://huggingface.co/datasets/google-research-datasets/mbpp
organization: google-research
paperUrl: https://arxiv.org/abs/2108.07732
highlights:
  - "기본적인 파이썬 프로그래밍 문제 해결 능력 평가"
  - "974개의 크라우드소싱 기반 파이썬 문제 제공"
---

# MBPP (Mostly Basic Python Problems)

## 개요
MBPP(Mostly Basic Python Problems)는 언어 모델의 파이썬(Python) 코드 생성 능력을 평가하기 위한 벤치마크입니다. 입문 수준의 프로그래머가 해결할 수 있는 기초적인 프로그래밍 문제들로 구성되어 있으며, 약 974개의 크라우드소싱된 함수 단위 파이썬 문제와 이를 검증하기 위한 유닛 테스트(Unit Test)를 제공합니다.

## 평가 방법
모델은 짧은 문제 설명(독스트링)을 바탕으로 파이썬 함수를 생성해야 합니다. 생성된 코드가 제공된 유닛 테스트를 성공적으로 통과하는지 실행하여 확인하는 `pass@k` 지표를 사용하여 기능적 정확성을 측정합니다.

## 한계와 비판
문제의 난이도가 비교적 기초적이기 때문에, 최신 고성능 대형 언어 모델 간의 변별력을 확보하기 어려워지는 경향이 있습니다. 이를 보완하기 위해 평가 문제에 추가적인 제약 조건을 둔 확장 벤치마크(예: EvalPlus 등)가 함께 활용되기도 합니다.
