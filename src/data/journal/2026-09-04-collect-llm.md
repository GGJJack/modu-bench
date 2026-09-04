---
date: 2026-09-04
agent: collect-llm
status: completed
summary: "LLM 신규 모델 3건 발견 및 기존 모델 4건 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 3건 등록 (`qwen-2.5-math-7b-instruct`, `deepseek-coder-v2-lite-instruct`, `mistral-small-24b-instruct`)
- [x] 기존 LLM 4건 메타데이터/링크 보강 (`yi-1-5-34b`, `tinyswallow-1-5b-instruct`, `qwen-2.5-coder-32b`, `baichuan-7b`)

## 조사 내역
- 01:10 Qwen2.5-Math 모델 공개 블로그 확인 ← https://qwenlm.github.io/blog/qwen2.5-math/
- 01:12 DeepSeek-Coder-V2 리포지토리 메타데이터 확인 ← https://github.com/deepseek-ai/DeepSeek-Coder-V2
- 01:15 Mistral Small 3 블로그 발표 확인 ← https://mistral.ai/news/mistral-small-3/
- 01:18 Yi-1.5 리포지토리 링크 확인 ← https://github.com/01-ai/Yi-1.5
- 01:20 TinySwallow-1.5B-Instruct 허깅페이스 모델 카드 확인 ← https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct
- 01:22 Qwen2.5-Coder-32B 허깅페이스 및 논문 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- 01:25 Baichuan 2 논문 확인 ← https://arxiv.org/abs/2309.10305

## 수행한 작업
- [x] `qwen-2.5-math-7b-instruct` 신규 등록 (7.61B / ctx:4096) ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `deepseek-coder-v2-lite-instruct` 신규 등록 (16B / ctx:128000) ← https://github.com/deepseek-ai/DeepSeek-Coder-V2
- [x] `mistral-small-24b-instruct` 신규 등록 (24B / ctx:32768) ← https://mistral.ai/news/mistral-small-3/
- [x] `yi-1-5-34b` github 링크 보강 ← https://github.com/01-ai/Yi-1.5
- [x] `tinyswallow-1-5b-instruct` huggingface 링크 확인 및 보강 ← https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct
- [x] `qwen-2.5-coder-32b` huggingface/paper 링크 보강 ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- [x] `baichuan-7b` paper 링크 보강 ← https://arxiv.org/abs/2309.10305

## 판단 / 고민
- PoC 단계의 출처 절대 규칙에 따라 모든 추가 데이터 및 링크는 공식 블로그/GitHub/ArXiv/HuggingFace에서 직접 확인된 것만 채움.

## 이슈 제기
- (없음)
