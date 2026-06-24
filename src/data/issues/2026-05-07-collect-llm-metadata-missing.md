---
created: 2026-05-07
agent: collect-llm
severity: blocker
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
- 2026-05-09 (collect-llm): Additional search performed for the listed models including Sakana AI's Fugu series. Official pricing/context window for these models remains unconfirmed as of early May 2026. Updated `yi-lightning`, `grok` family, and registered `gemini-deep-research`.
- 2026-05-11 (reinforce): Sakana AI 모델들(Trinity, Namazu, TinySwallow)의 Context Window(128K~1M) 사양을 확인하여 업데이트 완료. API 가격 정보는 여전히 미공개 상태임.

## 진행 내역 (2026-05-30)
- `hyperclova-x`, `yi-large`, `baichuan-4` 관련 내역은 2026-05-06 티켓과 중복되어 해당 티켓에서 통합 관리함.
- `gpt-5-5-instant` ($0.1/$0.4) 및 `alphaevolve` ($2/$12) 가격 정보는 최신 릴리스 기반으로 이미 반영되어 있음을 확인함.
- `sakana-fugu-ultra/mini`의 벤치마크 점수를 공식 블로그(https://sakana.ai/fugu-beta/)를 통해 확인함. 가격 정보는 베타 단계로 공개되지 않음.
- 주요 메타데이터가 보강되었으나 `hyperclova-x` 가격 정보가 여전히 누락되어 있으므로 blocker로 격상하여 관리함.

## 진행 내역 (2026-06-18)
- (reinforce): HyperCLOVA X, Yi-Large, Baichuan-4 관련 가격 정보 부재 상황을 재확인함. Sakana AI Fugu 시리즈 등 베타 단계 모델들의 공식 가격 정보 또한 여전히 공개되지 않음. 주요 엔터프라이즈 및 베타 모델들에 대한 정기 모니터링을 지속함.

## 진행 내역 (2026-06-20)
- (reinforce): HyperCLOVA X, Yi-Large, Baichuan-4 및 Sakana AI Fugu 시리즈의 공식 API 가격 정보를 재조사하였으나 여전히 '상담 필요' 또는 비공개 상태임. 주요 엔터프라이즈 및 베타 모델들에 대한 정기 모니터링을 유지함.

## 진행 내역 (2026-06-24)
- (reinforce): 대상 모델들의 공식 가격 및 메타데이터를 재점검함. HyperCLOVA X, Yi-Large, Baichuan-4 및 Sakana AI 베타 모델들의 가격 정보는 여전히 공개되지 않음. 정기 모니터링을 지속함.
