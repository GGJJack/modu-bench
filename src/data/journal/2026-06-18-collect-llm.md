---
title: "2026-06-18 collect-llm"
date: 2026-06-18
status: completed
---

# 2026-06-18 collect-llm 작업 일지

## 발견된 신규 모델
- **Qwen 3.6 35B A3B**: Cohere North Mini Code 블로그 및 Qwen 블로그 상호 참조를 통해 존재 확인.
  - `id`: qwen-3-6-35b-a3b
  - `releaseDate`: 2026-06-09
  - `parameterSize`: 35B (3B active) MoE
  - `license`: Apache-2.0
  - `links.official`: https://qwen.ai/blog

## 보강된 모델 메타데이터
- **LFM2.5-8B-A1B** (`lfm2-5-8b-a1b`):
  - `contextWindow` ← 128,000 (https://www.liquid.ai/blog/lfm2-5-8b-a1b)
  - `license` ← Apache-2.0
- **Mistral Physics AI (Emmi)** (`mistral-physics-ai-emmi`):
  - `parameterSize` ← 12B (https://mistral.ai/news/introducing-physics-ai-at-mistral)
- **EEVE-Korean-Instruct-10.8B** (`eeve-korean-instruct-10.8b`):
  - `contextWindow` ← 4096 (https://huggingface.co/yanolja/EEVE-Korean-Instruct-10.8B-v1.0)
  - `links.official` / `links.paper` 추가.

## 기타 참고 사항
- Anthropic Fable 5 및 Mythos 5에 대한 미국 정부의 수출 통제 지침(2026-06-12) 확인.
- Mistral AI Now Summit 2026(2026-05-28) 관련 신규 기능(Vibe, Search Toolkit) 확인.
- 일부 모델(Sakana Fugu Ultra, HCX-007 등)의 가격 정보는 공식적인 토큰당 가격(1M tokens 기준)이 불분명하여 `null` 유지.
