---
date: 2026-08-05
agent: collect-llm
status: completed
summary: "국가별 독자 LLM(한국 Upstage Solar 및 LG EXAONE, 일본 Sakana AI, 중국 01.AI/Yi 및 THUDM/GLM 등) 신규 5개 모델 등록 및 기존 5개 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 수집 및 등록 5건 (solar-open2-250b, solar-open-100b, k-exaone-2-0-750b-a37b, tinyswallow-1-5b-instruct, yi-1-5-34b)
- [x] 기존 모델 보강 5건 (yi-1-5-34b-chat, baichuan2-13b-chat, baichuan2-7b-chat, exaone-3.0-2.4b-instruct, glm-4-9b-chat)

## 조사 내역
- 17:20 작업 시작 및 임무 포커스 대조
- 17:25 Upstage 신규 MoE 모델 2종(Solar Open 2 250B 및 Solar Open 100B) 사양 대조 및 공식 출처 확보 ← https://huggingface.co/upstage/Solar-Open2-250B, https://huggingface.co/upstage/Solar-Open-100B
- 17:35 LG AI Research의 대규모 신규 모델 K-EXAONE 2.0 750B 사양 대조 및 공식 출처 확보 ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B
- 17:40 Sakana AI의 TinySwallow-1.5B-Instruct 및 01.AI의 Yi-1.5-34B Base 모델 사양 대조 ← https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct, https://huggingface.co/01-ai/Yi-1.5-34B
- 17:45 기존 소버린 모델들(Yi-1.5-34B-Chat, Baichuan2, EXAONE 3.0 2.4B, GLM-4)의 공식 논문 및 가이드 주소 대조

## 수행한 작업
- [x] `solar-open2-250b` 신규 모델 추가 (250B, Context 1M, Upstage Solar License) ← https://huggingface.co/upstage/Solar-Open2-250B
- [x] `solar-open-100b` 신규 모델 추가 (102B, Context 128K, Upstage Solar License) ← https://huggingface.co/upstage/Solar-Open-100B
- [x] `k-exaone-2-0-750b-a37b` 신규 모델 추가 (750B, Context 256K, Apache-2.0) ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B
- [x] `tinyswallow-1-5b-instruct` 신규 모델 추가 (1.5B, Context 32K, Apache-2.0) ← https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct
- [x] `yi-1-5-34b` 신규 모델 추가 (34B, Context 4K, Apache-2.0) ← https://huggingface.co/01-ai/Yi-1.5-34B
- [x] `yi-1-5-34b-chat` 기존 모델 정보 보강 (links.paper 추가) ← https://arxiv.org/abs/2403.04652
- [x] `baichuan2-13b-chat` 기존 모델 정보 보강 (links.paper 추가) ← https://arxiv.org/abs/2309.10305
- [x] `baichuan2-7b-chat` 기존 모델 정보 보강 (links.paper 추가) ← https://arxiv.org/abs/2309.10305
- [x] `exaone-3.0-2.4b-instruct` 기존 모델 정보 보강 (links.official, links.huggingface, links.paper 추가) ← https://arxiv.org/abs/2408.03541
- [x] `glm-4-9b-chat` 기존 모델 정보 보강 (links.paper, links.github 추가) ← https://arxiv.org/abs/2406.12793

## 판단 / 고민
- `missions/llm.md`에 맞춰 한국(Upstage, LG), 일본(Sakana AI), 중국(01.AI, Zhipu/THUDM)의 대표적인 독자 LLM 라인업을 강화했습니다.
- 특히 최근 2026년 7월에 릴리스된 Upstage Solar Open 2 250B 및 LG K-EXAONE 2.0 750B와 같은 최신 국가별 독자(Sovereign) LLM 기점의 데이터 수집을 완결함으로써 품질을 극대화했습니다.

## 이슈 제기
- (없음)
