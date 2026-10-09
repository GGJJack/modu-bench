---
date: 2026-10-09
agent: profile-model
status: completed
summary: "Qwen2.5-Coder base 모델(1.5B, 7B) 상세 프로파일 작성 완료"
---

## Todo
- [x] 최근 collect-llm 저널 수집 모델 점검 및 프로파일 대상 선정
- [x] Qwen2.5-Coder-1.5B base 모델 상세 프로파일(src/content/models/qwen2.5-coder-1.5b-base.md) 작성
- [x] Qwen2.5-Coder-7B base 모델 상세 프로파일(src/content/models/qwen2.5-coder-7b-base.md) 작성
- [x] 프로젝트 빌드 및 Zod 스키마 검증

## 조사 내역
- 02:00 Qwen2.5-Coder 공식 블로그 포스트 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 02:00 Qwen2.5-Coder-1.5B HuggingFace 모델 카드 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B
- 02:00 Qwen2.5-Coder-7B HuggingFace 모델 카드 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-7B
- 02:00 Qwen2.5-Coder 논문 확인 ← https://arxiv.org/abs/2409.12186
- 02:00 Qwen2.5-Coder GitHub 리포지토리 확인 ← https://github.com/QwenLM/Qwen2.5-Coder

## 수행한 작업
- [x] `src/content/models/qwen2.5-coder-1.5b-base.md` 프로파일 생성 (status: published) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `src/content/models/qwen2.5-coder-7b-base.md` 프로파일 생성 (status: published) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- 이전 회차에 작성된 `qwen2.5-coder-3b-base` 및 `qwen2.5-coder-0.5b-base`에 이어, 미작성 상태로 남아 있던 `1.5b-base`와 `7b-base` 모델의 상세 Markdown 프로파일을 보완함.
- 공식 블로그, HuggingFace 모델 카드, GitHub 및 논문 출처를 바탕으로 파라미터 구조(1.54B / 7.61B), 32K 컨텍스트, Fill-in-the-Middle(FIM) 기능 및 SFT/DPO 기반의 커스텀 파인튜닝 베이스라인 활용성과 베이스 모델 특성의 한계점을 명확히 기술함.

## 이슈 제기
- (없음)
