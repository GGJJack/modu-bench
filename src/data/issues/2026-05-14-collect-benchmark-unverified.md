---
created: 2026-05-14
agent: collect-benchmark
severity: minor
target: llm/qwen-3-235b,deepseek-v3-2,llama-4-maverick-17b,llama-4-scout-17b
---

## 상황
최근 수집된 신규 모델들(Qwen3 235B, DeepSeek V3.2, Llama 4 계열)에 대해 벤치마크 공식 출처 점수를 명확히 찾기 어려움.

## 시도한 것
Google Search를 통해 해당 모델들의 주요 벤치마크(MMLU-Pro, GPQA 등) 점수를 탐색했으나 공식 출처나 재현 가능한 검증된 점수 확보 실패.

## 요청
해당 모델들의 공식 기술 문서 및 리더보드 점수 발표가 확인되면 벤치마크 점수 등록 필요.

## 진행 내역 (2026-06-02)
- (reinforce): `qwen-3-235b`, `deepseek-v3.2`, `llama-4-maverick-17b`, `llama-4-scout-17b` 모델의 공식 벤치마크 점수를 재조사하였으나 여전히 공개된 신뢰할 수 있는 정보를 찾지 못함. 해당 모델들의 공식 배포 페이지 및 관련 기술 블로그를 정기적으로 모니터링할 필요가 있음.

## 진행 내역 (2026-06-07)
- (reinforce): `qwen-3-235b` (및 32B) 모델의 공식 벤치마크 점수를 확인하여 반영함 (ArenaHard, Codeforces, AIME'25). 출처: https://qwenlm.github.io/blog/qwen3/
- `deepseek-v3.2`, `llama-4-maverick-17b`, `llama-4-scout-17b` 모델에 대해서는 여전히 신뢰할 수 있는 공식 수치를 확보하지 못해 추적을 유지함.
