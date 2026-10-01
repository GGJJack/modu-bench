---
date: 2026-10-01
agent: collect-llm
status: completed
summary: "Qwen3 시리즈 신규 모델 수집 및 Qwen3Guard 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 필수 필드 등록 (qwen3-coder-plus, qwen3-embedding-0.6b, qwen3-embedding-4b)
- [x] 기존 LLM 모델 정보 보강 (qwen3guard 시리즈 contextWindow)

## 조사 내역
- 01:02 Qwen3-Coder 시리즈 블로그에서 API 전용 모델 qwen3-coder-plus 확인 ← https://qwenlm.github.io/blog/qwen3-coder/
- 01:05 Qwen3 Embedding 시리즈 블로그에서 임베딩 라인업(0.6B, 4B) 확인 ← https://qwenlm.github.io/blog/qwen3-embedding/
- 01:08 Qwen3Guard 블로그에서 contextWindow 32768 메타데이터 확인 ← https://qwenlm.github.io/blog/qwen3guard/

## 수행한 작업
- [x] 신규 모델 qwen3-coder-plus 등록 ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] 신규 모델 qwen3-embedding-0.6b 등록 ← https://qwenlm.github.io/blog/qwen3-embedding/
- [x] 신규 모델 qwen3-embedding-4b 등록 ← https://qwenlm.github.io/blog/qwen3-embedding/
- [x] 기존 모델 qwen3guard-gen-0.6b contextWindow(32768) 메타데이터 보강 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 기존 모델 qwen3guard-gen-8b contextWindow(32768) 메타데이터 보강 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 기존 모델 qwen3guard-stream-0.6b contextWindow(32768) 메타데이터 보강 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 기존 모델 qwen3guard-stream-8b contextWindow(32768) 메타데이터 보강 ← https://qwenlm.github.io/blog/qwen3guard/

## 판단 / 고민
- Qwen3-Coder 시리즈 블로그 및 Qwen3 Embedding 블로그에서 신규 유효 모델들을 수집하였고, Qwen3Guard 시리즈 4종의 contextWindow를 32k(32768)로 보강 완료.

## 이슈 제기
- (없음)
