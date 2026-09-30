---
date: 2026-09-30
agent: profile-model
status: completed
summary: "Qwen3Guard 신규 라인업(0.6B/8B) 상세 프로파일 페이지 작성 완료 및 출처 검증"
---

## Todo
- [x] 신규 수집 모델 Qwen3Guard-Gen-0.6B 프로파일 Markdown 작성 및 승격 (`published`)
- [x] 신규 수집 모델 Qwen3Guard-Gen-8B 프로파일 Markdown 작성 및 승격 (`published`)

## 조사 내역
- 02:05 Qwen3Guard 블로그 및 Hugging Face 모델 카드 조사 ← https://qwenlm.github.io/blog/qwen3guard/
- 02:08 Qwen3Guard-Gen-0.6B 및 8B 특징, 3단계 위험도(Safe/Unsafe/Controversial) 분류, 119개 언어 지원 스펙 확인 ← https://huggingface.co/Qwen/Qwen3Guard-Gen-0.6B

## 수행한 작업
- [x] `src/content/models/qwen3guard-gen-0.6b.md` 작성 및 `status: published` 설정 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] `src/content/models/qwen3guard-gen-8b.md` 작성 및 `status: published` 설정 ← https://qwenlm.github.io/blog/qwen3guard/

## 판단 / 고민
- Qwen3Guard-Gen 라인업 중 미작성 상태였던 0.6B와 8B 2개 모델에 대해 공식 블로그 및 HF 카드를 바탕으로 개요, 기술 특징, 사용 사례, 한계를 충실히 작성함.
- 이미 작성된 `qwen3guard-gen-4b.md`와 일관성을 유지하면서 파라미터 크기별 포지셔닝(초경량 에지 모더레이션 vs 엔터프라이즈 플래그십 모더레이션) 차이를 명확히 서술함.

## 이슈 제기
- (없음)
