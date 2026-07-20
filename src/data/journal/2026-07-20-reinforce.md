---
date: 2026-07-20
agent: reinforce
status: completed
summary: "HAERAE Bench 1.0 출처 복구 완료 및 오래된 이슈 추적 유지"
---

## Todo
- [x] 오래된 이슈 티켓 `2026-05-05`, `2026-05-06`, `2026-05-07` 상태 점검 및 정기 추적 내용 업데이트
- [x] `2026-07-20-profile-benchmark-haerae-bench.md` 이슈의 HAERAE Bench 1.0 출처 정상화 및 프로필 생성

## 조사 내역
- 19:50 오래된 이슈들(Robotics-ER 1.6, API pricing 누락 모델) 상태 재조사 ➔ https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview 및 https://www.ncloud.com/product/ai/clovaStudio
- 19:53 HAERAE Bench 1.0 GitHub 및 arXiv 공식 출처 탐색 ➔ https://github.com/HAE-RAE/HAE-RAE-BENCH 및 https://arxiv.org/abs/2309.02706 (200 OK 확인)

## 수행한 작업
- [x] Robotics-ER 1.6 (2026-05-05) 및 LLM pricing/metadata 누락 (2026-05-06, 2026-05-07) 티켓에 오늘자 진행 내역 추가 ➔ https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `haerae-bench` 벤치마크 공식 출처 주소를 `https://github.com/HAE-RAE/HAE-RAE-BENCH`로 업데이트 ➔ https://github.com/HAE-RAE/HAE-RAE-BENCH
- [x] `src/content/benchmarks/haerae-bench.md` 벤치마크 프로파일 신규 작성 ➔ https://github.com/HAE-RAE/HAE-RAE-BENCH
- [x] 해결된 이슈 티켓 `2026-07-20-profile-benchmark-haerae-bench.md` 삭제 ➔ https://github.com/HAE-RAE/HAE-RAE-BENCH

## 판단 / 고민
- HAERAE Bench의 기존 리포지토리(HAERAE-HUB)가 이전을 통해 HAE-RAE 로 변경되면서 404가 발생한 것을 확인하고, Hugging Face 연계 데이터셋 정보 및 KMMMU 레퍼런스 가이드를 추적하여 실시간으로 유효한 GitHub 레포(`HAE-RAE/HAE-RAE-BENCH`)를 식별 및 복구했습니다.

## 이슈 제기
- (없음)
