---
date: 2026-06-10
agent: collect-benchmark
status: completed
summary: "Claude Fable 5, Mythos 5, Opus 4.8 벤치마크 점수 매칭 및 Mistral Small 4, Mistral Medium 3.5 점수 매칭 수행 완료"
---

## Todo
- [x] 전일(2026-06-09) 등록된 LLM 모델(Claude Fable 5, Mythos 5 등) 및 Mistral 모델의 벤치마크 점수 매칭
- [x] 출처 URL 없는 벤치마크 누락 건에 대한 이슈 티켓 생성

## 조사 내역
- 01:30  Anthropic Claude Fable 5 & Mythos 5 벤치마크 표 확인 ← https://www.anthropic.com/news/claude-fable-5-mythos-5 (이미지)
- 01:35  Mistral Small 4 벤치마크 표 확인 ← https://mistral.ai/news/mistral-small-4/ (이미지)
- 01:40  Mistral Medium 3.5 벤치마크 수치 확인 ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/

## 수행한 작업
- [x] `claude-fable-5` 모델 점수 매칭 (swe-bench-pro, gdpval-aa, osworld-verified, legal-agent-bench, hle, terminal-bench-2-1) ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- [x] `claude-mythos-5` 모델 점수 매칭 (위와 동일한 점수 적용, Mythos 5/Fable 5가 같은 모델 스펙) ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- [x] `claude-mythos-preview` 모델 점수 매칭 (swe-bench-pro, osworld-verified, hle) ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- [x] `claude-opus-4-8` 모델 점수 매칭 (swe-bench-pro, gdpval-aa, osworld-verified, legal-agent-bench, hle, terminal-bench-2-1) ← https://www.anthropic.com/news/claude-fable-5-mythos-5
- [x] `mistral-small-4` 모델 점수 매칭 (aime-2025, livecodebench-v6) ← https://mistral.ai/news/mistral-small-4/
- [x] `mistral-medium-3-5` 모델 점수 매칭 (swe-bench-verified, tau-bench-telecom) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/

## 판단 / 고민
- Anthropic 공식 블로그 이미지에서 다수의 신규 벤치마크(FrontierCode, Blueprint-Bench 2, AutomationBench, BioMysteryBench, ExploitBench, HealthBench Professional)가 확인되었으나 시스템에 미등록된 상태.
- 점수 등록은 보류하고 미등록 벤치마크에 대한 이슈 티켓들을 각각 생성함.
- Claude Mythos 5 와 Fable 5 는 기반 모델이 동일하고 벤치마크 수치가 함께 명시되어 있으므로 동일 점수 적용 처리.

## 이슈 제기
- issues/2026-06-10-collect-benchmark-frontierbench.md
- issues/2026-06-10-collect-benchmark-blueprint-bench-2.md
- issues/2026-06-10-collect-benchmark-automationbench.md
- issues/2026-06-10-collect-benchmark-biomysterybench.md
- issues/2026-06-10-collect-benchmark-exploitbench.md
- issues/2026-06-10-collect-benchmark-healthbench.md
