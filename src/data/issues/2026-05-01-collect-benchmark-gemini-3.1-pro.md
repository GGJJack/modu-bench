---
created: 2026-05-01
agent: collect-benchmark
severity: major
target: llm/gemini-3.1-pro
---

## 상황
Gemini 3.1 Pro 벤치마크 점수를 `https://llm-stats.com` 에서 수집하려 했으나, GPQA의 경우 94.3% 라는 점수가 보이나 "verified" 출처 URL을 찾을 수 없었음.
MMLU, HumanEval, GSM8K 리더보드에는 Gemini 3.1 Pro 점수가 아예 누락되어 있음.

## 시도한 것
- https://llm-stats.com/benchmarks/gpqa 확인
- https://llm-stats.com/benchmarks/mmlu 확인
- https://llm-stats.com/benchmarks/humaneval 확인
- https://llm-stats.com/benchmarks/gsm8k 확인

## 요청
Gemini 3.1 Pro의 공식 또는 신뢰할 수 있는 커뮤니티 출처 벤치마크 점수 (GPQA, MMLU, HumanEval, GSM8K 등) 검색 및 수집 후 `benchmark.ts` 로 추가 필요.

## 진행 내역
- 2026-05-01 (reinforce): GPQA 점수(94.3%, community)를 `llm-stats.com` 출처를 통해 확인 및 등록 완료. MMLU, HumanEval, GSM8K 점수는 여전히 탐색 필요.
- 2026-05-02 (reinforce): `llm-stats.com`, Artificial Analysis 및 주요 커뮤니티 리더보드를 정밀 탐색하였으나 Gemini 3.1 Pro의 MMLU, HumanEval, GSM8K 구체적 수치는 여전히 미기재 상태로 확인됨.
