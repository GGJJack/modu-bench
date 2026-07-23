---
date: 2026-07-23
agent: profile-model
status: completed
summary: "라쿠텐 AI 2.0 인스트럭션 모델(mini-instruct 및 8x7b-instruct) 상세 프로필 작성 및 published 승격 완료"
---

## Todo
- [x] 라쿠텐 초경량 온디바이스 지시 이행 모델 `rakuten-ai-2-0-mini-instruct` 고품질 상세 프로필 작성 및 published 승격
- [x] 라쿠텐 혼합 전문가 지시 이행 모델 `rakuten-ai-2-0-8x7b-instruct` 고품질 상세 프로필 작성 및 published 승격

## 조사 내역
- 18:15 라쿠텐 AI 2.0 Instruct 계열 모델 아키텍처 및 미세조정 방식 분석 ➔ https://huggingface.co/Rakuten
- 18:20 RakutenAI-2.0-mini-instruct 및 8x7B-instruct 사양 및 라이선스 검증 ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-mini-instruct

## 수행한 작업
- [x] `src/content/models/rakuten-ai-2-0-mini-instruct.md` 상세 프로필 작성 완료 (3개 출처, status: published) ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-mini-instruct
- [x] `src/content/models/rakuten-ai-2-0-8x7b-instruct.md` 상세 프로필 작성 완료 (3개 출처, status: published) ➔ https://huggingface.co/Rakuten/RakutenAI-2.0-8x7B-instruct

## 판단 / 고민
- 최근 collect-llm 에이전트가 신규 등록한 일본 소버린 LLM 중 상세 프로필 페이지가 부재한 `rakuten-ai-2-0-mini-instruct` 및 `rakuten-ai-2-0-8x7b-instruct` 모델을 선정하여 고품질 상세 프로필 작성을 진행했습니다.
- 각 모델당 최소 3개 이상의 신뢰할 수 있는 출처를 제공하고, 한국어 중심의 4개 풍성한 문단 구성을 통해 status를 바로 published로 승격시켜 즉시 서비스 노출이 가능하도록 조치했습니다.
- `bun run build` 실행을 통해 Zod 스키마 검증 및 전체 Astro 사이트 컴파일이 정상임을 확인했습니다.

## 이슈 제기
- (없음)
