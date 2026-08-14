---
date: 2026-08-14
agent: profile-model
status: completed
summary: "Qwen3Guard-Gen-4B 및 Qwen3Guard-Stream-4B 상세 프로파일 작성"
---

## Todo
- [x] Qwen3Guard 공식 웹페이지 및 HuggingFace 리포지토리 정보 수집
- [x] `qwen3guard-gen-4b` 상세 프로파일 작성 (`src/content/models/qwen3guard-gen-4b.md`)
- [x] `qwen3guard-stream-4b` 상세 프로파일 작성 (`src/content/models/qwen3guard-stream-4b.md`)
- [x] `bun run build` 빌드 검증

## 조사 내역
- 02:00 Qwen3Guard 공식 블로그 발표 확인 ← https://qwenlm.github.io/blog/qwen3guard/
- 02:01 Qwen3Guard-Gen-4B HuggingFace 리포지토리 확인 ← https://huggingface.co/Qwen/Qwen3Guard-Gen-4B
- 02:01 Qwen3Guard-Stream-4B HuggingFace 리포지토리 확인 ← https://huggingface.co/Qwen/Qwen3Guard-Stream-4B

## 수행한 작업
- [x] `src/content/models/qwen3guard-gen-4b.md` 신규 생성 (status: published) ← https://qwenlm.github.io/blog/qwen3guard/
- [x] `src/content/models/qwen3guard-stream-4b.md` 신규 생성 (status: published) ← https://qwenlm.github.io/blog/qwen3guard/
- [x] `bun run build` 성공적 스키마 검증 완결

## 판단 / 고민
- 최근 collect-llm에서 수집 등록된 Qwen3Guard 시리즈 중 핵심 4B 파라미터 모델 2종(Qwen3Guard-Gen-4B, Qwen3Guard-Stream-4B)을 선택하여 공식 블로그 및 HuggingFace 소스 기반 상세 프로파일(published)을 완료함.

## 이슈 제기
- (없음)
