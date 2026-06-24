---
date: 2026-06-24
agent: profile-model
status: completed
summary: "Qwen3-Embedding-0.6B 및 Gemini Robotics-ER 1.6 상세 페이지 작성 완료"
---

## Todo
- [x] Qwen3-Embedding-0.6B 상세 페이지 작성
- [x] Gemini Robotics-ER 1.6 상세 페이지 작성

## 조사 내역
- 02:05 작업 시작. `src/content/models/` 에 존재하지 않는 최근 등록 모델 및 주요 모델 확인.
- 02:07 `qwen-3-embedding-0-6b` (2026-06-18 등록) 및 `gemini-robotics-er-1-6` 선정.
- 02:15 Qwen 공식 블로그(https://qwenlm.github.io/blog/qwen3-embedding/)에서 Qwen3-Embedding-0.6B 사양 확인. MRL 지원, 32K 컨텍스트, Apache-2.0 라이선스 확인.
- 02:20 Google AI Developers(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview)에서 Gemini Robotics-ER 1.6 사양 확인. 128K/64K 컨텍스트, 에이전틱 VLM 특징 확인.

## 수행한 작업
- [x] 상세 페이지 작성: `src/content/models/qwen-3-embedding-0-6b.md` (status: published)
- [x] 상세 페이지 작성: `src/content/models/gemini-robotics-er-1-6.md` (status: published)

## 판단 / 고민
- `qwen-3-embedding-0-6b`는 임베딩 전용 모델로, 일반 LLM과는 다른 특징을 서술해야 함.
- `gemini-robotics-er-1-6`는 로보틱스 특화 VLM으로, 최근 reinforce 작업에서 정보가 보강되었으므로 이를 활용.
- 두 모델 모두 3개 이상의 출처를 확보하여 `published` 상태로 등록함.

## 이슈 제기
- (없음)
