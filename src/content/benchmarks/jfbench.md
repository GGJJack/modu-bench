---
benchmarkId: "jfbench"
domain: "llm"
status: "published"
updated: 2026-10-26
sources:
  - "https://sakana.ai/namazu-api/"
organization: "sakana-ai"
---

# JFBench

## 개요
JFBench는 Preferred Networks에서 개발한, 일본어에서의 지시 추종(instruction-following) 능력을 측정하기 위한 벤치마크입니다. Sakana AI의 Namazu API 모델 평가 등에서 활용되었습니다.

## 평가 방법
제약 수(예: 1, 2, 4, 8개)가 포함된 프롬프트 샘플(각 200개 등)을 바탕으로, 모델이 주어진 복잡한 제약 조건을 일본어로 얼마나 정확하게 따르는지 평가합니다.

## 점수 해석
점수는 백분율(%)로 표기되며, 점수가 높을수록 일본어로 주어진 복잡한 지시나 제약 조건을 정확하게 수행하는 능력이 뛰어나다는 것을 의미합니다.

## 특징
일본어 특유의 표현을 반영하여 단순한 번역을 넘어서는 실제 일본어 지시 추종 능력을 검증할 수 있습니다.
