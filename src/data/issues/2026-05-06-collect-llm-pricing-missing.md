---
created: 2026-05-06
agent: collect-llm
severity: blocker
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

## 진행 내역 (2026-05-29)
- `hcx-005`의 context window를 128,000으로, `hcx-dash-002`를 32,000으로 공식 가이드(https://api.ncloud-docs.com/docs/clovastudio-chatcompletionsv3)에 따라 업데이트함.
- `yi-large`의 context window를 33,000으로 업데이트함 (OpenRouter 기준).
- 대상 모델들의 공식 API 가격 정보는 여전히 콘솔 로그인 또는 별도 협의가 필요한 상태로 확인되어 `severity: blocker` 격상을 검토함.

## 진행 내역 (2026-05-30)
- `yi-large`의 가격 정보를 $0.3/$0.3 (per 1M tokens)으로 업데이트함 (OpenRouter 기준).
- `baichuan-4`의 가격 정보를 $1.4/$1.4 (per 1M tokens)으로 유지/확인함 (API 파트너사 정보 기반).
- `hyperclova-x`(HCX-007, 005, DASH-002)의 공식 가격은 여전히 NCP 콘솔 외부에서 확인 불가능함. 해당 이슈는 사람 에스컬레이션이 필요한 것으로 판단하여 severity를 blocker로 격상함.

## 진행 내역 (2026-06-07)
- `hcx-007`의 context window를 128,000으로 업데이트함 (v3 API 문서 확인).
- `yi-large`의 context window를 33,000으로 재확인 및 업데이트함 (OpenRouter 기준).
- NCP 공식 홈페이지의 CLOVA Studio 요금 안내 페이지에서 HCX-007, HCX-005, HCX-DASH-002 의 가격 항목이 '기본' 및 '튜닝' 구분으로 존재하나 구체적인 수치는 여전히 공개되지 않음 (상담 필요).

## 진행 내역 (2026-06-11)
- (reinforce): OpenAI 공식 가격 페이지(https://openai.com/api/pricing/)를 통해 GPT-5.5의 정식 가격($5/$30 per 1M tokens)을 확인하여 업데이트함.
- HyperCLOVA X, Yi-Large, Baichuan-4의 공식 API 가격은 여전히 상담 또는 콘솔 로그인이 필요한 비공개 상태임.
- GPT-5-5-instant 등 대기 중이던 OpenAI 모델들의 가격 정보를 최신화함.

## 진행 내역 (2026-06-12)
- (reinforce): NCP CLOVA Studio 공식 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재점검하였으나, HCX-007, HCX-005, HCX-DASH-002 등의 요금은 여전히 '-'로 표시되어 있으며 구체적인 수치는 공개되지 않음. Yi-Large 및 Baichuan-4 역시 공식 웹사이트와 OpenRouter에서 새로운 가격 변동이나 공식 확정 공지가 확인되지 않아 기존 추정치를 유지함.

## 진행 내역 (2026-06-13)
- (reinforce): NAVER Cloud, 01.AI, Baichuan AI의 공식 홈페이지 및 글로벌 API 파트너사(OpenRouter 등)를 재조사함. HyperCLOVA X 모델들의 공식 가격은 여전히 비공개 상태이며, Yi-Large 및 Baichuan-4 역시 신규 공식 가격 발표는 확인되지 않음. 해당 정보들은 기업 대상 협의 품목으로 판단되어 정기 모니터링 대상으로 유지함.

## 진행 내역 (2026-06-14)
- (reinforce): NCP CLOVA Studio 공식 요금 페이지를 재확인하였으나 HCX-007, 005, DASH-002 의 요금은 여전히 비공개('-') 상태임. 다만 API 가이드(v3)를 통해 HCX-005의 Context Window(128k)와 HCX-DASH-002의 Context Window(32k)를 재확인함. Yi-Large와 Baichuan-4 또한 공식적인 가격 변동은 확인되지 않아 기존 정보를 유지함.

## 진행 내역 (2026-06-15)
- (reinforce): NAVER Cloud CLOVA Studio 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재점검한 결과, HCX-007, 005, DASH-002 모델의 가격은 여전히 상담 필요('-')로 표시됨. Yi-Large 및 Baichuan-4 역시 공식 플랫폼에서 공개 가격표를 확인할 수 없으며(상담/로그인 필요), OpenRouter 등 타사 플랫폼의 가격 정보를 참고하여 최신성을 유지함. 주요 엔터프라이즈 모델의 직접적인 공식 가격 정보 획득은 현재로선 불가능한 것으로 확인됨.

## 진행 내역 (2026-06-16)
- (reinforce): NCP CLOVA Studio 요금 페이지 및 Yi-Large, Baichuan-4 공식 사이트를 재점검함. HyperCLOVA X 모델들의 가격은 여전히 '상담 필요'로 표시되어 있으며, Yi-Large와 Baichuan-4 또한 공식적인 공개 가격표 업데이트는 확인되지 않음. 엔터프라이즈 전용 모델의 특성상 공개적인 가격 정보 획득은 계속 제한적일 것으로 예상됨.

## 진행 내역 (2026-06-17)
- (reinforce): NCP CLOVA Studio, 01.AI, Baichuan AI의 공식 홈페이지를 재점검함. HyperCLOVA X 모델 및 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 '상담 필요' 또는 비공개 상태임. 엔터프라이즈 전용 모델의 특성상 일반 사용자 대상의 공개 가격표 업데이트는 단기간 내에 이루어질 가능성이 낮다고 판단되어 정기 모니터링 체제를 유지함.

## 진행 내역 (2026-06-18)
- (reinforce): NCP CLOVA Studio, 01.AI, Baichuan AI의 공식 홈페이지를 재점검함. HyperCLOVA X(HCX-007, 005, DASH-002) 및 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 '상담 필요' 또는 비공개 상태임. 엔터프라이즈 전용 모델의 특성상 일반 공개 가격표 업데이트는 단기간 내에 이루어질 가능성이 낮다고 판단되어 정기 모니터링 체제를 유지함.

## 진행 내역 (2026-06-19)
- (reinforce): NCP CLOVA Studio 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio, 2026-06-18 확인)를 재점검함. HCX-007, 005, DASH-002 모델의 가격은 여전히 상담 필요('-')로 표시됨. Yi-Large 및 Baichuan-4 또한 공식 플랫폼에서 공개 가격표를 확인할 수 없으며, 기업 대상 협의 품목으로 유지되고 있음. 주요 엔터프라이즈 모델의 공식 가격 정보 획득이 제한적이므로 정기 모니터링을 지속함.

## 진행 내역 (2026-06-20)
- (reinforce): NCP CLOVA Studio, 01.AI, Baichuan AI의 공식 홈페이지 및 기술 문서를 재점검함. HyperCLOVA X 모델들(HCX-007, 005, DASH-002)과 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 '상담 필요' 또는 비공개 상태로 유지되고 있음. 엔터프라이즈 전용 모델의 특성상 공개 가격표 업데이트가 지연되고 있어 정기 모니터링을 지속함.
