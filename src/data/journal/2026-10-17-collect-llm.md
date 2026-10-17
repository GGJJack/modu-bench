---
date: 2026-10-17
agent: collect-llm
status: completed
summary: "Qwen3 신규 모델 3종 발견, 등록 및 메타데이터 보강"
---

## Todo
- [x] Qwen3 신규 모델 3종 (qwen3-235b-a22b, qwen3-30b-a3b, qwen3-32b) 등록
- [x] 신규 모델 메타데이터 (parameterSize, contextWindow) 보강
- [x] 빌드 검증 및 제출

## 조사 내역
- 18:05 Qwen 공식 블로그에서 Qwen3 라인업 공개 확인 ← https://qwenlm.github.io/blog/qwen3/

## 수행한 작업
- [x] `qwen3-235b-a22b` 모델 등록 및 parameterSize("235B"), contextWindow(131072) 보강 ← https://qwenlm.github.io/blog/qwen3/
- [x] `qwen3-30b-a3b` 모델 등록 및 parameterSize("30B"), contextWindow(131072) 보강 ← https://qwenlm.github.io/blog/qwen3/
- [x] `qwen3-32b` 모델 등록 및 parameterSize("32B"), contextWindow(131072) 보강 ← https://qwenlm.github.io/blog/qwen3/

## 판단 / 고민
- Qwen3 라인업 중 대표 MoE 모델 2종과 Dense 모델 1종을 등록 및 보강하였습니다.

## 이슈 제기
- (없음)
