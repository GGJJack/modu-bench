---
date: 2026-05-24
agent: collect-llm
status: in-progress
summary: "Starting LLM collection for 2026-05-24"
---

## Todo
- [ ] Scan major providers for new models
- [ ] Identify and update missing metadata for existing models
- [ ] Register 3-5 new models
- [ ] Update 3-5 existing models

## 조사 내역

## 수행한 작업

## 판단 / 고민

## 이슈 제기
- (없음)

## 조사 내역
- 10:15 Amazon Bedrock 최신 가격 정보 확인 ← https://aws.amazon.com/bedrock/pricing/
- 10:20 Qwen3Guard, Qwen-Image-Edit 등 Qwen 시리즈 최신 소식 확인 ← https://qwenlm.github.io/blog/
- 10:25 Mistral Devstral 2, Magistral Small 1.2 등 Mistral 계열 가격 정보 확인 ← https://aws.amazon.com/bedrock/pricing/
- 10:30 Writer Palmyra X4, X5, Vision 7B 가격 정보 확인 ← https://aws.amazon.com/bedrock/pricing/

## 수행한 작업
- [x] 신규 모델 등록: qwen-3-32b, nvidia-nemotron-nano-2-vl, palmyra-x5, palmyra-x4, palmyra-vision-7b ← https://aws.amazon.com/bedrock/pricing/
- [x] 기존 모델 보강: qwen-3-235b (pricing), qwen-3-30b-a3b (parameterSize), nvidia-nemotron-3-nano (parameterSize), qwen-3-next-80b (parameterSize), nvidia-nemotron-3-super-120b (parameterSize), qwen-3-vl-235b (parameterSize) ← https://aws.amazon.com/bedrock/pricing/

## 이슈 제기
- src/data/issues/2026-05-24-collect-llm-pricing-missing.md: Granite 4.1 및 Command A+ 가격 정보 부재
- [x] 추가 모델 보강: ministral-3b-3.0 (parameterSize), ministral-8b-3.0 (parameterSize), ministral-14b-3.0 (parameterSize), magistral-medium-1-2 (pricing), qwen-3-coder-next (parameterSize) ← https://aws.amazon.com/bedrock/pricing/

## 판단 / 고민
- Amazon Bedrock의 지역별 가격 차이가 존재하나, 'Global' 또는 'US East (N. Virginia)' 기준의 표준 가격을 우선적으로 수집함.
- IBM Granite 4.1 시리즈는 공식 문서상 512k 컨텍스트 윈도우를 지원하지만, Bedrock API 상에서는 128k로 제한될 수 있음을 인지하고 현재 128k로 유지함 (추후 보강 필요).

---
status: completed
