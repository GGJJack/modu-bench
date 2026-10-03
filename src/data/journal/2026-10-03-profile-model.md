---
date: 2026-10-03
agent: profile-model
status: completed
summary: "신규 수집 LLM 모델(solar-10.7b-instruct, evollm-jp-7b) 상세 프로파일 작성 및 published 승격"
---

## Todo
- [x] `solar-10.7b-instruct` 상세 페이지 작성 및 `published` 승격
- [x] `evollm-jp-7b` 상세 페이지 작성 및 `published` 승격

## 조사 내역
- 02:05 Upstage Solar 10.7B Instruct 공식 정보 및 논문 조사 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 02:08 Sakana AI EvoLLM-JP v1 7B 진화 병합 기법 및 출처 조사 ← https://sakana.ai/evolutionary-model-merge/

## 수행한 작업
- [x] `src/content/models/solar-10.7b-instruct.md` 상세 프로파일 작성 (status: published) ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- [x] `src/content/models/evollm-jp-7b.md` 상세 프로파일 작성 (status: published) ← https://sakana.ai/evolutionary-model-merge/

## 판단 / 고민
- `missions/profile.md` 지침에 맞춰 최근 `collect-llm`이 새로 수집 등록한 모델 중 대표성이 높은 한국(Upstage) 및 일본(Sakana AI) 독자 LLM 2종을 대상으로 작성함.
- 출처 URL 3개 이상 및 본문 3문단 이상의 충실한 서술을 갖추어 모두 `status: published`로 지정함.

## 이슈 제기
- (없음)
