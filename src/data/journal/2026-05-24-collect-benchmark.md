---
date: 2026-05-24
agent: collect-benchmark
status: completed
summary: "GLM 4.7 최신 벤치마크 점수 및 신규 벤치마크(LiveCodeBench v6, HLE, SWE-bench Multilingual, tau-Bench, SecCodeBench, CWEval) 등록 완료, 출처 불분명한 타 모델 이슈 등록"
---

## Todo
- [x] 신규 벤치마크 6종 등록 (LiveCodeBench v6, HLE, SWE-bench Multilingual, tau-Bench, SecCodeBench, CWEval)
- [x] GLM 4.7 점수 매칭 및 추가
- [x] 출처 불분명한 모델에 대한 이슈 티켓 등록 (Qwen3 Coder Next, Nemotron Nano 2, Qwen3 VL 235B, GLM 4.7 일부 점수)

## 조사 내역
- 01:30 GLM 4.7 공식 문서 확인 ← https://docs.z.ai/guides/llm/glm-4.7

## 수행한 작업
- [x] `livecodebench-v6`, `hle`, `swe-bench-multilingual`, `tau-bench`, `seccodebench-gen`, `cweval` 벤치마크 신규 등록 완료.
- [x] `glm-4.7`: `hle` (42.8), `livecodebench-v6` (84.9), `swe-bench-verified` (73.8), `swe-bench-multilingual` (66.7), `terminal-bench-2-0` (41.0), `tau-bench` (84.7) 등 6개 점수 추가 완료 ← https://docs.z.ai/guides/llm/glm-4.7
- [x] qwen-3-vl-235b 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-24-collect-benchmark-qwen-3-vl-235b.md
- [x] nvidia-nemotron-nano-2 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-24-collect-benchmark-nvidia-nemotron-nano-2.md
- [x] qwen-3-coder-next 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재/가이드 필요) ← issues/2026-05-24-collect-benchmark-qwen-3-coder-next.md
- [x] glm-4.7 모델 이슈 티켓 생성 (일부 벤치마크 출처 불분명 및 SecCodeBench/CWEval 출처 문제) ← issues/2026-05-24-collect-benchmark-glm-4.7-missing.md

## 판단 / 고민
- 여러 사이트(LLM Stats, OpenRouter, Design for Online, Puter)에서 여러 모델(qwen-3-vl-235b, nvidia-nemotron-nano-2, qwen-3-coder-next, glm-4.7 일부)의 벤치마크 점수를 확인했으나 공식 블로그나 논문 출처를 확인할 수 없었거나 신뢰하기 어려웠음.
- 출처가 명확하지 않은 점수 등록은 `AGENTS.md`의 §2 출처 절대 규칙(오버라이드 불가)을 위반하므로, 해당 점수들은 등록을 철회하고 `src/data/issues/`에 티켓으로 생성함.
- GLM 4.7의 SecCodeBench 및 CWEval 점수(29.4, 46.39)는 Qwen3 Coder Next의 Arxiv 논문에 기록되어 있었으나 타사의 논문을 'official' 출처로 사용할 수 없으므로 철회함.

## 이슈 제기
- issues/2026-05-24-collect-benchmark-qwen-3-vl-235b.md
- issues/2026-05-24-collect-benchmark-nvidia-nemotron-nano-2.md
- issues/2026-05-24-collect-benchmark-qwen-3-coder-next.md
- issues/2026-05-24-collect-benchmark-glm-4.7-missing.md
