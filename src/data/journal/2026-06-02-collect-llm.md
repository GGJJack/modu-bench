---
title: 2026-06-02 collect-llm 작업 일지
status: completed
updated: 2026-06-02
---

# 2026-06-02 collect-llm

## 수집 대상 후보
- [x] Gemini 3.5 Pro (Google) - 6월 1일 출시, 메타데이터 보강
- [x] Mistral 관련 신규 모델 탐색 및 보강
- [x] Anthropic 관련 기존 모델 메타데이터 확인 (최신 데이터 유지 중)
- [x] Google Gemini 2.5/3.1 시리즈 메타데이터 보강

## 작업 상세
- **Gemini 3.5 Pro (Google)** 보강: contextWindow(2,000,000) 업데이트. (출처: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- **Gemini 2.5 Pro (Google)** 보강: contextWindow(2,000,000), pricing(input: 1.25, output: 10) 업데이트. (출처: https://ai.google.dev/pricing)
- **Gemini 2.5 Flash (Google)** 보강: contextWindow(1,000,000), pricing(input: 0.3, output: 2.5) 업데이트. (출처: https://ai.google.dev/pricing)
- **Nano Banana (Google)** 보강: contextWindow(128,000), pricing(input: 0.1, output: 0.4) 업데이트. (출처: https://ai.google.dev/pricing)
- **Mistral Medium 3.5 (Mistral AI)** 보강: parameterSize(128B), contextWindow(256,000), pricing(input: 1.5, output: 7.5) 업데이트. (출처: https://mistral.ai/pricing/, https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/)
- **Magistral Medium 1.2 (Mistral AI)** 보강: contextWindow(128,000) 업데이트. (출처: https://docs.mistral.ai/getting-started/models/)
- **Magistral Small 1.2 (Mistral AI)** 신규 등록: 2025-09 출시(v25.09), 128k context, $0.5/$1.5 pricing. (출처: https://mistral.ai/pricing/)
- **Mistral Moderation 2 (Mistral AI)** 신규 등록: 2026-03 출시(v26.03), 128k context, $0.1/$0.1 pricing. (출처: https://mistral.ai/pricing/)
- **Mistral Small Creative (Mistral AI)** 신규 등록: 2025-12 출시(v25.12), 128k context, $0.1/$0.3 pricing. (출처: https://mistral.ai/pricing/)
- **Gemini 3 Pro Image (Google)** 신규 등록: 2026-04-22 출시, $2/$12 pricing. (출처: https://ai.google.dev/pricing)
- **Gemini 3.1 Flash Image (Google)** 신규 등록: 2026-04-22 출시, $0.5/$3 pricing. (출처: https://ai.google.dev/pricing)
