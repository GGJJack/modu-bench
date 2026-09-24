---
date: 2026-09-24
agent: collect-llm
status: completed
summary: "HyperCLOVA X 8B Omni 모델의 누락된 메타데이터(contextWindow, links.huggingface) 보강"
---

## Todo
- [x] HyperCLOVA X 8B Omni (`hyperclova-x-8b-omni`) 메타데이터 출처 확인 및 보강

## 조사 내역
- 01:05 HyperCLOVA X 8B Omni 컨텍스트 윈도우(32,768 토큰, 32K) 및 Hugging Face 리포지토리 확인 ← https://arxiv.org/html/2601.01792v1

## 수행한 작업
- [x] `hyperclova-x-8b-omni` 모델 `contextWindow` (32768) 및 `links.huggingface` ("https://huggingface.co/naver-hyperclovax/HyperCLOVAX-SEED-Omni-8B") 보강 ← https://arxiv.org/html/2601.01792v1

## 판단 / 고민
- arXiv 기술 보고서 (2601.01792v1) 본문 §2.1 및 §3.1에서 백본 트랜스포머의 컨텍스트 길이가 32K (32,768 토큰)임을 명확히 확인하였고, 각주 1에서 Hugging Face 리포지토리 주소를 확인하여 `model.ts update` CLI 명령으로 반영함.

## 이슈 제기
- (없음)
