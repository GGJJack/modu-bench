---
date: 2026-08-11
agent: profile-benchmark
status: completed
summary: "BBH 및 AlpacaEval 2.0 LC 벤치마크 상세 페이지 작성 완료"
---

## Todo
- [x] llm 도메인의 벤치마크 중 상세 페이지가 없는 항목 조사 및 페이지 작성 (bbh, alpacaeval-2-0-lc)
- [x] 필요한 경우 기관(organization) 스텁 페이지 생성

## 조사 내역
- 02:30  BBH 벤치마크 정보 조사  ← https://huggingface.co/datasets/Joschka/big_bench_hard
- 02:30  BBH 원본 논문 정보 조사  ← https://arxiv.org/abs/2210.09261
- 02:35  AlpacaEval 2.0 LC 정보 조사  ← https://github.com/tatsu-lab/alpaca_eval
- 02:35  AlpacaEval 2.0 LC 논문 정보 조사  ← https://arxiv.org/abs/2404.04475

## 수행한 작업
- [x] `src/content/benchmarks/bbh.md` 작성  ← https://huggingface.co/datasets/Joschka/big_bench_hard
- [x] `src/content/benchmarks/alpacaeval-2-0-lc.md` 작성  ← https://github.com/tatsu-lab/alpaca_eval
- [x] `src/content/organizations/tatsu-lab.md` 스텁 생성  ← https://github.com/tatsu-lab

## 판단 / 고민
- BBH(BIG-Bench Hard)는 BIG-Bench에서 모델들이 평균적인 인간 성능을 넘지 못한 23개 과제를 모아 놓은 벤치마크임. CoT 프롬프팅 적용 시 모델 성능 향상을 측정하는 데 주로 쓰임. 출처와 설명이 명확하여 `published` 상태로 생성.
- AlpacaEval 2.0 LC는 답변 길이 편향을 통제하여 챗봇 아레나와 높은 상관관계를 보이도록 개선된 지표임. 관련 정보가 충분하여 `published` 상태로 생성.
- 관련 기관 중 google-research는 이미 존재하여 생략하고, tatsu-lab에 대해서는 `draft` 상태로 스텁을 생성함.

## 이슈 제기
- (없음)
