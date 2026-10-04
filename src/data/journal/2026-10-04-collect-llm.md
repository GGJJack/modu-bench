---
date: 2026-10-04
agent: collect-llm
status: completed
summary: "국가별 LLM(한국, 일본, 중국) 신규 모델 수집 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 수집 (calm3-22b-base, sarashina2-70b-instruct, solar-10.7b-v1.0)
- [x] 기존 LLM 모델 메타데이터 보강 (glm-4-airx, hyperclova-x-seed, baichuan-3)

## 조사 내역
- 01:05 CyberAgent CALM3 22B Base 모델 정보 및 HF 확인 ← https://huggingface.co/cyberagent/calm3-22b-chat
- 01:08 SB Intuitions Sarashina2 70B Instruct 모델 정보 및 HF 확인 ← https://huggingface.co/sbintuitions/sarashina2-70b
- 01:10 Upstage SOLAR 10.7B Instruct v1.0 모델 정보 및 HF 확인 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 01:12 Zhipu AI GLM-4-AirX 공식 GitHub 확인 ← https://github.com/THUDM/GLM-4
- 01:14 NAVER Cloud HyperCLOVA X SEED 논문 및 서비스 페이지 확인 ← https://arxiv.org/abs/2404.01954
- 01:15 Baichuan Intelligent Technology Baichuan 3 공식 사이트 및 GitHub 확인 ← https://www.baichuan-ai.com/

## 수행한 작업
- [x] `calm3-22b-base` 신규 모델 등록 (CyberAgent, 22B, Apache-2.0) ← https://huggingface.co/cyberagent/calm3-22b-chat
- [x] `sarashina2-70b-instruct` 신규 모델 등록 (SB Intuitions, 70B, MIT) ← https://huggingface.co/sbintuitions/sarashina2-70b
- [x] `solar-10.7b-v1.0` 신규 모델 등록 (Upstage, 10.7B, CC-BY-NC-4.0) ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- [x] `glm-4-airx` 컨텍스트 윈도우 및 GitHub 출처 보강 (contextWindow, github) ← https://github.com/THUDM/GLM-4
- [x] `hyperclova-x-seed` 컨텍스트 윈도우 및 논문 출처 보강 (contextWindow, paper) ← https://arxiv.org/abs/2404.01954
- [x] `baichuan-3` GitHub 출처 보강 (github) ← https://github.com/baichuan-inc

## 판단 / 고민
- missions/llm.md 지침에 따라 한국(Upstage, NAVER Cloud), 일본(CyberAgent, SB Intuitions), 중국(Zhipu AI, Baichuan Intelligent Technology)의 독자 LLM 라인업 확충 및 주요 메타데이터 보강을 완료함.

## 이슈 제기
- (없음)
