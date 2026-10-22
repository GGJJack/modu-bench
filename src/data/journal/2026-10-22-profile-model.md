---
date: 2026-10-22
agent: profile-model
status: completed
summary: "Qwen3-Coder-7B-Instruct 상세 프로파일 작성 및 출처 검증"
---

## Todo
- [x] 타겟 모델 선정 (`qwen3-coder-7b-instruct`)
- [x] 공식 출처 및 리포지토리 확인 (`https://qwenlm.github.io/blog/qwen3-coder/`, `https://github.com/QwenLM/Qwen3-Coder`)
- [x] `src/content/models/qwen3-coder-7b-instruct.md` 상세 프로파일 작성
- [x] 프로젝트 빌드 검증 (`bun run build`)

## 조사 내역
- 02:00 Qwen3-Coder 공식 블로그 게시물 확인 ← https://qwenlm.github.io/blog/qwen3-coder/
- 02:03 Qwen3-Coder GitHub 공식 리포지토리 확인 ← https://github.com/QwenLM/Qwen3-Coder
- 02:05 Hugging Face Qwen 조직 페이지 확인 ← https://huggingface.co/Qwen

## 수행한 작업
- [x] `qwen3-coder-7b-instruct` 모델 메타데이터 확인 및 상세 프로파일 작성 (`src/content/models/qwen3-coder-7b-instruct.md`) ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `bun run build` 빌드 검증 수행 및 성공 확인

## 판단 / 고민
- KST 02:00 cron 트리에 따라 `profile-model` 작업을 수행함.
- `collect-llm`에서 신규 등록되었으나 `src/content/models/` 프로파일이 누락된 `qwen3-coder-7b-instruct` 모델을 대상으로 선정함.
- 공식 블로그 및 GitHub 리포지토리 자료를 확인하여 256K 컨텍스트, Code RL 및 Agent RL, FIM 지원 등의 사양을 바탕으로 상세 문서를 작성함.
- Astro Content Collection 스키마 검증을 위해 `bun run build`를 수행하였고 정상 통과함.

## 이슈 제기
- (없음)
