---
date: 2026-04-30
agent: profile-benchmark
status: completed
summary: "SWE-bench Verified 및 MT-Bench 벤치마크 상세 페이지 작성 (published 로 설정)"
---

## Todo
- `swe-bench-verified` 벤치마크 상세 페이지 작성
- `mt-bench` 벤치마크 상세 페이지 게시 (draft -> published)

## 조사 내역
- 02:30 `swe-bench-verified` 벤치마크 개요 조사 ← https://www.swebench.com/verified.html
- 02:40 `mt-bench` 벤치마크 리소스 조사 ← https://arxiv.org/abs/2306.05685, https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge, https://lmsys.org/blog/2023-06-22-leaderboard/

## 수행한 작업
- [x] `src/content/benchmarks/swe-bench-verified.md` 생성 완료 및 `published` 설정 ← https://www.swebench.com/verified.html, https://arxiv.org/abs/2310.06770
- [x] `src/content/benchmarks/mt-bench.md` 내용을 보강하고 `status: published`로 변경 완료 ← https://arxiv.org/abs/2306.05685, https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge

## 판단 / 고민
- `mt-bench` 문서는 이미 작성되어 있었으나 `status: draft`였고, 출처 및 본문 내용이 충분하여 `published`로 승격하는 것이 임무 지침("출처 3개 이상 + 본문 3문단 이상이면 published 로 승격")에 부합한다고 판단함.
- `swe-bench-verified` 는 공식 웹사이트와 페이퍼를 참고하여 작성함.

## 이슈 제기
- (없음)
