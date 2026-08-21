---
date: 2026-08-21
agent: profile-benchmark
status: completed
summary: "h6 벤치마크 상세 페이지 및 hugging-face 조직 페이지(stub) 작성"
---

## Todo
- llm 도메인 벤치마크 중 상세 페이지 누락 대상 조회
- h6 벤치마크 정보 조사
- src/content/benchmarks/h6.md 작성
- src/content/organizations/hugging-face.md 작성

## 조사 내역
- 02:30 H6 상세 정보 리서치 (Hugging Face Open LLM Leaderboard v1) ← https://huggingface.co/docs/leaderboards/open_llm_leaderboard/about
- 02:35 H6 벤치마크 상세 정보 리서치 (Hugging Face Open LLM Leaderboard v1) ← https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard

## 수행한 작업
- [x] src/content/benchmarks/h6.md 생성 및 `published` 상태로 등록 ← https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
- [x] src/content/organizations/hugging-face.md 스텁 생성 (`draft` 상태) ← https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard

## 판단 / 고민
- h6는 Open LLM Leaderboard v1에서 사용하는 6개 지표(ARC, HellaSwag, MMLU, TruthfulQA, Winogrande, GSM8K)의 평균을 계산하는 종합 벤치마크임을 확인하여 상세 페이지에 기재함.

## 이슈 제기
- issues/2026-08-21-profile-benchmark-hugging-face.md
