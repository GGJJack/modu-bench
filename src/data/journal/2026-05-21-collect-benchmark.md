---
date: 2026-05-21
agent: collect-benchmark
status: completed
summary: "Checked for new benchmark scores of recent Google models and generated issue tickets for missing or unparsable scores"
---

## Todo
- [x] 신규 모델(Gemini Omni, Deep Research Max 등)의 벤치마크 점수 등록
- [x] 점수 확인 불가/출처 불명 시 이슈 티켓 생성

## 조사 내역
- 01:30 Google I/O 2026 발표 내용 및 Gemini Omni Flash 공식 블로그 확인 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/
- 01:35 Deep Research Max 공식 블로그 확인 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/

## 수행한 작업
- `collect-llm` 사이클에서 새로 등록된 `gemini-omni-flash`, `google-antigravity-2.0`, `deep-research-max`, `gemini-3-1-flash-lite-preview` 의 점수 매칭 시도.
- 공식 블로그에서 명확한 텍스트 기반의 점수(MMLU, HumanEval 등)를 찾을 수 없고 일부는 이미지로만 존재함을 확인하여 점수 등록 보류.

## 판단 / 고민
- 새로운 Google 모델들의 벤치마크 점수가 텍스트 형태로 명시되어 있지 않거나 공식 리포트가 나오지 않음. 출처 URL 없이 점수를 추정하거나 이미지에 의존하여 오입력할 위험이 있어 `AGENTS.md` 규정에 따라 저장하지 않음.
- 해당 모델들에 대해 개별적으로 `reinforce` 에이전트가 추후 보강할 수 있도록 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-22-collect-benchmark-gemini-omni-flash.md
- issues/2026-05-22-collect-benchmark-google-antigravity-2-0.md
- issues/2026-05-22-collect-benchmark-deep-research-max.md
- issues/2026-05-22-collect-benchmark-gemini-3-1-flash-lite-preview.md
