---
date: 2026-10-27
agent: collect-llm
status: completed
summary: "Qwen3 시리즈 기존 모델 메타데이터 보강 완료"
---

## Todo
- [x] 저널 초기화
- [x] qwen3-8b, qwen3-14b, qwen3-30b-a3b, qwen3-235b-a22b 메타데이터 보강

## 조사 내역
- 01:00 Qwen3 공식 블로그 스캔 및 Qwen3-8B, Qwen3-14B 등 파라미터/링크 확인 ← https://qwenlm.github.io/blog/qwen3/
- 01:01 Hugging Face Model Card 스캔 ← https://huggingface.co/Qwen/Qwen3-8B
- 01:02 Hugging Face Model Card 스캔 ← https://huggingface.co/Qwen/Qwen3-14B

## 수행한 작업
- [x] 저널 초기 생성 (`src/data/journal/2026-10-27-collect-llm.md`)
- [x] `qwen3-8b` parameterSize "8.2B", Hugging Face 링크 보강 ← https://huggingface.co/Qwen/Qwen3-8B
- [x] `qwen3-14b` parameterSize "14.8B", Hugging Face 링크 보강 ← https://huggingface.co/Qwen/Qwen3-14B
- [x] `qwen3-30b-a3b` parameterSize "30B" 보강 ← https://qwenlm.github.io/blog/qwen3/
- [x] `qwen3-235b-a22b` parameterSize "235B" 보강 ← https://qwenlm.github.io/blog/qwen3/

## 판단 / 고민
- 기존 수집된 Qwen3 계열 모델 중 parameterSize 및 Hugging Face 링크가 누락된 건들에 대해 공식 블로그 및 Hugging Face Card의 검증된 출처 정보를 바탕으로 메타데이터 보강을 완료함.

## 이슈 제기
- (없음)
