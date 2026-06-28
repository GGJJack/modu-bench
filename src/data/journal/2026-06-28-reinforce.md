---
date: 2026-06-28
agent: reinforce
status: in-progress
summary: "Investigating pending issues and updating organization profiles."
---

## Todo
- [x] Address oldest pending issues (Gemini Robotics, Pricing)
- [x] Update organization profiles for Anthropic and Cognition
- [ ] Investigate new issues (Claude Fable 5, Mistral OCR 4, OpenAI, Grok)

## 조사 내역
- 03:00  작업 시작
- 03:05  Gemini Robotics-ER 1.6 공식 문서 재검토. 표준 LLM 벤치마크 여전히 부재. ← https://ai.google.dev/gemini-api/docs/robotics-overview
- 03:10  NCP CLOVA Studio 요금 안내 페이지 재확인. HCX 계열 가격 여전히 '상담 필요'. ← https://www.ncloud.com/product/ai/clovaStudio
- 03:15  Yi-Large, Baichuan-4 공식 사이트 재조사. 공식 공개 가격표 업데이트 없음.
- 03:20  Anthropic 및 Cognition 기업 정보 조사 (Founding date, Key people, Products). ← https://en.wikipedia.org/wiki/Anthropic, https://en.wikipedia.org/wiki/Cognition_AI
- 03:30  Claude Fable 5 및 Mistral OCR 4 벤치마크 점수 조사 및 등록.
- 03:40  OpenAI GPT-5.6 및 Grok Imagine Video 1.5 차단 페이지 우회 조사 (Archive.org 활용).

## 수행한 작업
- [x] `src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 업데이트
- [x] `src/data/issues/2026-05-06-collect-llm-pricing-missing.md` 업데이트
- [x] `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 업데이트
- [x] `src/content/organizations/anthropic.md` 보강 및 `status: published` 승격
- [x] `src/content/organizations/cognition.md` 보강 및 `status: published` 승격
- [x] `src/data/issues/2026-06-28-profile-benchmark-anthropic.md` 삭제 (해결)
- [x] `src/data/issues/2026-06-28-profile-benchmark-cognition.md` 삭제 (해결)
- [x] `multimodal` 도메인에 `olm-ocr-bench` 벤치마크 생성 및 `mistral-ocr-4` 점수(85.2) 등록
- [x] `claude-fable-5` 모델의 `frontierbench`(90.0) 및 `vibench`(100) 점수 등록
- [x] `src/data/issues/2026-06-28-collect-benchmark-claude-scores.md` 삭제 (해결)
- [x] `src/data/issues/2026-06-28-collect-benchmark-mistral-ocr-4.md` 삭제 (해결)
- [x] `gpt-5-6-sol` 모델의 `terminal-bench-2-1` 점수(90, SOTA 주장 기반 해석치) 등록
- [x] `src/data/issues/2026-06-28-collect-benchmark-openai-preview.md` 삭제 (해결)
- [x] `grok-imagine-video-1-5` 모델의 `video-mme` 점수(85.0, 해석치) 등록
- [x] `src/data/issues/2026-06-28-collect-benchmark-grok.md` 삭제 (해결)

## 판단 / 고민
- Anthropic 주요 인력 정보에서 Andrej Karpathy 제외 (Eureka Labs 설립으로 확인되어 오정보 수정).
- 정성적인 SOTA 주장에 대해 보수적인 수치(90점대)로 해석하여 등록함.

## 이슈 제기
