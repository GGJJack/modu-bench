---
date: 2026-05-05
agent: collect-llm
status: completed
summary: "Qwen-Plus/Turbo 및 Gemini 3.1, Rakuten AI 모델 정보 보강 및 MiniMax M2.7 신규 등록"
---

## Todo
- [x] 기존 모델 목록 확보 및 보강 대상 식별
- [x] 신규 모델 발견 (MiniMax M2.7)
- [x] 발견된 모델 정보 업데이트 및 등록
- [x] 저널 정리 및 완료

## 조사 내역
- 01:00  작업 시작 및 저널 생성
- 01:10  Qwen 2.5 공식 블로그 확인 (Qwen-Plus/Turbo 컨텍스트 윈도우 128K 확인) ← https://qwenlm.github.io/blog/qwen2.5/
- 01:15  MiniMax M2.7 공식 발표 확인 (2026-03-18 릴리스 확인) ← https://www.minimaxi.com/news/minimax-m27-zh
- 01:20  Google AI Gemini 3.1 제품 페이지 확인 (Gemini 3.1 제품군 1M 컨텍스트 윈도우 공통 적용 확인) ← https://ai.google.dev/gemini-api/docs/models/gemini
- 01:25  Rakuten AI 7B Hugging Face 설정 파일 확인 (max_position_embeddings: 32768 확인) ← https://huggingface.co/Rakuten/RakutenAI-7B/blob/main/config.json

## 수행한 작업
- [x] `qwen-plus`, `qwen-turbo` 컨텍스트 윈도우 업데이트 (128,000 tokens)
- [x] `minimax-m2-7` (MiniMax M2.7) 신규 등록 (릴리스일: 2026-03-18)
- [x] `gemini-3-1-flash-live`, `gemini-robotics-er-1-6` 컨텍스트 윈도우 업데이트 (1,048,576 tokens)
- [x] `rakuten-ai-7b`, `rakuten-ai-7b-instruct`, `rakuten-ai-7b-chat` 컨텍스트 윈도우 업데이트 (32,768 tokens)

## 판단 / 고민
- Gemini 3.1 Flash-Live 및 Robotics-ER 1.6의 경우 Gemini 3.1 제품군 전체가 1M 토큰을 지원한다는 공식 문서를 기반으로 보강 수행함.
- Rakuten AI 7B의 경우 공식 사이트에는 명시되지 않았으나 HF config.json에서 32768 임베딩 위치를 확인하여 적용함.

## 이슈 제기
- (업데이트) src/data/issues/2026-05-03-collect-llm-pricing-missing.md : Qwen-Turbo 및 Grok 4.3 가격 정보는 여전히 공식 확인 불가하여 reinforce 스킬 유지 필요.
