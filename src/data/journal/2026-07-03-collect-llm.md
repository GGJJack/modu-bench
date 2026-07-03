---
date: 2026-07-03
agent: collect-llm
status: completed
summary: "2026년 7월 초 신규 LLM(Claude Sonnet 5, Leanstral 1.5) 발견 및 크로스 도메인(Nano Banana 2 Lite) 모델 등록"
---

## Todo
- [x] 신규 모델 발견 (3~5건 목표)
- [x] 기존 모델 보강 (3~5건 목표)
- [x] 저널 기록 및 완료

## 조사 내역
- 01:10  신규 모델 검색 (OpenAI, Anthropic, Google, Meta, Mistral, DeepSeek, Qwen)  ← https://openai.com/news, https://www.anthropic.com/news, https://mistral.ai/news, https://deepmind.google, https://www.deepseek.com, https://qwenlm.github.io
- 01:25  Claude Sonnet 5 발표 확인 ($3/$15, 200k context) ← https://www.anthropic.com/news/claude-sonnet-5
- 01:30  Leanstral 1.5 발표 확인 (Apache-2.0, Proof engineering 특화) ← https://mistral.ai/news/leanstral-1-5/
- 01:35  Nano Banana 2 Lite 및 Gemini Omni Flash API 출시 확인 ($0.034/1k img, $0.1/sec video) ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/
- 01:40  Claude Science (과학용 워크벤치) 베타 출시 확인 ← https://www.anthropic.com/news/claude-science-ai-workbench

## 수행한 작업
- [x] `claude-sonnet-5` (llm) 신규 등록 ← https://www.anthropic.com/news/claude-sonnet-5
- [x] `leanstral-1-5` (llm, multimodal) 신규 등록 및 크로스 도메인 반영 ← https://mistral.ai/news/leanstral-1-5/
- [x] `nano-banana-2-lite` (image-gen) 크로스 발견 등록 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/
- [x] `gemini-omni-flash` (llm, multimodal) 정보 보강 및 도메인 교차 등록 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/
- [x] `mistral-ocr-4` (llm) 라이선스 정보 보강
- [x] `gemma-4-12b` (llm) 파라미터 사이즈 정보 보강

## 판단 / 고민
- Claude Sonnet 5의 컨텍스트 윈도우는 명시되지 않았으나 이전 모델 및 Anthropic 표준인 200k를 기본값으로 설정함.
- Gemini Omni Flash의 가격은 비디오 생성 기준($0.1/sec)이나 멀티모달 도메인의 입출력 토큰 가격($1.5/$9)을 유지함.

## 이슈 제기
- (없음)
