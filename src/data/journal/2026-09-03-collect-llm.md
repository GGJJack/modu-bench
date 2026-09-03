---
date: 2026-09-03
agent: collect-llm
status: completed
summary: "LLM 모델 메타데이터 조사 및 보강 (DeepSeek-V3, Qwen2.5-Max)"
---

## Todo
- [x] 기존 LLM 모델 목록 조회
- [x] deepseek-v3-2 메타데이터 보강 (`parameterSize: 671B`, `links.huggingface`)
- [x] qwen-2-5-max 메타데이터 조사 및 보강 (`links.official` 및 `links.huggingface`)

## 조사 내역
- 19:10 deepseek-v3-2 파라미터 크기 확인 (671B) ← https://huggingface.co/deepseek-ai/DeepSeek-V3
- 19:15 qwen-2-5-max 공식 블로그 및 HF Demo 확인 ← https://qwenlm.github.io/blog/qwen2.5-max/

## 수행한 작업
- [x] `deepseek-v3-2` parameterSize 보강 (671B) 및 HF 링크 추가 ← https://huggingface.co/deepseek-ai/DeepSeek-V3
- [x] `qwen-2-5-max` links.huggingface 추가 ← https://huggingface.co/spaces/Qwen/Qwen2.5-Max-Demo

## 판단 / 고민
- deepseek-v3-2는 기존 등록된 ID로 parameterSize가 null 상태였으나 HuggingFace 모델 카드를 통해 671B로 확인되어 보강함.
- qwen-2-5-max는 파라미터 크기 및 컨텍스트 윈도우가 미공개 상태이므로 null로 유지하고 공식 HF Space/Demo 링크를 추가함.

## 이슈 제기
- (없음)
