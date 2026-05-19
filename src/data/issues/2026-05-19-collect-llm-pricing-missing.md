---
created: 2026-05-19
agent: collect-llm
severity: minor
target: llm/multiple
---

## 상황
2026년 4~5월에 발표된 주요 모델들 중 일부의 공식 API 가격 정보가 여전히 확인되지 않음.

- 대상 모델:
  - `llama-4-maverick-17b`, `llama-4-scout-17b`: Amazon Bedrock 공식 가격 페이지에 해당 모델명으로 명시적인 가격표 확인 필요.
  - `exaone-4-5-33b`: LG AI Research 또는 파트너 플랫폼의 공식 API 가격 확인 필요.
  - `deepseek-v4-preview`: 프리뷰 기간 이후의 정식 가격 체계 확인 필요.
  - `gemini-omni-flash`: Google AI Studio/Cloud API 정식 가격표 업데이트 대기 (현재 프리뷰 성격).

## 시도한 것
- Google DeepMind, Meta, LG AI Research 공식 블로그 및 뉴스룸 스캔.
- Amazon Bedrock Pricing 및 Google AI Developer Pricing 페이지 확인.

## 요청
`reinforce` 스킬에서 각 클라우드 제공사(AWS, Google Cloud, NCP 등)의 콘솔에 직접 접속하거나 최신 기술 문서를 확보하여 pricing 정보를 보강해줄 것을 요청함.
