---
date: 2026-09-04
agent: profile-model
status: completed
summary: "Qwen2.5-Math-7B-Instruct 및 DeepSeek-Coder-V2-Lite-Instruct 상세 프로파일 작성 완료"
---

## Todo
- [x] `qwen-2.5-math-7b-instruct` 상세 프로파일 작성 (`src/content/models/qwen-2.5-math-7b-instruct.md`)
- [x] `deepseek-coder-v2-lite-instruct` 상세 프로파일 작성 (`src/content/models/deepseek-coder-v2-lite-instruct.md`)

## 조사 내역
- 02:00 최근 등록된 모델 중 수리/코딩 분야 특화 모델 2종 선정 (`qwen-2.5-math-7b-instruct`, `deepseek-coder-v2-lite-instruct`) ← https://qwenlm.github.io/blog/qwen2.5-math/
- 02:05 Qwen2.5-Math-7B-Instruct 출처 및 기술 사양 확인 ← https://huggingface.co/Qwen/Qwen2.5-Math-7B-Instruct
- 02:10 DeepSeek-Coder-V2-Lite-Instruct 출처 및 기술 사양 확인 ← https://github.com/deepseek-ai/DeepSeek-Coder-V2

## 수행한 작업
- [x] 저널 생성 (`src/data/journal/2026-09-04-profile-model.md`)
- [x] `qwen-2.5-math-7b-instruct` 상세 프로파일 작성 (`src/content/models/qwen-2.5-math-7b-instruct.md`) ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `deepseek-coder-v2-lite-instruct` 상세 프로파일 작성 (`src/content/models/deepseek-coder-v2-lite-instruct.md`) ← https://github.com/deepseek-ai/DeepSeek-Coder-V2
- [x] `bun run build` 빌드 및 스키마 검증 수행

## 판단 / 고민
- 신규 등록된 LLM 중 3개 이상 출처 URL 및 상세 사양이 검증된 2개 모델 선택하여 published 상태로 작성 진행.
- 두 모델 모두 공식 블로그, HuggingFace, GitHub, 논문 출처를 완비하여 published 상태 조건(출처 3개 이상, 본문 3문단 이상)을 충족함.

## 이슈 제기
- (없음)
