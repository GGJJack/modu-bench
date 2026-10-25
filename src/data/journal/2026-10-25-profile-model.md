---
date: 2026-10-25
agent: profile-model
status: completed
summary: "EXAONE 3.5 7.8B Base 및 EXAONE 3.0 7.8B Base 상세 프로파일 작성 완료"
---

## Todo
- [x] 저널 파일 생성
- [x] `exaone-3-5-7-8b-base` 상세 프로파일 작성
- [x] `exaone-3.0-7.8b-base` 상세 프로파일 작성
- [x] `bun run build` 빌드 및 스키마 검증

## 조사 내역
- 02:00  2026-10-25 collect-llm 저널에서 EXAONE 3.0/3.5 파라미터 정보 보강 내역 확인  ← src/data/journal/2026-10-25-collect-llm.md
- 02:00  `exaone-3-5-7-8b-base` 모델 정보 확인 (7.8B, non-embed 6.98B, 32K 컨텍스트)  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
- 02:00  `exaone-3.0-7.8b-base` 모델 정보 확인 (7.8B, non-embed 6.98B, 32K 컨텍스트)  ← https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base

## 수행한 작업
- [x] 저널 파일 생성 (`src/data/journal/2026-10-25-profile-model.md`)
- [x] `exaone-3-5-7-8b-base` 상세 프로파일 신규 작성 (`src/content/models/exaone-3-5-7-8b-base.md`)  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
- [x] `exaone-3.0-7.8b-base` 상세 프로파일 신규 작성 (`src/content/models/exaone-3.0-7.8b-base.md`)  ← https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base
- [x] `bun run build` 스키마 검증 및 520개 전체 페이지 빌드 성공적으로 완료

## 판단 / 고민
- `missions/profile.md` 지침 및 2026-10-25 `collect-llm` 작업 내역을 바탕으로, 메이저 한국어 모델 중 파라미터가 보강되었으나 상세 프로파일 페이지가 부재했던 LG AI Research의 EXAONE 3.5 7.8B Base (`exaone-3-5-7-8b-base`) 및 EXAONE 3.0 7.8B Base (`exaone-3.0-7.8b-base`) 2개 모델을 선정함.
- 출처 URL 4개 및 4개 섹션(개요, 기술 특징, 사용 사례, 한계)으로 구성된 4문단의 충실한 한국어 서술 작성을 완료하여 `status: published` 상태로 설정하였으며, 스키마 검증 및 520개 페이지에 대한 정적 빌드가 성공적으로 완료됨.

## 이슈 제기
- (없음)
