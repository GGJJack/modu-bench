---
date: 2026-11-02
agent: collect-llm
status: completed
summary: "Google Gemma 2 기본(Base) 모델 라인업(2B, 9B, 27B) 메타데이터 수집 및 신규 등록"
---

## Todo
- [x] 기존 LLM 모델 목록 및 Gemma 모델 등록 현황 점검
- [x] Google Gemma 2 공식 기술 보고서(arXiv:2408.00118) 및 Hugging Face 모델 카드 확인
- [x] Gemma 2 베이스 모델(`gemma-2-2b`, `gemma-2-9b`, `gemma-2-27b`) 메타데이터 수집 및 등록

## 조사 내역
- 01:10 기존 Gemma 2 Instruct 모델(`gemma-2-2b-it`, `gemma-2-9b-it`, `gemma-2-27b-it`) 대비 기본 프리트레인(Base) 모델 미등록 확인 ← bun run skills/manage-model/scripts/model.ts list llm
- 01:12 Gemma 2 공식 기술 보고서 확인: 2B (2.6B params), 9B, 27B 아키텍처 및 8192 컨텍스트 윈도우 상세 ← https://arxiv.org/abs/2408.00118
- 01:15 Hugging Face Google Gemma 2 2B 베이스 모델 카드 확인 ← https://huggingface.co/google/gemma-2-2b
- 01:16 Hugging Face Google Gemma 2 9B 베이스 모델 카드 확인 ← https://huggingface.co/google/gemma-2-9b
- 01:17 Hugging Face Google Gemma 2 27B 베이스 모델 카드 확인 ← https://huggingface.co/google/gemma-2-27b

## 수행한 작업
- [x] `gemma-2-2b` 신규 등록 (parameterSize: 2.6B, contextWindow: 8192, license: Gemma Terms of Use) ← https://blog.google/technology/developers/gemma-2-2b-lightweight-ai-model/
- [x] `gemma-2-9b` 신규 등록 (parameterSize: 9B, contextWindow: 8192, license: Gemma Terms of Use) ← https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/
- [x] `gemma-2-27b` 신규 등록 (parameterSize: 27B, contextWindow: 8192, license: Gemma Terms of Use) ← https://blog.google/innovation-and-ai/technology/developers-tools/google-gemma-2/

## 판단 / 고민
- 기존 데이터베이스에는 Gemma 2의 Instruct 파생 모델(`-it`)만 등록되어 있고 기반이 되는 기본 사전학습 모델(`gemma-2-2b`, `gemma-2-9b`, `gemma-2-27b`)이 누락되어 있었음.
- 공식 논문(arXiv:2408.00118) Table 1 및 Table 2를 통해 2B 모델의 실제 파라미터 수는 2.6B(비임베딩 2.02B + 임베딩 0.59B)임을 정확히 확인하고, 컨텍스트 윈도우는 전 모델 공통 8192 토큰임을 확인하여 정확한 수치로 등록함.
- 가격 정보(pricing)는 호스팅 API/가중치 공개 라이선스 모델 특성상 특정할 수 없으므로 추측하지 않고 `null`로 유지함.

## 이슈 제기
- (없음)
