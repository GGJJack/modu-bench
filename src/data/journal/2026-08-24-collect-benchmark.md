---
date: 2026-08-24
agent: collect-benchmark
status: completed
summary: "EXAONE 3.5 Base 시리즈 (32B, 7.8B, 2.4B) 및 Yi-1.5-34B-16K 벤치마크 점수 등록"
---

## Todo
- [x] EXAONE 3.5 32B Base 점수 매칭
- [x] EXAONE 3.5 7.8B Base 점수 매칭
- [x] EXAONE 3.5 2.4B Base 점수 매칭
- [x] Yi-1.5 34B 16K Chat 점수 매칭

## 조사 내역
- 01:35 EXAONE 3.5 Base 모델군(32B, 7.8B, 2.4B) 논문 성능 표 확인 ← https://arxiv.org/html/2412.04862v2
- 01:38 동일 논문(EXAONE 3.5)에서 Yi 1.5 34B 비교 성능 표 확인 (community 출처로 간주) ← https://arxiv.org/html/2412.04862v2

## 수행한 작업
- [x] `exaone-3-5-32b-base` 점수 15건 등록 (GSM8K, MATH, HumanEval, MBPP, MMLU, KMMLU, GPQA, ARC-C, BBH, MT-Bench, LiveBench, Arena-Hard, IFEval, KoMT-Bench, LogicKor) ← https://arxiv.org/html/2412.04862v2
- [x] `exaone-3-5-7-8b-base` 점수 15건 등록 ← https://arxiv.org/html/2412.04862v2
- [x] `exaone-3-5-2-4b-base` 점수 15건 등록 ← https://arxiv.org/html/2412.04862v2
- [x] `yi-1-5-34b-16k-chat` 점수 15건 등록 (community 출처) ← https://arxiv.org/html/2412.04862v2

## 판단 / 고민
- EXAONE 3.5 논문에 기재된 Yi 1.5 34B 점수의 경우 official 출처가 아니므로 `community` 로 등록함.

## 이슈 제기
- (없음)
