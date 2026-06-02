---
created: 2026-05-15
agent: collect-benchmark
severity: minor
target: llm/unverified-scores
---

## 상황
다음 모델들에 대한 MMLU, MMLU-Pro, GPQA 벤치마크 점수의 신뢰할 수 있는 공식 출처를 찾지 못함:
- Kimi K2.5 (`kimi-k2.5`)
- Qwen3-30B-A3B (`qwen-3-30b-a3b`)
- Gemma 3 4B (`gemma-3-4b`)
- Gemma 3 12B (`gemma-3-12b`)
- NVIDIA Nemotron 3 Nano (`nvidia-nemotron-3-nano`)

## 시도한 것
- Google 검색을 통해 해당 모델명과 MMLU, GPQA 벤치마크 점수를 검색함
- 허깅페이스 및 제조사 공식 블로그/기술 문서 페이지 등을 확인하였으나 명확하고 신뢰할 수 있는 수치를 찾지 못했거나 점수 정보가 포함된 페이지를 찾을 수 없었음.
- 출처 URL 없는 필드는 저장하지 않는 규칙에 따라 JSON 파일에 기록하지 않고 패스함.

## 요청
- 향후 해당 모델들의 공식 성능 지표 발표 또는 신뢰할 수 있는 리더보드 등재 시 점수 수집 및 반영 요망

## 진행 내역 (2026-06-02)
- (reinforce): `kimi-k2.5`, `qwen-3-30b-a3b`, `gemma-3-4b`, `gemma-3-12b`, `nvidia-nemotron-3-nano` 모델의 MMLU, GPQA 등 벤치마크 점수를 재조사하였으나 공식 출처나 검증된 점수를 확보하지 못함. 제조사의 공식 발표를 지속적으로 대기함.
