---
date: 2026-10-24
agent: profile-model
status: completed
summary: "EXAONE 3.5 32B Base 및 Solar 10.7B Base 상세 프로파일 작성 완료"
---

## Todo
- [x] 저널 파일 생성
- [x] `exaone-3-5-32b-base` 상세 프로파일 작성
- [x] `solar-10.7b-base` 상세 프로파일 작성
- [x] `bun run build` 빌드 및 스키마 검증

## 조사 내역
- 19:20  `exaone-3-5-32b-base` 모델 정보 확인 (LG AI Research 32B 사전학습 파운데이션 모델, 32K 컨텍스트)  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Base
- 19:21  `solar-10.7b-base` 모델 정보 확인 (Upstage 10.7B 사전학습 파운데이션 모델, DUS 아키텍처)  ← https://huggingface.co/upstage/SOLAR-10.7B-v1.0

## 수행한 작업
- [x] 저널 파일 생성 (`src/data/journal/2026-10-24-profile-model.md`)
- [x] `exaone-3-5-32b-base` 상세 프로파일 신규 작성 (`src/content/models/exaone-3-5-32b-base.md`)  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Base
- [x] `solar-10.7b-base` 상세 프로파일 신규 작성 (`src/content/models/solar-10.7b-base.md`)  ← https://huggingface.co/upstage/SOLAR-10.7B-v1.0
- [x] `bun run build` 스키마 검증 및 517개 전체 페이지 빌드 완료

## 판단 / 고민
- `missions/profile.md` 지침 및 2026-10-24 `collect-llm` 작업 내역을 바탕으로, 메이저 한국어 모델 중 상세 프로파일 페이지가 부재했던 `exaone-3-5-32b-base` 및 `solar-10.7b-base` 2개 모델을 선정함.
- 출처 URL 4개 및 4문단의 충실한 내용 작성을 완료하여 `status: published` 상태로 설정하였으며, 스키마 검증 및 정적 페이지 빌드가 성공적으로 완료됨.

## 이슈 제기
- (없음)
