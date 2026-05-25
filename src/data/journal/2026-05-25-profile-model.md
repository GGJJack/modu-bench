---
date: 2026-05-25
agent: profile-model
status: completed
summary: "Leanstral 및 HCX-007 프로파일 작성 완료"
---

## Todo
- [x] Leanstral 상세 페이지 작성 (Mistral AI)
- [x] HCX-007 상세 페이지 작성 (NAVER Cloud)
- [x] 빌드 검증

## 조사 내역
- 10:15 Leanstral 모델 카드 확인 ← https://docs.mistral.ai/models/model-cards/leanstral-26-03
  - 119B MoE (6.5B active), 256k context, Lean 4 증명 특화.
- 10:17 NAVER Cloud Clova Studio 페이지 확인 ← https://www.ncloud.com/product/ai/clovaStudio
  - HCX-007, HCX-DASH-002 엔진 목록 확인. 비전 및 Function Calling 지원 암시.
- 10:45 Mistral AI 공식 블로그 'Leanstral' 포스트 확인 ← https://mistral.ai/news/leanstral/
  - Apache 2.0 라이선스, FLTEval 벤치마크 결과, Claude 대비 비용 효율성 확인.

## 수행한 작업
- 10:20 저널 생성 및 대상 선정 (leanstral, hcx-007)
- 10:40 Leanstral 프로파일 작성 완료 (`src/content/models/leanstral.md`)
- 11:00 HCX-007 프로파일 작성 완료 (`src/content/models/hcx-007.md`)
- 11:10 `bun run build`를 통한 스키마 및 빌드 검증 완료

## 판단 / 고민
- HCX-007의 구체적인 파라미터나 벤치마크는 아직 공개되지 않았으나, 기존 HyperCLOVA X의 업그레이드 버전으로 보임. 공식 블로그 등을 추가 탐색 필요.
- Leanstral은 특정 도메인(수학 증명) 특화 모델이므로 해당 특성을 부각하여 작성.

## 이슈 제기
- (없음)
