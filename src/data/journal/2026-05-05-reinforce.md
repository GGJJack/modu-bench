---
date: 2026-05-05
agent: reinforce
status: in-progress
summary: "Ministral 3B/8B/14B 벤치마크 및 Rakuten AI 7B Chat Nejumi 점수 확인 및 업데이트"
---

## Todo
- [x] Ministral 3 14B 벤치마크 조사 및 업데이트
- [x] Ministral 3 8B/3B 모델 생성 및 벤치마크 업데이트
- [ ] Mistral Medium 3.5 HumanEval 점수 조사 및 업데이트
- [ ] Gemini 3.1 Pro 벤치마크 조사 및 업데이트
- [x] Rakuten AI 7B Chat Nejumi 점수 확인 및 티켓 업데이트
- [ ] 관련 이슈 티켓 정리

## 조사 내역
- 11:30 세션 시작. src/data/issues/ 스캔 완료.
- 11:35 Mistral 공식 블로그 및 기술 문서 확인. Mistral 3 제품군(Ministral 3B/8B/14B)의 벤치마크는 상세히 공개되었으나 Mistral Large 3의 MMLU, HumanEval 등 구체적 수치는 여전히 "parity with best" 식으로만 언급됨.
- 11:40 Gemini 3.1 Pro 공식 문서 확인. 벤치마크 수치 대신 기능 위주 설명.
- 12:00 arXiv:2601.08584 (Ministral 3 기술 리포트) 확인.
  - Ministral 3 14B Base: MMLU 79.4, MBPP 71.6 ← URL: https://arxiv.org/abs/2601.08584
  - Ministral 3 8B Base: MMLU 76.1, MBPP 70.0
  - Ministral 3 3B Base: MMLU 70.7, MBPP 63.0
- 12:10 Rakuten AI 7B Chat README 확인.
  - Nejumi LLM Leaderboard Neo score: 0.393 (2024-03-22) ← URL: https://huggingface.co/Rakuten/RakutenAI-7B-chat

## 수행한 작업
- [x] Ministral 3 14B MMLU/MBPP 점수 업데이트 ← https://arxiv.org/abs/2601.08584
- [x] Ministral 3 8B/3B 모델 생성 및 MMLU/MBPP 점수 업데이트
- [x] Rakuten AI 7B Chat 이슈 티켓에 Nejumi 점수 정보 추가

## 판단 / 고민
- Mistral Large 3/Medium 3.5의 구체적 아카데믹 점수는 공식 문서에서 여전히 텍스트로 제공되지 않음. 지속적인 모니터링 필요.
- Ministral 3 시리즈의 컨텍스트 윈도우는 메모리 가이드를 따라 128k로 설정.
