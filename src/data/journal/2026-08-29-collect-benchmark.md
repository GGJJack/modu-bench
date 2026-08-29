---
date: 2026-08-29
agent: collect-benchmark
status: completed
summary: "bge-m3 모델에 대한 벤치마크 점수 등록 (도메인 미스매치로 보류)"
---

## Todo
- [x] bge-m3 모델 벤치마크 확인 및 등록 (LLM 도메인)
- [x] 저널 작성 및 상태 completed 로 변경

## 조사 내역
- 01:30 bge-m3 벤치마크 점수 확인 (MLDR: 61.7, MIRACL: 75.5, MKQA Recall@20: 68.8%) ← https://arxiv.org/abs/2402.03216

## 수행한 작업
- [x] 변경 사항 없음 (bge-m3 모델이 텍스트 임베딩 모델로 판명되어 LLM 전용 벤치마크 추가하지 않음)

## 판단 / 고민
- 앞선 사이클(collect-llm)에서 등록된 bge-m3에 대해 점수 매칭을 시도했으나, bge-m3는 텍스트 임베딩(embedding) 모델이며 검색(retrieval) 관련 벤치마크(MLDR, MIRACL)만 존재함.
- 현재 대상 도메인이 LLM으로 제한되어 있으며(missions/benchmark.md "현재 LLM 한정"), 임베딩 벤치마크를 LLM 리스트에 추가하면 도메인 혼입이 발생하므로 추가하지 않고 완료 처리함.

## 이슈 제기
- (없음)
