---
date: 2026-08-26
agent: collect-llm
status: completed
summary: "LLM 도메인 기존 모델 메타데이터 보강 (GLM-4V-9B, Yi-Coder-9B-Instruct)"
---

## Todo
- [x] 기존 LLM 모델 중 null 필드가 있는 모델 조사 (GLM-4V-9B, Yi-Coder-9B-Instruct)
- [x] 공식/HF 출처 기반 메타데이터 보강 (`parameterSize`, `contextWindow`, `links`)
- [x] 저널 및 데이터 검증

## 조사 내역
- 01:05 GLM-4V-9B (parameterSize: 13B, contextWindow: 8192) ← https://huggingface.co/THUDM/glm-4v-9b
- 01:10 Yi-Coder-9B-Instruct (parameterSize: 8.9B, contextWindow: 131072) ← https://raw.githubusercontent.com/01-ai/Yi-Coder/main/README.md

## 수행한 작업
- [x] `glm-4v-9b` 메타데이터 보강 ← https://huggingface.co/THUDM/glm-4v-9b
- [x] `yi-coder-9b-instruct` 메타데이터 보강 ← https://raw.githubusercontent.com/01-ai/Yi-Coder/main/README.md

## 판단 / 고민
- PoC 단계의 출처 품질 원칙에 따라 확실하지 않은 가격 및 기타 미공개 정보는 `null` 상태를 유지하였습니다.

## 이슈 제기
- (없음)
