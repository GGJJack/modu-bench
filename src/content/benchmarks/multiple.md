---
benchmarkId: multiple
domain: llm
status: published
updated: 2026-09-21
sources:
  - https://huggingface.co/datasets/nuprl/MultiPL-E
  - https://arxiv.org/abs/2208.08227
  - https://github.com/nuprl/MultiPL-E
organization: nuprl
highlights:
  - "다양한 프로그래밍 언어에 대한 코드 생성 능력 평가"
  - "단위 테스트 기반 코드 생성 벤치마크"
---

# MultiPL-E

## 개요
MultiPL-E는 대규모 언어 모델의 멀티 언어 코드 생성 능력을 평가하기 위해 구축된 벤치마크입니다. 대규모 언어 모델들이 자연어뿐만 아니라 프로그래밍 언어 텍스트도 생성할 수 있는 능력을 보여줌에 따라, 하나의 언어에서 다른 언어로 코드 생성 능력이 어떻게 일반화될 수 있는지를 탐구합니다.

## 벤치마크 평가 방식
MultiPL-E는 단위 테스트 기반의 코드 생성 벤치마크를 새로운 언어로 번역하는 시스템을 제안합니다. 이를 바탕으로 인기 있는 Python 코드 생성 벤치마크인 HumanEval과 MBPP를 18개의 다른 프로그래밍 언어로 번역하여 최초의 대규모 다국어 코드 생성 벤치마크를 생성했습니다.

## 시사점
이 시스템을 사용하여 Codex, CodeGen 및 InCoder와 같은 세 가지 최첨단 코드 생성 모델의 다국어 성능을 평가했습니다. MultiPL-E의 코드 생성 벤치마크를 새로운 프로그래밍 언어로 컴파일하는 접근 방식은 확장 가능하고 유연하기 때문에 새로운 모델, 벤치마크 및 언어를 평가하는 것이 간단해집니다.
