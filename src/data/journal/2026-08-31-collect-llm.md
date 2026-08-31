---
date: 2026-08-31
agent: collect-llm
status: completed
summary: "신규 LLM 3건 등록 및 기존 LLM 3건 메타데이터 보강"
---

## Todo
- [x] 신규 모델 등록: llm-jp-3-70b, swallow-mx-8x7b-instruct, swallow-ms-7b-instruct
- [x] 기존 모델 보강: swallow-70b, swallow-70b-instruct, llm-jp-3-70b-instruct

## 조사 내역
- 01:05 LLM-jp-3 70B 모델 카드 및 릴리스 정보 확인  ← https://llm-jp.nii.ac.jp/
- 01:06 Swallow MX 8x7B Instruct 릴리스 정보 확인  ← https://tokyotech-llm.github.io/
- 01:07 Swallow MS 7B Instruct 릴리스 정보 확인  ← https://tokyotech-llm.github.io/
- 01:08 Swallow 70B / 70B Instruct 파라미터 및 컨텍스트 윈도우 메타데이터 확인  ← https://tokyotech-llm.github.io/
- 01:09 LLM-jp-3 70B Instruct 파라미터 및 컨텍스트 윈도우 메타데이터 확인  ← https://llm-jp.nii.ac.jp/

## 수행한 작업
- [x] 신규 LLM 3건 등록 (`llm-jp-3-70b`, `swallow-mx-8x7b-instruct`, `swallow-ms-7b-instruct`)  ← https://llm-jp.nii.ac.jp/, https://tokyotech-llm.github.io/
- [x] 기존 LLM 3건 보강 (`swallow-70b` parameterSize/contextWindow/links, `swallow-70b-instruct` parameterSize/contextWindow/links, `llm-jp-3-70b-instruct` parameterSize/contextWindow/links)  ← https://tokyotech-llm.github.io/, https://llm-jp.nii.ac.jp/

## 판단 / 고민
- 일본 지역 독자 LLM 라인업 (LLM-jp-3, Swallow 시리즈) 확충 및 주요 70B/MoE/7B 모델의 메타데이터 (parameterSize, contextWindow, HF 및 GitHub 링크) 보강 진행

## 이슈 제기
- (없음)
