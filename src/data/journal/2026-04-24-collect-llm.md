---
title: "LLM 모델 수집 및 보강 (2026-04-24)"
date: 2026-04-24
status: in-progress
---

## 작업 개요
- LLM 도메인 신규 모델 발견 및 기존 모델 메타데이터 보강.

## 발견한 신규 모델
1. **Gemini 3.1 Pro** (Google)
   - 출시일: 2026-04-22
   - Context Window: 2,000,000 tokens
   - 가격: Input $2.00 / Output $12.00 (per 1M tokens)
   - 출처: https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview
2. **Qwen2.5-72B** (Alibaba Cloud)
   - 출시일: 2024-09-19
   - Parameter Size: 72B
   - Context Window: 128,000 tokens
   - 출처: https://qwenlm.github.io/blog/qwen2.5/
3. **DeepSeek-V4-Pro** (DeepSeek)
   - 출시일: 2026-04-24
   - Context Window: 1,000,000 tokens
   - 가격: Input $1.74 / Output $3.48 (per 1M tokens)
   - 출처: https://api-docs.deepseek.com/quick_start/pricing

## 보강한 기존 모델
1. **DeepSeek-V3**
   - 가격 보강: Input $0.14 / Output $0.28 (per 1M tokens)
   - 출처: https://api-docs.deepseek.com/quick_start/pricing
2. **Solar Pro 3**
   - Context Window 보강: 32,000 tokens
   - 출처: https://www.upstage.ai/blog/en/solar-pro-3-0127

## 작업 로그
- 2026-04-24: 작업 시작. 기존 모델 목록 확인 및 신규 모델(Gemini 3.1 Pro, Qwen2.5-72B, DeepSeek-V4-Pro) 조사 완료.
