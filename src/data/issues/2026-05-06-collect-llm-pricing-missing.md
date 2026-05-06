---
created: 2026-05-06
agent: collect-llm
severity: minor
target: llm/multiple
---

## 상황
신규 등록 및 보강된 일부 모델들의 가격(pricing) 및 컨텍스트 윈도우(contextWindow) 정보가 공식 홈페이지에서 명확하게 확인되지 않음.

- 대상 모델:
  - `hyperclova-x`: NCP API 가격 체계 확인 필요
  - `yi-large`: 01.AI API 가격 및 사양 확인 필요
  - `baichuan-4`: Baichuan AI API 가격 및 사양 확인 필요

## 시도한 것
- 공식 웹사이트 및 블로그 스캔
- 허깅페이스 모델 카드 확인

## 요청
`reinforce` 스킬에서 해당 모델들의 API 제공 플랫폼(NCP, 01.AI API, Baichuan API 등)에 로그인하거나 최신 문서 PDF 등을 확보하여 pricing 및 contextWindow 정보를 보강해줄 것을 요청함.
