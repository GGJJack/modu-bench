---
benchmarkId: fairpoliticsqa
domain: llm
status: published
updated: 2026-10-25
sources:
  - https://sakana.ai/namazu-api/
organization: sakana-ai
highlights:
  - "특정 국가 가치관에 편향되지 않은 답변 중립성 평가"
  - "Sakana AI 내부 자체 구축 벤치마크"
---

# FairPoliticsQA

## 개요
FairPoliticsQA는 답변의 중립성(Neutrality)을 평가하기 위해 Sakana AI가 내부적으로 독자 구축한 벤치마크입니다. 모델이 질문에 답변할 때 특정 국가의 가치관이나 편향에 치우치지 않고 객관적이고 중립적인 시각을 유지하는지를 측정합니다.

## 특징
일본어 특화 모델이나 각 지역의 맥락(Context)을 깊이 이해하는 모델을 개발할 때, 지역화(Localization)로 인해 발생할 수 있는 편향성을 점검하고 억제하는 데 활용됩니다. Sakana AI의 Namazu 모델 릴리스 당시, 베이스 모델에 비해 중립성 준수 측면에서 큰 폭의 향상(34.10%에서 56.30%로 상승)을 보여주는 지표로 사용되었습니다. 일반적인 언어 능력 외에도 지역 고유의 지식과 맥락을 다루면서도 한쪽으로 치우치지 않는 균형 잡힌 응답을 목표로 합니다.
