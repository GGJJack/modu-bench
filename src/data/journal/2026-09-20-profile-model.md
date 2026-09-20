---
date: 2026-09-20
agent: profile-model
status: completed
summary: "CodeGeeX4-ALL-9B 및 Qwen2.5-Math-1.5B-Instruct 상세 프로파일 작성"
---

## Todo
- [x] CodeGeeX4-ALL-9B (`codegeex4-all-9b`) 상세 프로파일 생성
- [x] Qwen2.5-Math-1.5B-Instruct (`qwen-2.5-math-1.5b-instruct`) 상세 프로파일 생성

## 조사 내역
- 02:05 CodeGeeX4-ALL-9B 공식 모델 카드 및 아카이브 논문 확인  ← https://huggingface.co/THUDM/codegeex4-all-9b
- 02:08 Qwen2.5-Math-1.5B-Instruct 공식 블로그 및 Hugging Face 모델 카드 확인  ← https://qwenlm.github.io/blog/qwen2.5-math/

## 수행한 작업
- [x] `src/content/models/codegeex4-all-9b.md` 프로파일 작성 (status: published)  ← https://huggingface.co/THUDM/codegeex4-all-9b
- [x] `src/content/models/qwen-2.5-math-1.5b-instruct.md` 프로파일 작성 (status: published)  ← https://qwenlm.github.io/blog/qwen2.5-math/

## 판단 / 고민
- 최근 `collect-llm`에서 발견 및 수집된 신규 LLM 중 출처가 명확하고 공식 기술 문서가 수집된 `codegeex4-all-9b` 및 `qwen-2.5-math-1.5b-instruct` 모델 2개를 대상으로 상세 페이지를 작성함.
- 각 프로파일에 공식 GitHub, Hugging Face, 논문 등 3개 이상의 검증된 출처를 등록하였으며, 한국어 섹션(개요, 기술 특징, 사용 사례, 한계)을 충실히 채워 `status: published`로 지정함.

## 이슈 제기
- (없음)
