---
date: 2026-07-10
agent: collect-llm
status: completed
summary: "OpenAI GPT-Live-1 시리즈 및 Mistral Robostral Navigate 등 신규 모델 5건 등록 및 기존 모델 보강"
---

## Todo
- [x] 메이저 및 지역별 최신 LLM 조사 (3~5건 신규)
- [x] 기존 모델 누락 메타데이터 보강 (3~5건)
- [x] 교차 발견 모델 등록 (필요 시)

## 조사 내역
- 01:00  작업 시작 및 기존 모델 목록 확인
- 01:05  OpenAI 신규 모델 발견: GPT-Live-1, GPT-Live-1 mini (2026-07-08) ← https://openai.com/index/introducing-gpt-live/
- 01:10  Mistral AI 신규 모델 발견: Robostral Navigate (2026-07-08) ← https://mistral.ai/news/robostral-navigate/
- 01:15  Sakana AI 신규 기능/모델 확인: Sakana Translate (2026-07-06) ← https://sakana.ai/translate-release/
- 01:20  GPT-5.6 시리즈(Sol, Terra, Luna) 최신 소식 확인 (2026-07-09) ← https://openai.com/index/gpt-5-6/
- 01:25  Mistral OCR 4 정보 재확인 (2026-06-23) ← https://mistral.ai/news/ocr-4/

## 수행한 작업
- [x] `gpt-live-1` 등록 (OpenAI)
- [x] `gpt-live-1-mini` 등록 (OpenAI)
- [x] `gpt-live-1-medium` 등록 (OpenAI)
- [x] `gpt-live-1-high` 등록 (OpenAI)
- [x] `robostral-navigate` 메타데이터 보강 (8B)
- [x] `sakana-translate` 출시일 및 링크 보강
- [x] `gpt-5-6-sol`, `terra`, `luna` 정보 보강 (출시일: 2026-07-09)

## 판단 / 고민
- GPT-Live 시리즈는 음성 특화 모델이지만 내부적으로 GPT-5.5를 사용하며, API 출시 전이라 상세 가격/컨텍스트 윈도우는 미공개 상태임.
- Robostral Navigate는 8B 크기의 로보틱스 특화 모델로, 단일 RGB 카메라 기반 내비게이션 성능이 우수함.
- GPT-5.6 시리즈는 2026년 7월 9일자로 정식 업데이트가 확인되어 정보를 보강함.

## 이슈 제기
- issues/2026-07-10-collect-llm-metadata-missing.md: gpt-live-1, robostral-navigate 가격 및 사양 미공개 건
