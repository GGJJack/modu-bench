---
date: 2026-08-26
agent: profile-benchmark
status: completed
summary: "MBPP, MMLU-Pro 벤치마크 상세 페이지 갱신 및 MiniMax-Text-01 모델 상세 작성, MiniMax 기관 스텁 생성"
---

## Todo
- [x] `mmlu-pro` 벤치마크 상세 페이지 갱신
- [x] `mbpp` 벤치마크 상세 페이지 갱신
- [x] `minimax-text-01` 모델 상세 페이지 작성 및 `minimax` 기관 스텁 생성

## 조사 내역
- 02:30 MMLU-Pro 벤치마크 정보 확인 (arXiv 논문, Hugging Face) ← https://arxiv.org/abs/2406.01574, https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro
- 02:35 MBPP 벤치마크 정보 확인 (arXiv 논문, Hugging Face) ← https://arxiv.org/abs/2108.07732, https://huggingface.co/datasets/google-research-datasets/mbpp
- 02:40 MiniMax-Text-01 모델 정보 확인 (공식 웹사이트, Hugging Face) ← https://www.minimaxi.com/, https://huggingface.co/MiniMaxAI/MiniMax-Text-01

## 수행한 작업
- [x] `mmlu-pro` 상세 페이지 (`src/content/benchmarks/mmlu-pro.md`) 갱신 완료 ← https://arxiv.org/abs/2406.01574
- [x] `mbpp` 상세 페이지 (`src/content/benchmarks/mbpp.md`) 갱신 완료 ← https://arxiv.org/abs/2108.07732
- [x] `minimax-text-01` 상세 페이지 (`src/content/models/minimax-text-01.md`) 작성 완료 ← https://huggingface.co/MiniMaxAI/MiniMax-Text-01
- [x] `minimax` 기관 스텁 (`src/content/organizations/minimax.md`) 생성 완료 및 이슈 등록 ← https://www.minimaxi.com/

## 판단 / 고민
- MMLU-Pro 및 MBPP 벤치마크 상세 페이지의 내용을 갱신함.
- MiniMax-Text-01 모델은 최근 collect-llm 스킬에서 등록한 모델이므로 프로파일을 작성하고 연관 기관 스텁을 생성하여 이슈로 등록함.

## 이슈 제기
- issues/2026-08-26-profile-benchmark-minimax.md
