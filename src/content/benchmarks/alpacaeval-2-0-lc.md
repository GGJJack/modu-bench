---
benchmarkId: alpacaeval-2-0-lc
domain: llm
status: published
updated: 2026-08-11
sources:
  - https://arxiv.org/abs/2404.04475
  - https://github.com/tatsu-lab/alpaca_eval
organization: tatsu-lab
paperUrl: https://arxiv.org/abs/2404.04475
highlights:
  - "길이 편향(Length Bias)을 통제한 길이 통제 승률(Length-controlled Win Rates) 도입"
  - "Chatbot Arena와의 0.98 수준의 높은 상관관계 유지"
  - "빠르고 저렴한 자동 평가 시스템 제공"
---

# AlpacaEval 2.0 LC

## 개요
AlpacaEval 2.0 LC는 명령어 기반 언어 모델의 성능을 빠르고 저렴하게 평가하기 위한 자동 평가 시스템입니다. Tatsu Lab에서 개발하였으며, 모델이 생성하는 답변의 길이에 편향되는 자동 평가자(예: GPT-4)의 고질적인 문제를 완화하기 위해 길이 통제 승률(Length-controlled Win Rates) 기법을 기본적으로 사용합니다.

## 평가 방법
기본적으로 고성능 모델(주로 GPT-4 preview)을 자동 평가자로 활용하여, 평가 대상 모델의 답변과 기준(Reference) 모델의 답변 중 어느 것을 선호하는지 판별합니다. AlpacaEval 2.0 LC는 단순 승률을 계산할 때 답변 길이에 따른 가중치를 조정하여, 단지 긴 답변을 생성했다고 해서 점수가 부풀려지는 현상(Length Bias)을 통제합니다.

## 점수 해석
점수는 기준 모델 대비 길이 통제 승률(%)로 제공되며, 수치가 높을수록 모델의 지시문 준수 능력과 품질이 우수함을 의미합니다. 이 점수는 Chatbot Arena의 인간 선호도와 약 0.98의 매우 높은 상관관계를 보입니다.

## 한계와 비판
자동 평가 모델(GPT-4 등)의 고유한 편향이 완전히 배제된 것은 아니며, 특정 백그라운드 모델로 파인튜닝된 답변을 선호하는 현상이 나타날 수 있습니다. 또한 평가 데이터셋이 광범위한 일상적 대화 위주여서 매우 전문적인 코딩이나 수학적 추론 능력을 세밀하게 분별하기에는 무리가 있을 수 있습니다.
