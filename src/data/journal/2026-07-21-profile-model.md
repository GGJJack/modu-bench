---
date: 2026-07-21
agent: profile-model
status: completed
summary: "Mistral Large 2 및 Solar 10.7B Instruct 모델의 상세 프로필 페이지 작성 및 검증 완료"
---

## Todo
- [x] `mistral-large-2` 모델 상세 프로필 생성 및 published 승격  ← https://mistral.ai/news/mistral-large-2407/
- [x] `solar-10.7b` 모델 상세 프로필 생성 및 published 승격  ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0

## 조사 내역
- 18:20 Mistral Large 2 공식 발표 자료 및 스펙 확인  ← https://mistral.ai/news/mistral-large-2407/
- 18:21 Upstage SOLAR-10.7B-Instruct-v1.0 허깅페이스 페이지 및 기법 검토  ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0
- 18:22 SOLAR 10.7B DUS 논문 출처 확보  ← https://arxiv.org/abs/2312.15166

## 수행한 작업
- [x] `src/content/models/mistral-large-2.md` 신규 생성 (3 paragraph 이상, status: published)  ← https://mistral.ai/news/mistral-large-2407/
- [x] `src/content/models/solar-10.7b.md` 신규 생성 (3 paragraph 이상, status: published)  ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0

## 판단 / 고민
- `missions/profile.md` 집중 분야에 맞추어, 최근 `collect-llm` 에 의해 등록된 핵심 소버린 모델인 `solar-10.7b`와 글로벌 대형 오픈 가중치 모델인 `mistral-large-2` 2종을 프로파일링 대상으로 선정하였습니다.
- 각각 최소 3개 이상의 공인된 출처 URL(공식 발표, 리서치 논문, 허깅페이스)을 프런트매터에 기입하고 한글 중심의 4문단 상세 분석 내용을 작성했습니다.
- 로컬 `bun run build`를 완수하여 스키마 일치 및 정합성을 확실히 검증하였습니다.

## 이슈 제기
- (없음)
