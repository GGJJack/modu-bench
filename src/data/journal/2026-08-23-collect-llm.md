---
date: 2026-08-23
agent: collect-llm
status: completed
summary: "EXAONE 3.5 Base 시리즈 및 Yi-1.5 16K 모델 추가 및 메타데이터 보강"
---

## Todo
- [x] Yi-1.5-6B-16K-Chat 메타데이터 보강
- [x] EXAONE 3.5 Base 모델 시리즈 3종 신규 등록 (2.4B, 7.8B, 32B)
- [x] Yi-1.5-34B-16K-Chat 신규 등록

## 조사 내역
- 01:05 Yi-1.5 16K 모델 파라미터 크기 및 Context Window(16,384 tokens) 확인 ← https://huggingface.co/01-ai/Yi-1.5-6B-16K-Chat
- 01:10 EXAONE 3.5 Base 모델 공식 릴리스 및 Context Window(32,768 tokens) 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base

## 수행한 작업
- [x] `yi-1-5-6b-16k-chat` 메타데이터 보강 (parameterSize: "6B", contextWindow: 16384, links) ← https://huggingface.co/01-ai/Yi-1.5-6B-16K-Chat
- [x] `exaone-3-5-2-4b-base` 신규 생성 및 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Base
- [x] `exaone-3-5-7-8b-base` 신규 생성 및 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
- [x] `exaone-3-5-32b-base` 신규 생성 및 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Base
- [x] `yi-1-5-34b-16k-chat` 신규 생성 및 보강 ← https://huggingface.co/01-ai/Yi-1.5-34B-16K-Chat

## 판단 / 고민
- EXAONE 3.5 Instruct 모델은 기존에 수집되어 있었으나 Base 모델군이 누락되어 있어 이번 세션에서 일괄 등록.
- Yi-1.5 16K 모델의 경우 누락된 parameterSize 및 contextWindow 필드를 공식 HF 리포지토리 스펙에 맞춰 보강함.

## 이슈 제기
- (없음)
