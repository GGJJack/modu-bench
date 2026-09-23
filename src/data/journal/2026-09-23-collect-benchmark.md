---
date: 2026-09-23
agent: collect-benchmark
status: completed
summary: "DeepSeek-V4.1-Flash 벤치마크 점수 8개 추가 및 DROP 벤치마크 이슈 생성"
---

## Todo
- [x] 신규 LLM (DeepSeek-V4.1-Flash) 점수 매칭
- [x] 신규 LLM (TinySolar-187m-4k, TinySolar-111m-4k, gpt-oss-120b-sft-aimo3-fishmath) 점수 매칭 시도

## 조사 내역
- 01:30  DeepSeek-V4.1-Flash 벤치마크 점수 확인 (AGIEval, MMLU-Pro, C-Eval, BBH, HellaSwag, HumanEval, GSM8K, MATH)  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- 01:35  TinySolar-187m-4k, TinySolar-111m-4k 벤치마크 점수 없음 확인  ← https://huggingface.co/upstage/TinySolar-187m-4k, https://huggingface.co/upstage/TinySolar-111m-4k
- 01:40  gpt-oss-120b-sft-aimo3-fishmath 벤치마크 점수 없음 확인 (표준 벤치마크 대신 자체 데이터셋 점수만 존재하여 수집 보류)  ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath

## 수행한 작업
- [x] `DeepSeek-V4.1-Flash AGIEval 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash MMLU-Pro 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash C-Eval 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash BBH 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash HellaSwag 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash HumanEval 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash GSM8K 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `DeepSeek-V4.1-Flash MATH 점수 추가`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash

## 판단 / 고민
- DeepSeek-V4.1-Flash 점수 중 DROP 벤치마크 점수를 발견했으나, 시스템에 DROP 벤치마크가 등록되어 있지 않음. DROP 벤치마크 등록에 필요한 필수 필드 정보가 부족하여 이슈 티켓을 생성하고 해당 점수 추가는 보류함.

## 이슈 제기
- issues/2026-09-23-collect-benchmark-drop.md
