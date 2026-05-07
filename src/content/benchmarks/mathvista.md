---
benchmarkId: mathvista
domain: multimodal
status: published
updated: 2026-05-07
sources:
  - https://arxiv.org/abs/2310.02255
paperUrl: https://arxiv.org/abs/2310.02255
highlights:
  - "다양한 시각적 및 수학적 과제를 결합하여 구성"
  - "수학 지식을 요구하는 6,141개의 멀티모달 데이터 세트 평가"
  - "정밀한 시각적 이해 및 조합적 추론 역량 요구"
---

# MathVista

## 개요
MathVista(Evaluating Mathematical Reasoning of Foundation Models in Visual Contexts)는 파운데이션 모델(Foundation Models)의 시각적 맥락 내 수학적 추론 능력을 종합적으로 평가하기 위한 벤치마크입니다. 시각적 이해와 수학적 능력이 결합된 다채로운 작업을 테스트하도록 고안되었습니다. 다양한 수학 관련 멀티모달 데이터셋 28개에서 추출한 문제들과 신규 생성된 데이터셋(IQTest, FunctionQA, PaperQA)을 합쳐 총 6,141개의 문제로 이루어져 있습니다.

## 평가 방법
이 벤치마크는 복잡한 시각적 구성 요소(그래프, 표, 그림 등)와 수학적 맥락을 동시에 해독하고, 여러 단계의 추론을 요구하는 고정된 문제들로 평가를 수행합니다.

## 한계와 비판
기존 언어 기반의 수학적 추론이나 단순한 이미지 인식 수준을 넘어, 모델들이 복잡한 그림을 이해하고 엄밀한 수학적 추론을 수행하는 데 있어 여전히 인간 성능과의 상당한 격차가 있음을 드러냅니다. 최신 시각-언어 모델조차 이 벤치마크에서는 어려움을 겪고 있습니다.
