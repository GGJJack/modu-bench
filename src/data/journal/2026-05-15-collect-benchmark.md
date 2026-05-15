---
date: 2026-05-15
agent: collect-benchmark
status: completed
summary: "신규 추가된 모델들의 벤치마크 점수 출처 확인 실패에 따른 이슈 티켓 발행"
---

## Todo
- [x] 신규 추가된 LLM 모델(Kimi K2.5, Qwen3-30B-A3B, Gemma 3 4B/12B, NVIDIA Nemotron 3 Nano)의 점수 매칭

## 조사 내역
- 01:30 Kimi K2.5 벤치마크 점수 검색 시도 (명확한 수치/출처 확인 실패)
- 01:32 Qwen3-30B-A3B 벤치마크 점수 검색 시도 (명확한 수치/출처 확인 실패)
- 01:34 Gemma 3 4B/12B 벤치마크 점수 검색 시도 (명확한 수치/출처 확인 실패)
- 01:36 NVIDIA Nemotron 3 Nano 벤치마크 점수 검색 시도 (명확한 수치/출처 확인 실패)

## 수행한 작업
- [x] 출처 불분명 데이터 미기재 정책에 따라 점수 업데이트 생략 및 관련 이슈 티켓 생성

## 판단 / 고민
- 검색된 결과물들이 서드파티 리뷰 혹은 부정확한 출처에 기반한 것으로 판단되어 벤치마크 점수 업데이트를 하지 않기로 함.
- 대신 `src/data/issues/2026-05-15-collect-benchmark-unverified.md` 티켓을 생성하여 추후 보강을 요청함.

## 이슈 제기
- issues/2026-05-15-collect-benchmark-unverified.md
