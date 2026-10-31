---
date: 2026-10-31
agent: collect-llm
status: completed
summary: "Qwen2.5-Math 베이스 모델 링크 및 라이선스 메타데이터 보강"
---

## Todo
- [x] Qwen2.5-Math 공식 블로그 및 HuggingFace 리포지토리 확인
- [x] qwen-2.5-math-1.5b, qwen-2.5-math-7b, qwen-2.5-math-72b 메타데이터 보강

## 조사 내역
- 01:05 Qwen2.5-Math 공식 발표 블로그 확인 ← https://qwenlm.github.io/blog/qwen2.5-math/
- 01:07 HuggingFace Qwen2.5-Math-7B 모델 카드 확인 (Apache-2.0 라이선스 및 GitHub/arXiv 링크) ← https://huggingface.co/Qwen/Qwen2.5-Math-7B
- 01:08 HuggingFace Qwen2.5-Math-1.5B 모델 카드 확인 (GitHub/arXiv 링크) ← https://huggingface.co/Qwen/Qwen2.5-Math-1.5B
- 01:09 HuggingFace Qwen2.5-Math-72B 모델 카드 확인 (GitHub/arXiv 링크) ← https://huggingface.co/Qwen/Qwen2.5-Math-72B

## 수행한 작업
- [x] `qwen-2.5-math-1.5b` github 및 paper 링크 보강 ← https://huggingface.co/Qwen/Qwen2.5-Math-1.5B
- [x] `qwen-2.5-math-7b` license (Apache-2.0) 수정 및 github, paper 링크 보강 ← https://huggingface.co/Qwen/Qwen2.5-Math-7B
- [x] `qwen-2.5-math-72b` github 및 paper 링크 보강 ← https://huggingface.co/Qwen/Qwen2.5-Math-72B

## 판단 / 고민
- `qwen-2.5-math-7b`의 기존 라이선스 필드가 "Qwen License"로 기재되어 있었으나 공식 HuggingFace 모델 카드 및 Qwen2.5 블로그 상 7B 변형은 Apache 2.0으로 공개되어 있어 정확한 라이선스명인 "Apache-2.0"으로 수정함.
- Qwen2.5-Math 계열 베이스 모델에 논문(arXiv:2409.12122) 및 공식 리포지토리(QwenLM/Qwen2-Math) 링크를 일괄 보강하여 메타데이터 완성도 향상.

## 이슈 제기
- (없음)
