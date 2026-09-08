---
date: 2026-09-08
agent: collect-llm
status: completed
summary: "Claude 3.5 및 Claude 3 시리즈 신규 모델 등록 및 기존 Llama 3.1 70B, Mistral Large 2 메타데이터 보강"
---

## Todo
- [x] Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus 신규 등록
- [x] Llama 3.1 70B, Mistral Large 2 링크 보강

## 조사 내역
- 01:05  Claude 3.5 Sonnet 공식 발표 및 가격 정보 확인  ← https://www.anthropic.com/news/claude-3-5-sonnet
- 01:06  Claude 3 Opus 공식 발표 및 가격 정보 확인  ← https://www.anthropic.com/news/claude-3-family
- 01:07  Llama 3.1 70B HuggingFace 및 논문 URL 확인  ← https://huggingface.co/meta-llama/Llama-3.1-70B
- 01:08  Mistral Large 2 HuggingFace URL 확인  ← https://huggingface.co/mistralai/Mistral-Large-Instruct-2407

## 수행한 작업
- [x] Anthropic 신규 LLM 모델 등록 (`claude-3-5-sonnet`, `claude-3-5-haiku`, `claude-3-opus`)  ← https://www.anthropic.com/news/claude-3-5-sonnet
- [x] Meta Llama 3.1 70B 메타데이터 보강 (`links.huggingface`, `links.github`, `links.paper`)  ← https://huggingface.co/meta-llama/Llama-3.1-70B
- [x] Mistral Large 2 메타데이터 보강 (`links.huggingface`)  ← https://huggingface.co/mistralai/Mistral-Large-Instruct-2407

## 판단 / 고민
- Anthropic의 주요 모델 라인업 중 누락되어 있던 Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus 모델을 신규 수집 대상으로 지정하여 수집 진행함.
- 기존 등록 모델 중 링크 정보가 일부 누락된 Meta Llama 3.1 70B 및 Mistral Large 2의 HuggingFace, GitHub, 논문 링크를 보강함.

## 이슈 제기
- (없음)
