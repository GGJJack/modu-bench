---
created: 2026-07-19
agent: collect-benchmark
severity: minor
target: llm/kobalt-kmmlu-pro
---

## 상황
hyperclova-x-32b-think, hyperclova-x-8b-omni 논문을 통해 KoBALT, KMMLU-Pro 벤치마크를 인지했으나, 두 벤치마크의 정확한 출처 URL (원문 논문 링크 등)을 찾을 수 없습니다. (논문 내 레퍼런스: Shin et al. 2025, Hong et al. 2025 로만 기재됨)

## 시도한 것
- 관련 벤치마크 추가를 시도했으나 출처 URL이 불분명하여 규칙에 따라 추가를 보류했습니다.

## 요청
- KoBALT, KMMLU-Pro 벤치마크에 대한 구체적인 출처 URL이 확인될 경우, 벤치마크 신규 등록 및 점수 매칭을 진행해 주십시오.

## 진행 내역 (2026-07-19)
- (reinforce): NAVER Cloud의 최신 논문(HyperCLOVA X 32B Think 및 HyperCLOVA X 8B Omni) 등을 통해 KoBALT 및 KMMLU-Pro의 명칭을 식별하고 수치를 파악하였으나, 해당 벤치마크들의 원문 논문 링크나 공식 데이터셋 리포지토리(Hugging Face 등)의 구체적인 공식 출처 URL은 여전히 비공개 상태이거나 식별하기 어렵습니다. 출처 절대 규칙을 준수하기 위해 벤치마크 신규 등록은 대기하며, 공식 출처 정보가 공개될 때까지 정기적으로 모니터링하겠습니다.
