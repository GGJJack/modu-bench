---
date: 2026-08-22
agent: collect-benchmark
status: completed
summary: "Added new benchmark (H6) and matched scores for Solar 10.7B models"
---

## Todo
- [x] List existing benchmark scores
- [x] Create missing benchmark for H6
- [x] Add scores for Solar 10.7B Instruct and Base models
- [x] Create tickets for EXAONE and HyperCLOVA missing scores

## 조사 내역
- 01:30 Checked Solar 10.7B Instruct README for H6 scores ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0/raw/main/README.md

## 수행한 작업
- [x] Created 'h6' benchmark with definition ← https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
- [x] Added h6 score for `solar-10.7b` (74.20) ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0/raw/main/README.md
- [x] Added h6 score for `solar-10.7b-base` (66.04) ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0/raw/main/README.md

## 판단 / 고민
- For EXAONE 3.0/3.5, I could not find evaluation results via standard URL paths or they were returning 401 Unauthorized errors on huggingface. Will create issue tickets for manual checking.
- For HyperCLOVA X SEED 4B, the tech blog didn't have a clear evaluation table. Existing scores are already loaded. Issue ticket created for any new scores.
- Added H6 as a general benchmark, which represents the average score of the 6 Open LLM Leaderboard metrics.

## 이슈 제기
- issues/2026-08-22-collect-benchmark-exaone-scores.md
- issues/2026-08-22-collect-benchmark-hyperclova-seed-scores.md
