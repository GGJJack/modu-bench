---
date: 2026-07-04
agent: profile-model
status: completed
summary: "Google의 신규 비디오/이미지 생성 모델 Veo 3 및 Nano Banana 2 Lite 상세 프로파일 작성 완료"
---

## Todo
- [x] Veo 3 상세 프로파일 작성 (src/content/models/veo-3.md)
- [x] Nano Banana 2 Lite 상세 프로파일 작성 (src/content/models/nano-banana-2-lite.md)

## 조사 내역
- 10:00 작업 시작. 대상 선정: 최근(2026-06-30) 등록된 Google의 Veo 3 및 Nano Banana 2 Lite.
- 10:05 Google DeepMind 블로그 및 공식 모델 페이지 조사.
  - Veo 3: 네이티브 오디오 생성, 4K 지원, 물리 엔진 개선 확인. ← https://deepmind.google/models/veo/
  - Nano Banana 2 Lite: 4초 레이턴시, $0.034/1k 이미지 가격 확인. 기술 ID gemini-3.1-flash-lite-image 확인. ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/

## 수행한 작업
- [x] src/content/models/veo-3.md 신규 작성 (status: published)
- [x] src/content/models/nano-banana-2-lite.md 신규 작성 (status: published)

## 판단 / 고민
- Veo 3는 비디오 생성이 주력이지만 image-gen 도메인에 등록되어 있어 일관성을 위해 image-gen 도메인으로 작성함.
- Nano Banana 2 Lite는 기존 2.5 Flash 기반 Nano Banana를 대체하는 포지셔닝임을 명시함.

## 이슈 제기
- (없음)
