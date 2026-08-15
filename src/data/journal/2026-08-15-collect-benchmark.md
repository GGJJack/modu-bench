---
date: 2026-08-15
agent: collect-benchmark
status: completed
summary: "EXAONE 3.5 시리즈 및 Solar Pro Preview의 벤치마크 점수 등록 완료 (LiveBench 및 EQ-Bench 신규 정의 추가)"
---

## Todo
- [x] 신규 벤치마크 정의 등록 (LiveBench, EQ-Bench)
- [x] EXAONE 3.5 7.8B Instruct 점수 매칭
- [x] Qwen 2.5 7B 점수 매칭 (EXAONE 7.8B 논문 출처 기준)
- [x] EXAONE 3.5 2.4B Instruct 점수 매칭
- [x] EXAONE 3.5 32B Instruct 점수 매칭
- [x] Qwen 2.5 32B 점수 매칭 (EXAONE 32B 논문 출처 기준)
- [x] Solar Pro Preview Instruct 점수 매칭

## 조사 내역
- 01:35 EXAONE 3.5 7.8B Instruct 평가 점수 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- 01:40 EXAONE 3.5 2.4B Instruct 평가 점수 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
- 01:45 EXAONE 3.5 32B Instruct 평가 점수 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- 01:50 Solar Pro Preview Instruct 평가 점수 확인 ← https://huggingface.co/Upstage/SOLAR-PRO-Preview-Instruct

## 수행한 작업
- [x] 신규 벤치마크 `livebench` 추가 완료
- [x] 신규 벤치마크 `eqbench` 추가 완료
- [x] `exaone-3-5-7-8b-instruct` 점수 매칭 (MT-Bench, LiveBench, Arena-Hard, AlpacaEval, IFEval, KoMT-Bench, LogicKor) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- [x] `qwen-2.5-7b` 점수 매칭 (MT-Bench, LiveBench, Arena-Hard, AlpacaEval, IFEval, KoMT-Bench, LogicKor) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- [x] `exaone-3-5-2-4b-instruct` 점수 매칭 (MT-Bench, LiveBench, Arena-Hard, AlpacaEval, IFEval, KoMT-Bench, LogicKor) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
- [x] `exaone-3-5-32b-instruct` 점수 매칭 (MT-Bench, LiveBench, Arena-Hard, AlpacaEval, IFEval, KoMT-Bench, LogicKor) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- [x] `qwen-2.5-32b` 점수 매칭 (MT-Bench, LiveBench, Arena-Hard, AlpacaEval, IFEval, KoMT-Bench, LogicKor) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- [x] `solar-pro-preview-instruct` 점수 매칭 (MMLU, MMLU Pro, IFEval, ARC-C, GPQA, HellaSwag, EQ-Bench, BBH, MuSR, GSM8K, MBPP) ← https://huggingface.co/Upstage/SOLAR-PRO-Preview-Instruct

## 판단 / 고민
- 이전 사이클(`collect-llm`)에서 수집된 EXAONE 3.5 모델군과 Solar Pro Preview Instruct 모델의 벤치마크 점수를 Hugging Face 모델 카드 기준으로 수집함.
- EXAONE 3.5 모델 카드에 비교군으로 Qwen 2.5 (7B, 32B) 점수도 함께 기재되어 있어, 출처 규칙(`official`)에 부합하여 같이 기록함.
- 미등록된 벤치마크(LiveBench, EQ-Bench)는 신규 등록(`manage-benchmark create`)하여 점수를 매칭함.

## 이슈 제기
- (없음)
