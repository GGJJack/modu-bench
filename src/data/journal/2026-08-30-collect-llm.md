---
date: 2026-08-30
agent: collect-llm
status: completed
summary: "신규 LLM 3건 등록 및 기존 LLM 3건 메타데이터 보강"
---

## Todo
- [x] 신규 모델 등록: swallow-70b-instruct, swallow-70b, llm-jp-3-70b-instruct
- [x] 기존 모델 보강: bge-m3, exaone-3-5-7-8b-instruct, yi-1-5-34b-chat

## 조사 내역
- 01:05  bge-m3 메타데이터 확인 (contextWindow: 8192, parameterSize: 567M)  ← https://huggingface.co/BAAI/bge-m3
- 01:06  EXAONE 3.5 7.8B Instruct 파라미터 정보 확인 (7.8B / 6.98B non-embed)  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- 01:07  Yi-1.5-34B-Chat 컨텍스트 윈도우 확인 (32768 tokens)  ← https://huggingface.co/01-ai/Yi-1.5-34B-Chat
- 01:08  Swallow 70B / 70B Instruct 릴리스 정보 확인  ← https://tokyotech-llm.github.io/
- 01:09  LLM-jp-3 70B Instruct 릴리스 정보 확인  ← https://llm-jp.nii.ac.jp/

## 수행한 작업
- [x] 신규 LLM 3건 등록 (`swallow-70b-instruct`, `swallow-70b`, `llm-jp-3-70b-instruct`)  ← https://tokyotech-llm.github.io/, https://llm-jp.nii.ac.jp/
- [x] 기존 LLM 3건 보강 (`bge-m3` contextWindow/parameterSize, `exaone-3-5-7-8b-instruct` parameterSize, `yi-1-5-34b-chat` contextWindow)  ← https://huggingface.co/BAAI/bge-m3, https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct, https://huggingface.co/01-ai/Yi-1.5-34B-Chat

## 판단 / 고민
- 일본/동아시아 영역 독자 LLM 라인업(Swallow, LLM-jp) 보충 및 기존 주요 LLM null 필드 보강 진행

## 이슈 제기
- (없음)
