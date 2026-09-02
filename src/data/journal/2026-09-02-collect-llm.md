---
date: 2026-09-02
agent: collect-llm
status: completed
summary: "Qwen2.5-Coder 시리즈 신규 모델(14B, 32B Base) 수집 완료"
---

## Todo
- [x] Qwen2.5-Coder 시리즈 출처 조사  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] Qwen2.5-Coder-14B Base 모델 등록  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] Qwen2.5-Coder-32B Base 모델 등록  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 조사 내역
- 19:15  Qwen2.5-Coder 시리즈 공식 블로그 확인 (0.5B, 1.5B, 3B, 7B, 14B, 32B 라인업 및 출시일 2024-11-12 확인)  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 19:18  Qwen2.5-Coder-14B-Instruct / 32B-Instruct HuggingFace 리포지토리 및 기술사양 확인  ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct

## 수행한 작업
- [x] `qwen-2.5-coder-14b` 모델 생성  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-32b` 모델 생성  ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- 기존 데이터베이스에 Instruct 버전(0.5B, 1.5B, 3B, 7B, 14B, 32B Instruct 및 0.5B, 3B Coder)들이 대부분 등록되어 있었으나 Base 버전인 14B와 32B Coder Base 모델이 누락되어 있어 이를 신규 수집 대상으로 등록함.

## 이슈 제기
- (없음)
