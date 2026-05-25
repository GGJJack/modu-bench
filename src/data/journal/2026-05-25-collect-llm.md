---
date: 2026-05-25
agent: collect-llm
status: completed
summary: "Mistral AI 신규 모델 Leanstral 등록 및 기존 모델(DeepSeek, Mistral, NAVER) 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 검색 및 등록
- [x] 기존 모델 (HyperCLOVA X, Mistral Medium 3.5 등) 메타데이터 보강
- [x] 교차 발견 (TTS/STT 등) 확인

## 조사 내역
- 01:10 작업 시작 및 기존 모델 목록 확인
- 01:15 Mistral AI 공식 문서 확인 (https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04)
  - Mistral Medium 3.5 가격: Input $1.5 / Output $7.5 per 1M tokens
  - 신규 모델 Leanstral 발견 (2026-03-16 출시, 256k context, Modified MIT)
  - Mistral Small 4 파라미터 및 라이선스 확인 (119B/6.5B active, Modified MIT)
- 01:25 DeepSeek 공식 문서 확인 (https://api-docs.deepseek.com/quick_start/pricing)
  - DeepSeek-V4-Pro: Input $0.435 / Output $0.87 (75% 할인 적용가), 1M context
  - DeepSeek-V4-Flash: Input $0.14 / Output $0.28, 1M context
- 01:35 NAVER Cloud CLOVA Studio 확인 (https://www.ncloud.com/product/ai/clovaStudio)
  - 신규 엔진 HCX-007, HCX-DASH-002 등장 확인 및 등록
- 01:40 Amazon Bedrock 가격 페이지 확인
  - Voxtral Mini 1.0 / Small 1.0 가격 및 출시일(2026-05-19) 재확인

## 수행한 작업
- [x] 신규 모델 등록: `leanstral` (Mistral AI) ← https://docs.mistral.ai/models/model-cards/leanstral-26-03
- [x] 신규 모델 등록: `hcx-007`, `hcx-dash-002` (NAVER Cloud) ← https://www.ncloud.com/product/ai/clovaStudio
- [x] 기존 모델 보강: `mistral-medium-3-5` 가격 및 출처 업데이트 ($1.5/$7.5) ← https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04
- [x] 기존 모델 보강: `deepseek-v4-pro`, `deepseek-v4-flash` 가격 및 컨텍스트 윈도우 업데이트 ← https://api-docs.deepseek.com/quick_start/pricing
- [x] 기존 모델 보강: `voxtral-mini-1-0`, `voxtral-small-1-0` 가격 및 상세 정보 업데이트 ← Amazon Bedrock
- [x] 기존 모델 보강: `mistral-small-4` 라이선스 및 파라미터 정보 업데이트 ← https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03
- [x] 시스템 정합성 확인: `bun run build` 통과 확인

## 판단 / 고민
- HyperCLOVA X (hyperclova-x) 모델은 CLOVA Studio에서 HCX-003 등으로 구체화되고 있어, 기존 통합 ID의 가격을 null로 조정하고 신규 엔진 ID를 추가함.
- DeepSeek-V4-Pro 가격은 현재 75% 할인 프로모션 중인 가격을 반영함 (2026-05-31 종료 예정이나 현재 시점 기준).

## 이슈 제기
- (없음)
