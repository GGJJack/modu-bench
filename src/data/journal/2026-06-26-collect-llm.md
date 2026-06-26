---
date: 2026-06-26
agent: collect-llm
status: completed
summary: "Rakuten AI 7B, HCX-007, EXAONE 4.5 33B 공식 링크 보강 및 Mistral 최신 모델(OCR 4, Voxtral) 가격 정보 수집"
---

## Todo
- [x] Rakuten AI 7B 신규 모델(Instruct, Chat) 공식 링크 및 HF 링크 업데이트
- [x] NAVER Cloud HCX-007 공식 링크 업데이트 및 게시(published) 승격
- [x] LG AI EXAONE 4.5 33B 공식 링크 업데이트
- [x] Mistral OCR 4, Voxtral TTS/STT 가격 정보 상세 수집 및 업데이트
- [x] DeepSeek-V4 Preview 하이라이트 보강

## 조사 내역
- 01:15  작업 시작
- 01:30  Rakuten AI 7B 시리즈(Instruct, Chat) 정보 확인 (2024-03-21 출시, Apache-2.0)
- 01:32  HCX-007 공식 가격 정보는 여전히 상담 필요(비공개) 상태임을 확인
- 01:45  Mistral AI 공식 요금 페이지 스캔 및 최신 모델 가격 확인
  - Mistral OCR 4: $4 / 1,000 pages
  - Voxtral TTS: $0.016 / 1k characters
  - Voxtral Small: $0.1 (in) / $0.4 (out) per 1M tokens, Audio $0.004 / min
  - Voxtral Mini Transcribe 2: $0.003 / min
- 01:50  DeepSeek-V4 Preview 최신 상태 확인 (웹/앱/API 출시 완료)

## 수행한 작업
- [x] `hcx-007`: `links.official` 업데이트 및 콘텐츠 상태를 `published`로 변경 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] `exaone-4-5-33b`: `links.official` 업데이트 ← https://www.lgresearch.ai/exaone
- [x] `rakuten-ai-7b-instruct`, `rakuten-ai-7b-chat`: 공식 보도자료 및 HF 링크 업데이트 ← https://corp.rakuten.co.jp/news/press/2024/0321_01.html
- [x] `mistral-ocr-4`: LLM 및 Multimodal 도메인 가격 보강 ← https://mistral.ai/pricing/
- [x] `voxtral-tts`: 캐릭터당 가격 보강 ← https://mistral.ai/pricing/
- [x] `voxtral-mini-transcribe-2`, `voxtral-mini-transcribe-realtime`: STT 도메인 분 분당 가격 보강 ← https://mistral.ai/pricing/
- [x] `deepseek-v4-preview`: 주요 특징(하이라이트) 업데이트 ← https://www.deepseek.com/

## 판단 / 고민
- NAVER Cloud HCX-007의 가격은 공식 홈페이지에 '-'로 표시되어 있어 `null`을 유지함. 추측보다는 정확한 정보를 위해 상담이 필요한 엔터프라이즈 전용임을 명시함.
- Claude Tag는 모델이 아닌 서비스 기능이므로 별도 등록하지 않음.

## 이슈 제기
- (없음)
