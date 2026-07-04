---
benchmarkId: flteval
domain: llm
status: draft
updated: 2026-07-04
sources:
  - https://github.com/mistralai/FLTEval
organization: mistralai
highlights:
  - "Formal Logic Theorem Evaluation"
  - "Docker-only evaluation harness for FLT Lean tasks"
---

# FLTEval

## 개요
FLTEval은 FLT Lean 태스크를 평가하기 위한 Docker 전용 평가 하네스입니다. 사용자가 diff를 제출하면, 태스크 이미지 내에서 diff를 적용하고 Lean/SafeVerify 검증을 수행하여 리포트를 생성합니다.

## 평가 방법
SWE-bench와 유사한 방식으로 동작합니다. 생성된 패치(diff)를 적용하고 성공 여부를 검증합니다.

## 점수 해석
점수는 pass@1 과 같은 메트릭으로 표현되며, 높을수록 좋습니다.
