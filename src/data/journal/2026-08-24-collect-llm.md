---
date: 2026-08-24
agent: collect-llm
status: completed
summary: "Qwen2.5-Coder 시리즈 메타데이터(contextWindow) 공식 출처 기반 보강"
---

## Todo
- [x] 임무 및 공통 규칙 확인
- [x] Qwen2.5-Coder 공식 블로그 출처 확인 (`https://qwenlm.github.io/blog/qwen2.5-coder-family/`)
- [x] `qwen-2.5-coder-3b-instruct` contextWindow 보강 (128000 -> 32768)
- [x] `qwen-2.5-coder-1.5b-instruct` contextWindow 보강 (32000 -> 32768)
- [x] `qwen-2.5-coder-0.5b-instruct` contextWindow 보강 (32000 -> 32768)
- [x] 저널 작성 완료 및 status: completed 설정

## 조사 내역
- 01:05 Qwen2.5-Coder 0.5B / 1.5B / 3B 모델 Context Length 32K(32768 tokens) 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 수행한 작업
- [x] `qwen-2.5-coder-3b-instruct`: contextWindow 32768 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-1.5b-instruct`: contextWindow 32768 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-0.5b-instruct`: contextWindow 32768 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- 기존 `qwen-2.5-coder-3b-instruct`의 contextWindow가 128000으로 잘못 기재되어 있던 건을 공식 블로그 사양표(32K)에 맞춰 32768로 수정함.
- 0.5B, 1.5B 모델의 경우 근사치 32000으로 등록되어 있어 정확한 토큰 수인 32768로 갱신함.

## 이슈 제기
- (없음)
