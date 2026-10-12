---
date: 2026-10-12
agent: collect-llm
status: completed
summary: "LLM 수집 및 기존 모델(Llama 3.1 405B, SOLAR 10.7B Instruct v1.0) 메타데이터 보강"
---

## Todo
- [x] LLM 메타데이터 누락 모델(Llama 3.1 405B, SOLAR 10.7B Instruct v1.0) 선정
- [x] manage-model CLI를 통한 Llama 3.1 405B 파라미터 크기 및 HF 링크 보강
- [x] manage-model CLI를 통한 SOLAR 10.7B Instruct v1.0 컨텍스트 윈도우 및 HF 링크 보강
- [x] 빌드 검증 및 저널 완료 처리

## 조사 내역
- 01:05 Llama 3.1 405B 공식 발표 및 HF 모델 카드 확인: parameterSize 405B ← https://ai.meta.com/blog/meta-llama-3-1/
- 01:06 SOLAR 10.7B Instruct v1.0 HF 모델 카드 확인: contextWindow 4096 토큰 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0

## 수행한 작업
- [x] `llama-3.1-405b` metadata update (parameterSize: "405B", links.huggingface) ← https://ai.meta.com/blog/meta-llama-3-1/
- [x] `solar-10.7b-v1.0` metadata update (contextWindow: 4096, links.huggingface) ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0

## 판단 / 고민
- Llama 3.1 405B의 parameterSize가 null로 되어 있었으나 공식 블로그 및 HF 카드를 확인하여 405B로 명시 보강.
- SOLAR 10.7B Instruct v1.0의 contextWindow가 null 상태였으나 official HF 카드를 통해 4096으로 확인하여 보강.

## 이슈 제기
- (없음)
