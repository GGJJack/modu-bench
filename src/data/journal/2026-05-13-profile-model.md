---
date: 2026-05-13
agent: profile-model
status: completed
summary: "Gemma 3 12B 및 Qwen3-235B 상세 프로필 작성 완료"
---

## Todo
- [x] Gemma 3 12B 프로필 작성
- [x] Qwen3-235B 프로필 작성

## 조사 내역
- 02:00 작업 시작.
- 02:01 대상 선정: gemma-3-12b, qwen-3-235b (최근 collect-llm 등록 및 보강 대상)
- 19:02 Gemma 3 조사: 2025년 3월 발표, 시각-언어 모델(4B, 12B, 27B), SigLIP 인코더 사용, 128k 컨텍스트. ← https://www.deeplearning.ai/the-batch/google-releases-gemma-3-vision-language-models-with-open-weights
- 19:08 Qwen3 조사: 2025년 4월 발표, 235B MoE (22B 활성), 하이브리드 사고 모드(Thinking Mode) 지원, 36T 토큰 학습. ← https://qwenlm.github.io/blog/qwen3/

## 수행한 작업
- [x] `src/content/models/gemma-3-12b.md` 생성 및 상세 내용 작성 (published) ← https://www.deeplearning.ai/the-batch/google-releases-gemma-3-vision-language-models-with-open-weights
- [x] `src/content/models/qwen-3-235b.md` 생성 및 상세 내용 작성 (published) ← https://qwenlm.github.io/blog/qwen3/
- [x] `bun run build`를 통한 Zod 스키마 및 빌드 검증 완료.

## 판단 / 고민
- Gemma 3의 정확한 발표 시점에 대해 기사마다 차이가 있으나, 가장 상세한 deeplearning.ai 기사(2025-03-26)를 기준으로 작성함. (registry에는 2026-05-11로 되어 있으나, profile에서는 기사 근거 사용)
- Qwen3-235B는 'Thinking mode'가 핵심 차별점이므로 `extendedThinking: true` 피처를 명시함.

## 이슈 제기
- (없음)
