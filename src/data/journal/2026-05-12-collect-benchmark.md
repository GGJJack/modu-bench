---
date: 2026-05-12
agent: collect-benchmark
status: completed
summary: "신규 벤치마크 4종(SWE-bench Pro, Terminal-Bench 2.0, OSWorld-Verified, Toolathlon) 등록 및 최신 모델 점수 매칭 완료"
---

## Todo
- [x] 신규 벤치마크 등록 (SWE-bench Pro, Terminal-Bench 2.0, OSWorld-Verified, Toolathlon)
- [x] GPT-5.4, GPT-5.4 Mini, GPT-5.4 Nano 벤치마크 점수 등록
- [x] GPT-5.5, GPT-5.5 Pro 벤치마크 점수 등록
- [x] Gemini 3 Flash 벤치마크 점수 등록

## 조사 내역
- 01:30  작업 시작. llm 도메인 벤치마크 현황 확인
- 01:35  OpenAI 공식 문서를 통해 신규 벤치마크 4종 (SWE-Bench Pro, Terminal-Bench 2.0, OSWorld-Verified, Toolathlon) 정보 획득 및 등록
- 01:40  GPT-5.4 라인업(기본, Mini, Nano)에 대한 공식 벤치마크 점수 수집 및 등록 ← https://openai.com/index/introducing-gpt-5-4-mini-and-nano/
- 01:45  GPT-5.5 라인업 공식 및 커뮤니티(DataCamp, O-mega) 점수 수집 및 등록 ← https://www.ai.cc/blogs/gpt-5-5-everything-you-need-to-know/, https://o-mega.ai/articles/gpt-5-5-the-complete-guide-2026, https://www.datacamp.com/pt/blog/gpt-5-5
- 01:50  Gemini 3 Flash 점수 커뮤니티 데이터 수집 및 등록 ← https://llmbase.ai/compare/gemini-3-1-flash-lite-preview,gemini-3-flash/

## 수행한 작업
- [x] `swe-bench-pro` 벤치마크 등록 ← https://labs.scale.com/leaderboard/swe_bench_pro_public
- [x] `terminal-bench-2-0` 벤치마크 등록 ← https://www.tbench.ai/leaderboard/terminal-bench/2.0
- [x] `osworld-verified` 벤치마크 등록 ← https://os-world.github.io/
- [x] `toolathlon` 벤치마크 등록 ← https://github.com/hkust-nlp/Toolathlon
- [x] `gpt-5-4-mini` 점수 등록 (swe-bench-pro 54.4, terminal-bench-2-0 60.0, toolathlon 42.9, gpqa 88.0, osworld-verified 72.1) ← https://openai.com/index/introducing-gpt-5-4-mini-and-nano/
- [x] `gpt-5-4-nano` 점수 등록 (swe-bench-pro 52.4, terminal-bench-2-0 46.3, toolathlon 35.5, gpqa 82.8, osworld-verified 39.0) ← https://openai.com/index/introducing-gpt-5-4-mini-and-nano/
- [x] `gpt-5-4` 점수 등록 (swe-bench-pro 57.7, terminal-bench-2-0 75.1, toolathlon 54.6, gpqa 93.0, osworld-verified 75.0) ← https://openai.com/index/introducing-gpt-5-4-mini-and-nano/
- [x] `gpt-5-5-pro` 점수 등록 (terminal-bench-2-0 82.7, swe-bench-pro 58.6) ← https://www.datacamp.com/pt/blog/gpt-5-5
- [x] `gpt-5-5` 점수 등록 (terminal-bench-2-0 82.7, swe-bench-verified 88.7, mmlu 92.4) ← https://www.ai.cc/blogs/gpt-5-5-everything-you-need-to-know/
- [x] `gpt-5-5` 점수 등록 (swe-bench-pro 58.6) ← https://o-mega.ai/articles/gpt-5-5-the-complete-guide-2026
- [x] `gemini-3-flash` 점수 등록 (gpqa 81.2, mmlu-pro 88.2) ← https://llmbase.ai/compare/gemini-3-1-flash-lite-preview,gemini-3-flash/

## 판단 / 고민
- 신규 모델들에 대해 최근 중요하게 다뤄지는 에이전트/코딩 평가 지표들(SWE-Bench Pro, Terminal-Bench 2.0 등)을 벤치마크로 등록하고, 점수를 일괄 반영함.
- `mistral-medium-3-5-vibe`, `gpt-5-5-instant` 모델의 구체적인 벤치마크 점수는 공식 소스 및 신뢰할만한 커뮤니티 소스에서 확인하기 어려워 제외함 (추후 발견시 등록).

## 이슈 제기
- (없음)
