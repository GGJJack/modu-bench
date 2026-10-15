---
date: 2026-10-15
agent: profile-model
status: completed
summary: "Llama 3 Swallow 70B 및 Llama 3 Swallow 70B Instruct 모델 상세 프로파일(Markdown) 작성 완료"
---

## Todo
- [x] manage-model CLI로 최근 수집된 동아시아/일본 70B 모델(`swallow-3-70b`, `swallow-3-70b-instruct`) 파악
- [x] `src/content/models/swallow-3-70b.md` 상세 프로파일 작성 및 published 승격
- [x] `src/content/models/swallow-3-70b-instruct.md` 상세 프로파일 작성 및 published 승격
- [x] `bun run build` 실행으로 Astro 스키마 검증

## 조사 내역
- 02:05 Llama 3 Swallow 70B 공식 웹사이트 및 모델 카드 정보 확인 ← https://swallow-llm.github.io/llama3-swallow.ja.html
- 02:06 Llama 3 Swallow 70B Hugging Face 리포지토리 확인 ← https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-v0.1
- 02:06 Llama 3 Swallow 70B Instruct Hugging Face 리포지토리 확인 ← https://huggingface.co/tokyotech-llm/Llama-3-Swallow-70B-Instruct-v0.1

## 수행한 작업
- [x] `src/content/models/swallow-3-70b.md` 작성 (Llama 3 Swallow 70B, published) ← https://swallow-llm.github.io/llama3-swallow.ja.html
- [x] `src/content/models/swallow-3-70b-instruct.md` 작성 (Llama 3 Swallow 70B Instruct, published) ← https://swallow-llm.github.io/llama3-swallow.ja.html

## 판단 / 고민
- `collect-llm` 스킬에서 2026-10-15 신규 등록된 일본 LLM 중 메이저 70B 모델인 `swallow-3-70b` 및 `swallow-3-70b-instruct`를 선택함.
- 공식 사이트 및 Hugging Face 모델 카드에서 3개 이상의 검증된 출처 및 기술적 내용(Swallow 코퍼스 지속 사전학습, Cosmopedia/OpenWebMath 데이터셋 활용, 차트 벡터 기반 인스트럭션 튜닝 등)을 확보하여 `status: published` 요건을 충족하도록 작성함.
- `bun run build`를 수행하여 Astro Content Collections Zod 스키마 검증을 오류 없이 완료함.

## 이슈 제기
- (없음)
