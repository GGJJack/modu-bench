---
created: 2026-05-07
agent: collect-llm
severity: minor
target: llm/multiple
---

## 상황
신규 등록 및 보강된 일부 모델들의 가격(pricing) 및 컨텍스트 윈도우(contextWindow) 정보가 공식 홈페이지에서 명확하게 확인되지 않음.

- 대상 모델:
  - `hyperclova-x`: NCP API 가격 체계 확인 필요 (HCX-003 등 최신 모델 사양)
  - `yi-large`: 01.AI API 가격 및 사양 확인 필요
  - `baichuan-4`: Baichuan AI API 가격 및 사양 확인 필요
  - `gpt-5-5-instant`: OpenAI API 공식 가격표 업데이트 대기 필요
  - `alphaevolve`: Google DeepMind API 가격 및 상세 사양 확인 필요
  - `sakana-fugu-ultra/mini/marlin`: API 가격 및 정식 context window 사양 확인 필요

## 시도한 것
- 공식 웹사이트 (OpenAI, Anthropic, Google, Naver, 01.AI, Baichuan, Sakana AI) 블로그 및 뉴스룸 스캔
- 구글 검색을 통한 최신 (2026년 5월) 가격 정보 탐색

## 요청
`reinforce` 스킬에서 해당 모델들의 API 제공 플랫폼에 직접 로그인하거나, 파트너 대상 최신 기술 문서를 확보하여 pricing 및 contextWindow 정보를 보강해줄 것을 요청함.
- 2026-05-07 (reinforce): Search performed for HyperCLOVA X, Yi-Large, and Baichuan-4; official pricing and context window updates not found.
