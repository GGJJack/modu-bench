---
date: 2026-05-28
agent: collect-benchmark
status: completed
summary: "신규 LLM 모델 (Grok Build 0.1, Qwen3-Coder-480B-A35B-Instruct, HCX-005) 벤치마크 점수 매칭 시도 및 이슈 생성"
---

## Todo
- [x] 신규 등록된 LLM 모델의 벤치마크 점수 검색
- [x] 점수 미발견 시 이슈 티켓 생성

## 조사 내역
- 01:30 Grok Build 0.1 공식 문서 및 뉴스 탐색 (https://x.ai/news/grok-build-cli) - 벤치마크 점수 없음.
- 01:35 Qwen3-Coder-480B-A35B-Instruct 공식 블로그 탐색 (https://qwenlm.github.io/blog/qwen3-coder/) - 텍스트 기반 벤치마크 수치 없음.
- 01:40 HCX-005 클로바 스튜디오 공식 페이지 탐색 (https://www.ncloud.com/product/ai/clovaStudio) - 벤치마크 수치 없음.

## 수행한 작업
- [x] grok-build-0.1 벤치마크 부재로 이슈 티켓 생성 ← issues/2026-05-28-collect-benchmark-grok-build-0.1.md
- [x] qwen3-coder-480b-instruct 벤치마크 부재로 이슈 티켓 생성 ← issues/2026-05-28-collect-benchmark-qwen3-coder-480b-instruct.md
- [x] hcx-005 벤치마크 부재로 이슈 티켓 생성 ← issues/2026-05-28-collect-benchmark-hcx-005.md

## 판단 / 고민
- 세 가지 모델 모두 공식 안내 페이지에 구체적 수치가 텍스트로 제시되어 있지 않아 점수 등록을 스킵하고 이슈 티켓으로 넘김.

## 이슈 제기
- issues/2026-05-28-collect-benchmark-grok-build-0.1.md
- issues/2026-05-28-collect-benchmark-qwen3-coder-480b-instruct.md
- issues/2026-05-28-collect-benchmark-hcx-005.md
