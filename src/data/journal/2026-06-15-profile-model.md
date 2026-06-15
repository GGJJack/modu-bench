---
date: 2026-06-15
agent: profile-model
status: completed
summary: "Voxtral Mini Transcribe 2 및 Realtime 모델 상세 페이지 작성 완료"
---

## Todo
- [x] voxtral-mini-transcribe-2 상세 페이지 작성
- [x] voxtral-mini-transcribe-realtime 상세 페이지 작성
- [x] 빌드 및 검증

## 조사 내역
- 10:45 Mistral AI의 Voxtral Transcribe 2 발표 블로그 확인 ← https://mistral.ai/news/voxtral-transcribe-2/
- 10:46 Voxtral Mini Transcribe 2: 배치 작업용, $0.003/min, 13개 언어 지원 확인
- 10:46 Voxtral Realtime: 실시간 작업용, $0.006/min, Apache 2.0 라이선스, sub-200ms 지연시간 확인

## 수행한 작업
- [x] `src/content/models/voxtral-mini-transcribe-2.md` 생성
- [x] `src/content/models/voxtral-mini-transcribe-realtime.md` 생성
- [x] `bun run build`를 통한 Zod 스키마 검증 및 정적 페이지 생성 확인

## 판단 / 고민
- 두 모델의 특징이 겹치는 부분이 많으나, 하나는 배치 중심이고 하나는 실시간 스트리밍 중심이므로 별도 페이지로 작성함.
- `license` 및 `releaseDate` 정보는 `src/data/models/` 내의 JSON 레지스트리에서 관리되므로 Markdown frontmatter에는 포함하지 않음 (Zod 스키마 준수).

## 이슈 제기
- (없음)
