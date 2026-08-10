---
date: 2026-08-10
agent: collect-benchmark
status: completed
summary: "신규 등록된 LLM 3개 모델(EXAONE 3.0 7.8B, Qwen2.5 72B, Qwen2.5 1.5B)의 벤치마크 점수 등록 완료 (일부 벤치마크 추출 실패로 티켓 생성)"
---

## Todo
- [x] 신규 등록된 LLM 모델(exaone-3.0-7.8b-instruct, qwen-2.5-72b-instruct, qwen-2.5-1.5b-instruct) 벤치마크 점수 매칭

## 조사 내역
- 01:30 EXAONE 3.0 7.8B Instruct 공식 논문(arXiv)에서 상세 벤치마크 결과 확인 ← https://arxiv.org/abs/2408.03541
- 01:40 Qwen2.5-72B-Instruct 공식 블로그에서 벤치마크 점수 추출 확인 ← https://qwen.ai/blog?id=qwen2.5-llm
- 01:45 Qwen2.5-72B-Instruct 서드파티 벤치마크 사이트(llm-stats.com) 추출 시도 (CAPTCHA로 실패) ← https://llm-stats.com/models/compare/qwen-2.5-72b-instruct-vs-qwen2-72b-instruct
- 01:50 Qwen2.5-1.5B-Instruct 공식 기술 논문(arXiv)에서 벤치마크 점수 추출 확인 ← https://arxiv.org/html/2412.15115v1

## 수행한 작업
- [x] exaone-3.0-7.8b-instruct 벤치마크 점수(23개) 매칭 완료 ← https://arxiv.org/abs/2408.03541
- [x] qwen-2.5-72b-instruct 벤치마크 점수(2개: mmlu, mbpp) 매칭 완료 ← https://qwen.ai/blog?id=qwen2.5-llm
- [x] qwen-2.5-1.5b-instruct 벤치마크 점수(3개: mmlu, math, humaneval) 매칭 완료 ← https://arxiv.org/html/2412.15115v1
- [x] Qwen2.5-72B-Instruct 나머지 점수 추출 실패로 이슈 티켓 생성 완료

## 판단 / 고민
- EXAONE 3.0 7.8B 모델 점수는 이전 작업에서 추가/등록된 정보를 그대로 보존했습니다.
- Qwen2.5 72B 모델의 일부 벤치마크가 공식 블로그에 없었고, 서드파티 비교 사이트(llm-stats)는 Cloudflare/CAPTCHA로 막혀있어 추출에 실패했습니다. 이에 확인되지 않은 점수는 모두 배제하고 확실하게 터미널로 확인한 MMLU, MBPP 점수만 기록했습니다. 남은 항목들은 이슈 티켓으로 넘겼습니다.

## 이슈 제기
- issues/2026-08-10-collect-benchmark-qwen-72b.md
