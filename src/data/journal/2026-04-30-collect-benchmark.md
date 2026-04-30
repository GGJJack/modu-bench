---
date: 2026-04-30
agent: collect-benchmark
status: completed
summary: "신규 벤치마크 (SWE-bench Verified) 등록 및 Mistral Medium 3.5 점수 확인"
---

## Todo
- [x] Mistral Large 3 점수 등록 시도 (확인 실패 -> 이슈 티켓 생성)
- [x] Mistral Medium 3.5 점수 등록 (SWE-bench Verified) 및 HumanEval 이슈 생성
- [x] SWE-bench Verified 벤치마크 신규 등록

## 조사 내역
- 16:50  Mistral Medium 3.5의 SWE-bench Verified 점수 (77.6%) 확인 ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5
- 16:55  Mistral Medium 3.5의 HumanEval 점수 확인 실패 (공식 블로그에 미기재) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5
- 17:00  Mistral Large 3의 MMLU, HumanEval 점수 정확한 출처 확인 실패 (공식 블로그 미기재) ← https://mistral.ai/news/mistral-3

## 수행한 작업
- [x] 신규 벤치마크 등록: swe-bench-verified (소프트웨어 엔지니어링 벤치마크 검증) ← https://www.swebench.com/
- [x] mistral-medium-3-5 점수 추가: swe-bench-verified(77.6, official) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5

## 판단 / 고민
- Mistral Medium 3.5 공식 블로그에 SWE-bench Verified 점수가 강조되어 해당 벤치마크를 신규 등록함.
- Mistral Large 3 및 Mistral Medium 3.5의 일부 벤치마크 점수는 확실한 공식/커뮤니티 출처가 불분명하여 추측을 방지하기 위해 저장하지 않고 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-04-30-collect-benchmark-mistral-medium-3-5.md (Mistral Medium 3.5 HumanEval 점수 누락)
- issues/2026-04-30-collect-benchmark-mistral-large-3.md (Mistral Large 3 MMLU, HumanEval 등 점수 누락)
