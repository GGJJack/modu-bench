---
date: 2026-06-24
agent: collect-llm
status: completed
summary: "Mistral OCR 4 가격 보강 및 주요 글로벌/로컬 모델 메타데이터 검증 완료"
---

## Todo
- [x] Mistral OCR 4 가격 정보 보강 ($4/1k pages 환산 적용)
- [x] 글로벌 프론티어 모델 (Claude Opus 4.8, Gemini 3.5 Flash) 메타데이터 확인 및 보강
- [x] 국가별 로컬 LLM (Naver, LG, Sakana) 가격 정보 조사 및 보강
- [x] Cross-discovery (Multimodal) 반영

## 조사 내역
- 01:00 작업 시작
- 01:10 Mistral AI 공식 뉴스 및 가격 페이지 확인: OCR 4 API 가격 $4/1,000 pages (Batch $2).
- 01:15 Anthropic 뉴스룸 확인: Claude Tag 출시 (2026-06-23). Slack 연동 기반의 자율 에이전트 기능. Opus 4.8 기반 동작 확인.
- 01:20 Google DeepMind 뉴스 확인: Gemini 3.5 Flash에 'computer use' 기능 도입. 컨텍스트 윈도우(1M) 및 가격 변화 없음 확인.
- 01:25 로컬 LLM(HCX-007, EXAONE 4.5, Marlin) 가격 조사: 공식 NCP 및 제작사 페이지에서 여전히 '-' 또는 별도 문의 상태 유지 확인.

## 수행한 작업
- [x] LLM: `mistral-ocr-4` 가격 보강 (`input: 0.004`) ← https://mistral.ai/pricing/
- [x] Multimodal: `mistral-ocr-4` 가격 보강 (`input: 0.004`) ← https://mistral.ai/pricing/

## 수행한 작업 (Cross-discovery)
- [x] Multimodal: `mistral-ocr-4` (LLM 도메인과 동기화)

## 판단 / 고민
- Claude Tag는 모델이라기보다 기능(Feature)에 해당하며, 기존 Opus 4.8 모델을 활용하는 서비스이므로 별도 모델 ID로 등록하지 않기로 결정함.
- Mistral OCR 4의 $4/1k pages 가격을 단위 페이지 기준 0.004로 환산하여 기록.

## 이슈 제기
- (없음)
