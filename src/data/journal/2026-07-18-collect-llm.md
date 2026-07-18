---
date: 2026-07-18
agent: collect-llm
status: completed
summary: "국가별/특화형 소버린 LLM 신규 수집 및 AI 주권 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 LLM 발견 및 등록 (`hyperclova-x-32b-think`, `hyperclova-x-8b-omni`, `rakuten-ai-3-0`, `claude-science`)
- [x] 기존 모델 메타데이터 보강 (`namazu-deepseek-v3-1-terminus`, `sakana-translate`, `eeve-korean-10.8b`)

## 조사 내역
- 12:15  NAVER Cloud의 국산 소버린 Omni-modal 모델인 HyperCLOVA X SEED 4B 기술 발표 블로그 내용 재확인하여 선행 모델 32B Think 및 8B Omni 언급 확인  ← https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b
- 12:20  Sakana AI의 일본 현지화 Namazu 시리즈 보도자료 분석하여 공동 벤치마크 평가 대상인 Rakuten AI 3.0 모델 기입 확인 ← https://sakana.ai/namazu-alpha/
- 12:25  Sakana AI 공식 블로그에서 Sakana Translate 세부 기능 특징 릴리스 데이터 분석 완료 ← https://sakana.ai/translate-release/
- 12:30  야놀자 EEVE-Korean-10.8B 모델의 Hugging Face 모델 카드 및 LLaMA 기반 아키텍처 스펙 재조사 및 확인 ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0

## 수행한 작업
- [x] `hyperclova-x-32b-think` 신규 등록 (Provider: NAVER Cloud, ReleaseDate: 2026-01-15, parameterSize: 32B, License: Proprietary) ← https://arxiv.org/abs/2601.03286
- [x] `hyperclova-x-8b-omni` 신규 등록 (Provider: NAVER Cloud, ReleaseDate: 2026-01-15, parameterSize: 8B, License: Proprietary) ← https://arxiv.org/abs/2601.01792
- [x] `rakuten-ai-3-0` 신규 등록 (Provider: Rakuten, ReleaseDate: 2026-03-20, License: Apache-2.0) ← https://corp.rakuten.co.jp/
- [x] `claude-science` 신규 등록 (Provider: Anthropic, ReleaseDate: 2026-07-03, License: Proprietary) ← https://www.anthropic.com/news/claude-science-ai-workbench
- [x] `namazu-deepseek-v3-1-terminus` 기존 모델 정보 보강 (parameterSize: "671B (37B active)") ← https://sakana.ai/namazu-alpha/
- [x] `sakana-translate` 기존 모델 정보 보강 (highlights 추가) ← https://sakana.ai/translate-release/
- [x] `eeve-korean-10.8b` 기존 모델 정보 보강 (contextWindow: 4096, links.official 추가) ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0

## 판단 / 고민
- AI 주권(Sovereign AI) 및 현지화(Localization) 트렌드에 힘입어 한국(HyperCLOVA X 32B Think, 8B Omni), 일본(Rakuten AI 3.0) 등 각 국가별 대표 소버린 LLM과 Anthropic의 과학 특화형 모델(Claude Science)을 발굴 및 보강하였습니다.
- 출처가 불분명한 파라미터 크기나 컨텍스트 윈도우는 AGENTS.md 규정에 따라 누락 처리하였고, 공식 블로그와 테크 리포트의 팩트를 기반으로만 등록하였습니다.

## 이슈 제기
- (없음)
