---
date: 2026-05-30
agent: collect-llm
status: completed
summary: "LLM 모델 신규 수집(5건) 및 기존 모델 메타데이터(30+건) 보강 완료"
---

## Todo
- [x] 신규 모델 발견 (May 29-30)
- [x] gpt-oss-20b 보강
- [x] mistral-physics-ai-emmi 보강
- [x] granite-4.1-30b/8b/3b 보강
- [x] command-a-plus-05-2026 보강
- [x] exaone-4-5-33b 보강

## 조사 내역
- 01:15 Mistral AI 공식 문서 확인 (Medium 3.5, Small 4, Devstral 2 등) ← https://docs.mistral.ai/models
- 01:25 Amazon Bedrock 가격표 스캔 (GPT-OSS Safeguard, Kimi K2 Thinking 등 발견) ← https://aws.amazon.com/bedrock/pricing/
- 01:35 IBM Granite 4.1 및 Llama 4 계열 가격 정보 수집 ← https://aws.amazon.com/bedrock/pricing/

## 수행한 작업
- [x] 신규 모델 등록: mistral-saba, devstral-small-2, kimi-k2-thinking, gpt-oss-safeguard-20b/120b
- [x] 메타데이터 보강: gpt-oss-20b/120b, granite-4.1 family, command-a-plus, mistral models (pricing, context window, license)
- [x] 파라미터 사이즈 업데이트: mistral-medium-3-5 (128B), mistral-small-4 (119B) 등

## 판단 / 고민
- Amazon Bedrock의 Llama 4 Scout/Maverick 가격이 공개되어 이를 기반으로 업데이트함.
- Mistral의 새로운 라이선스인 'Modified MIT'와 'Mistral Non-Production License'를 명시적으로 구분하여 적용함.

## 이슈 제기
- (없음)
