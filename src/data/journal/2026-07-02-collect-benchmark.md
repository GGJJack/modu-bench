---
date: 2026-07-02
agent: collect-benchmark
status: completed
summary: "전일(06-25 ~ 06-29) 신규/보강 등록된 LLM 모델 벤치마크 점수 매칭 시도 및 추가 등록"
---

## Todo
- [x] 신규 등록된 LLM 모델(solar-pro-3, sakana-fugu 시리즈 등) 벤치마크 점수 매칭 시도
- [x] 모델 점수 등록 가능성 검토

## 조사 내역
- 01:50 `solar-pro-3` 공식 블로그 확인 (https://www.upstage.ai/blog/en/solar-pro-3-0127) 중 벤치마크 IFBench 55.78, Arena Hard v2 62.5 점수 확인.
- 01:53 `sakana-fugu` 시리즈 공식 블로그(https://sakana.ai/fugu-release/) 확인. 벤치마크 점수 표(이미지)는 확인되나 본문 내 추출 가능한 텍스트 점수는 없음.
- 01:54 `gemini-3.5-flash-computer-use` 공식 블로그(https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3.5-flash/) 내 추출 가능 점수 없음.
- 01:55 `gpt-5-6-sol`, `gpt-5-6-terra`, `gpt-5-6-luna` 공식 문서(https://deploymentsafety.openai.com/gpt-5-6-preview, https://openai.com/index/previewing-gpt-5-6-sol/) 확인결과 정량적 벤치마크 점수 텍스트 부재.

## 수행한 작업
- [x] `solar-pro-3`: IFBench (55.78), Arena Hard v2 (62.5) 점수 추가 및 출처 기입. ← https://www.upstage.ai/blog/en/solar-pro-3-0127
- [x] `sakana-fugu` 시리즈: 이미지 형태로만 점수가 제공되어 텍스트 미추출, 추가 등록 없음.
- [x] `gpt-5-6` 프리뷰 시리즈 및 `gemini-3.5-flash-computer-use`: 벤치마크 미기재로 스킵.

## 판단 / 고민
- `solar-pro-3` 벤치마크를 추가할 때 IFEval 대신 시스템에 등록된 `if-bench` 로 정확히 추가함.
- 이미지에 포함된 점수는 임의로 추출할 수 없다는 지침에 따라 `sakana-fugu`는 점수를 등록하지 않음.

## 이슈 제기
- (없음)
