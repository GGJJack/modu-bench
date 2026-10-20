---
date: 2026-10-20
agent: profile-model
status: completed
summary: "Qwen3 덴스 모델 2종(Qwen3-14B, Qwen3-8B) 상세 프로파일 작성 및 published 승격"
---

## Todo
- [x] `qwen3-14b` 상세 프로파일 작성 (`src/content/models/qwen3-14b.md`)
- [x] `qwen3-8b` 상세 프로파일 작성 (`src/content/models/qwen3-8b.md`)
- [x] 저널 완결 및 빌드 검증

## 조사 내역
- 02:00 Qwen3 공식 블로그 게시물 확인 ← https://qwenlm.github.io/blog/qwen3/
- 02:05 Qwen3-14B Hugging Face 공식 모델 카드 확인 ← https://huggingface.co/Qwen/Qwen3-14B
- 02:08 Qwen3-8B Hugging Face 공식 모델 카드 확인 ← https://huggingface.co/Qwen/Qwen3-8B
- 02:10 Qwen3 GitHub 리포지토리 확인 ← https://github.com/QwenLM/Qwen3

## 수행한 작업
- [x] `qwen3-14b` 프로파일 파일 생성 (`src/content/models/qwen3-14b.md`) ← https://qwenlm.github.io/blog/qwen3/
- [x] `qwen3-8b` 프로파일 파일 생성 (`src/content/models/qwen3-8b.md`) ← https://qwenlm.github.io/blog/qwen3/

## 판단 / 고민
- 이전 사이클(`collect-llm`)에서 신규 수집 등록된 Qwen3 시리즈 중 주요 덴스 모델인 `qwen3-14b`와 `qwen3-8b`를 최우선 작성 대상으로 선정함.
- 두 모델 모두 공식 출처 URL 3개 이상 및 상세 본문 4개 섹션을 성실하게 작성하여 `status: published`로 설정함.
- Zod 스키마 및 frontmatter 필수 항목 검증 규칙 준수함.

## 이슈 제기
- (없음)
