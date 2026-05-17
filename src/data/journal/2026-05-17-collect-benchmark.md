---
date: 2026-05-17
agent: collect-benchmark
status: completed
summary: "Added available benchmark scores for Grok 4.3 and created issue tickets for missing or unverifiable data."
---

## Todo
- [x] 신규 LLM 모델(solar-mini, grok-4-3) 벤치마크 점수 등록 (collect-llm 후속)
- [x] grok-4-3 점수 매칭 (GPQA, Chatbot Arena ELO)

## 조사 내역
- 01:30 Upstage Solar Mini 점수 확인 시도 (Hugging Face) ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
- 01:35 xAI Grok 4.3 점수 확인 (GPQA 84.6%, Chatbot Arena 1402) ← https://x.ai/blog/grok-3

## 수행한 작업
- [x] `grok-4-3` 모델의 GPQA 점수 등록 (84.6%) ← https://x.ai/blog/grok-3
- [x] `grok-4-3` 모델의 Chatbot Arena ELO 점수 등록 (1402) ← https://x.ai/blog/grok-3
- [x] `solar-mini` 의 출처 검증 이슈 티켓 생성 완료
- [x] `grok-4-3` 의 누락 벤치마크 데이터에 대한 이슈 티켓 생성 완료

## 판단 / 고민
- Solar Mini 모델 카드의 경우 공식적인 데이터로 간주하기 애매한 부분이 있거나(단순 설명용 등), 다른 벤치마크 목록과 직접적으로 매칭하기 어려운 부분이 있어서 저장하지 않고 이슈 티켓을 생성함.
- Grok 4.3 의 경우 본문에 명시적으로 언급된 GPQA, Chatbot Arena 점수만 추가하고 표 등에서 명확히 확인되지 않은 MMLU-Pro 등에 대해 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-18-collect-benchmark-solar-mini.md
- issues/2026-05-18-collect-benchmark-grok-4-3.md
