---
date: 2026-07-18
agent: collect-benchmark
status: completed
summary: "NAVER Cloud HyperCLOVA X SEED 4B LLM 벤치마크 점수 등록"
---

## Todo
- [x] 어제 등록된 신규 모델들에 대한 점수 매칭 (LLM 도메인 한정)

## 조사 내역
- 01:30 NAVER Cloud 공식 기술 블로그(HyperCLOVA X SEED 4B)에서 KoNET 등 다수의 한국어/언어 벤치마크 지표 수집 ➔ https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b
- 01:35 Sakana AI Namazu 시리즈 점수는 기술 블로그에 명시되지 않고 기술 보고서 발간 예정임을 확인 ➔ https://sakana.ai/namazu-alpha/
- 01:40 Liquid AI LFM2.5-Audio 문서에 점수 없음 ➔ https://docs.liquid.ai/lfm/models/lfm25-audio-1.5b

## 수행한 작업
- [x] `llm` 도메인에 신규 벤치마크 등록 (KoNET, KoNET GED) ➔ https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b
- [x] `hyperclova-x-seed-4b` 모델 `llm` 도메인 벤치마크 점수 등록 (konet, konet-ged, gsm8k, aime-2025, gpqa, ifeval) ➔ https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b

## 판단 / 고민
- 현재 미션이 LLM 도메인 한정이므로, NAVER Cloud 블로그에서 확인된 수많은 비전/멀티모달 벤치마크(WeMath, DocVQA, Video-MME 등)는 추가하지 않고, 텍스트 추론 및 수학 역량 중심의 LLM 관련 벤치마크(GSM8K, AIME 2025, GPQA, IFEval, KoNET, KoNET GED)만 선별하여 등록함.
- Sakana AI 블로그에는 점수 차트만 있고 정확한 수치 없이 추후 테크 리포트 공개 예정이라 밝혀 추가하지 않음.
- Liquid AI 문서에는 구체적인 벤치마크 평가 수치가 명시되어 있지 않아 추가하지 않음.

## 이슈 제기
- (없음)
