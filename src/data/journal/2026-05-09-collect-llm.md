---
title: "2026-05-09 collect-llm 저널"
status: completed
agent: jules
skill: collect-llm
missions:
  - missions/master.md
  - missions/llm.md
---

# 2026-05-09 collect-llm 작업 기록

## 1. 개요
- 신규 LLM 모델 발견 및 기존 모델의 누락된 메타데이터(pricing, contextWindow 등) 보강.
- 특히 한국, 일본, 중국 등 국가별 독자 LLM에 주목.

## 2. 작업 상세
- [x] 신규 모델 검색
- [x] 기존 모델 보강 (`yi-lightning`, `grok-4-20`, `grok-4-3`, `alphaevolve`, `gemma-4` family)
- [x] 신규 모델 등록 (`gemini-deep-research`, `grok-4.1-fast`, `grok-4.20-multi-agent`)

## 3. 발견 및 변경 사항
### 신규 모델
- **Gemini Deep Research** (Google): 2026-05-08 출시, 1M 컨텍스트.
- **Grok 4.1 Fast** (xAI): 2025-11-17 출시, 2M 컨텍스트, 가격 ($0.2/$0.5).
- **Grok 4.20 Multi-Agent** (xAI): 2026-03-09 출시, 2M 컨텍스트, 가격 ($1.25/$2.5).

### 기존 모델 보강
- **Yi-Lightning**: 컨텍스트 윈도우 1M으로 업데이트 (출처: Memory/01.AI Docs).
- **Grok 4.20**: 컨텍스트 윈도우 2M, 가격 ($1.25/$2.5) 업데이트.
- **Grok 4.3**: 컨텍스트 윈도우 1M, 가격 ($1.25/$2.5) 업데이트.
- **AlphaEvolve**: 공식 블로그 링크 업데이트.
- **Gemma 4 Family**: Apache-2.0 라이선스 명시.

### 미해결 사항 (추후 보강 필요)
- `hyperclova-x` (HCX-003), `yi-large`, `baichuan-4`, `sakana-fugu` 시리즈의 2026년 5월 기준 최신 가격 및 상세 사양은 여전히 공식 채널에서 확인이 어려움. `src/data/issues/2026-05-07-collect-llm-metadata-missing.md` 에 기록 유지.
