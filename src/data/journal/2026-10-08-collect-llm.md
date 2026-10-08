---
date: 2026-10-08
agent: collect-llm
status: completed
summary: "Qwen2.5-Coder base 모델 계열(3B, 14B, 32B) 메타데이터 보강 완료"
---

## Todo
- [x] 기존 LLM 모델 목록 및 보강 대상 점검
- [x] Qwen2.5-Coder base 모델(3B, 14B, 32B) 메타데이터 출처 확인 및 보강
- [x] 프로젝트 빌드 검증

## 조사 내역
- 01:00 Qwen2.5-Coder 공식 포스트 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 01:00 Qwen2.5-Coder GitHub 리포지토리 확인 ← https://github.com/QwenLM/Qwen2.5-Coder
- 01:00 Qwen2.5-Coder 논문 확인 ← https://arxiv.org/abs/2409.12186
- 01:00 Qwen2.5-Coder-3B HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-3B
- 01:00 Qwen2.5-Coder-14B HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B
- 01:00 Qwen2.5-Coder-32B HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B

## 수행한 작업
- [x] `qwen2.5-coder-3b-base` 메타데이터 보강 (license: Apache-2.0, parameterSize: 3.09B, links.official, links.github, links.paper) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen2.5-coder-14b-base` 메타데이터 보강 (links.official, links.github, links.paper) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen2.5-coder-32b-base` 메타데이터 보강 (links.official, links.github, links.paper) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- Qwen2.5-Coder base 모델 계열 중 links.official이 메인 도메인으로만 등록되어 있거나 github/paper 링크 및 라이선스 정보가 단편적이던 3종(3B, 14B, 32B)에 대해 공식 블로그/GitHub/논문 출처 URL을 수집하여 메타데이터를 정교화함.

## 이슈 제기
- (없음)
