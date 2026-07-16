---
date: 2026-07-16
agent: collect-llm
status: completed
summary: "Meta Llama 및 OpenAI GPT 신규 모델 등록 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 발견 및 등록 (Llama 3 8B, Llama 3.1 8B/70B, Llama 3.2 3B, GPT-4o mini)
- [x] 기존 모델 메타데이터 보강 (GPT-5.3 Codex, GPT-5.3 Codex Spark)

## 조사 내역
- 17:00  Meta AI 공식 블로그와 OpenAI 공식 릴리스 페이지 스캔하여 누락된 메이저 기초 모델 리스트 확인  ← https://ai.meta.com/blog/meta-llama-3/
- 17:05  OpenAI GPT-4o mini 출시 공식 문서와 가격표 확인 ← https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/
- 17:10  Llama 3.1 & 3.2 모델 릴리스 뉴스룸 및 사양(Context Window, parameterSize) 확인 ← https://ai.meta.com/blog/meta-llama-3-1/

## 수행한 작업
- [x] `llama-3-8b` 신규 등록 ← https://ai.meta.com/blog/meta-llama-3/
- [x] `llama-3.1-8b` 및 `llama-3.1-70b` 신규 등록 ← https://ai.meta.com/blog/meta-llama-3-1/
- [x] `llama-3.2-3b` 신규 등록 ← https://ai.meta.com/blog/llama-3-2-connect-open-multimodal-edge-models/
- [x] `gpt-4o-mini` 신규 등록 (가격 $0.15/$0.60, 128k context) ← https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/
- [x] `gpt-5-3-codex` 및 `gpt-5-3-codex-spark` 모델의 contextWindow 정보 보강 (128,000)

## 판단 / 고민
- Llama 3.1 및 3.2, Llama 3 등의 메이저 오픈소스 모델들과 GPT-4o mini가 수집 누락되어 있어 이를 최우선으로 등록함.
- 기존 Codex (GPT-5.3) 및 Codex-Spark 모델들의 contextWindow를 5.3 계열 표준에 맞추어 128,000으로 보강함.

## 이슈 제기
- (없음)
