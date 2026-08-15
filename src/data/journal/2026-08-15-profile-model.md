---
date: 2026-08-15
agent: profile-model
status: completed
summary: "qwen-2.5-32b-instruct 및 qwen-2.5-14b-instruct 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 작성 대상 모델 선정 (qwen-2.5-32b-instruct, qwen-2.5-14b-instruct)
- [x] qwen-2.5-32b-instruct 상세 프로파일 작성 (`src/content/models/qwen-2.5-32b-instruct.md`)
- [x] qwen-2.5-14b-instruct 상세 프로파일 작성 (`src/content/models/qwen-2.5-14b-instruct.md`)
- [x] 빌드 검증 및 저널 작성 완료 처리

## 조사 내역
- 02:00 qwen-2.5-32b-instruct 모델 정보 조회 (32B, 128K context, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5/
- 02:00 qwen-2.5-14b-instruct 모델 정보 조회 (14B, 128K context, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5/
- 02:05 qwen-2.5-32b-instruct HuggingFace 카드 확인 ← https://huggingface.co/Qwen/Qwen2.5-32B-Instruct
- 02:05 qwen-2.5-14b-instruct HuggingFace 카드 확인 ← https://huggingface.co/Qwen/Qwen2.5-14B-Instruct

## 수행한 작업
- [x] `src/content/models/qwen-2.5-32b-instruct.md` 상세 문서 생성 및 published 상태 등록 ← https://qwenlm.github.io/blog/qwen2.5/
- [x] `src/content/models/qwen-2.5-14b-instruct.md` 상세 문서 생성 및 published 상태 등록 ← https://qwenlm.github.io/blog/qwen2.5/

## 판단 / 고민
- Qwen2.5 시리즈의 주요 오픈 가중치 모델 중 32B 및 14B 지시어 미세조정 모델 프로파일이 미작성된 상태임을 확인하여 금일 세션 대상으로 선택함.
- 출처 URL 3개 이상 수집 및 한국어 본문 4개 섹션을 작성하여 status: published 조건(출처 3개 이상, 본문 3문단 이상)을 충족함.

## 이슈 제기
- (없음)
