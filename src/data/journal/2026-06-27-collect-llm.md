---
date: 2026-06-27
agent: collect-llm
status: completed
summary: "OpenAI GPT-5.6 family (Sol, Terra, Luna) 신규 등록 및 기존 모델(Grok, Mistral, Claude) 링크 보강"
---

## Todo
- [x] 신규 LLM 발견 및 등록
- [x] 기존 모델 메타데이터 보강

## 조사 내역
- 01:15 OpenAI GPT-5.6 family (Sol, Terra, Luna) 프리뷰 공개 확인 ← https://openai.com/news/
- 01:20 GPT-5.6 Preview System Card 상세 내용 확인 ← https://deploymentsafety.openai.com/gpt-5-6-preview
- 01:25 Grok Imagine Video 1.5 공식 링크 확인 ← https://x.ai/news/grok-imagine-video-1-5
- 01:30 Mistral OCR 4 공식 링크 확인 ← https://mistral.ai/news/ocr-4/
- 01:35 Claude Fable 5, Mythos 5 공식 링크 확인 ← https://www.anthropic.com/news/claude-fable-5-mythos-5

## 수행한 작업
- [x] `gpt-5-6-sol` 신규 등록 (id, name, provider, releaseDate, license, official link) ← https://openai.com/index/previewing-gpt-5-6-sol/
- [x] `gpt-5-6-terra` 신규 등록 (id, name, provider, releaseDate, license, official link) ← https://openai.com/index/previewing-gpt-5-6-sol/
- [x] `gpt-5-6-luna` 신규 등록 (id, name, provider, releaseDate, license, official link) ← https://openai.com/index/previewing-gpt-5-6-sol/
- [x] `grok-imagine-video-1-5` (multimodal) links.official 보강 ← https://x.ai/news/grok-imagine-video-1-5
- [x] `mistral-ocr-4` (llm) links.official 보강 ← https://mistral.ai/news/ocr-4/
- [x] `claude-fable-5` (llm) links.official 보강 ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- [x] `claude-mythos-5` (llm) links.official 보강 ← https://www.anthropic.com/news/claude-fable-5-mythos-5

## 판단 / 고민
- GPT-5.6 시리즈의 context window와 pricing은 시스템 카드에 구체적으로 명시되지 않았고 (추론 노력에 따른 곡선으로 묘사), 공식 API 가격 페이지에도 아직 미등재 상태이므로 null로 유지함.
- Claude Fable 5와 Mythos 5는 수출 규제로 접근이 중단되었으나, 공식적으로 발표된 모델이므로 링크를 보강함.
- North Mini Code는 이미 최신 정보가 등록되어 있어 추가 수정하지 않음.

## 이슈 제기
- (없음)
