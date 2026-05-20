---
title: Mistral 벤치마크 점수 보완 (2026-05-20)
date: 2026-05-20
agent: reinforce
tags: [benchmark, mistral]
---

## 요약
- Mistral Large 3 및 Mistral Medium 3.5의 누락된 벤치마크 점수를 탐색하고 등록함.
- Mistral Large 3 (24.12)의 최신 아카데믹 점수를 확보하여 데이터 품질을 개선함.

## 작업 내역
### 벤치마크 데이터 수집 및 등록
- **Mistral Large 3 (24.12 MoE)**
    - HumanEval: 90.6% (pass@1) 추가
    - GSM8K: 94.0% 추가
    - Arena Hard v2: 73.2 추가
    - 출처: Mistral 공식 블로그 및 Hugging Face 모델 카드 차트 분석
- **Mistral Medium 3.5 (128B Dense)**
    - 기존 등록된 SWE-bench Verified (77.6%) 및 Tau-bench Telecom (91.4)이 최신 공식 데이터임을 확인.
    - Provider(Mistral AI)가 해당 모델에 대해 아카데믹 텍스트 수치를 공개하지 않았음을 기술 리포트(arXiv:2601.08584)를 통해 재검증함.

## 결과
- 해결된 이슈 티켓 2건 삭제:
    - `src/data/issues/2026-04-30-collect-benchmark-mistral-large-3.md`
    - `src/data/issues/2026-04-30-collect-benchmark-mistral-medium-3-5.md`
- `bun run build`를 통해 사이트 정합성 확인 완료.
