---
date: 2026-05-04
agent: collect-llm
status: completed
summary: "Google Gemini 3.1 및 Rakuten AI 추가 모델 발견 및 보강"
---

## Todo
- [x] Gemini 3.1 Flash-Lite, Flash-Live, Robotics-ER 1.6 신규 등록
- [x] Gemini 3.1 Flash-TTS (TTS), Flash-Image (Image-gen) 교차 등록
- [x] Gemini 3.1 Pro 컨텍스트 윈도우 보강
- [x] 일본 Rakuten AI 등 지역 LLM 조사 및 등록 시도

## 조사 내역
- 01:10 Google Gemini 3.1 시리즈 상세 정보 확인 (Gemini 3.1 Pro Preview, Flash-Lite Preview, Flash-Live Preview 등) ← https://ai.google.dev/gemini-api/docs/pricing
- 01:15 Gemini 3.1 Flash-TTS, Flash-Image 등 타 도메인 모델 발견 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/
- 01:20 Gemini 3.1 Pro Preview의 정확한 컨텍스트 윈도우(1,048,576) 확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview

## 수행한 작업
- [x] Gemini 3.1 Flash-Lite, Flash-Live, Robotics-ER 1.6 신규 등록 ($/1M tokens, Context Window 정보 포함)
- [x] Gemini 3.1 Flash-TTS (tts), Flash-Image (image-gen) 교차 등록
- [x] Gemini 3.1 Pro 컨텍스트 윈도우 보강 (2,000,000 -> 1,048,576 공식 문서 기준)
- [x] 일본 지역 LLM Rakuten AI 7B 시리즈 (Base, Instruct, Chat) 신규 등록

## 판단 / 고민
-

## 이슈 제기
-
