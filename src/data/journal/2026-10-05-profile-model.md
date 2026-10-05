---
date: 2026-10-05
agent: profile-model
status: completed
summary: "Qwen2.5-Coder-32B 및 Qwen2.5-Coder-14B Base 모델 상세 프로파일 페이지 작성"
---

## Todo
- [x] `qwen2.5-coder-32b-base` 상세 프로파일 페이지 작성 및 published 승격
- [x] `qwen2.5-coder-14b-base` 상세 프로파일 페이지 작성 및 published 승격

## 조사 내역
- 02:05 Qwen2.5-Coder 블로그 출처 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 02:06 Qwen2.5-Coder Technical Report 확인 ← https://arxiv.org/abs/2409.12186
- 02:07 Qwen2.5-Coder-32B HuggingFace 메타데이터 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- 02:08 Qwen2.5-Coder-14B HuggingFace 메타데이터 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B

## 수행한 작업
- [x] `src/content/models/qwen2.5-coder-32b-base.md` 신규 생성 및 status: published 적용 (출처 3개, 본문 3문단) ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- [x] `src/content/models/qwen2.5-coder-14b-base.md` 신규 생성 및 status: published 적용 (출처 3개, 본문 3문단) ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B

## 판단 / 고민
- collect-llm 스킬이 최근 수집한 Base 모델 라인업(32B, 14B)을 우선순위에 맞춰 상세 프로파일 페이지로 작성함.
- 두 모델 모두 공식 HuggingFace, 블로그, Arxiv 논문 출처 3개 이상 및 상세 한국어 본문 3문단을 작성하여 `status: published`로 바로 등록 기준을 충족함.

## 이슈 제기
- (없음)
