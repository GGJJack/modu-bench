---
benchmarkId: cweval
domain: llm
status: published
updated: 2026-05-30
sources:
  - https://github.com/Co1lin/CWEval
  - https://arxiv.org/abs/2501.08200
paperUrl: https://arxiv.org/abs/2501.08200
highlights:
  - "보안성과 기능성을 동시에 평가하는 벤치마크"
  - "결과 중심적 테스트 기반의 평가 프레임워크"
---

# CWEval

## 개요
CWEval은 대형 언어 모델(LLM)이 생성한 코드의 기능성(Functionality)과 보안성(Security)을 동시에 평가하기 위해 고안된 벤치마크 프레임워크입니다.

## 평가 방법
결과 중심적(outcome-driven) 평가 프레임워크를 도입하여, 생성된 코드가 단순히 정상 작동하는지를 넘어 보안 취약점이 없는지 함께 테스트합니다. 다국어를 지원하며 보안상 중요한 코딩 평가를 위해 고안되었습니다.

## 한계와 비판
기존 CyberSecEval 및 SecurityEval 등 다른 벤치마크들이 불명확하거나 비실용적인 기준에 의해 제한되었던 점을 극복하고자 설계되었습니다.
