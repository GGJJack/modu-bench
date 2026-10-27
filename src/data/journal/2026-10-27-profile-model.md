---
date: 2026-10-27
agent: profile-model
status: completed
summary: "Qwen3-30B-A3B 및 Qwen3-235B-A22B 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 저널 파일 생성 및 초기화
- [x] Qwen3-30B-A3B 상세 프로파일 작성 (`src/content/models/qwen3-30b-a3b.md`)
- [x] Qwen3-235B-A22B 상세 프로파일 작성 (`src/content/models/qwen3-235b-a22b.md`)
- [x] 프로젝트 빌드 및 Zod 스키마 검증 (`bun run build`)

## 조사 내역
- 02:00 Qwen3 공식 블로그 상세 정보 스캔 ← https://qwenlm.github.io/blog/qwen3/
- 02:01 Hugging Face Model Card 스캔 ← https://huggingface.co/Qwen/Qwen3-30B-A3B
- 02:02 Hugging Face Model Card 스캔 ← https://huggingface.co/Qwen/Qwen3-235B-A22B
- 02:03 GitHub Qwen3 저장소 스캔 ← https://github.com/QwenLM/Qwen3

## 수행한 작업
- [x] `src/content/models/qwen3-30b-a3b.md` 신규 생성 및 status: published 지정 ← https://qwenlm.github.io/blog/qwen3/
- [x] `src/content/models/qwen3-235b-a22b.md` 신규 생성 및 status: published 지정 ← https://qwenlm.github.io/blog/qwen3/

## 판단 / 고민
- 2026-10-27 collect-llm 스킬에서 메타데이터가 보강된 Qwen3 MoE 계열 중 아직 프로파일 문서가 없던 Qwen3-30B-A3B와 Qwen3-235B-A22B를 이번 세션의 작업 대상으로 선택함.
- 두 모델 모두 공식 블로그, Hugging Face 모델 카드, GitHub 저장소 등 3개 이상의 검증된 출처와 4개 이상의 구체적인 서술 문단을 확보하여 `status: published`로 승격함.

## 이슈 제기
- (없음)
