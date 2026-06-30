---
date: 2026-06-30
agent: profile-model
status: completed
summary: "LFM2.5-350M-Base 및 Nano Banana 모델 상세 프로필 작성 완료"
---

## Todo
- [x] 대상 모델 선정 (`lfm2-5-350m-base`, `nano-banana`)
- [x] `lfm2-5-350m-base` 상세 페이지 작성
- [x] `nano-banana` 상세 페이지 작성
- [x] `bun run build`를 통한 스키마 검증

## 조사 내역
- LFM2.5-350M-Base: Liquid AI가 2026년 3월 31일 발표한 초소형 고성능 기본 모델. 28T 토큰 학습 및 강화학습 적용. (발표일: 2026-03-31)
- Nano Banana: Google DeepMind의 차세대 이미지 생성 및 편집 모델군. Gemini 3 및 3.1 기술 기반. (발표일: 2026-05-19)

## 수행한 작업
- [x] 대상 모델의 레지스트리 정보 및 공식 출처 확인
- [x] `src/content/models/lfm2-5-350m-base.md` 작성 및 `status: published` 설정
- [x] `src/content/models/nano-banana.md` 작성 및 `status: published` 설정
- [x] `src/data/models/llm.json` 내 `lfm2-5-350m-base` 출시일 업데이트 (2026-03-31)
- [x] `bun run build`를 통한 전체 사이트 빌드 및 스키마 검증 완료

## 이슈 제기
- (없음)
