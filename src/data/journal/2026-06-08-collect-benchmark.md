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
