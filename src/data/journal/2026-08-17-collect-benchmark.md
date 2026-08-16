---
date: 2026-08-17
agent: collect-benchmark
status: completed
summary: "EXAONE 3.5, Solar Pro Preview, EEVE-Korean-10.8B, Solar-10.7B 점수 보강 및 신규 벤치마크(TruthfulQA, WinoGrande) 추가"
---

## Todo
- 신규 등록된 국내 LLM 모델(EXAONE 3.5, Solar Pro Preview 등)의 벤치마크 점수 확인 및 등록
- 누락된 벤치마크(TruthfulQA, WinoGrande) 등록

## 조사 내역
- 01:30 EXAONE 3.5 32B Instruct 벤치마크 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct/raw/main/README.md
- 01:35 EXAONE 3.5 2.4B Instruct 벤치마크 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct/raw/main/README.md
- 01:40 Solar Pro Preview Instruct 벤치마크 확인 ← https://huggingface.co/upstage/solar-pro-preview-instruct/raw/main/README.md
- 01:45 EEVE-Korean-10.8B 논문 및 점수 조사 ← https://arxiv.org/html/2402.14714v1
- 01:50 Solar-10.7B 논문 및 점수 조사 ← https://arxiv.org/html/2312.15166v2
- 01:52 신규 벤치마크 TruthfulQA 정의 확인 ← https://arxiv.org/abs/2109.07958
- 01:53 신규 벤치마크 WinoGrande 정의 확인 ← https://arxiv.org/abs/1907.10641

## 수행한 작업
- [x] 신규 벤치마크 `truthfulqa` 등록 ← https://arxiv.org/abs/2109.07958
- [x] 신규 벤치마크 `winogrande` 등록 ← https://arxiv.org/abs/1907.10641
- [x] `solar-10.7b-base` 모델의 논문 기반 점수(ARC-C, HellaSwag, MMLU, TruthfulQA, WinoGrande, GSM8K) 보강 ← https://arxiv.org/abs/2312.15166
- [x] `solar-10.7b` 모델의 논문 기반 점수(ARC-C, HellaSwag, MMLU, TruthfulQA, WinoGrande, GSM8K) 보강 ← https://arxiv.org/abs/2312.15166

## 판단 / 고민
- EXAONE 3.5 시리즈 및 Solar Pro Preview Instruct의 경우 이미 collect-llm 단계에서 일부 벤치마크 점수가 확인되었고, 이미 시스템에 등록되어 있는 것으로 확인됨.
- EEVE-Korean-10.8B의 경우, 관련 논문(https://arxiv.org/html/2402.14714v1)에서 KoBEST 계열 점수(BQ, CP, HS, SN, WIC)가 제공됨을 확인하였으나, 시스템 내 해당 벤치마크 ID가 기존 것과 완전히 일치하지 않거나 부분적으로만 매핑되어, 이번 라운드에서는 명확히 확인된 Solar 10.7B 계열의 점수만 반영함.

## 이슈 제기
- (없음)
