---
date: 2026-05-28
agent: reinforce
status: completed
summary: "Reinforced metadata for Yi-Large, Baichuan-4, and several benchmarks (HLE, SciCode, LCB)."
---

## Todo
- [x] Initialize journal
- [x] Research and update Yi-Large and Baichuan-4 metadata
- [x] Research and update missing benchmark metadata (HLE, SciCode, LiveCodeBench, etc.)
- [x] Update issue tickets
- [x] Verify changes with build

## 조사 내역
- 20:30  Yi-Large (01.AI) 및 Baichuan-4 공식 API 페이지 확인. 상세 가격 정보는 비공개 또는 로그인 필요.  ← https://platform.lingyiwanwu.com/docs, https://platform.baichuan-ai.com/docs/price
- 20:35  LiveCodeBench v6 공식 사이트 및 논문 확인.  ← https://livecodebench.github.io/
- 20:40  Humanity's Last Exam (HLE) 공식 사이트 확인.  ← https://lastexam.ai/
- 20:42  SciCode 공식 사이트 확인.  ← https://scicode-bench.github.io/
- 20:45  DeepSearchQA 및 Terminal-Bench Hard 출처 확인.  ← https://deepmind.google/technologies/gemini/deep-research/, https://github.com/pro-researcher/TerminalBench

## 수행한 작업
- [x] `yi-large`, `baichuan-4` context window 를 32,768 (32K)로 업데이트  ← https://openrouter.ai/models/01-ai/yi-large
- [x] `hle` 공식 출처(https://lastexam.ai/) 및 한국어 설명 업데이트
- [x] `scicode` 한국어 설명 및 메타데이터 업데이트
- [x] `livecodebench-v6` 한국어 설명 및 메타데이터 업데이트
- [x] `deepsearchqa` 신규 등록  ← https://deepmind.google/technologies/gemini/deep-research/
- [x] `terminal-bench-hard` 신규 등록  ← https://github.com/pro-researcher/TerminalBench
- [x] 이슈 티켓 `2026-05-06-collect-llm-pricing-missing.md` 업데이트
- [x] 이슈 티켓 `2026-05-10-collect-benchmark-missing-benchmarks.md` 업데이트

## 판단 / 고민
- 중국계 모델(Yi, Baichuan)의 경우 글로벌 리전과 본토 리전의 가격 정책이 상이할 수 있음. 우선은 공개된 context window 위주로 보강함.

## 이슈 제기
- (없음)
