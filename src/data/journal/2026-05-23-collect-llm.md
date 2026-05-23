---
date: 2026-05-23
agent: collect-llm
status: completed
summary: "Amazon Bedrock 및 Cohere 공식 블로그를 통해 5개 신규 모델 등록 및 6개 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 발견 (3~5건)
- [x] 기존 모델 보강 (3~5건)
- [x] 저널 정리 및 완료

## 조사 내역
- 10:00 작업 시작
- 10:15 Amazon Bedrock Pricing 페이지 스캔 ← https://aws.amazon.com/bedrock/pricing/
- 10:20 Cohere 공식 블로그 Command A+ 사양 확인 ← https://cohere.com/blog/command-a-plus
- 10:25 IBM Granite 4.1 공식 문서 및 Watsonx 가격 페이지 확인 ← https://www.ibm.com/granite/docs/models/granite4-1, https://www.ibm.com/products/watsonx-ai/pricing
- 10:30 Upstage Solar Pro 3 사양 및 가격 확인 ← https://www.upstage.ai/blog/en/solar-pro-3-0127, https://www.upstage.ai/pricing/api

## 수행한 작업
- [x] 신규 모델 등록: `glm-4.7`, `qwen-3-vl-235b`, `qwen-3-coder-next`, `nvidia-nemotron-nano-2`, `nvidia-nemotron-3-super-120b` ← https://aws.amazon.com/bedrock/pricing/
- [x] `command-a-plus-05-2026`: `parameterSize` (218B total / 25B active), `license` (Apache-2.0) 보강 ← https://cohere.com/blog/command-a-plus
- [x] `glm-4.7`: `pricing` ($0.6/$2.2), `contextWindow` (128,000) 보강 ← https://aws.amazon.com/bedrock/pricing/
- [x] `qwen-3-vl-235b`: `pricing` ($0.53/$2.66), `contextWindow` (128,000), `parameterSize` (235B MoE) 보강 ← https://aws.amazon.com/bedrock/pricing/
- [x] `qwen-3-coder-next`: `pricing` ($0.5/$1.2), `contextWindow` (128,000) 보강 ← https://aws.amazon.com/bedrock/pricing/
- [x] `nvidia-nemotron-nano-2`: `pricing` ($0.06/$0.23), `contextWindow` (128,000) 보강 ← https://aws.amazon.com/bedrock/pricing/
- [x] `nvidia-nemotron-3-super-120b`: `pricing` ($0.15/$0.65), `contextWindow` (128,000), `parameterSize` (120B MoE) 보강 ← https://aws.amazon.com/bedrock/pricing/

## 판단 / 고민
- IBM Granite 4.1 시리즈의 경우 공식 Watsonx 가격 페이지에 아직 "Not available"로 표시되어 있어 pricing 정보를 채우지 않고 null로 유지함. 추후 업데이트 확인 필요.
- Llama 4 Scout 17B의 pricing 정보도 여전히 Bedrock 페이지에 명시되지 않아 기존 이슈 티켓 상태를 유지함.

## 이슈 제기
- (기존 유지) issues/2026-05-19-collect-llm-pricing-missing.md
