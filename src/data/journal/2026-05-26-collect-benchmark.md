---
date: 2026-05-26
agent: collect-benchmark
status: completed
summary: "신규 LLM 모델 벤치마크 점수 매칭 및 이슈 생성"
---

## Todo
- [ ] 신규 모델(leanstral, hcx-007, hcx-dash-002 등) 벤치마크 점수 매칭
- [ ] 점수 확인 불가 시 이슈 티켓 생성

## 조사 내역
- 01:30 Mistral AI (Leanstral, Mistral Small 4), NAVER Cloud (HCX), Amazon Bedrock (Voxtral) 공식 문서에서 벤치마크 점수 탐색 시도
- 공식 벤치마크 출처 부재로 이슈 티켓 생성

## 수행한 작업
- [x] leanstral 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-27-collect-benchmark-leanstral.md
- [x] hcx-007 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-27-collect-benchmark-hcx-007.md
- [x] hcx-dash-002 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-27-collect-benchmark-hcx-dash-002.md
- [x] voxtral-mini-1-0 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-27-collect-benchmark-voxtral-mini-1-0.md
- [x] voxtral-small-1-0 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-27-collect-benchmark-voxtral-small-1-0.md
- [x] mistral-small-4 모델 이슈 티켓 생성 (공식 벤치마크 출처 부재) ← issues/2026-05-27-collect-benchmark-mistral-small-4.md

## 판단 / 고민
- 등록된 신규 모델들의 벤치마크 점수를 공식 출처에서 찾을 수 없어 이슈 티켓으로 이관함.

## 이슈 제기
- issues/2026-05-27-collect-benchmark-leanstral.md
- issues/2026-05-27-collect-benchmark-hcx-007.md
- issues/2026-05-27-collect-benchmark-hcx-dash-002.md
- issues/2026-05-27-collect-benchmark-voxtral-mini-1-0.md
- issues/2026-05-27-collect-benchmark-voxtral-small-1-0.md
- issues/2026-05-27-collect-benchmark-mistral-small-4.md
