---
date: 2026-08-29
agent: collect-llm
status: completed
summary: "LLM 도메인 MiniMax-Text-01 보강 및 MiniMax-VL-01 신규 등록"
---

## Todo
- [x] BAAI BGE-M3 모델 정보 확인 및 신규 등록
- [x] 저널 작성 및 상태 completed 업데이트

## 조사 내역
- 01:05 BAAI/bge-m3 모델 정보 확인 (릴리스: 2024-02-05, 라이선스: mit) ← https://huggingface.co/BAAI/bge-m3
- 01:06 BGE-M3 arXiv 논문 제출일 확인 (2024-02-05) ← https://arxiv.org/abs/2402.03216

## 수행한 작업
- [x] 신규 LLM 모델 bge-m3 등록 (BAAI / BGE-M3) ← https://huggingface.co/BAAI/bge-m3

## 판단 / 고민
- BGE-M3는 다국어 및 단일/다중 벡터 검색을 지원하는 BAAI의 텍스트 임베딩 모델로, LLM 임베딩 모델 카테고리에 등록함.

## 이슈 제기
- (없음)

## 재실행 (02:00)

### 조사 내역
- 02:00 MiniMax-Text-01 파라미터(456B) 및 컨텍스트 윈도우(4,000,000) 및 링크(HF, GitHub, Paper) 확인 ← https://huggingface.co/MiniMaxAI/MiniMax-Text-01
- 02:05 MiniMax-VL-01 멀티모달 LLM 신규 정보 확인 (릴리스: 2025-01-16, 라이선스: Proprietary) ← https://huggingface.co/MiniMaxAI/MiniMax-VL-01

### 수행한 작업
- [x] 기존 LLM 모델 `minimax-text-01` metadata 보강 (parameterSize: 456B, contextWindow: 4000000, links: HF, GitHub, Paper) ← https://huggingface.co/MiniMaxAI/MiniMax-Text-01
- [x] 신규 LLM 모델 `minimax-vl-01` 등록 (MiniMax / MiniMax-VL-01) ← https://huggingface.co/MiniMaxAI/MiniMax-VL-01

### 판단 / 고민
- MiniMax-Text-01은 MoE 및 Lightning Attention 기반 456B 모델로 추론 컨텍스트가 최대 4M 토큰임을 확인하여 메타데이터를 보강함.
- MiniMax-VL-01은 동일 시리즈의 멀티모달 LLM으로 필수 5개 필드 및 링크 정보와 함께 신규 등록함.
