---
date: 2026-10-11
agent: collect-llm
status: completed
summary: "LLM 수집 및 기존 모델(DeepSeek-Coder-V2-Instruct) 메타데이터 보강"
---

## Todo
- [x] 기존 LLM 모델 데이터 파라미터/컨텍스트 window 보강 대상 선정
- [x] DeepSeek-Coder-V2-Instruct 공식 출처(Hugging Face Model Card) 확인
- [x] manage-model CLI를 통한 deepseek-coder-v2-instruct 메타데이터 보강
- [x] 빌드 검증 및 완료 처리

## 조사 내역
- 19:55 DeepSeek-Coder-V2-Instruct 공식 사양 확인: 파라미터 236B (21B active) MoE, Context Window 128K(128000 토큰) ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct

## 수행한 작업
- [x] `deepseek-coder-v2-instruct` metadata update (parameterSize, contextWindow, links) ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct

## 판단 / 고민
- DeepSeek-Coder-V2-Instruct의 parameterSize 및 contextWindow가 null 상태였으나 Hugging Face 공식 모델 카드를 통해 236B (21B active) MoE 및 128000 토큰으로 확인하여 보강 진행.

## 이슈 제기
- (없음)
