---
benchmarkId: healthbench-hard
domain: llm
status: published
updated: 2026-10-21
sources:
  - https://huggingface.co/baichuan-inc/Baichuan-M3-235B
organization: baichuan-inc
highlights:
  - "60개국 262명의 실제 의사들이 구축한 의료 벤치마크"
  - "5,000개의 고충실도 다중 턴 임상 대화 포함"
---

# HealthBench-Hard

## 개요
HealthBench는 OpenAI의 권위 있는 의료 벤치마크로, 60개국 262명의 실제 의사들이 참여하여 구축하였습니다. 총 5,000개의 고충실도 다중 턴 임상 대화를 포함하고 있으며, 이 페이지는 해당 벤치마크 중 특히 난이도가 높은 문제들로 구성된 Hard 서브셋을 다룹니다.

## 평가 방법
실제 의료 환경을 모방한 고충실도의 다중 턴(multi-turn) 임상 대화 시나리오를 바탕으로 모델의 답변 정확도와 임상적 추론 능력을 평가합니다.

## 점수 해석
점수가 높을수록 복잡하고 전문적인 임상 상황에서 GPT-5.2 등 최첨단 모델 수준 또는 그 이상의 정확한 의료 추론과 응답 능력을 발휘함을 나타냅니다.

## 한계와 비판
벤치마크가 임상 대화에 초점을 맞추고 있으므로, 이미지(X-ray, MRI 등)나 다른 형태의 의료 데이터에 대한 멀티모달 진단 능력은 완전히 반영하지 못할 수 있습니다.
