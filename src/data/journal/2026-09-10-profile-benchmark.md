---
date: 2026-09-10
agent: profile-benchmark
status: completed
summary: "MATH-500 및 AIME 2024 벤치마크 상세 페이지 published 승격"
---

## Todo
- [x] MATH-500 상태를 draft에서 published로 승격
- [x] AIME 2024 상태를 draft에서 published로 승격

## 조사 내역
- 02:30 MATH-500 출처 확인 ← https://huggingface.co/datasets/HuggingFaceH4/MATH-500
- 02:35 AIME 2024 출처 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-R1

## 수행한 작업
- [x] `src/content/benchmarks/math-500.md` 상태 승격 및 출처 보강 ← https://huggingface.co/datasets/HuggingFaceH4/MATH-500
- [x] `src/content/benchmarks/aime-2024.md` 상태 승격 및 출처 보강 ← https://huggingface.co/deepseek-ai/DeepSeek-R1

## 판단 / 고민
- 앞서 `collect-benchmark` 가 집중적으로 업데이트했던 MATH-500, AIME-2024 벤치마크가 `status: draft` 상태로 남아있어 이를 `published` 로 승격시켰다.
- 관련 기관 정보(`hendrycks-lab`, `maa`)는 이미 스텁 형태로 존재함을 확인하여 추가 생성을 생략하였다.

## 이슈 제기
- (없음)
