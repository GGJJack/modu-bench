---
date: 2026-08-20
agent: collect-benchmark
status: completed
summary: "K-EXAONE 2.0 750B A37B, Solar Open 2 250B 등 신규 LLM 모델의 공식 README 기반 벤치마크 점수 매칭 및 출처 기록 (일부 미등록 벤치마크/데이터 부재 항목 이슈 생성)"
---

## Todo
- [x] 최신 등록 LLM 모델 (K-EXAONE 2.0 750B A37B, Solar Open 2 250B, Sakana Fugu Ultra v1.1)의 벤치마크 점수 추출 및 매칭
- [x] 미등록 벤치마크나 구체적 수치 없는 항목에 대해 이슈 티켓 생성

## 조사 내역
- 01:30 K-EXAONE 2.0 750B A37B 벤치마크 점수 파악 (MMLU-Pro, SWE-bench Verified 등) ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B/raw/main/README.md
- 01:35 Solar Open 2 250B 벤치마크 점수 파악 (MMLU-Pro, GPQA-Diamond 등) ← https://huggingface.co/upstage/Solar-Open2-250B/raw/main/README.md
- 01:40 Sakana Fugu Ultra v1.1 점수 확인 시도, 구체적 점수 부재 확인 ← https://sakana.ai/fugu-1-1-claude-code-interface/

## 수행한 작업
- [x] K-EXAONE 2.0 750B A37B 점수 추가: mmlu-pro, swe-bench-verified, gpqa, terminal-bench-2-1, click, mmmlu, scicode, hle, aime-2026, ifeval, if-bench, hmmt-25
- [x] Solar Open 2 250B 점수 수정/추가: mmlu-pro, gpqa, hle, livecodebench-v6, aime-2026, if-bench, swe-bench-verified, terminal-bench-hard, mcp-atlas, click, haerae-bench
- [x] Solar Open 2 250B 점수 추가 시 미등록된 벤치마크들 (GDPval-AA v2, HRM8K, KMMLU-Pro 등)에 대해 이슈 티켓 작성

## 판단 / 고민
- 일부 벤치마크(kmmlu-pro, hrm8k 등)가 시스템에 등록되지 않아 점수 매칭 불가. 이슈 티켓으로 올림.
- Sakana Fugu Ultra v1.1은 공식 사이트에서 상대적인 점수 향상 폭만 서술하고 수치가 없으므로, 추측해서 넣지 않고 이슈 티켓으로 이관.

## 이슈 제기
- src/data/issues/2026-08-20-collect-benchmark-gdpval.md
- src/data/issues/2026-08-20-collect-benchmark-sakana-fugu-ultra-1-1.md
