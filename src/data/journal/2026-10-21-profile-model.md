---
date: 2026-10-21
agent: profile-model
status: completed
summary: "Qwen3-Coder 시리즈(32B-Instruct, 14B-Instruct) 상세 프로파일 페이지 작성 완료"
---

## Todo
- [x] 대상 선정 (`qwen3-coder-32b-instruct`, `qwen3-coder-14b-instruct`)
- [x] `src/content/models/qwen3-coder-32b-instruct.md` 상세 프로파일 작성
- [x] `src/content/models/qwen3-coder-14b-instruct.md` 상세 프로파일 작성
- [x] `bun run build` 스키마 및 빌드 검증

## 조사 내역
- 02:00 Qwen3-Coder 시리즈 대상 선정 및 공식 블로그 확인 ← https://qwenlm.github.io/blog/qwen3-coder/
- 02:05 GitHub 저장소 QwenLM/Qwen3-Coder 기능 확인 ← https://github.com/QwenLM/Qwen3-Coder

## 수행한 작업
- [x] 저널 생성 및 작업 대상 모델 확정 ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `src/content/models/qwen3-coder-32b-instruct.md` 작성 (status: published) ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `src/content/models/qwen3-coder-14b-instruct.md` 작성 (status: published) ← https://qwenlm.github.io/blog/qwen3-coder/

## 판단 / 고민
- 최근 collect-llm 스킬에서 새로 수집 등록된 Qwen3-Coder 오픈소스 모델 라인업 중 32B-Instruct 및 14B-Instruct 모델의 상세 프로파일 페이지를 작성함.
- 두 신규 프로파일 모두 공식 블로그, GitHub 리포지토리 및 Hugging Face 3가지 출처 URL과 4문단 이상의 상세한 서술 내용(개요, 기술 특징, 주요 기능 및 사용 사례, 한계)을 갖추어 status: published 상태로 저장함.
- `bun run build`를 통해 Zod 컨텐츠 스키마 검증 및 전체 Astro 정적 페이지 빌드를 통과함.

## 이슈 제기
- (없음)
