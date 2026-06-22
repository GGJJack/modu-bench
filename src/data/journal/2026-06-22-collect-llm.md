---
date: 2026-06-22
agent: collect-llm
status: completed
summary: "GLM-5.2, DeepSeek-V4, Mistral Medium 3.5 등 주요 모델 메타데이터 보강 및 Genie 3, Vibe Agent 등 신규 모델 8건 등록 완료"
---

## Todo
- [x] 신규 모델 조사 (OpenAI, Anthropic, Google, Meta, Mistral, 국내외 주요 기업)
- [x] 기존 모델 null 필드 보강 (GLM-5.2, DeepSeek-V4, Mistral, Liquid AI 등)
- [x] 발견된 정보 저널링 및 Registry 업데이트

## 조사 내역
- 01:10 작업 시작
- 01:15 Mistral AI 공식 문서 확인: Mistral Medium 3.5 ($1.5/$7.5, 256k), Mistral Small 4 ($0.1/$0.3, 256k, Apache-2.0) ← https://docs.mistral.ai/getting-started/models/
- 01:20 Mistral AI 공식 문서 확인: Voxtral TTS ($0.016/1k chars) ← https://mistral.ai/pricing/
- 01:25 DeepSeek 공식 문서 확인: DeepSeek-V4-Pro ($0.435/$0.87), DeepSeek-V4-Flash ($0.14/$0.28), 둘 다 1M 컨텍스트 ← https://api-docs.deepseek.com/quick_start/pricing/
- 01:30 Liquid AI 공식 블로그 확인: LFM2.5-8B-A1B (128k context) ← https://www.liquid.ai/blog/lfm2-5-8b-a1b
- 01:35 Liquid AI 공식 블로그 확인: LFM2.5 Retrievers (32k context) ← https://www.liquid.ai/blog/lfm2-5-retrievers
- 01:40 Zhipu AI 메인 페이지 확인: GLM-5.2 (1M context, Apache-2.0), AutoGLM (9B, 128k context) ← https://zhipuai.cn/
- 01:45 Anthropic 가격 페이지 확인: Claude Fable 5/Mythos 5 ($10/$50, 1M context), Claude Opus 4.8 ($5/$25, 1M context) ← https://www.anthropic.com/pricing/
- 01:50 Google DeepMind 확인: Genie 3 발표 (2026-05-19) ← https://deepmind.google/
- 01:55 xAI 공식 뉴스 확인: /goal 명령 및 Grok Build 관련 Vibe Agent 언급 ← https://x.ai/news/introducing-goal

## 수행한 작업
- [x] GLM-5.2: contextWindow(1M), license(Apache-2.0) 업데이트 ← https://zhipuai.cn/
- [x] DeepSeek-V4-Pro/Flash: pricing, contextWindow(1M) 업데이트 ← https://api-docs.deepseek.com/quick_start/pricing/
- [x] Mistral Medium 3.5/Small 4: pricing, contextWindow, license 업데이트 ← https://docs.mistral.ai/getting-started/models/
- [x] Voxtral TTS: pricing 업데이트 ← https://mistral.ai/pricing/
- [x] Liquid AI LFM2.5 계열: contextWindow 업데이트 ← https://www.liquid.ai/blog/lfm2-5-8b-a1b
- [x] Claude Fable 5/Mythos 5/Opus 4.8: pricing, contextWindow 업데이트 ← https://www.anthropic.com/pricing/
- [x] 신규 모델 등록: Genie 3 (Google), Qwen3-Embedding-0.6B (Alibaba), LFM2.5-350M-Base (Liquid AI), AutoGLM (2026) (Zhipu AI), Vibe Agent (Mistral AI), Mistral OCR 3 (LLM), GLM-5V-Turbo (Multimodal), Gemma 4 12B (Multimodal), Nano Banana (Image-gen), Veo (Multimodal), Lyria (Multimodal), Genie 3 (Multimodal)

## 수행한 작업 (Cross-discovery)
- [x] Multimodal: veo, lyria, genie-3-mm, glm-5v-turbo-mm, gemma-4-12b-mm 등록
- [x] Image-gen: nano-banana 등록

## 판단 / 고민
- Mistral OCR 3의 가격($2/1000 pages)은 input/output 토큰 방식과 달라 multimodal 도메인에 0.002로 임시 저장함 (1k pages 기준).
- AutoGLM은 기존 'autoglm' ID가 있어 'autoglm-2026'으로 최신 버전을 별도 등록하거나 기존 건을 보강함.

## 이슈 제기
- (없음)
