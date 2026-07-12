---
date: 2026-07-12
agent: profile-model
status: completed
summary: "2026-07-12 LFM2.5-1.2B-Instruct 및 Upstage Embed 2 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 대상 모델 선정 (LFM2.5-1.2B-Instruct, Upstage Embed 2)
- [x] 모델 정보 조사
- [x] 상세 페이지 작성
- [x] 검증 및 제출

## 조사 내역
- 02:00 작업 시작
- 02:05 Liquid AI LFM2.5-1.2B-Instruct 상세 정보 확인 ← https://www.liquid.ai/blog/lfm2-5-230m, https://docs.liquid.ai/lfm/models/complete-library
- 02:10 Upstage Embed 2 가격 및 특징 확인 ← https://www.upstage.ai/pricing/api

## 수행한 작업
- [x] `src/content/models/lfm2-5-1-2b-instruct.md` 작성 및 `published` 승격
- [x] `src/content/models/upstage-embed-2.md` 작성 및 `published` 승격
- [x] `bun run build`를 통한 Zod 스키마 검증 완료

## 판단 / 고민
- Liquid AI 모델의 경우 LFM2 아키텍처의 혁신성과 효율성을 강조하여 작성함.
- Upstage Embed 2의 경우 기존 모델 대체 및 RAG 시스템에서의 경제성을 중심으로 서술함.

## 이슈 제기
- (없음)
