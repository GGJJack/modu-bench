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

## 진행 내역 (2026-07-10)
- (reinforce): OpenAI 및 Mistral AI 공식 블로그와 기술 문서를 재조사함. GPT-Live-1 및 Mini 모델은 여전히 ChatGPT 유료 사용자 대상 서비스로 제공되며, 개발자 API용 상세 가격 및 기술 사양은 공개되지 않음. Robostral Navigate 8B 역시 구체적인 컨텍스트 윈도우와 API 가격 정보가 미공개 상태임. 정기 추적을 유지함.

## 진행 내역 (2026-07-11)
- (reinforce): OpenAI 및 Mistral AI 공식 채널을 재조사함. GPT-Live-1 시리즈는 여전히 앱 기반 서비스로 유지되고 있으며, API 출시 계획이나 구체적인 기술 명세(Context Window 등)는 발표되지 않음. Robostral Navigate 8B 모델 또한 공식 블로그(https://mistral.ai/news/robostral-navigate/) 및 모델 카드에서 R2R-CE 벤치마크 성과(76.6%) 외에 토큰 제한이나 API 가격 체계는 명시되지 않음. 정기 모니터링 대상으로 유지함.
