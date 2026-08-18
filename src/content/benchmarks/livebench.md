---
benchmarkId: livebench
domain: llm
status: published
updated: 2026-08-18
sources:
  - https://arxiv.org/abs/2406.19314
  - https://github.com/livebench/livebench
  - https://livebench.ai/
organization: livebench
paperUrl: https://arxiv.org/abs/2406.19314
highlights:
  - "테스트 세트 오염 방지를 위해 매월 새로운 질문과 평가가 업데이트됨"
  - "객관적인 정답을 통해 LLM 심판관 없이 자동 채점이 가능한 벤치마크"
  - "최신 수학 대회, arXiv 논문, 뉴스 기사 등을 기반으로 어려운 질문 구성"
---

# LiveBench

## 개요
LiveBench는 언어 모델(LLM)의 객관적이고 정확한 평가를 위해 설계된 벤치마크입니다. 테스트 세트 오염(Test set contamination) 문제를 해결하기 위해, 최근 출시된 데이터셋, arXiv 논문, 뉴스 기사, IMDb 영화 시놉시스 등을 바탕으로 정기적으로 새로운 질문을 추가하는 점이 특징입니다. 이를 통해 벤치마크의 유효성을 지속적으로 유지하며, 편향되기 쉬운 인간 혹은 LLM 심사관의 한계를 극복합니다.

## 평가 방법
수학, 코딩, 추론, 언어, 지시어 준수, 데이터 분석 등 6개 카테고리에 걸쳐 다양한 작업을 다루는 객관적인 질문들로 평가가 진행됩니다. 모든 질문은 객관적으로 검증 가능한 명확한 정답을 가지고 있으며, 이로 인해 LLM을 통한 주관적 판단 없이도 까다로운 문제들에 대한 정확하고 자동화된 채점이 가능합니다.

## 점수 해석
LiveBench는 최고 성능의 모델들도 높은 정확도(예: 70% 미만)를 기록하기 어려울 정도로 난이도가 높은 문제로 구성되어 있습니다. 향후 LLM 기능이 발전함에 따라 모델 간의 성능 차이를 명확하게 구별할 수 있도록 지속적으로 더 어려운 버전의 문제들을 공개할 예정입니다.
