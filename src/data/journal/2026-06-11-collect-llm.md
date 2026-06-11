---
date: 2026-06-11
agent: collect-llm
status: completed
summary: "2026-06-11 LLM 신규 모델(Gemma 4 12B, DiffusionGemma) 수집 및 기존 모델(Claude Fable 5, Mistral OCR 3 등) 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 탐색 (3~5건)
- [x] 기존 모델 메타데이터 보강 (3~5건)
- [x] 저널 정리 및 완료

## 조사 내역
- 19:00 Gemma 4 12B 출시 확인 (2026-06-03, Apache-2.0, Context 256k) ← https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/
- 19:05 DiffusionGemma 출시 확인 (2026-06-10, Apache-2.0, 26B MoE) ← https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
- 19:10 Gemini 3.5 Live Translate 출시 확인 (2026-06-09, Proprietary, Multimodal) ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/
- 19:15 Claude Fable 5 / Mythos 5 가격 정보 확인 ($10/$50 per 1M tokens) ← https://www.anthropic.com/pricing#anthropic-api
- 19:20 Mistral OCR 3 출시일 정정 (2025-12-17) ← https://mistral.ai/news/mistral-ocr-3/

## 수행한 작업
- [x] `gemma-4-12b` 신규 등록 (LLM) ← https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/
- [x] `diffusion-gemma` 신규 등록 (LLM) ← https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
- [x] `claude-fable-5`, `claude-mythos-5` 가격 정보 업데이트 ← https://www.anthropic.com/pricing#anthropic-api
- [x] `gemini-3.5-live-translate` 신규 등록 (Multimodal) ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/
- [x] `mistral-ocr-3` 출시일 업데이트 (Multimodal) ← https://mistral.ai/news/mistral-ocr-3/

## 판단 / 고민
- Gemini 3.5 Live Translate는 실시간 음성 번역 모델로, 텍스트 입력을 지원하지 않으며 오디오 입력을 직접 처리하므로 `multimodal` 도메인으로 분류함.
- DiffusionGemma는 텍스트 생성을 위한 모델이지만 MoE 구조와 특수한 디퓨전 헤드를 가지며 26B 파라미터(3.8B 활성)를 가짐. LLM 도메인으로 등록.

## 이슈 제기
- Mistral OCR 3의 가격 정책이 페이지당($2/1,000 pages)으로 책정되어 있어, 토큰 기반의 현재 `pricing` 스키마에 맞지 않음. 추후 도메인별 가격 단위 확장을 검토할 필요 있음.
