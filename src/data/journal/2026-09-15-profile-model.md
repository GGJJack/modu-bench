---
date: 2026-09-15
agent: profile-model
status: completed
summary: "Qwen2.5-Coder-7B 및 Yi-Coder-1.5B-Instruct 모델 상세 프로파일 작성 및 게시 완료"
---

## Todo
- [x] 저널 파일 생성 및 세션 작업 대상 설정
- [x] `qwen2.5-coder-7b-base` 상세 마크다운 프로파일 작성 (`status: published`)
- [x] `yi-coder-1.5b-instruct` 상세 마크다운 프로파일 작성 (`status: published`)
- [x] `bun run build` 빌드 및 Zod 스키마 검증
- [x] 저널 status completed 갱신

## 조사 내역
- 02:00 Qwen2.5-Coder 공식 블로그, Hugging Face 모델 카드, ArXiv 논문 조사 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 02:00 Qwen2.5-Coder-7B 베이스 모델 스펙 (7.61B 파라미터, 128K 컨텍스트, Apache 2.0 라이선스) 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-7B
- 02:00 Yi-Coder 공식 GitHub, Hugging Face 모델 카드, ArXiv 논문 조사 ← https://github.com/01-ai/Yi-Coder
- 02:00 Yi-Coder-1.5B-Instruct 모델 스펙 (1.5B 파라미터, 128K 컨텍스트, 52개 언어 지원, Apache 2.0 라이선스) 확인 ← https://huggingface.co/01-ai/Yi-Coder-1.5B-Chat

## 수행한 작업
- [x] 저널 생성 및 목표 대상 선정 (`qwen2.5-coder-7b-base`, `yi-coder-1.5b-instruct`)
- [x] `src/content/models/qwen2.5-coder-7b-base.md` 작성 및 `status: published` 검증 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `src/content/models/yi-coder-1.5b-instruct.md` 작성 및 `status: published` 검증 ← https://github.com/01-ai/Yi-Coder
- [x] `bun run build` 수행 및 content collection Zod 검증 완료

## 판단 / 고민
- 최근 `collect-llm` 스킬이 등록한 코드 생성 특화 오픈소스 모델 2종(`qwen2.5-coder-7b-base`, `yi-coder-1.5b-instruct`)을 이번 profile-model 세션의 대상 모델로 선정함.
- 두 모델 모두 공식 깃허브/블로그, Hugging Face 모델 카드, ArXiv 논문 등 3개 이상의 공식 출처가 검증되어 `status: published` 요건을 만족함.
- `bun run build` 검증 결과 Content Collection Zod 스키마 오류 없이 426개 페이지 빌드가 성공적으로 동작하는 것을 확인함.

## 이슈 제기
- (없음)
