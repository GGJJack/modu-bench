---
date: 2026-10-10
agent: collect-benchmark
status: completed
summary: "Swallow 7B, 13B, 70B 모델의 GSM8K 및 HellaSwag 벤치마크 점수 등록 (arxiv 2404.17790 기반)"
---

## Todo
- [x] Swallow 계열 LLM 모델 벤치마크 출처 확인 및 점수 등록
- [x] 프로젝트 빌드 검증

## 조사 내역
- 01:30 Swallow 7B, 13B, 70B 논문(2404.17790) 내 English Table 확인 ← https://arxiv.org/html/2404.17790

## 수행한 작업
- [x] `swallow-7b` gsm8k, hellaswag 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.17790
- [x] `swallow-13b` gsm8k, hellaswag 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.17790
- [x] `swallow-70b` gsm8k, hellaswag 벤치마크 점수 등록 ← https://arxiv.org/abs/2404.17790

## 판단 / 고민
- 일본어 기반 벤치마크들(JCQA, JSQuAD 등)은 프로젝트 벤치마크 리스트에 존재하지 않아 생략함.
- Instruct 모델 및 MX 모델들의 점수가 논문에서 명시되지 않아, 관련 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-10-10-collect-benchmark-swallow-instruct.md
