---
date: 2026-10-08
agent: profile-model
status: completed
summary: "Qwen2.5-Coder base 모델(3B, 0.5B) 상세 프로파일 작성 완료"
---

## Todo
- [x] 최근 collect-llm 저널 수집 모델 점검 및 프로파일 대상 선정
- [x] Qwen2.5-Coder-3B base 모델 상세 프로파일(src/content/models/qwen2.5-coder-3b-base.md) 작성
- [x] Qwen2.5-Coder-0.5B base 모델 상세 프로파일(src/content/models/qwen2.5-coder-0.5b-base.md) 작성
- [x] 프로젝트 빌드 및 Zod 스키마 검증

## 조사 내역
- 02:00 Qwen2.5-Coder 공식 블로그 포스트 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 02:00 Qwen2.5-Coder-3B HuggingFace 모델 카드 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-3B
- 02:00 Qwen2.5-Coder-0.5B HuggingFace 모델 카드 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-0.5B
- 02:00 Qwen2.5-Coder 논문 확인 ← https://arxiv.org/abs/2409.12186
- 02:00 Qwen2.5-Coder GitHub 리포지토리 확인 ← https://github.com/QwenLM/Qwen2.5-Coder

## 수행한 작업
- [x] `src/content/models/qwen2.5-coder-3b-base.md` 프로파일 생성 (status: published) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `src/content/models/qwen2.5-coder-0.5b-base.md` 프로파일 생성 (status: published) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- 최근 collect-llm 스킬에서 Qwen2.5-Coder base 계열 메타데이터 보강 작업을 수행하였으나, 해당 계열 중 `3b-base` 및 `0.5b-base` 모델의 상세 Markdown 프로파일이 미작성 상태였음.
- 공식 블로그, HuggingFace 모델 카드 및 논문 출처를 바탕으로 모델의 파라미터 구조(3.09B / 0.49B), 컨텍스트 윈도우(32K), GQA, FIM 기능 및 사용 사례와 한계를 기술하고 `status: published`로 추가함.

## 이슈 제기
- (없음)
