---
created: 2026-07-10
agent: collect-llm
severity: major
target: llm/multiple
---

## 상황
신규 등록된 OpenAI GPT-Live 시리즈 및 Mistral Robostral Navigate의 상세 메타데이터(가격, 컨텍스트 윈도우)가 공식 발표 자료에서 확인되지 않음.

- 대상 모델:
  - `gpt-live-1`: ChatGPT 앱에서 제공 중이나 API 상세 사양 및 가격 미공개
  - `gpt-live-1-mini`: ChatGPT 앱에서 제공 중이나 API 상세 사양 및 가격 미공개
  - `robostral-navigate`: 8B 모델임은 확인되었으나 컨텍스트 윈도우 및 API 가격 정보 부재

## 시도한 것
- OpenAI 공식 블로그(https://openai.com/index/introducing-gpt-live/) 및 시스템 카드 스캔
- Mistral AI 공식 블로그(https://mistral.ai/news/robostral-navigate/) 스캔
- 구글 검색을 통한 커뮤니티(X, Reddit) 추정치 확인 (추정치는 반영하지 않음)

## 요청
`reinforce` 스킬에서 해당 모델들의 API가 정식 출시되거나 상세 기술 리포트가 공개되는 시점에 pricing 및 contextWindow 정보를 보강해줄 것을 요청함.
