---
date: 2026-10-05
agent: collect-llm
status: completed
summary: "Qwen2.5-Coder base 모델 수집 및 Baichuan-4-Turbo 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 수집 (qwen2.5-coder-32b-base, qwen2.5-coder-14b-base, qwen2.5-coder-3b-base)
- [x] 기존 LLM 모델 메타데이터 보강 (baichuan-4-turbo)

## 조사 내역
- 01:05 Qwen2.5-Coder-32B 공식 HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- 01:06 Qwen2.5-Coder-14B 공식 HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B
- 01:07 Qwen2.5-Coder-3B 공식 HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-3B
- 01:08 Baichuan Intelligent Technology 공식 Hugging Face 조직 확인 ← https://huggingface.co/baichuan-inc

## 수행한 작업
- [x] `qwen2.5-coder-32b-base` 신규 모델 등록 (Alibaba Cloud, releaseDate: 2024-11-12, Apache-2.0) ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- [x] `qwen2.5-coder-14b-base` 신규 모델 등록 (Alibaba Cloud, releaseDate: 2024-11-12, Apache-2.0) ← https://huggingface.co/Qwen/Qwen2.5-Coder-14B
- [x] `qwen2.5-coder-3b-base` 신규 모델 등록 (Alibaba Cloud, releaseDate: 2024-11-12, Qwen Research License) ← https://huggingface.co/Qwen/Qwen2.5-Coder-3B
- [x] `baichuan-4-turbo` 기존 모델 HuggingFace 링크 보강 (huggingface: https://huggingface.co/baichuan-inc) ← https://huggingface.co/baichuan-inc

## 판단 / 고민
- Qwen2.5-Coder 라인업 중 Instruct 모델만 사전 등록되어 있었으나, Base 모델 3종(32B, 14B, 3B)을 추가로 발견하고 공식 HuggingFace 페이지 출처를 바탕으로 필수 필드 5개와 함께 등록함.
- Baichuan-4-Turbo 모델의 누락된 HuggingFace 링크를 공식 조직 출처 페이지에서 확인하여 보강함.

## 이슈 제기
- (없음)
