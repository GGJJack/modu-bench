---
benchmarkId: fishmath-internal
domain: llm
status: published
updated: 2026-10-21
sources:
  - https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
organization: sakana-ai
highlights:
  - "Sakana AI가 AIMO3 프로젝트를 위해 구축한 수학 벤치마크"
  - "285개의 고난도 정수형 정답(integer-answer) 수학 문제로 구성"
---

# FishMath Internal Benchmark

## 개요
Sakana AI에서 구축한 285개의 고난도 정수형 정답 수학 문제(integer-answer math problems) 벤치마크입니다. 주로 올림피아드 수준의 수학적 추론 능력을 평가하기 위해 AIMO3 프로젝트의 일환으로 만들어졌습니다. 평가에 사용된 모델(gpt-oss-120b-sft-aimo3-fishmath)은 증명된 수학적 추론 과정(no-tool 및 파이썬 도구 사용 방식 포함)으로 구성된 FishMath SFT 데이터로 학습되었습니다.

## 평가 방법
수학 문제에 대해 16번씩 샘플링하여 평가합니다.
- `pass@1`: 평균 단일 샘플링 정확도
- `Maj@8`: 8개 샘플링에 대한 다수결(majority-vote) 정확도
- `Pass@16`: 16개 샘플링 중 최소 1회 이상 문제를 해결한 비율

## 점수 해석
해당 지표들(%)이 높을수록 고난도의 수학적 문제에 대해 정확하고 일관된 추론을 할 수 있는 뛰어난 수학적 문제 해결 능력을 의미합니다.

## 한계와 비판
올림피아드 형식의 수학 추론에 특화되어 있으며, 정수 정답 형태의 문제만을 평가합니다. 증명 작성이나 수학 외의 성능에 대해서는 평가하지 않으며, 특정 훈련 데이터(FishMath SFT Data)와 도메인이 중첩될 가능성에 유의해야 합니다.
