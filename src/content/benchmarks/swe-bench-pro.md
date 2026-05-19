---
benchmarkId: swe-bench-pro
domain: llm
status: published
updated: 2026-05-14
sources:
  - "https://github.com/scaleapi/swe-bench-pro"
  - https://labs.scale.com/leaderboard/swe_bench_pro_public
  - https://labs.scale.com/papers/swe_bench_pro
organization: scale-ai
paperUrl: https://labs.scale.com/papers/swe_bench_pro
highlights:
  - "오픈소스 및 프라이빗 코드베이스를 활용한 긴 컨텍스트 소프트웨어 엔지니어링 벤치마크"
  - "데이터 오염(Data Contamination)을 방지하기 위해 GPL 라이선스 저장소 및 프라이빗 데이터 사용"
  - "실제 개발자 워크플로우를 반영한 엄격한 환경(Docker) 및 요구사항 제공"
---

# SWE-bench Pro

## 개요
SWE-bench Pro는 AI 에이전트의 소프트웨어 엔지니어링 능력을 보다 현실적이고 엄격하게 평가하기 위해 Scale AI에서 개발한 벤치마크입니다. 기존 벤치마크들의 한계점인 데이터 오염, 제한적인 과제 다양성, 과도하게 단순화된 문제, 그리고 불안정한 테스트 환경 문제를 해결하기 위해 설계되었습니다. B2B 서비스, 개발자 도구 등 다양한 실제 복잡한 코드베이스의 문제를 다룹니다.

## 평가 방법
평가는 전문 엔지니어가 구축한 재현 가능한 Docker 환경에서 이루어집니다. 각 문제는 버그 수정이나 기능 추가를 요구하며, 전문가가 작성한 요구사항 및 컨텍스트를 제공합니다. 모델이 제출한 코드는 다음 두 가지 엄격한 조건을 모두 만족해야 "해결(Resolved)"된 것으로 간주됩니다.
1. 문제 해결(Issue Resolution): 원래 코드에서 실패했던 "fail-to-pass" 테스트가 모델의 수정 후 통과해야 합니다.
2. 회귀 방지(No Regressions): 기존에 정상 작동하던 "pass-to-pass" 테스트들이 모델의 수정 후에도 여전히 통과해야 합니다.

## 데이터셋 구성
벤치마크는 총 1865개의 과제로 구성되며 세 가지 서브셋으로 나뉩니다:
* **Public Set (731개)**: GPL 같은 강력한 카피레프트 라이선스를 사용하는 오픈소스 저장소로 구성되어 모델 학습 데이터에 포함되었을 확률(데이터 오염)을 줄였습니다.
* **Private Set (276개)**: 스타트업 파트너들로부터 확보한 비공개 독점 코드베이스로 구성되어, 일반화 능력을 테스트하는 최고의 난이도를 제공합니다.
* **Held-out Set (858개)**: 향후 분석과 내부 평가를 위해 비공개로 유지되는 카피레프트 기반 저장소 세트입니다.

## 점수 해석
주요 지표는 **Resolve Rate(해결률)**입니다. 이는 모델이 성공적으로 해결한 과제의 비율(%)을 나타냅니다. 기존 SWE-Bench Verified에서 최고 모델들이 70% 이상의 점수를 기록한 반면, SWE-Bench Pro의 Public Set에서는 약 23% 수준으로 점수가 크게 하락하여 이 벤치마크가 훨씬 더 높은 난이도와 현실성을 갖추고 있음을 보여줍니다. 프라이빗 세트에서의 점수는 이보다 더 낮게 나타납니다.
