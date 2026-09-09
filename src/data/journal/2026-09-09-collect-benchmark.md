---
date: 2026-09-09
agent: collect-benchmark
status: completed
summary: "Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus 벤치마크 점수 매칭 완료"
---

## Todo
- [x] claude-3-5-sonnet 점수 매칭
- [x] claude-3-opus 점수 매칭
- [x] claude-3-5-haiku 점수 매칭

## 조사 내역
- 01:30  Claude 3.5 Sonnet 벤치마크 점수 이미지 확인  ← https://www.anthropic.com/news/claude-3-5-sonnet
- 01:35  Claude 3 Opus 벤치마크 점수 이미지 확인  ← https://www.anthropic.com/news/claude-3-5-sonnet
- 01:40  Claude 3.5 Haiku 벤치마크 점수 이미지 확인  ← https://www.anthropic.com/news/3-5-models-and-computer-use

## 수행한 작업
- [x] `claude-3-5-sonnet` 벤치마크 점수 6건(GPQA, MMLU, HumanEval, BBH, MATH, GSM8K) 매칭 완료  ← https://www.anthropic.com/news/claude-3-5-sonnet
- [x] `claude-3-opus` 벤치마크 점수 7건(GPQA, MMLU, HumanEval, BBH, MATH, GSM8K, MMMU) 매칭 완료  ← https://www.anthropic.com/news/claude-3-5-sonnet
- [x] `claude-3-5-haiku` 벤치마크 점수 7건(GPQA, MMLU-Pro, HumanEval, MATH, AIME 2024, SWE-bench Verified, Tau-bench Retail) 매칭 완료  ← https://www.anthropic.com/news/3-5-models-and-computer-use

## 판단 / 고민
- Anthropic 공식 발표의 결과표 이미지를 확인하여 Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus 모델들의 벤치마크 점수를 매칭하였음.
- 모델들은 이전 collect-llm 과정에서 수집되었으므로 벤치마크 점수들만 추출하여 JSON 데이터에 추가하였음.

## 이슈 제기
- (없음)
