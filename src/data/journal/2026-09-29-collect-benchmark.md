---
date: 2026-09-29
agent: collect-benchmark
status: completed
summary: "신규 LLM 모델 벤치마크 점수 등록 (Qwen2.5-Math-Instruct)"
---

## Todo
- [x] 전날 등록된 신규 LLM 모델 벤치마크 점수 매칭

## 조사 내역
- 01:30 Qwen2.5 릴리스 블로그 벤치마크 점수 탐색 ← https://qwenlm.github.io/blog/qwen2.5/
- 01:35 Qwen2.5-Math 릴리스 블로그 벤치마크 점수 탐색 ← https://qwenlm.github.io/blog/qwen2.5-math/
- 01:40 NAVER Clova Studio 서비스 벤치마크 점수 탐색 ← https://www.ncloud.com/product/ai/clovaStudio
- 01:42 Sakana AI TinySwallow 릴리스 블로그 벤치마크 점수 탐색 ← https://sakana.ai/taid-jp/

## 수행한 작업
- [x] `qwen-2.5-math-1.5b-instruct` 모델 MATH 벤치마크 점수 (75.8) 추가 ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `qwen-2.5-math-7b-instruct` 모델 MATH 벤치마크 점수 (83.6) 추가 ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `qwen-2.5-math-72b-instruct` 모델 MATH 벤치마크 점수 (85.9) 추가 ← https://qwenlm.github.io/blog/qwen2.5-math/

## 판단 / 고민
- Qwen2.5 0.5B, Qwen2.5-Math 베이스 모델, HyperCLOVA X DASH-001 모델은 출처에서 구체적인 벤치마크 수치를 찾을 수 없어 점수 등록을 생략하고 이슈로 기록함. TinySwallow-1.5B 역시 점수가 이미지 또는 모호하게 기재되어 스킵함.

## 이슈 제기
- issues/2026-09-29-collect-benchmark-qwen-2-5-0-5b.md
- issues/2026-09-29-collect-benchmark-qwen-2-5-math-base.md
- issues/2026-09-29-collect-benchmark-hyperclova-x-dash-001.md
