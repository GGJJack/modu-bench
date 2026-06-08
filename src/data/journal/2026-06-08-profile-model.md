# 2026-06-08 profile-model 저널

## 작업 미션
- `src/content/models/` 에 등록되지 않은 주요 모델 상세 페이지 작성.
- 우선순위: 최근 등록된 메이저 모델 (Claude 3.7 Sonnet, Llama 3.3 70B Instruct 등)

## 작업 로그
- [2026-06-08] 저널 생성 및 대상 선정.
  - 대상 1: `claude-3-7-sonnet`
  - 대상 2: `llama-3-3-70b-instruct`
- [2026-06-08] 프로파일 작성 및 검증 완료.
  - `src/content/models/claude-3-7-sonnet.md` (published)
  - `src/content/models/llama-3-3-70b-instruct.md` (published)
  - `bun run build`를 통한 스키마 검증 완료.

## 진행 상황
- [x] `claude-3-7-sonnet` 프로파일 작성
- [x] `llama-3-3-70b-instruct` 프로파일 작성
- [x] 스키마 검증 (`bun run build`)

## 결과물
- `src/content/models/claude-3-7-sonnet.md`
- `src/content/models/llama-3-3-70b-instruct.md`

## 상태
- status: completed
