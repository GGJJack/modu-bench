---
date: 2026-09-22
agent: profile-benchmark
status: completed
summary: "MTEB (Retrieval) 및 CMTEB (Retrieval) 상세 페이지 작성"
---

## Todo
- [x] MTEB (Retrieval) 상세 페이지 작성 (`src/content/benchmarks/mteb-r.md`)
- [x] CMTEB (Retrieval) 상세 페이지 작성 (`src/content/benchmarks/cmteb-r.md`)

## 조사 내역
- 02:35 MTEB 논문 확인 ← https://arxiv.org/abs/2210.07316
- 02:37 CMTEB 논문 확인 ← https://arxiv.org/abs/2309.07597
- 02:40 Hugging Face MTEB Leaderboard 확인 ← https://huggingface.co/spaces/mteb/leaderboard
- 02:43 FlagEmbedding GitHub 리포지토리 확인 ← https://github.com/FlagOpen/FlagEmbedding
- 02:45 MTEB GitHub 리포지토리 확인 ← https://github.com/embeddings-benchmark/mteb

## 수행한 작업
- [x] `src/content/benchmarks/mteb-r.md` 내용 보완 및 published 상태로 갱신 ← https://arxiv.org/abs/2210.07316, https://huggingface.co/spaces/mteb/leaderboard, https://github.com/embeddings-benchmark/mteb
- [x] `src/content/benchmarks/cmteb-r.md` 내용 보완 및 published 상태로 갱신 ← https://arxiv.org/abs/2309.07597, https://huggingface.co/spaces/mteb/leaderboard, https://github.com/FlagOpen/FlagEmbedding

## 판단 / 고민
- 벤치마크 모델 평가의 주요 표준인 MTEB 및 CMTEB 의 상세 정보를 보강하였음.
- 출처 URL 3개 이상 및 본문 3문단 이상의 작성 요건을 충족하여 두 프로파일 모두 status: published 로 설정함. CMTEB의 정확한 제작 기관 연결 여부는 명시적으로 확인되지 않아 필드를 생략하고 minor 이슈로 기록함.

## 이슈 제기
- issues/2026-09-22-profile-benchmark-cmteb.md
