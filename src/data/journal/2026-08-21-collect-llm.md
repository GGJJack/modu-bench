---
date: 2026-08-21
agent: collect-llm
status: completed
summary: "LLM 기존 모델 메타데이터 보강 (EXAONE 3.5, Solar, HyperCLOVA X SEED 4B)"
---

## Todo
- [x] 기존 LLM 모델 목록 조회
- [x] EXAONE 3.5 모델 메타데이터 보강 (exaone-3-5-2-4b-instruct, exaone-3-5-7-8b-instruct, exaone-3-5-32b-instruct)
- [x] Solar 모델 메타데이터 보강 (solar-10.7b, solar-pro-preview-instruct)
- [x] HyperCLOVA X SEED 4B 메타데이터 보강 (hyperclova-x-seed-4b)
- [x] 저널 정리 및 완료 처리

## 조사 내역
- 01:05 EXAONE 3.5 모델 스펙 및 HF 리포 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- 01:07 Solar Pro Preview 모델 스펙 및 HF 리포 확인 ← https://huggingface.co/upstage/solar-pro-preview-instruct
- 01:10 HyperCLOVA X SEED 4B 기술 블로그 확인 ← https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b

## 수행한 작업
- [x] `exaone-3-5-2-4b-instruct` contextWindow=32768 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-2.4B-Instruct
- [x] `exaone-3-5-7-8b-instruct` contextWindow=32768 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- [x] `exaone-3-5-32b-instruct` contextWindow=32768 보강 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- [x] `solar-pro-preview-instruct` contextWindow=4096 보강 ← https://huggingface.co/upstage/solar-pro-preview-instruct
- [x] `hyperclova-x-seed-4b` contextWindow=32768 보강 ← https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b

## 판단 / 고민
- EXAONE 3.5 모델들의 contextWindow 는 공식 HF 카드 및 논문에서 32,768 (32K)로 확인되어 보강함.
- Solar Pro Preview Instruct 의 contextWindow 는 official HF 페이지에 max context length 4K 로 명시되어 4096으로 보강함.
- HyperCLOVA X SEED 4B contextWindow 는 Naver Clova Tech Blog 에 명시된 32K(32,768)로 보강함.

## 이슈 제기
- (없음)
