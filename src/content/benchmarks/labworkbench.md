---
benchmarkId: labworkbench
domain: llm
status: published
updated: 2026-08-07
sources:
  - https://www.reddit.com/r/AIGuild/comments/1tw7zcp/openai_upgraded_gptrosalind_its_ai_model_for_life/
  - https://www.startuphub.ai/ai-news/artificial-intelligence/2026/openai-boosts-ai-for-drug-discovery
  - https://labcritics.com/blog/2026/06/19/lifescibench-openais-hard-new-life-science-benchmark-and-how-gpt-rosalind-stacks-up/
highlights:
  - "실제 습식 실험실(wet lab) 프로토콜의 문제 해결 및 최적화 능력을 평가하는 벤치마크."
  - "오픈AI(OpenAI)의 자체 내부 평가 벤치마크 데이터셋으로 외부 검증은 이루어지지 않음."
---

# LabWorkBench

## 개요
LabWorkBench는 생명과학 및 제약 연구, 특히 실제 습식 실험실(wet lab) 환경에서 발생하는 프로토콜 문제 해결과 최적화 능력을 평가하기 위해 오픈AI(OpenAI)에서 개발한 벤치마크입니다. AI가 생명과학 연구자의 실제 실험 워크플로우를 보조하는 실용성을 측정하는 데 중점을 둡니다.

## 평가 방법
평가 단위는 백분율(%)을 사용합니다. GPT-Rosalind와 같은 특화 모델의 역량을 확인하기 위해 내부적으로 사용되는 자체 벤치마크(in-house evaluation)이며, LifeSciBench와 달리 외부 전문가에 의한 평가(externally judged)를 거친 것은 아닙니다.

## 관련 모델 성능
오픈AI가 발표한 자료에 따르면 이 벤치마크 데이터셋에서 GPT-5.5는 55.8%를 기록한 반면, 생명과학 특화 모델인 GPT-Rosalind는 63.2%의 점수를 달성하여 습식 실험실 문제 해결 및 프로토콜 지원 부문에서 유의미한 성능 향상과 토큰 효율성을 입증했습니다.
