---
title: "2026-06-16 collect-llm 작업 일지"
status: completed
---

# 작업 기록

## 신규 모델 발견
- **north-mini-code** (Cohere)
  - 내용: Cohere의 첫 번째 에이전트 코딩 모델. 30B (3B active) MoE 아키텍처. 256k 컨텍스트 지원.
  - URL: https://cohere.com/blog/north-mini-code
  - URL: https://huggingface.co/CohereLabs/North-Mini-Code-1.0
- **minimax-m3** (MiniMax)
  - 내용: MiniMax의 최신 플래그십 모델. 428B (23B active) MoE 아키텍처. 1M 컨텍스트 및 네이티브 멀티모달 지원.
  - URL: https://www.minimaxi.com/models/text/m3
  - URL: https://huggingface.co/MiniMaxAI/MiniMax-M3
  - URL: https://arxiv.org/abs/2606.13392
- **lfm2-5-8b-a1b** (Liquid AI)
  - 내용: Liquid AI의 LFM2.5 시리즈 8B 모델. 8B (1B active) MoE 아키텍처.
  - URL: https://www.liquid.ai/blog/lfm2-5-8b-a1b

## 기존 모델 보강
- **claude-fable-5** (Anthropic)
  - contextWindow: 200,000 → 1,000,000 (Artificial Analysis 및 공식 블로그 확인)
  - URL: https://artificialanalysis.ai/models/claude-fable-5
  - URL: https://www.anthropic.com/news/claude-fable-5-mythos-5
- **claude-mythos-5** (Anthropic)
  - contextWindow: 200,000 → 1,000,000 (Mythos-class 사양 일치 확인)
- **diffusion-gemma** (Google)
  - pricing: null → {input: 0, output: 0} (공식 발표 기준 무료 오픈 모델)
  - URL: https://deepmind.google/blog/diffusiongemma-4x-faster-text-generation/
