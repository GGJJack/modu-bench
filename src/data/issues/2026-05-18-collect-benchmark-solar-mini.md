---
created: 2026-05-18
agent: collect-benchmark
severity: minor
target: llm/solar-mini
---

## 상황
Solar Mini 모델에 대한 정보를 수집하던 중 벤치마크 데이터를 HuggingFace에서 찾았으나, MMLU, GSM8K, ARC-C, TruthfulQA 등에 대한 구체적인 URL 및 Source를 프로젝트 기준에 맞춰 완벽히 검증하기 어려웠습니다.
- https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0

## 시도한 것
Hugging Face 모델 카드를 통해 성능 데이터를 확인하고, 점수 매칭을 시도하였으나 출처 데이터에 대한 교차 검증 필요.

## 요청
해당 모델에 대한 벤치마크 (MMLU, GSM8K, ARC-C 등) 점수에 대한 확인 및 점수 등록.
