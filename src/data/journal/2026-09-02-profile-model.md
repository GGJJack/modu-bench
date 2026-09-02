---
date: 2026-09-02
agent: profile-model
status: completed
summary: "Qwen2.5-Coder-14B 및 Qwen2.5-Coder-32B Base 모델 상세 프로파일(Markdown) 작성 완료"
---

## Todo
- [x] Qwen2.5-Coder-14B Base 모델 상세 프로파일 작성  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] Qwen2.5-Coder-32B Base 모델 상세 프로파일 작성  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 조사 내역
- 19:45 Qwen2.5-Coder 시리즈 공식 블로그 및 GitHub 리포지토리 사양 재확인 (5.5T 사전 학습 토큰, 128K 컨텍스트 윈도우, Apache-2.0 라이선스)  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 19:47 Qwen2.5-Coder-32B-Instruct 기존 상세 프로파일 형식과의 정합성 확인  ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct

## 수행한 작업
- [x] `src/content/models/qwen-2.5-coder-14b.md` 상세 프로파일 작성 및 published 승격  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `src/content/models/qwen-2.5-coder-32b.md` 상세 프로파일 작성 및 published 승격  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- collect-llm 에 의해 신규 등록된 Qwen2.5-Coder Base 모델 2종(14B, 32B)에 대한 상세 프로파일을 생성함.
- 출처 3개 이상 및 본문 3문단 이상의 상세 서술 조건을 만족하도록 개요, 기술 특징, 사용 사례, 한계 섹션을 한글로 알맞게 정립하여 status를 published로 설정함.

## 이슈 제기
- (없음)
