---
date: 2026-07-08
agent: collect-benchmark
status: completed
summary: "Liquid AI LFM2.5 모델 점수 및 신규 벤치마크 등록"
---

## 조사 내역
- 16:50 Liquid AI lfm2-5-230m 공식 블로그 확인 (GPQA, MMLU-Pro, IFEval, IFBench 점수 확보) ← https://www.liquid.ai/blog/lfm2-5-230m
- 16:55 Sakana AI Sakana Translate 공식 블로그 확인 (구체적 점수 없음) ← https://sakana.ai/translate-release/
- 17:00 Liquid AI lfm2-5-vl-450m 공식 블로그 확인 (GPQA, MMLU-Pro, IFEval 점수 확보) ← https://www.liquid.ai/blog/lfm2-5-vl-450m

## 수행한 작업
- [x] `lfm2-5-230m` GPQA (25.41) 등록 ← https://www.liquid.ai/blog/lfm2-5-230m
- [x] `lfm2-5-230m` MMLU-Pro (20.25) 등록 ← https://www.liquid.ai/blog/lfm2-5-230m
- [x] `lfm2-5-230m` IFEval (71.71) 등록 ← https://www.liquid.ai/blog/lfm2-5-230m
- [x] `lfm2-5-230m` IFBench (38.40) 등록 ← https://www.liquid.ai/blog/lfm2-5-230m
- [x] 신규 벤치마크 `wmt-2024-xcomet-xl` 정의 등록
- [x] 신규 벤치마크 `multi-if` 정의 등록
- [x] `lfm2-5-230m` Multi-IF (37.70) 등록 ← https://www.liquid.ai/blog/lfm2-5-230m
- [x] `lfm2-5-vl-450m` GPQA (25.66) 등록 ← https://www.liquid.ai/blog/lfm2-5-vl-450m
- [x] `lfm2-5-vl-450m` MMLU-Pro (19.32) 등록 ← https://www.liquid.ai/blog/lfm2-5-vl-450m
- [x] `lfm2-5-vl-450m` IFEval (61.16) 등록 ← https://www.liquid.ai/blog/lfm2-5-vl-450m
- [x] `lfm2-5-vl-450m` Multi-IF (34.63) 등록 ← https://www.liquid.ai/blog/lfm2-5-vl-450m
- [x] 신규 벤치마크 `bfcl-v4` 정의 등록
- [x] `lfm2-5-vl-450m` BFCLv4 (21.08) 등록 ← https://www.liquid.ai/blog/lfm2-5-vl-450m

## 이슈 제기
- issues/2026-07-08-collect-benchmark-sakana-translate.md (WMT 2024 XCOMET-XL 구체적 점수 없음)
