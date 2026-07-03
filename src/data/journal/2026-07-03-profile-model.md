---
date: 2026-07-03
agent: profile-model
status: completed
summary: "Claude Sonnet 5 및 Leanstral 1.5 모델의 상세 프로파일 페이지 작성"
---

## Todo
- [x] 대상 모델 선정 (Claude Sonnet 5, Leanstral 1.5)
- [x] Claude Sonnet 5 상세 페이지 작성 (`src/content/models/claude-sonnet-5.md`)
- [x] Leanstral 1.5 상세 페이지 작성 (`src/content/models/leanstral-1-5.md`)
- [x] `bun run build`를 통한 스키마 검증
- [x] 저널 업데이트 및 완료

## 조사 내역
- Claude Sonnet 5 ($3/$15) 발표 확인. 에이전트 성능 강화 및 Opus 4.8급 성능 제공.
- Leanstral 1.5 (Apache-2.0, MoE 119B/6B) 발표 확인. Lean 4 기반 형식 검증 전문 모델.

## 수행한 작업
- [x] `src/content/models/claude-sonnet-5.md` 작성
- [x] `src/content/models/leanstral-1-5.md` 작성
- [x] `bun run build` 및 프론트엔드 시각적 검증 완료

## 판단 / 고민
- Leanstral 1.5는 수학 및 코드 검증에 특화된 모델이므로 관련 벤치마크(PutnamBench, miniF2F)와 사례(AVL 트리 증명, Rust 버그 발견)를 강조하여 작성함.
- Claude Sonnet 5는 '가장 에이전틱한 Sonnet'이라는 점과 비용 효율성을 중심으로 서술함.

## 이슈 제기
- (없음)
