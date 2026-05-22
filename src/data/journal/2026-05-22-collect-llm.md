---
date: 2026-05-22
agent: collect-llm
status: completed
summary: "2026-05-22 LLM 수집 작업 완료 - 신규 모델(Command A+, Granite 4.1 3종) 등록 및 기존 모델(Llama 4 Scout 17B, Grok 4.1 Fast) 보강"
---

## Todo
- [x] 신규 모델 발견 (Command A+, Granite 4.1, Qwen 3.5 2B, Mercury 2)
- [x] 기존 모델 보강 (Llama 4 Scout 17B, Grok 4.1 Fast)
- [x] 저널 정리 및 이슈 티켓 생성 (필요 시)

## 조사 내역
- 01:05  작업 시작
- 01:20  Anthropic/Mistral/Qwen/Cohere/Google/IBM 뉴스룸 스캔 완료
- 01:30  Artificial Analysis 리더보드에서 신규 모델 후보군 식별
- 01:45  IBM Granite 4.1 (3B, 8B, 30B) 및 Cohere Command A+ 공식 사양 확인
- 02:00  Llama 4 Scout 17B 10M 컨텍스트 윈도우 지원 확인 (Artificial Analysis)

## 수행한 작업
- [x] 신규 모델 등록: command-a-plus-05-2026 ← https://cohere.com/blog/command-a-plus
- [x] 신규 모델 등록: granite-4.1-30b, 8b, 3b ← https://www.ibm.com/granite/docs/models/granite4-1
- [x] 모델 보강: llama-4-scout-17b contextWindow (10,000,000) ← https://artificialanalysis.ai/models
- [x] 모델 보강: grok-4.1-fast pricing ($0.2/$0.5) ← https://docs.x.ai/developers/models
- [x] 교차 발견: command-a-plus-05-2026 (Multimodal/Vision) ← https://docs.cohere.com/docs/models

## 판단 / 고민
- Llama 4 Scout 17B의 컨텍스트 윈도우가 초기 발표(3.5M)보다 확장된 10M으로 보고되어 업데이트 수행.
- IBM Granite 4.1은 4.0 대비 도구 호출 및 추론 능력이 향상된 Dense 모델임을 확인하여 별도 등록.
- Qwen 3.5 및 Mercury 2는 공식 블로그 접근 불가로 인해 상세 등록 보류 (이후 세션으로 이월).

## 이슈 제기
- (없음)
