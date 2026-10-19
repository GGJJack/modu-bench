---
benchmarkId: fishmath-internal
domain: llm
status: draft
updated: 2026-10-19
sources:
  - https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
organization: sakana-ai
highlights:
  - "Internal benchmark of 285 high-difficulty integer-answer math problems."
---

# FishMath Internal Benchmark

## 개요
Sakana AI에서 구축한 285개의 고난도 정수형 정답 수학 문제(integer-answer math problems) 벤치마크이다. 주로 올림피아드 수준의 수학적 추론 능력을 평가하기 위해 AIMO3 프로젝트의 일환으로 만들어졌다.

## 평가 방법
수학 문제에 대해 16번씩 샘플링하여 평가한다.
- `pass@1`: 평균 단일 샘플링 정확도
- `Maj@8`: 8개 샘플링에 대한 다수결(majority-vote) 정확도
- `Pass@16`: 16개 샘플링 중 최소 1회 이상 문제를 해결한 비율

## 한계점
올림피아드 형식의 수학 추론에 특화되어 있으며, 정수 정답 형태의 문제만을 평가한다. 증명 작성이나 수학 외의 성능에 대해서는 평가하지 않는다.
