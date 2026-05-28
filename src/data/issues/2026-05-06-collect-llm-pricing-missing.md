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

## 진행 내역 (2026-05-23)
- `hyperclova-x`의 공식 링크를 NCP CLOVA Studio(https://www.ncloud.com/product/ai/clovaStudio)로 갱신함. 소비자용 CLOVA X 서비스는 2026년 4월 9일 종료되었으나, 기업용 API는 유지됨. 상세 가격 정보는 콘솔 로그인이 필요하여 추가 보강은 보류함.

## 진행 내역 (2026-05-28)
- `yi-large` 및 `baichuan-4`의 context window 를 32,768 (32K/33K)로 업데이트함.
- `yi-large`와 `baichuan-4`의 공식 API 가격 정보는 여전히 공개 텍스트 형태로 확인되지 않아 추가 조사가 필요함.
