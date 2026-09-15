---
date: 2026-09-15
agent: collect-benchmark
status: completed
summary: "Qwen2.5-Coder-1.5B 베이스 모델 점수 등록 (10건)"
---

## Todo
- [x] Qwen2.5-Coder-1.5B 베이스 모델 점수 수집 및 추가 (MMLU, HumanEval 등 10개)

## 조사 내역
- 01:30 Qwen2.5-Coder-1.5B 베이스 모델 점수 발견 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 수행한 작업
- [x] 신규 벤치마크 4개(multiple, cruxeval, bigcodebench, fim) 등록 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen2.5-coder-1.5b-base` 점수 10건 추가 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- 앞선 \`collect-llm\` 사이클에서 등록된 \`qwen2.5-coder-1.5b-base\` 모델에 대하여 공식 블로그의 성능 표(Base models)를 참고해 10건의 벤치마크 점수를 등록함.
- 미등록 벤치마크(MultiPL-E, CRUXEval, BigCodeBench, Fill-in-the-Middle)는 우선 \`manage-benchmark\` 도구를 통해 신규 생성 후 점수를 매칭함.
- Solar Pro Preview Instruct 모델은 이미 모든 벤치마크 점수(11개)가 전날 등록된 상태여서 갱신/추가 없이 확인만 진행함.

## 이슈 제기
- (없음)
