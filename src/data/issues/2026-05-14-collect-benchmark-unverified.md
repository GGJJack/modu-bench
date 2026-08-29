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

## 진행 내역 (2026-07-02)
- (reinforce): 2026년 7월 2일 기준, DeepSeek 및 Meta 공식 채널을 재조사함. DeepSeek V3.2, Llama 4 Maverick/Scout 모델의 공식 벤치마크 수치는 여전히 공개되지 않음. 정기 모니터링을 지속함.

## 진행 내역 (2026-07-26)
- (reinforce): `deepseek-v3-2` 모델의 기존 점수(MMLU, HumanEval)는 유지되고 있으며, 타 표준 벤치마크 점수는 추가 공개되지 않음. `llama-4-maverick-17b` 및 `llama-4-scout-17b` 모델의 경우에도 여전히 신뢰할 수 있는 공식 학술 벤치마크 점수(MMLU, GPQA 등)가 공개되지 않았음을 확인하여 추적 및 정기 모니터링을 지속함.

## 진행 내역 (2026-08-07)
- (reinforce): 2026년 8월 7일 기준, Meta의 Llama 4 Maverick 17B 및 Scout 17B 모델, 그리고 DeepSeek V3.2의 추가적인 범용 표준 학술 벤치마크 점수(GPQA, MMLU-Pro 등)는 공식 기술 문서, 블로그 및 커뮤니티 리더보드 등에서 발표되거나 공표되지 않았습니다. 기존에 확인하여 등록한 `qwen-3-235b`와 `deepseek-v3-2` 모델의 공식 점수 정보는 유효하게 데이터베이스에 보관 중입니다. 신뢰할 수 있는 공식 수치의 부재가 계속되고 있으므로, 정기 추적 모니터링을 계속 유지합니다.

## 진행 내역 (2026-08-29)
- (reinforce): 2026년 8월 29일 기준, DeepSeek 및 Meta 공식 채널을 재조사함. DeepSeek V3.2 및 Llama 4 Maverick/Scout 17B 모델의 공식 학술 벤치마크 수치(MMLU-Pro, GPQA 등)는 여전히 발표되지 않았음. 신뢰할 수 있는 수치 확보 실패로 추적 및 정기 모니터링을 계속 유지함.
