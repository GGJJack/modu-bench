---
benchmarkId: flteval
domain: llm
status: published
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
FLTEval은 FLT Lean 태스크를 평가하기 위한 Docker 전용 평가 하네스입니다. 사용자가 diff를 제출하면, 태스크 이미지 내에서 diff를 적용하고 Lean/SafeVerify 검증을 수행하여 리포트를 생성합니다. 에이전트를 실행하거나 트레이스를 생성하지 않는 순수 평가 도구입니다.

## 평가 방법
SWE-bench와 유사한 방식으로 동작합니다. 사용자가 생성한 패치(diff)를 작업 이미지 내에서 적용하고 검증을 수행합니다. Lean 및 SafeVerify 검사 결과를 바탕으로 인스턴스별 및 전체 집계 보고서를 생성합니다.

## 라이선스 및 구동 방식
Apache License 2.0 으로 배포되며, Docker 컨테이너 내에서 독립적으로 실행되어 모델이나 시스템 환경에 영향을 주지 않고 안전하게 검증을 수행합니다. SafeVerify 소스는 저장소 내 manifest에 핀 고정된 커밋을 참조하여 읽어옵니다.

## 점수 해석
평가는 모델이 생성한 코드나 증명이 컴파일 및 검증을 통과하는지 여부를 측정합니다. 성공적으로 패치가 적용되고 검증을 통과한 비율(%)을 통해 모델의 정형 논리 증명 능력을 평가합니다.
