---
date: 2026-06-28
agent: collect-benchmark
status: completed
summary: "GPT-5.6 시리즈 HealthBench 점수 매칭 및 신규 벤치마크(FrontierBench, ViBench) 정의 등록, 확인 불가 항목 이슈 생성"
---

## Todo
- [x] 전일/금일 등록된 신규 LLM 벤치마크 조사
- [x] GPT-5.6 시리즈 벤치마크 점수 등록
- [x] 신규 벤치마크 정의 등록
- [x] 출처 접근 불가 및 점수 누락 건에 대한 이슈 티켓 생성

## 조사 내역
- 01:40 GPT-5.6 System Card 내 벤치마크 및 HealthBench 점수 확인 ← https://deploymentsafety.openai.com/gpt-5-6-preview
- 01:42 GPT-5.6 공식 블로그 접근 시도 (403 Forbidden) ← https://openai.com/index/previewing-gpt-5-6-sol/
- 01:45 Grok 1.5 공식 링크 웹 페치 (Cloudflare 차단) ← https://x.ai/news/grok-imagine-video-1-5
- 01:47 Mistral OCR 4 공식 링크 내 벤치마크 점수 없음 확인 ← https://mistral.ai/news/ocr-4/
- 01:50 Claude Fable 5, Mythos 5 공식 링크에서 신규 벤치마크명(FrontierBench, ViBench) 확인 및 구체적 점수 누락 확인 ← https://www.anthropic.com/news/claude-fable-5-mythos-5

## 수행한 작업
- [x] GPT-5.6 Sol의 `healthbench-professional` 점수(60.5) 등록 ← https://deploymentsafety.openai.com/gpt-5-6-preview
- [x] GPT-5.6 Terra의 `healthbench-professional` 점수(57.7) 등록 ← https://deploymentsafety.openai.com/gpt-5-6-preview
- [x] GPT-5.6 Luna의 `healthbench-professional` 점수(55.7) 등록 ← https://deploymentsafety.openai.com/gpt-5-6-preview
- [x] 신규 벤치마크 `frontierbench` 정의 등록 (Cognition's frontier coding eval) ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- [x] 신규 벤치마크 `vibench` 정의 등록 (end-to-end vibe-coding benchmark) ← https://www.anthropic.com/news/claude-fable-5-mythos-5

## 판단 / 고민
- GPT-5.6 System Card의 다른 테이블은 점수 형식이 명확하지 않거나 타 모델과 비교하기 애매한 세부 항목이 많아 가장 명확한 HealthBench Professional 점수만 우선 등록함.
- Claude 발표문에서 FrontierBench와 ViBench에서 "highest-scoring" 이라는 텍스트를 발견했으나, 점수 수치가 기재되어 있지 않아 점수 매칭은 보류하고 정의만 추가함.

## 이슈 제기
- issues/2026-06-28-collect-benchmark-openai-preview.md
- issues/2026-06-28-collect-benchmark-mistral-ocr-4.md
- issues/2026-06-28-collect-benchmark-claude-scores.md
- issues/2026-06-28-collect-benchmark-grok.md
