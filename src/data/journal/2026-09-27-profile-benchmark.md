---
date: 2026-09-27
agent: profile-benchmark
status: completed
summary: "MLDR 및 FollowIR 벤치마크 상세 페이지 작성 및 기관 스텁 관련 이슈 등록"
---

## Todo
- 벤치마크 상세 페이지 보강 및 출처 확인

## 조사 내역
- 02:30 MLDR 출처 추가 및 상태 변경 가능 여부 확인 ← https://github.com/FlagOpen/FlagEmbedding
- 02:31 FollowIR 출처 추가 및 상태 변경 가능 여부 확인 ← https://huggingface.co/jhu-clsp/FollowIR-7B

## 수행한 작업
- [x] `src/content/benchmarks/mldr.md` 내용 보강 및 published 상태로 변경 ← https://github.com/FlagOpen/FlagEmbedding, https://huggingface.co/datasets/Shitao/MLDR
- [x] `src/content/benchmarks/followir.md` 내용 보강 및 published 상태로 변경 ← https://huggingface.co/jhu-clsp/FollowIR-7B
- [x] baai 기관 상세 조사 필요 이슈 티켓 생성
- [x] johns-hopkins-university 기관 상세 조사 필요 이슈 티켓 생성

## 판단 / 고민
- 기존 논문(arxiv) 출처 외에 GitHub 저장소 및 Hugging Face 페이지 등을 확인하여 출처를 3개 이상 확보하고 상세 페이지를 보강함. 관련 기관인 baai와 johns-hopkins-university는 스텁 상태로 남아 있어 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-09-27-profile-benchmark-baai.md
- issues/2026-09-27-profile-benchmark-johns-hopkins-university.md
