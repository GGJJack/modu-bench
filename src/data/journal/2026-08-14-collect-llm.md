---
date: 2026-08-14
agent: collect-llm
status: completed
summary: "Qwen3Guard 모델 2종(Gen-4B, Stream-4B) 신규 등록 및 메타데이터 보강"
---

## Todo
- [x] Qwen3Guard-Gen-4B 및 Qwen3Guard-Stream-4B 모델 신규 등록
- [x] Qwen3Guard 모델 parameterSize 메타데이터 보강

## 조사 내역
- 01:05 Qwen3Guard 공식 블로그 발표 확인 ← https://qwenlm.github.io/blog/qwen3guard/
- 01:06 Qwen3Guard-Gen-4B HuggingFace 리포지토리 및 메타데이터 확인 ← https://huggingface.co/Qwen/Qwen3Guard-Gen-4B
- 01:06 Qwen3Guard-Stream-4B HuggingFace 리포지토리 및 메타데이터 확인 ← https://huggingface.co/Qwen/Qwen3Guard-Stream-4B

## 수행한 작업
- [x] `qwen3guard-gen-4b` 신규 모델 생성 (name: Qwen3Guard-Gen-4B, provider: Alibaba Cloud, releaseDate: 2025-09-23, license: Apache-2.0) ← https://qwenlm.github.io/blog/qwen3guard/
- [x] `qwen3guard-stream-4b` 신규 모델 생성 (name: Qwen3Guard-Stream-4B, provider: Alibaba Cloud, releaseDate: 2025-09-23, license: Apache-2.0) ← https://qwenlm.github.io/blog/qwen3guard/
- [x] `qwen3guard-gen-4b` `parameterSize: "4B"` 메타데이터 보강 ← https://huggingface.co/Qwen/Qwen3Guard-Gen-4B
- [x] `qwen3guard-stream-4b` `parameterSize: "4B"` 메타데이터 보강 ← https://huggingface.co/Qwen/Qwen3Guard-Stream-4B

## 판단 / 고민
- Qwen3Guard 시리즈 중 4B 크기의 핵심 2가지 변리형(Generative, Streaming)을 우선적으로 수집 등록함.

## 이슈 제기
- (없음)
