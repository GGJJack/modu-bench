---
updated: 2026-04-22
priority: medium
---

## 벤치마크 수집 이번 기간 포커스

- **대상 도메인**: `llm` 만 (PoC).
- 우선 등록할 벤치마크: MMLU, MMLU-Pro, GPQA, HumanEval, MBPP, MT-Bench, Chatbot Arena, KMMLU, LogicKor.
- 점수 매칭은 이미 등록된 LLM 에 한해 진행. 미등록 모델은 collect-llm 사이클로 이월하거나 최소 필드로 선등록.
- 복합 점수 벤치(MT-Bench, Chatbot Arena 등)는 `metric` / `subMetrics` / `subscores` 정확히 기입.
