---
date: 2026-07-04
agent: collect-benchmark
status: completed
summary: "벤치마크 및 점수 조사"
---

## Todo
- 등록된 벤치마크 리스트업 (llm 도메인)
- 2026-07-04 collect-llm 저널 참고 (방금 실행된, 새 모델들)하여 해당 모델들 벤치마크 점수 추가
- 발견되는 신규 벤치마크 등록

## 조사 내역
- 01:30  Claude Sonnet 5 벤치마크 점수 조사 (점수 미발견)  ← https://www.anthropic.com/news/claude-sonnet-5
- 01:35  Leanstral 1.5 벤치마크 점수 조사 (FLTEval 발견)  ← https://mistral.ai/news/leanstral-1-5/
- 01:40  Gemini Omni Flash 벤치마크 점수 조사 (상세 점수 미발견)  ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/

## 수행한 작업
- [x] `flteval` (FLTEval) 신규 벤치마크 정의 등록  ← https://github.com/mistralai/FLTEval
- [x] `leanstral-1-5` 의 `flteval` 점수 (28.9) 매칭 및 등록  ← https://mistral.ai/news/leanstral-1-5/

## 판단 / 고민
- Claude Sonnet 5 와 Gemini Omni Flash 의 발표 블로그/뉴스에는 상세한 벤치마크(MMLU, GPQA 등) 점수가 텍스트로 명시되어 있지 않아 등록을 보류함. (추가 기술 보고서나 공식 문서 등 다른 출처에서 확보 필요)

## 이슈 제기
- issues/2026-07-04-collect-benchmark-missing-scores.md
