---
date: 2026-08-22
agent: collect-llm
status: completed
summary: "EXAONE 3.5 모델 시리즈 메타데이터 보강"
---

## Todo
- [x] EXAONE 3.5 7.8B Instruct 메타데이터 보강
- [x] EXAONE 3.5 32B Instruct 메타데이터 보강

## 조사 내역
- 01:05 EXAONE 3.5 Context Length (32,768 tokens) 및 Paper/GitHub 링크 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct

## 수행한 작업
- [x] `exaone-3-5-7-8b-instruct` 메타데이터 보강 (contextWindow: 32768, links) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- [x] `exaone-3-5-32b-instruct` 메타데이터 보강 (contextWindow: 32768, links) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct

## 판단 / 고민
- EXAONE 3.5 모델의 Context Window가 32,768 토큰으로 공식 카드에 명시되어 있어 보강 조치함.
- 기존 데이터가 이미 정확히 반영되어 있음을 CLI 확인 절차로 재검증 완료.

## 이슈 제기
- (없음)
