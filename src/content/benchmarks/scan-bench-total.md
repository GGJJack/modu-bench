---
benchmarkId: scan-bench-total
domain: llm
status: published
updated: 2026-10-22
sources:
  - https://huggingface.co/baichuan-inc/Baichuan-M3-235B
organization: baichuan-inc
highlights:
  - "임상 의사 결정 벤치마크"
---

# SCAN-bench (종합)

## 개요
SCAN-bench는 환자 진료부터 최종 진단까지의 전체 임상 워크플로우를 시뮬레이션하는 End-to-End 임상 의사 결정 벤치마크입니다.

단순한 질의응답이나 역할극에서 벗어나, 모델이 자발적으로 필수 임상 정보를 수집하고 논리적인 의학적 추론 경로를 구성할 수 있는지 평가합니다.

## 평가 방법
평가는 주로 세 가지 주요 차원(Clinical Inquiry, Laboratory Testing, Diagnosis)으로 나누어져 진행되며, 의학적 환각(Hallucination) 현상을 체계적으로 억제하는지도 확인합니다.

Baichuan-M3 모델 발표와 함께 소개되었으며, 전체 벤치마크와 데이터셋은 추후 오픈소스로 공개될 예정입니다.

## 점수 해석
환자의 증상 및 진단 과정 전반에 걸친 종합적인 점수를 평가하며, 높은 점수일수록 실제 의료 환경에서의 실용성과 신뢰성이 뛰어남을 의미합니다.

## 한계와 비판
아직 전체 데이터가 공개되지 않았으며, 특정 모델(Baichuan-M3)의 성능 입증에 주로 사용된 초기 벤치마크라는 한계가 있습니다.
