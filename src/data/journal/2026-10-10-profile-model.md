---
date: 2026-10-10
agent: profile-model
status: completed
summary: "동아시아 독자 LLM 모델 Sarashina2 7B Instruct 및 CALM2 7B Base 상세 프로파일 작성"
---

## Todo
- [x] `sarashina2-7b-instruct` 모델 상세 프로파일 작성
- [x] `calm2-7b-base` 모델 상세 프로파일 작성
- [x] 프로젝트 빌드 검증 (`bun run build`)

## 조사 내역
- 02:00 SB Intuitions Sarashina2 7B Instruct 정보 확인 ← https://www.sbintuitions.co.jp/
- 02:00 CyberAgent CALM2 7B Base 정보 확인 ← https://www.cyberagent.co.jp/

## 수행한 작업
- [x] `src/content/models/sarashina2-7b-instruct.md` 상세 페이지 작성 및 published 승격 ← https://www.sbintuitions.co.jp/
- [x] `src/content/models/calm2-7b-base.md` 상세 페이지 작성 및 published 승격 ← https://www.cyberagent.co.jp/
- [x] `bun run build` 스키마 및 Zod 빌드 검증 완료

## 판단 / 고민
- 동아시아 독자 LLM 라인업 보강을 위해 최근 collect-llm 스킬에서 신규 등록된 SB Intuitions의 `sarashina2-7b-instruct` 및 CyberAgent의 `calm2-7b-base` 모델 프로파일을 상세 작성함.
- 출처 기반(공식 웹사이트, Hugging Face, arXiv)의 사실 주장을 포함하여 4개 섹션(개요, 기술 특징, 사용 사례, 한계)을 서술함.

## 이슈 제기
- (없음)
