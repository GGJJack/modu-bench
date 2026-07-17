---
date: 2026-07-17
agent: collect-llm
status: completed
summary: "국가별/특화형 소버린 LLM 신규 수집 및 Liquid, Sakana AI 기존 모델 보강 완료"
---

## Todo
- [x] 신규 LLM 발견 및 등록 (HyperCLOVA X SEED 4B, Namazu-DeepSeek-V3.1-Terminus, LFM2.5-Audio-1.5B, LFM2.5-Audio-1.5B-JP)
- [x] 기존 모델 메타데이터 보강 (Llama-3.1-Namazu-405B, Namazu-gpt-oss-120B, LFM2.5-VL-1.6B, LFM2.5-1.2B-JP)

## 조사 내역
- 01:05  NAVER Cloud의 국산 소버린 Omni-modal 모델인 HyperCLOVA X SEED 4B 기술 발표 블로그 내용 분석 및 확인  ← https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b
- 01:10  Sakana AI의 일본 현지화事後学習(post-training) 모델 시리즈 'Namazu' α 릴리스 정보 및 세부 모델 사양 확인 ← https://sakana.ai/namazu-alpha/
- 01:15  Liquid AI의 LFM2.5 계열의 오디오 전용 신규 및 파생 일본어 특화 모델(LFM2.5-Audio-1.5B 및 -JP) 확인 ← https://www.liquid.ai/models
- 01:20  Liquid AI 공식 개발자 문서에서 LFM2.5-Audio 모델들의 32K contextWindow 사양 및 docs 링크 확보 ← https://docs.liquid.ai/lfm/models/lfm25-audio-1.5b

## 수행한 작업
- [x] `hyperclova-x-seed-4b` 신규 모델 생성 (Provider: NAVER Cloud, ReleaseDate: 2026-06-23, parameterSize: 4B, License: Proprietary)
- [x] `namazu-deepseek-v3-1-terminus` 신규 모델 생성 (Provider: Sakana AI, ReleaseDate: 2026-03-24, License: Proprietary)
- [x] `lfm2-5-audio-1-5b` 신규 모델 생성 (Provider: Liquid AI, ReleaseDate: 2026-06-18, parameterSize: 1.5B, contextWindow: 32768, License: LFM Open License)
- [x] `lfm2-5-audio-1-5b-jp` 신규 모델 생성 (Provider: Liquid AI, ReleaseDate: 2026-06-18, parameterSize: 1.5B, contextWindow: 32768, License: LFM Open License)
- [x] `llama-3-1-namazu-405b` 모델 정보 보강 (parameterSize: "405B", contextWindow: 128000)
- [x] `namazu-gpt-oss-120b` 모델 정보 보강 (parameterSize: "120B", contextWindow: 128000)
- [x] `lfm2-5-vl-1-6b` 공식 문서 링크 상세화 (https://docs.liquid.ai/lfm/models/lfm25-vl-1.6b)
- [x] `lfm2-5-1-2b-jp` 공식 문서 링크 상세화 (https://docs.liquid.ai/lfm/models/lfm25-1.2b-jp)

## 판단 / 고민
- AI 주권(Sovereign AI) 및 현지화(Localization) 트렌드에 힘입어 한국(HyperCLOVA X SEED 4B), 일본(Sakana Namazu 및 Liquid JP) 등 각 국가별 대표 소버린 LLM과 오디오 특화 모델들을 집중적으로 발굴 및 보강하였습니다.
- 출처가 불분명한 파라미터 크기나 컨텍스트 윈도우는 AGENTS.md 규정에 따라 누락 처리하였고, 공식 블로그와 테크 리포트의 팩트를 기반으로만 등록하였습니다.

## 이슈 제기
- (없음)
