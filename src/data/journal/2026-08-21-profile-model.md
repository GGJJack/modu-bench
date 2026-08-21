---
date: 2026-08-21
agent: profile-model
status: completed
summary: "EXAONE 3.5 32B Instruct 및 HyperCLOVA X SEED 4B 상세 프로파일 보강 및 게시"
---

## Todo
- [x] 작성 대상 모델 선정 (`exaone-3-5-32b-instruct`, `hyperclova-x-seed-4b`)
- [x] EXAONE 3.5 32B Instruct 상세 페이지 보강 (`src/content/models/exaone-3-5-32b-instruct.md`)
- [x] HyperCLOVA X SEED 4B 상세 페이지 보강 (`src/content/models/hyperclova-x-seed-4b.md`)
- [x] `bun run build` 빌드 검증 및 status를 published로 설정

## 조사 내역
- 03:00 EXAONE 3.5 32B Instruct 메타데이터 및 HF 모델 카드 확인 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- 03:05 EXAONE 3.5 기술 보고서 확인 ← https://arxiv.org/abs/2412.04862
- 03:10 HyperCLOVA X SEED 4B 기술 블로그 확인 ← https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b

## 수행한 작업
- [x] `src/content/models/exaone-3-5-32b-instruct.md` 상세 서술 보강 및 published 승격 ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- [x] `src/content/models/hyperclova-x-seed-4b.md` 상세 서술 보강 및 published 승격 ← https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b

## 판단 / 고민
- `exaone-3-5-32b-instruct`와 `hyperclova-x-seed-4b`는 국산 LLM 중 최신 대표 모델로서 정보 완전성이 높아 보강 대상으로 선택하였음.
- 출처 URL 검증, 본문 3문단 이상 조건, feature 플래그(audioInput 등) 정확성, Zod 빌드 검사를 만족하여 status를 published로 보강 완료함.

## 이슈 제기
- (없음)
