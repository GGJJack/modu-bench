---
benchmarkId: deepswe-1-0
domain: llm
status: published
updated: 2026-08-28
sources:
  - https://datacurve.ai/research
  - https://arxiv.org/abs/2607.07946
  - https://github.com/datacurve-ai/deep-swe
organization: datacurve
paperUrl: https://arxiv.org/abs/2607.07946
highlights:
  - "113개의 원본, 긴 호흡의 소프트웨어 엔지니어링 과제 포함"
  - "활성 오픈소스 저장소 91개 기반으로 과제 구성"
  - "기존 벤치마크들의 짧은 코드 줄 수 및 검증 문제 해결"
---

# DeepSWE 1.0

## 개요
DeepSWE(Deep Software Engineering) 1.0은 최첨단 코딩 에이전트를 평가하기 위해 Datacurve에서 개발한 벤치마크입니다. 기존의 대표적인 코딩 벤치마크(예: SWE-Bench Pro)가 단일 파일 수정 위주이고 평균 120줄 정도의 코드만을 다루는 것에 비해, DeepSWE는 113개의 긴 호흡(long-horizon) 소프트웨어 엔지니어링 과제를 포함하고 있습니다. 이 과제들은 실제 활동 중인 91개의 오픈소스 저장소를 바탕으로 완전히 처음부터 작성되었습니다.

## 평가 방법
이 벤치마크는 코딩 에이전트가 격리된 환경에서 TypeScript, Go, Python, JavaScript, Rust 등 다양한 언어로 된 과제를 수행하도록 요구합니다. 평균 668줄의 코드가 포함된 참조 솔루션을 요구할 만큼 문제의 규모가 큽니다. 에이전트의 결과물은 프로그램 기반의 검증기(program-based verifiers)를 통해 자동으로 평가되며, 오탐률을 줄이도록 설계되었습니다.

## 의의 및 한계
DeepSWE 1.0은 기존 공공 벤치마크에서 점수가 비슷하게 나타나는 최상위 모델들 사이의 성능 차이를 명확하게 보여줍니다. 개발자들이 실제 체감하는 모델 간의 차이를 벤치마크 점수에 반영했다는 평가를 받습니다. 하지만 단일 정답이 정해져 있는 구조적 특성상, 벤치마크가 대중화될수록 데이터 오염(contamination)의 위험이나 모델이 정답에 과적합될 가능성이 있다는 지적도 있습니다.
