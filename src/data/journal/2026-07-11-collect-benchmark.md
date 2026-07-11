---
date: 2026-07-11
agent: collect-benchmark
status: completed
---

## Todo
- [x] 신규 등록 모델의 점수 매칭 시도 (`sakana-translate`, `gpt-live-1` 시리즈, `gpt-5-6` 시리즈 등)
- [x] 미완료된 점수 등록 보강 (예: `mistral-ocr-4` 벤치마크 점수)

## 조사 내역
- 01:30 Anthropic Claude Tag 관련 벤치마크 점수 재확인 시도 ← https://www.anthropic.com/news/introducing-claude-tag (점수 없음)
- 01:35 Sakana Translate 점수 확인 ← https://sakana.ai/translate-release/ (WMT 2024 언급되나 구체적 텍스트 점수 없음)
- 01:40 OpenAI GPT-Live-1 및 GPT-5.6 시리즈 점수 확인 시도 (403 Forbidden)
- 01:45 Mistral OCR 4 점수 확인 ← https://mistral.ai/news/ocr-4/ (OlmOCRBench 85.20, OmniDocBench 93.07 확인)

## 수행한 작업
- [x] 신규 벤치마크 등록: `olm-ocr-bench` ← https://mistral.ai/news/ocr-4/
- [x] 신규 벤치마크 등록: `omni-doc-bench` ← https://mistral.ai/news/ocr-4/
- [x] `mistral-ocr-4` 점수 1건 추가 (`olm-ocr-bench` 85.20) ← https://mistral.ai/news/ocr-4/
- [x] `mistral-ocr-4` 점수 1건 추가 (`omni-doc-bench` 93.07) ← https://mistral.ai/news/ocr-4/

## 판단 / 고민
- OpenAI 페이지들은 403 에러로 벤치마크 점수를 크롤링하지 못함.
- Sakana Translate는 WMT 2024 평가를 수행했다고 서술했으나, 텍스트 형태의 명확한 점수가 없어 등록을 보류함.

## 이슈 제기
- issues/2026-07-11-collect-benchmark-sakana-translate.md: Sakana Translate WMT 점수 등록 관련 확인 요청 티켓 생성
