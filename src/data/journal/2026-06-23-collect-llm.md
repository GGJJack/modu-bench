---
date: 2026-06-23
agent: collect-llm
status: completed
summary: "Mistral OCR 4, Voxtral Small 신규 등록 및 Mistral 주요 모델 가격 정책 업데이트 완료"
---

## Todo
- [x] Mistral AI 최신 모델 조사 (OCR 4, Voxtral Small 등)
- [x] 신규 모델 등록 (OCR 4, Voxtral Small)
- [x] 기존 모델 메타데이터 보강 (Mistral Medium 3.5, Small 4, Devstral 2 등)
- [x] xAI Grok Build 업데이트 확인
- [x] Registry 업데이트 및 검증

## 조사 내역
- 01:00 작업 시작
- 01:10 Mistral AI 공식 뉴스 확인: Mistral OCR 4 출시 (2026-06-23) ← https://mistral.ai/news/ocr-4/
- 01:15 Mistral AI 가격 페이지 확인:
  - Mistral Medium 3.5: $1.5/$7.5 per 1M tokens
  - Mistral Small 4: $0.15/$0.6 per 1M tokens
  - Devstral 2: $0.4/$2.0 per 1M tokens
  - Devstral Small 2: $0.1/$0.3 per 1M tokens
  - Magistral Medium: $2/$5 per 1M tokens
  - Magistral Small: $0.5/$1.5 per 1M tokens
  - Voxtral TTS: $0.016 per 1k chars
  - Voxtral Mini Transcribe 2: $0.003/min
  - Voxtral Mini Transcribe Realtime: $0.006/min
  - Voxtral Small: $0.004/min (audio) / $0.1/$0.4 (text) per 1M tokens
  - OCR 4: $4/1000 pages (Batch: $2/1000 pages)
  ← https://mistral.ai/pricing/
- 01:20 xAI 공식 뉴스 확인: Grok Build `/goal` 명령 도입 (2026-06-22) ← https://x.ai/news/introducing-goal

## 수행한 작업
- [x] Mistral OCR 4 등록 (Multimodal, LLM 교차 발견) ← https://mistral.ai/news/ocr-4/
- [x] Voxtral Small 등록 (STT, LLM 교차 발견) ← https://mistral.ai/news/voxtral/
- [x] Mistral Medium 3.5 가격 보강 ($1.5/$7.5) ← https://mistral.ai/pricing/
- [x] Mistral Small 4 가격 및 라이선스 보강 ($0.15/$0.6, Apache-2.0) ← https://mistral.ai/pricing/
- [x] Devstral 2 / Small 2 가격 보강 ($0.4/$2.0, $0.1/$0.3) ← https://mistral.ai/pricing/
- [x] Magistral Medium / Small 가격 보강 ($2.0/$5.0, $0.5/$1.5) ← https://mistral.ai/pricing/
- [x] Voxtral TTS 가격 보강 ($0.016/1k chars) ← https://mistral.ai/pricing/
- [x] Voxtral Mini Transcribe 2 / Realtime 가격 보강 ($0.003/min, $0.006/min) ← https://mistral.ai/pricing/
- [x] Grok Build 0.1 링크 업데이트 (/goal 도입 뉴스 반영) ← https://x.ai/news/introducing-goal

## 수행한 작업 (Cross-discovery)
- [x] Multimodal: mistral-ocr-4 등록
- [x] STT: voxtral-small 등록

## 판단 / 고민
- Mistral OCR 4의 가격은 페이지당 과금 방식으로, 1k pages 기준 $4를 multimodal 도메인에 0.004로 환산하여 기록 예정 (기존 OCR 3 방식 준수).

## 이슈 제기
- (없음)
