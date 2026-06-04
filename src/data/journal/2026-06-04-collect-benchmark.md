---
date: 2026-06-04
agent: collect-benchmark
status: completed
summary: "Checked 5 newly added LLM models for benchmark scores. Found none in the official text sources. Created issues."
---

## Todo
- 신규 등록된 LLM의 벤치마크 수치 확인 및 등록

## 조사 내역
- 01:30 Gemini Omni: 공식 블로그 내용에서 벤치마크 점수 확인 불가 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/
- 01:35 Composer 2.5: 공식 블로그 내용에서 벤치마크 점수 확인 불가 ← https://x.ai/news/composer-2-5
- 01:40 Qwen3.5-2B: 공식 사이트 내용에서 벤치마크 점수 확인 불가 ← https://qwen.ai/research
- 01:45 Mercury 2: 공식 사이트 내용에서 벤치마크 점수 확인 불가 ← https://www.inceptionlabs.ai/mercury-2
- 01:50 Step 3.7 Flash: 공식 사이트 내용에서 벤치마크 점수 확인 불가 ← https://www.stepfun.com/news

## 수행한 작업
- [x] 신규 모델 5건에 대한 벤치마크 점수 확인 시도

## 판단 / 고민
- 모든 신규 등록 모델의 공식 출처에서 벤치마크 점수를 명시한 텍스트를 찾을 수 없으므로(웹 스크래핑 결과), Groundedness Rule에 따라 이슈 티켓을 생성하고 점수를 임의로 등록하지 않음.

## 이슈 제기
- issues/2026-06-04-collect-benchmark-gemini-omni.md
- issues/2026-06-04-collect-benchmark-composer-2-5.md
- issues/2026-06-04-collect-benchmark-qwen-3-5-2b.md
- issues/2026-06-04-collect-benchmark-mercury-2.md
- issues/2026-06-04-collect-benchmark-step-3-7-flash.md
