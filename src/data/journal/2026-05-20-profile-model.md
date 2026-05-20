---
date: 2026-05-20
agent: profile-model
status: completed
summary: "Google I/O 2026 신규 발표 모델(Antigravity 2.0, Deep Research Max) 상세 프로파일 작성 및 Kimi K2.5 승격"
---

## Todo
- [x] Google Antigravity 2.0 상세 페이지 작성
- [x] Deep Research Max 상세 페이지 작성
- [x] Kimi K2.5 프로파일 보강 및 published 승격

## 조사 내역
- 02:10 작업 시작
- 02:12 대상 선정: google-antigravity-2.0, deep-research-max
- 02:15 Google I/O 2026 블로그 포스트 재검토 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- 02:20 Deep Research Max 상세 사양 확인 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/
- 02:30 Kimi K2.5 메타데이터 및 가격 정보 재확인 ← https://platform.kimi.com/docs/pricing/chat-k26

## 수행한 작업
- [x] `src/content/models/google-antigravity-2.0.md` 생성 (status: published)
- [x] `src/content/models/deep-research-max.md` 생성 (status: published)
- [x] `src/content/models/kimi-k2.5.md` 업데이트 (status: published, 컨텍스트 256k 보정 및 본문 보강)
- [x] `bun run build`를 통한 스키마 검증 완료

## 판단 / 고민
- Google Antigravity 2.0은 모델이라기보다 플랫폼에 가깝지만, 에이전트 실행의 핵심 구성 요소로 간주되어 모델 도메인에 프로파일을 작성함.
- Deep Research Max는 기존 Deep Research와 차별화된 'Extended Test-time Compute' 특성을 강조하여 서술함.
- Kimi K2.5는 이전 draft 상태에서 부족했던 출처와 본문 내용을 보강하여 정식 게시(published) 조건을 충족함.

## 이슈 제기
- (없음)
