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

## 진행 내역 (2026-06-21)
- (reinforce): NCP CLOVA Studio 공식 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio, 2026-06-18 확인)를 재점검함. HCX-007, 005, DASH-002 모델의 가격은 여전히 상담 필요('-')로 표시됨. Yi-Large 및 Baichuan-4 또한 공식 홈페이지에서 공개 가격표를 확인할 수 없으며, 기업 대상 협의 품목으로 유지되고 있음. 주요 엔터프라이즈 모델의 공식 가격 정보 획득이 제한적이므로 정기 모니터링을 지속함.

## 진행 내역 (2026-06-22)
- (reinforce): NCP CLOVA Studio(https://www.ncloud.com/product/ai/clovaStudio) 및 Yi-Large, Baichuan-4 공식 플랫폼을 재조사함. HyperCLOVA X 모델들의 공식 가격은 여전히 '-' (상담 필요) 상태이며, Yi-Large 및 Baichuan-4 또한 공식적인 공개 가격표 업데이트는 확인되지 않음. 엔터프라이즈 전용 모델의 특성상 공개적인 가격 정보 획득은 계속 제한적일 것으로 예상되어 정기 모니터링을 유지함.

## 진행 내역 (2026-06-23)
- (reinforce): NCP CLOVA Studio 요금 페이지 및 주요 API 제공사(01.AI, Baichuan AI)의 공식 홈페이지를 재점검함. HyperCLOVA X(HCX-007, 005, DASH-002)의 공식 가격은 여전히 '상담 필요'로 표시되어 있으며, Yi-Large와 Baichuan-4 역시 공식적인 공개 가격표의 업데이트가 확인되지 않음. 엔터프라이즈 모델의 특성상 공개된 수치 확보가 어려워 정기 모니터링 체제를 지속함.

## 진행 내역 (2026-06-24)
- (reinforce): NCP, 01.AI, Baichuan AI 공식 채널을 재조사함. HyperCLOVA X 모델들과 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 비공개(상담 필요) 상태임. 엔터프라이즈 기조가 유지되고 있어 정기 모니터링 대상으로 유지함.

## 진행 내역 (2026-06-25)
- (reinforce): NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 의 가격은 여전히 '-' (상담 필요)로 표시됨. Yi-Large 및 Baichuan-4 공식 홈페이지에서도 일반 공개용 가격표는 확인되지 않아 정기 모니터링을 지속함.

## 진행 내역 (2026-06-26)
- (reinforce): NCP CLOVA Studio 요금 페이지(https://www.ncloud.com/product/ai/clovaStudio) 및 API 가이드(https://api.ncloud-docs.com/docs/clovastudio-chatcompletionsv3)를 재점검함. HCX-007, 005, DASH-002 의 가격은 여전히 '상담 필요(-)' 상태임. 다만 HCX-005(128k), HCX-DASH-002(32k)의 Context Window 사양은 공식 문서를 통해 재확인함. Yi-Large 및 Baichuan-4 또한 공식적인 공개 가격표 업데이트가 없어 기존 추적 상태를 유지함.

## 진행 내역 (2026-06-27)
- (reinforce): NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인한 결과, HyperCLOVA X 계열(HCX-007, 005, DASH-002)의 가격은 여전히 비공개(상담 필요) 상태임. Yi-Large 및 Baichuan-4 또한 공식 홈페이지에서 일반 공개용 가격표는 식별되지 않음. OpenRouter 등 3사 플랫폼 정보를 참고하여 최신성을 유지하되, 공식 가격 확보를 위한 모니터링을 지속함.

## 진행 내역 (2026-06-28)
- (reinforce): NCP CLOVA Studio, 01.AI, Baichuan AI 공식 채널을 재조사함. HyperCLOVA X 모델들과 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 비공개(상담 필요) 상태가 유지되고 있음. 엔터프라이즈 기조에 따른 정보 비공개가 지속됨에 따라 정기 모니터링을 계속함.

## 진행 내역 (2026-06-29)
- (reinforce): NCP CLOVA Studio 요금 안내 페이지 및 01.AI, Baichuan AI 공식 플랫폼을 재점검함. HyperCLOVA X 모델들 및 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 '상담 필요' 또는 비공개 상태임. 엔터프라이즈 특성상 공개 정보 획득이 제한되어 정기 모니터링 체제를 유지함.

## 진행 내역 (2026-06-30)
- (reinforce): NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 등 주요 모델의 가격은 여전히 '-' (상담 필요)로 표시됨. 01.AI 및 Baichuan AI 역시 공식적인 공개 가격표 업데이트가 없어 정기 모니터링을 지속함.

## 진행 내역 (2026-07-01)
- (reinforce): 2026년 7월 1일 기준, NCP CLOVA Studio 요금 페이지 및 주요 API 제공사 채널을 재조사함. HyperCLOVA X, Yi-Large, Baichuan-4의 공식 API 요금은 여전히 상담 필요 또는 비공개 상태임. 엔터프라이즈 기조에 따른 정보 비공개가 지속되어 정기 모니터링을 유지함.

## 진행 내역 (2026-07-02)
- (reinforce): 2026년 7월 2일 기준, NCP CLOVA Studio 요금 페이지 및 주요 API 제공사 채널을 재조사함. HyperCLOVA X, Yi-Large, Baichuan-4의 공식 API 요금은 여전히 상담 필요 또는 비공개 상태임. 엔터프라이즈 기조에 따른 정보 비공개가 지속되어 정기 모니터링을 유지함.

## 진행 내역 (2026-07-03)
- (reinforce): 2026년 7월 3일 기준, NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 모델의 공식 요금은 여전히 '-' (상담 필요) 상태임. Yi-Large 및 Baichuan-4 또한 공식 홈페이지에서 공개 가격표 업데이트가 식별되지 않음. 정기 모니터링을 지속함.

## 진행 내역 (2026-07-05)
- (reinforce): 2026년 7월 5일 기준, NCP 및 01.AI, Baichuan AI 공식 홈페이지를 재점검함. HyperCLOVA X 계열(HCX-007, 005, DASH-002)의 가격은 여전히 '상담 필요' 상태이며, Yi-Large 및 Baichuan-4의 공식 API 가격 또한 공개되지 않음. 엔터프라이즈 모델 특성상 비공개 기조가 유지되고 있어 정기 모니터링을 지속함.

## 진행 내역 (2026-07-06)
- (reinforce): 2026년 7월 6일 기준, NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 등 주요 모델의 가격은 여전히 '-' (상담 필요)로 표시됨. Yi-Large 및 Baichuan-4 역시 공식적인 공개 가격표 업데이트가 식별되지 않아 정기 모니터링을 지속함.

## 진행 내역 (2026-07-07)
- (reinforce): 2026년 7월 7일 기준, NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005 등 주요 모델의 가격은 여전히 '-' (상담 필요)로 표시됨. Yi-Large 및 Baichuan-4 역시 공식적인 공개 가격표 업데이트가 식별되지 않아 정기 모니터링을 지속함.

## 진행 내역 (2026-07-08)
- (reinforce): 2026년 7월 8일 기준, NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 등 주요 모델의 가격은 여전히 '-' (상담 필요)로 표시됨. Yi-Large 및 Baichuan-4 역시 공식적인 공개 가격표 업데이트가 식별되지 않아 정기 모니터링을 지속함.

## 진행 내역 (2026-07-09)
- (reinforce): 2026년 7월 9일 기준, NCP CLOVA Studio 요금 안내 페이지를 재조사함. HCX-007, 005, DASH-002 모델의 공식 가격은 여전히 '-' (상담 필요) 상태임. 주요 엔터프라이즈 모델의 공식 가격 비공개 기조가 유지되고 있어 정기 모니터링을 지속함.

## 진행 내역 (2026-07-10)
- (reinforce): 2026년 7월 10일 기준, NCP(NAVER Cloud Platform) 요금 페이지 및 Yi-Large, Baichuan-4 공식 채널을 재점검함. HyperCLOVA X 모델들의 가격은 여전히 비공개(상담 필요) 상태이며, Yi-Large 및 Baichuan-4 또한 새로운 공식 가격 발표가 확인되지 않음. 엔터프라이즈 모델 특성상 공개 정보 획득이 계속 제한되어 정기 모니터링 체제를 유지함.

## 진행 내역 (2026-07-11)
- (reinforce): 2026년 7월 11일 기준, NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 등의 요금은 여전히 '-' (상담 필요)로 표시되어 있으며 구체적인 공식 단가는 비공개 상태임. Yi-Large 및 Baichuan-4 또한 공식 홈페이지에서 신규 가격 정책이나 공개 가격표 업데이트가 식별되지 않아 정기 모니터링을 지속함.

## 진행 내역 (2026-07-12)
- (reinforce): 2026년 7월 12일 기준, NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HCX-007, 005, DASH-002 등 주요 모델의 가격은 여전히 '-' (상담 필요)로 표시되어 공식 단가는 비공개 상태임. 01.AI 및 Baichuan AI 역시 공식 홈페이지에서 일반 공개용 신규 가격표는 식별되지 않음. 엔터프라이즈 기조 유지에 따라 정기 모니터링을 지속함.

## 진행 내역 (2026-07-13)
- (reinforce): 2026년 7월 13일 기준, NCP CLOVA Studio 공식 요금 페이지를 재점검함. 하이퍼클로바X 모델군(HCX-007, 005, DASH-002)의 요금은 여전히 '-' (상담 필요) 상태로, 일반 사용자에게 공개된 단가는 확인되지 않음. 01.AI(Yi-Large) 및 Baichuan AI(Baichuan-4) 또한 공식 API 플랫폼에서 공개 가격표의 업데이트가 없어 기존 추정치를 유지하며 정기 모니터링을 지속함.

## 진행 내역 (2026-07-14)
- (reinforce): 2026년 7월 14일 기준, NCP CLOVA Studio 공식 요금 페이지를 재확인함. 하이퍼클로바X 계열 모델들의 공식 가격은 여전히 상담 필요 비공개 상태임. Yi-Large 및 Baichuan-4 공식 플랫폼의 요금 체계 역시 추가 공개 동향이 확인되지 않아 기존 모니터링 추적 상태를 유지함.

## 진행 내역 (2026-07-16)
- (reinforce): 2026년 7월 16일 기준, NCP CLOVA Studio 및 01.AI, Baichuan AI의 공식 요금 가이드를 재조사함. HyperCLOVA X 모델 군(HCX-007, 005, DASH-002)의 API 가격표는 여전히 상담 필요 또는 비공개('-') 기조를 유지하고 있으며, Yi-Large 및 Baichuan-4 또한 공개된 공식 단가표가 업데이트되지 않음. 주요 엔터프라이즈 전용 모델로서의 가격 비공개 특성을 반영하여 정기 추적을 지속함.

## 진행 내역 (2026-07-17)
- (reinforce): NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 재확인함. HyperCLOVA X 계열(HCX-007, 005, DASH-002) 모델들의 가격은 여전히 상담 필요 비공개 상태임. Yi-Large 및 Baichuan-4 공식 플랫폼의 가격 정책 또한 추가적인 공개 단가 발표가 확인되지 않아 정기 모니터링 및 추적 상태를 계속 유지함.

## 진행 내역 (2026-07-18)
- (reinforce): 공식 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio)를 최종 재검토하였으나, HyperCLOVA X 계열 모델(HCX-007, 005, DASH-002)의 공식 API 가격은 여전히 '상담 필요' 비공개 상태임이 유지되고 있음. Yi-Large 및 Baichuan-4 가격은 OpenRouter 및 파트너사 API를 참조하여 최신 사양을 유지 중이며, 엔터프라이즈 전용 요금 정책 특성을 고려해 severity: blocker 및 "사람 에스컬레이션 필요" 상태를 유지하며 정기 추적을 지속함.

## 진행 내역 (2026-07-20)
- (reinforce): 2026년 7월 20일 기준, NCP CLOVA Studio 요금 페이지 및 01.AI, Baichuan AI 공식 채널을 재점검함. HyperCLOVA X 모델들의 공식 가격은 여전히 상담 필요 상태로 비공개되어 있으며, 타 모델의 신규 가격 변동도 확인되지 않았습니다. 엔터프라이즈 모델 특성상 공개적인 정보 획득이 제한되므로, severity: blocker 상태 및 모니터링을 계속 유지합니다.

## 진행 내역 (2026-07-22)
- (reinforce): 2026년 7월 22일 기준, NCP CLOVA Studio 요금 안내 페이지, 01.AI 및 Baichuan AI 공식 채널을 재점검함. HyperCLOVA X 모델들(HCX-007, 005, DASH-002)의 공식 단가는 여전히 '-' (상담 필요) 상태임. Yi-Large 및 Baichuan-4 가격은 OpenRouter 및 파트너 API를 참조해 최신성을 유지 중이며, 엔터프라이즈 특성상 일반 공개가 어려우므로 severity: blocker 상태를 유지하며 정기 모니터링을 지속함.

## 진행 내역 (2026-07-23)
- (reinforce): 2026년 7월 23일 기준, NAVER Cloud CLOVA Studio 공식 요금표(https://www.ncloud.com/product/ai/clovaStudio) 및 Yi-Large/Baichuan-4 제공사 공식 API 채널을 최종 재점검함. 하이퍼클로바X 계열 모델들의 공식 단가는 여전히 상담 필요 비공개 상태이며, Yi-Large 및 Baichuan-4 가격 정책 또한 일반 공개가 불가능한 엔터프라이즈 전용 협의 사항으로 유지되고 있음. 따라서 자동 수집이 불가하므로 severity: blocker 상태를 유지함.

## 진행 내역 (2026-07-25)
- (reinforce): 2026년 7월 25일 기준, NAVER Cloud CLOVA Studio 및 01.AI, Baichuan AI 공식 요금 안내 채널을 재점검함. 하이퍼클로바X 모델 및 Yi-Large, Baichuan-4의 공식 API 가격은 여전히 상담 필요 혹은 비공개 상태임. 엔터프라이즈 특성상 가격 수치 획득이 불가하므로 severity: blocker 상태를 유지하고 정기 모니터링을 지속함.

## 진행 내역 (2026-07-27)
- (reinforce): 2026년 7월 27일 기준, NCP CLOVA Studio, 01.AI, Baichuan AI 공식 요금 페이지를 재확인함. 하이퍼클로바X 모델군 및 Yi-Large, Baichuan-4의 공식 API 단가는 여전히 '상담 필요' 또는 비공개 상태임. 해당 품목들은 엔터프라이즈 맞춤형 정책으로 운영되고 있어 일반적인 자동 수집 범위 밖인 것으로 판단되며, severity: blocker 상태를 유지하며 지속 추적함.

## 진행 내역 (2026-07-28)
- (reinforce): 2026년 7월 28일 기준, NAVER Cloud CLOVA Studio, 01.AI, Baichuan AI 공식 홈페이지를 재점검함. HyperCLOVA X, Yi-Large, Baichuan-4의 공식 API 요금은 여전히 상담 필요(비공개) 상태로 유지되고 있음. 엔터프라이즈 특화 정책으로 비공개 기조가 유지되고 있으므로, severity: blocker 상태 및 모니터링을 지속함.

## 진행 내역 (2026-07-29)
- (reinforce): 2026년 7월 29일 기준, NAVER Cloud CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio) 및 Yi-Large/Baichuan-4 제공사 공식 API 채널을 재점검함. HyperCLOVA X 모델들(HCX-007, 005, DASH-002)의 공식 단가는 여전히 '-' (상담 필요) 상태임. Yi-Large 및 Baichuan-4 역시 공식적인 가격 정보의 공개 또는 추가 단가 발표가 확인되지 않는 엔터프라이즈 전용 협의 품목 상태이므로, severity: blocker 상태를 지속 유지함.

## 진행 내역 (2026-07-30)
- (reinforce): NAVER Cloud CLOVA Studio 공식 요금표(https://www.ncloud.com/product/ai/clovaStudio) 및 Yi-Large/Baichuan-4 제공사 공식 API 채널을 재검토함. HyperCLOVA X 계열 모델의 요금은 여전히 '-' (상담 필요)로 비공개 상태이며, Yi-Large 및 Baichuan-4 가격 정책 또한 일반 공개가 불가능한 엔터프라이즈 전용 협의 사항으로 유지되고 있어 수집 불가함. severity: blocker 상태를 지속 유지함.

## 진행 내역 (2026-07-31)
- (reinforce): NCP CLOVA Studio 및 Yi-Large, Baichuan-4 제공사 공식 API 사이트를 최종 재검토하였으나, HyperCLOVA X 모델들(HCX-007, 005, DASH-002)의 공식 단가는 여전히 '-' (상담 필요) 상태의 비공개입니다. Yi-Large와 Baichuan-4 역시 공식 플랫폼에서 직접적인 가격표 공개 대신 비공개 개별 협의 또는 OpenRouter 등의 파트너사 API를 참조하는 기조가 유지되고 있습니다. 해당 엔터프라이즈 및 맞춤 요금 정책 모델들의 공식 가격 직접 수집은 불가하므로 severity: blocker 상태를 계속 유지합니다.

## 진행 내역 (2026-08-01)
- (reinforce): NAVER Cloud, 01.AI, Baichuan AI의 공식 요금 안내 채널을 재조사하였습니다. 하이퍼클로바X 계열 모델들의 공식 단가는 여전히 '상담 필요' 상태로 비공개되어 있으며, Yi-Large 및 Baichuan-4 역시 제공사 직영 API 사이트에서는 명확한 공개 가격표 없이 엔터프라이즈 맞춤형 협의 대상으로 분류되어 있어 직접적인 가격 수집이 불가합니다. OpenRouter 등의 글로벌 파트너사 가격을 참조하는 기조와 `severity: blocker` 상태를 유지하며 추적을 지속합니다.

## 진행 내역 (2026-08-02)
- (reinforce): NAVER Cloud CLOVA Studio, 01.AI, Baichuan AI 공식 채널을 재점검하였습니다. 하이퍼클로바X 모델군(HCX-007, 005, DASH-002)의 공식 API 단가는 여전히 비공개('상담 필요') 상태이며, Yi-Large와 Baichuan-4 역시 제공사의 공개 단가표 대신 엔터프라이즈 전용 개별 상담 정책이 유지되고 있습니다. 자동 수집이 불가한 맞춤형 협의 품목 상태이므로, severity: blocker 상태를 유지하며 정기 모니터링을 지속합니다.

## 진행 내역 (2026-08-03)
- (reinforce): NAVER Cloud CLOVA Studio 요금 안내 페이지, 01.AI 및 Baichuan AI 공식 채널을 재검토함. 하이퍼클로바X 모델들의 공식 단가는 여전히 '-' (상담 필요) 상태의 비공개임. Yi-Large 및 Baichuan-4 가격 정책 또한 일반 공개가 불가능한 엔터프라이즈 전용 개별 상담 정책이 유지되고 있음. 자동 수집 불가한 맞춤형 협의 품목 상태이므로 severity: blocker 상태를 유지함.

## 진행 내역 (2026-08-04)
- (reinforce): NCP CLOVA Studio 요금 안내 페이지(https://www.ncloud.com/product/ai/clovaStudio) 및 Yi-Large, Baichuan-4 공식 플랫폼을 재확인함. HyperCLOVA X 계열(HCX-007, 005, DASH-002)의 요금은 여전히 '-' (상담 필요)로 비공개 상태이며, Yi-Large 및 Baichuan-4 가격 정책 또한 일반 공개가 불가능한 엔터프라이즈 전용 협의 사항으로 유지되고 있음. 자동 수집이 불가능한 맞춤형 협의 품목 상태이므로, severity: blocker 상태를 지속 유지함.

## 진행 내역 (2026-08-07)
- (reinforce): 2026년 8월 7일 기준, NAVER Cloud CLOVA Studio 요금 안내 페이지, 01.AI 공식 채널 및 Baichuan AI 플랫폼을 재차 확인했으나 해당 모델들(HyperCLOVA X, Yi-Large, Baichuan-4)의 공식 API 가격은 여전히 일반 공개 없이 개별 상담 및 기업 계약 제도로 운영되고 있습니다. OpenRouter 등 타사 파트너 API를 참조하는 우회 방식 외의 공식 가격 직접 확보는 현시점 불가능함을 확인하여 severity: blocker 상태를 유지합니다.
