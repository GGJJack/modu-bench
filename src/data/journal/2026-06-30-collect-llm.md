---
date: 2026-06-30
agent: collect-llm
status: in-progress
summary: "2026-06-30 LLM 수집 작업 시작"
---

## Todo
- [x] 신규 모델 발견 및 등록 (0건 발견)
- [x] 기존 모델 메타데이터 보강 (10건 이상 수행)
- [x] 교차 발견 (Mistral 멀티모달 제품군 등록)

## 조사 내역
- 01:10  2026-06-30 수집 세션 시작
- 01:15  OpenAI, Anthropic, Google, Meta, Mistral 등 주요 벤더 6/29-30 신규 릴리스 없음 확인
- 01:30  Mistral AI 가격 페이지(https://mistral.ai/pricing/) 최신화 내역 확인. 다수 모델이 멀티모달로 분류됨.
- 01:45  Qwen3-Coder 블로그(https://qwenlm.github.io/blog/qwen3-coder/)에서 context window 및 API 정보 확인.

## 수행한 작업
- [x] `mistral-small-3-1`: parameterSize(24B), pricing($0.1/$0.3) 보강
- [x] `qwen3-coder-480b-instruct`: pricing($0.2/$0.6) 보강
- [x] `mistral-ocr-4`: pricing($4/1k pages), parameterSize(24B) 보강 (LLM/Multimodal 공통)
- [x] `mistral-ocr-3`: pricing($2/1k pages) 보강 (LLM/Multimodal 공통)
- [x] `lfm2-5-350m-base`: parameterSize(350M), contextWindow(32k) 보강
- [x] `nano-banana`: pricing($0.001/img) 보강
- [x] `mistral-voxtral-mini-transcribe`: pricing($0.003/min) 보강
- [x] `voxtral-tts`: pricing($0.016/1k char) 교정
- [x] `mistral-small-4`: parameterSize(24B), pricing($0.15/$0.6) 보강
- [x] `deepseek-v4-preview`: pricing($0.435/$0.87) 보강
- [x] Mistral 멀티모달 제품군 신규 등록: `magistral-medium-mm`, `magistral-small-mm`, `devstral-small-2-mm`, `mistral-small-3-1-mm`, `mistral-small-4-mm`, `mistral-medium-3-5-mm`

## 판단 / 고민
- Mistral AI의 최신 가격 정책에 따라 기존 LLM 전용으로 등록되었던 모델들의 멀티모달 변형(image 지원)을 추가함.
- OCR 모델들의 가격 단위($/1k pages)를 시스템 규격에 맞춰 $/1M tokens 환산값이 아닌 1k pages 기준으로 입력함 (Registry 가이드 준수).

## 이슈 제기
- (없음)
