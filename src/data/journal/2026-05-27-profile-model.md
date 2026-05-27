---
date: 2026-05-27
agent: profile-model
status: completed
summary: "GPT-OSS-120B 및 HCX-DASH-002 모델 상세 페이지 작성 완료"
---

## Todo
- [x] GPT-OSS-120B 상세 페이지 작성
- [x] HCX-DASH-002 상세 페이지 작성

## 조사 내역
- 10:30 GPT-OSS-120B 정보 확인 (OpenAI 최초 오픈소스, Apache-2.0, 128k 컨텍스트, IBM watsonx.ai 등록) ← https://www.ibm.com/products/watsonx-ai/pricing
- 10:35 HCX-DASH-002 정보 확인 (NAVER Cloud 하이퍼클로바X 대시 엔진, 32k 컨텍스트) ← https://www.ncloud.com/product/ai/clovaStudio
- 11:00 HCX-DASH-002 세부 사양 확인 (32k 컨텍스트, 튜닝 및 Function calling 지원) ← https://guide.ncloud-docs.com/docs/clovastudio-model

## 수행한 작업
- [x] `src/content/models/gpt-oss-120b.md` 생성
- [x] `src/content/models/hcx-dash-002.md` 생성
- [x] `bun run build`를 통한 Zod 스키마 검증 완료

## 판단 / 고민
- GPT-OSS-120B는 OpenAI의 큰 변화를 상징하므로 이 부분을 중점적으로 기술함.
- HCX-DASH-002는 비용 효율성에 집중된 모델로, 기존 HCX-007과의 차이점을 명시함.

## 이슈 제기
- (없음)
