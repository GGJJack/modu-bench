---
date: 2026-09-14
agent: collect-benchmark
status: completed
summary: "Qwen3 Reranker 8B 점수 등록 완료, Qwen-MT-Turbo 및 Qwen3-Embedding-8B 상세 점수 미비로 이슈 생성"
---

## Todo
- [x] 신규 벤치마크 생성 (MTEB-R, CMTEB-R, MMTEB-R, MLDR, MTEB-Code, FollowIR)
- [x] Qwen3-Reranker-8B 점수 등록
- [x] Qwen3-Embedding-8B 점수 확인 및 이슈 생성
- [x] Qwen-MT-Turbo 점수 확인 및 이슈 생성
- [x] status를 completed로 갱신

## 조사 내역
- 01:30 Qwen3 Embedding 블로그에서 신규 벤치마크 MTEB-R, CMTEB-R, MMTEB-R, MLDR, MTEB-Code, FollowIR의 점수 확인. ← https://qwenlm.github.io/blog/qwen3-embedding/
- 01:30 동일한 블로그에서 Qwen3-Reranker-8B와 Qwen3-Embedding-8B 모델의 해당 벤치마크 점수 확인. 표에는 Qwen3-Embedding-0.6B 점수만 있고, 8B 모델은 리더보드 점수 70.58만 본문에 언급됨. ← https://qwenlm.github.io/blog/qwen3-embedding/
- 01:30 Qwen-MT-Turbo 블로그에서 WMT24 등 점수 확인 시도. 수치 데이터 부재 (그래프만 존재). ← https://qwenlm.github.io/blog/qwen-mt/

## 수행한 작업
- [x] 신규 벤치마크 `mteb-r`, `cmteb-r`, `mmteb-r`, `mldr`, `mteb-code`, `followir` 생성 ← https://qwenlm.github.io/blog/qwen3-embedding/
- [x] 모델 `qwen3-reranker-8b` 의 MTEB 관련 점수 6개 추가 ← https://qwenlm.github.io/blog/qwen3-embedding/

## 판단 / 고민
- Qwen-MT-Turbo의 경우 블로그에서 GPT-4.1-mini 등과의 비교 그래프(WMT24 등)는 제시되었으나 정확한 수치가 제공되지 않았음.
- Qwen3-Embedding-8B의 경우 블로그 표에 0.6B 모델의 점수만 있고 8B 모델의 상세 벤치마크 점수가 제공되지 않음 (본문에 MTEB multilingual 리더보드 점수 70.58만 있음).
- 불확실한 정보는 저장하지 않는 규칙에 따라 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-09-14-collect-benchmark-qwen-mt-turbo.md
- issues/2026-09-14-collect-benchmark-qwen3-embedding-8b.md
