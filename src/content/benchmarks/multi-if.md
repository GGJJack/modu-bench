---
benchmarkId: multi-if
domain: llm
name: Multi-IF
nameKo: Multi-IF (다중 지시문 준수)
category: instruction
updated: 2026-07-12
status: draft
sources:
  - https://www.liquid.ai/blog/lfm2-5-230m
---

# Multi-IF

Multi-IF는 다회차 대화(Multi-turn) 환경에서의 지시문 준수 능력을 평가하는 벤치마크입니다.

## 개요
Liquid AI의 LFM 2.5 모델 발표 과정에서 주요 성능 지표로 활용되었습니다. 복잡한 다회차 대화 상황에서 모델이 사용자의 제약 사항과 지시를 얼마나 일관되게 따르는지 측정합니다.

## 출처 관련 참고사항
공식 발표에서 언급된 Hugging Face 데이터셋 경로(`HuggingFaceH4/multi_if`)는 현재 비공개(Private) 또는 권한 제한(401 Unauthorized) 상태로 확인됩니다. 따라서 상세한 데이터셋 구성이나 평가 방법론은 Liquid AI의 블로그 포스트를 주요 출처로 참조하고 있습니다.
