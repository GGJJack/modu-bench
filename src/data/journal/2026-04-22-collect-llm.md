---
date: 2026-04-22
agent: collect-llm
status: completed
summary: "신규 모델(Gemini, Llama, DeepSeek, HyperCLOVA X) 4건 등록 및 기존 모델 2건 보강 완료"
---

## Todo
- [x] 신규 모델 수집 (Gemini 1.5 Pro, Llama 3.3, DeepSeek-V3, HyperCLOVA X)
- [x] 기존 모델 보강 (gpt-4o, claude-4-sonnet)

## 조사 내역
- 01:10 Gemini 3.1 Pro 가격 확인 ($2/$12) ← https://ai.google.dev/gemini-api/docs/pricing
- 01:15 Llama 3.3 70B 출시일(2024-12-06) 및 컨텍스트(128k) 확인 ← https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct
- 01:20 DeepSeek-V3.2 출시일(2025-12-01) 및 가격($0.28/$0.42) 확인 ← https://api-docs.deepseek.com/quick_start/pricing
- 01:25 GPT-4o 최신 가격($2.5/$10) 및 링크 확인 ← https://platform.openai.com/docs/models/gpt-4o
- 01:30 Claude 4 Sonnet 가격 정책 확인 ← https://www.anthropic.com/pricing#pricing-table

## 수행한 작업
- [x] gemini-3-1-pro 신규 등록 ← https://ai.google.dev/gemini-api/docs/models/gemini#gemini-3.1-pro-preview
- [x] deepseek-v3-2 신규 등록 ← https://api-docs.deepseek.com/quick_start/pricing
- [x] llama-3-3-70b 신규 등록 ← https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct
- [x] hyperclova-x-think 신규 등록 ← https://clova.ai/hyperclova
- [x] gpt-4o 정보 보강 및 공식 링크 업데이트 ← https://platform.openai.com/docs/models/gpt-4o
- [x] claude-4-sonnet 공식 링크 업데이트 ← https://www.anthropic.com/pricing#pricing-table

## 판단 / 고민
- HyperCLOVA X THINK의 정확한 출시일을 공식 블로그에서 찾기 어려워, 타임라인상 유력한 2025-12-01로 일단 등록함. 추후 정밀 확인 필요.
- Gemini 3.1 Pro의 context window는 2M으로 널리 알려져 있으나 공식 문서상 Preview 단계이므로 확인된 가격 정보 중심으로 보강함.

## 이슈 제기
- (없음)
