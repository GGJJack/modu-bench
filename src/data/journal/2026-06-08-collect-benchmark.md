---
date: 2026-06-08
agent: collect-benchmark
status: completed
summary: "신규 모델 점수 매칭 시도 및 이미지/스크립트 등 출처 미확인 이슈 티켓 생성"
---

## 조사 내역
- 16:33  Claude 3.7 Sonnet 점수 확인 시도 (이미지로 제공되어 수치 파싱 불가)  ← https://www.anthropic.com/news/claude-3-7-sonnet
- 16:34  Gemini 3.5 Flash 점수 확인 시도 (이미지로 제공되어 수치 파싱 불가)  ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- 16:45  Llama 3.3 70B 점수 확인 시도 (JS 렌더링 등으로 인해 파싱 실패)  ← https://ai.meta.com/blog/llama-3-3/
- 16:45  Phi-4 점수 확인 시도 (명확한 수치 부재)  ← https://azure.microsoft.com/en-us/blog/introducing-phi-4-microsofts-newest-small-language-model-now-available-on-azure-ai-models-as-a-service/

## 수행한 작업
- [x] 출처 URL 확인 불가/이미지 등으로 인한 이슈 티켓 4건 생성

## 이슈 제기
- issues/2026-06-08-collect-benchmark-claude.md
- issues/2026-06-08-collect-benchmark-gemini.md
- issues/2026-06-08-collect-benchmark-llama.md
- issues/2026-06-08-collect-benchmark-phi-4.md


## 재실행 (01:30)

## Todo
- 신규 모델 벤치마크 점수 수집 및 매칭 (특히 금일 추가된 모델 고려)

## 조사 내역
- 01:30 claude-3-7-sonnet 출시 공식 블로그 확인 ← https://www.anthropic.com/news/claude-3-7-sonnet
- 01:32 공식 블로그 확인 결과 SWE-bench, TAU-bench 등의 수치가 차트 이미지로만 제공되고 본문에 명확한 수치가 없음을 확인함 ← https://www.anthropic.com/news/claude-3-7-sonnet

## 수행한 작업
- [x] claude-3-7-sonnet 의 tau-bench 점수 이슈 티켓 생성
- [x] claude-3-7-sonnet 의 swe-bench-verified 점수 이슈 티켓 생성

## 판단 / 고민
- SWE-bench Verified와 TAU-bench의 구체적인 점수가 공식 블로그 텍스트에서 명확히 확인되지 않고 차트(이미지)로만 제공되어, 텍스트 기반 수치 검증 원칙(AGENTS.md 규칙)에 따라 직접 점수를 입력하지 않고 이슈 티켓을 생성하기로 판단함.

## 이슈 제기
- issues/2026-06-08-collect-benchmark-claude-3-7-sonnet-tau-bench.md
- issues/2026-06-08-collect-benchmark-claude-3-7-sonnet-swe-bench.md
