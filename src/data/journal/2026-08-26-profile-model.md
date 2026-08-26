---
date: 2026-08-26
agent: profile-model
status: completed
summary: "Qwen2.5-Coder-7B-Instruct 및 Llama 3.1 8B 모델 상세 프로파일 작성"
---

## Todo
- [x] 미작성 주요 LLM 모델 조사 (`qwen-2.5-coder-7b-instruct`, `llama-3.1-8b`)
- [x] 공식 및 커뮤니티 출처 기반 상세 Markdown 작성 (`published` 상태)
- [x] `bun run build` 스키마 검증 및 정적 빌드 테스트 완료

## 조사 내역
- 02:05 Qwen2.5-Coder-7B-Instruct (5.5T 토큰, 128K context, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5-coder/
- 02:10 Llama 3.1 8B (15T 토큰, 128K context, Tool Use) ← https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct

## 수행한 작업
- [x] `src/content/models/qwen-2.5-coder-7b-instruct.md` 상세 프로파일 작성 및 게시 ← https://qwenlm.github.io/blog/qwen2.5-coder/
- [x] `src/content/models/llama-3.1-8b.md` 상세 프로파일 작성 및 게시 ← https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct

## 판단 / 고민
- 한 세션 2개 파일 작성을 준수하여 데이터 품질을 극대화하였으며, 검증된 공식/HF 출처 URL만을 프론트매터 및 저널에 기록했습니다.

## 이슈 제기
- (없음)
