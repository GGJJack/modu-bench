---
benchmarkId: medchembench
domain: llm
status: published
updated: 2026-08-07
sources:
  - https://www.reddit.com/r/AIGuild/comments/1tw7zcp/openai_upgraded_gptrosalind_its_ai_model_for_life/
  - https://labcritics.com/blog/2026/06/19/lifescibench-openais-hard-new-life-science-benchmark-and-how-gpt-rosalind-stacks-up/
  - https://www.startuphub.ai/ai-news/artificial-intelligence/2026/openai-boosts-ai-for-drug-discovery
highlights:
  - "생체 외 및 생체 내 약물 효능, 독성 및 ADME 예측 등 의약 화학 워크플로우를 평가하는 벤치마크."
  - "오픈AI(OpenAI)의 자체 내부 평가 벤치마크 데이터셋으로 외부 검증은 이루어지지 않음."
---

# MedChemBench

## 개요
MedChemBench는 오픈AI(OpenAI)에서 개발한 의약화학(Medicinal Chemistry) 분야 특화 벤치마크입니다. 신약 개발 과정에서 필수적인 생체 외(in vitro) 및 생체 내(in vivo) 약물 효능, 독성 평가, 그리고 ADME(흡수, 분포, 대사, 배설) 예측 등 복잡한 워크플로우를 AI 모델이 얼마나 잘 수행하고 추론하는지 평가합니다.

## 평가 방법
평가 단위는 백분율(%)을 사용합니다. 외부에서 검증받은 LifeSciBench와는 다르게 오픈AI 내부에서 독자적으로 사용하는 자체 평가(in-house evaluation) 목적으로 활용되고 있습니다.

## 관련 모델 성능
자료에 따르면 이 벤치마크에서 GPT-5.5는 25.1%의 점수를 획득했으며, 의약화학과 유전체학 등 생명과학 추론에 최적화된 GPT-Rosalind 모델은 이보다 향상된 27.5%의 점수를 기록함과 동시에 더 적은 출력 토큰을 사용하여 효율성까지 높인 것으로 보고되었습니다.
