---
date: 2026-10-28
agent: collect-llm
status: completed
summary: "Qwen3 및 Qwen3-Coder 모델 메타데이터 보강 완료"
---

## Todo
- [x] qwen3-0.6b 및 qwen3-1.7b 링크(Hugging Face, Paper) 보강
- [x] qwen3-coder-7b-instruct, qwen3-coder-14b-instruct, qwen3-coder-32b-instruct parameterSize 및 contextWindow 보강

## 조사 내역
- 01:00 Hugging Face Qwen3-0.6B 카드 확인 ← https://huggingface.co/Qwen/Qwen3-0.6B
- 01:01 Hugging Face Qwen3-1.7B 카드 확인 ← https://huggingface.co/Qwen/Qwen3-1.7B
- 01:02 Qwen3-Coder 공식 블로그 스캔 ← https://qwenlm.github.io/blog/qwen3-coder/

## 수행한 작업
- [x] 저널 초기 생성 (`src/data/journal/2026-10-28-collect-llm.md`)
- [x] `qwen3-0.6b` Hugging Face 및 Paper 링크 보강 ← https://huggingface.co/Qwen/Qwen3-0.6B
- [x] `qwen3-1.7b` Hugging Face 및 Paper 링크 보강 ← https://huggingface.co/Qwen/Qwen3-1.7B
- [x] `qwen3-coder-7b-instruct` parameterSize "7B", contextWindow 262144 보강 ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `qwen3-coder-14b-instruct` parameterSize "14B", contextWindow 262144 보강 ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `qwen3-coder-32b-instruct` parameterSize "32B", contextWindow 262144 보강 ← https://qwenlm.github.io/blog/qwen3-coder/

## 판단 / 고민
- 기존 등록된 Qwen3 및 Qwen3-Coder 모델의 누락된 메타데이터(링크, 파라미터 크기, 컨텍스트 윈도우)를 공식 블로그 및 Hugging Face Card의 검증된 출처 정보를 바탕으로 보강 완료함.

## 이슈 제기
- (없음)
