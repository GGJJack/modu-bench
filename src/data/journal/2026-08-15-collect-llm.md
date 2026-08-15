---
date: 2026-08-15
agent: collect-llm
status: completed
summary: "국가별 LLM (EXAONE 3.5 시리즈, Solar Pro Preview) 신규 등록 및 기존 LLM 메타데이터 보강"
---

## Todo
- [x] EXAONE 3.5 시리즈 (7.8B, 2.4B, 32B Instruct) 신규 수집 등록
- [x] Solar Pro Preview Instruct 신규 수집 등록
- [x] HyperCLOVA X 논문 출처 보강
- [x] Qwen2.5-72B HuggingFace / GitHub / Paper 링크 보강
- [x] Solar 10.7B GitHub 링크 보강

## 조사 내역
- 01:05 EXAONE 3.5 모델 시리즈 정보 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- 01:08 Solar Pro Preview 모델 정보 확인 ← https://huggingface.co/Upstage/SOLAR-PRO-Preview-Instruct
- 01:10 HyperCLOVA X Technical Report 출처 확인 ← https://arxiv.org/abs/2404.01954
- 01:12 Qwen 2.5 기술 보고서 및 리포지토리 확인 ← https://arxiv.org/abs/2412.15115

## 수행한 작업
- [x] `exaone-3-5-7-8b-instruct` 신규 등록 및 32k context/links 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- [x] `exaone-3-5-2-4b-instruct` 신규 등록 및 32k context/links 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
- [x] `exaone-3-5-32b-instruct` 신규 등록 및 32k context/links 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- [x] `solar-pro-preview-instruct` 신규 등록 및 4k context/links 보강 ← https://huggingface.co/Upstage/SOLAR-PRO-Preview-Instruct
- [x] `hyperclova-x` 논문 링크 추가 (`https://arxiv.org/abs/2404.01954`) ← https://arxiv.org/abs/2404.01954
- [x] `qwen-2.5-72b` HuggingFace/GitHub/Paper 링크 추가 ← https://arxiv.org/abs/2412.15115
- [x] `solar-10.7b` GitHub 링크 추가 ← https://github.com/UpstageAI/SOLAR-10.7B

## 판단 / 고민
- missions/llm.md 지침에 따라 세계 메이저 외 독자 LLM(한국 LG AI Research, Upstage, NAVER Cloud, 중국 Qwen)의 수집 및 보강을 우선 진행함.

## 이슈 제기
- (없음)
