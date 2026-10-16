---
date: 2026-10-16
agent: profile-model
status: completed
summary: "Swallow 7B Instruct 및 Swallow 13B Instruct 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] manage-model CLI로 프로파일 부재 모델 목록 조회 및 Swallow 7B/13B Instruct 선정
- [x] `src/content/models/swallow-7b-instruct.md` 상세 프로파일 작성 및 published 승격
- [x] `src/content/models/swallow-13b-instruct.md` 상세 프로파일 작성 및 published 승격
- [x] `bun run build` 실행으로 Astro 스키마 검증

## 조사 내역
- 02:00 Swallow 7B Instruct 공식 웹사이트 및 모델 카드 정보 확인 ← https://tokyotech-llm.github.io/
- 02:00 Swallow 7B Instruct Hugging Face 리포지토리 확인 ← https://huggingface.co/tokyotech-llm/Swallow-7b-instruct
- 02:01 Swallow 13B Instruct Hugging Face 리포지토리 확인 ← https://huggingface.co/tokyotech-llm/Swallow-13b-instruct
- 02:01 Swallow 논문 arXiv 확인 ← https://arxiv.org/abs/2404.17790

## 수행한 작업
- [x] `src/content/models/swallow-7b-instruct.md` 작성 (published) ← https://tokyotech-llm.github.io/
- [x] `src/content/models/swallow-13b-instruct.md` 작성 (published) ← https://tokyotech-llm.github.io/

## 판단 / 고민
- 동아시아 오픈소스 LLM 중 벤치마크 조사에 자주 등장하는 도쿄공업대학/AIST의 `swallow-7b-instruct` 및 `swallow-13b-instruct`를 선택하여 고품질 서술형 프로파일을 작성함.
- official 웹사이트, Hugging Face 모델 카드, arXiv 논문 등 3개 이상의 공식/검증된 출처를 확보하여 `status: published` 승격 조건(출처 3개 이상, 본문 3문단 이상)을 충족함.

## 이슈 제기
- (없음)
