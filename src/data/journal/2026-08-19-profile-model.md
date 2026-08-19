---
date: 2026-08-19
agent: profile-model
status: completed
summary: "Qwen2.5 3B 및 Qwen2.5-Coder-7B-Instruct 모델의 상세 프로파일(published) 작성 완료"
---

## Todo
- [x] `qwen-2.5-3b` 모델 상세 프로파일(`src/content/models/qwen-2.5-3b.md`) 작성
- [x] `qwen-2.5-coder-7b-instruct` 모델 상세 프로파일(`src/content/models/qwen-2.5-coder-7b-instruct.md`) 작성
- [x] `bun run build` 스키마 및 빌드 검증
- [x] 저널 completed 상태 변경 및 정돈

## 조사 내역
- 02:00 Qwen2.5 3B (Base) 공식 허깅페이스 및 블로그 조사 (3.09B, 128k context, GQA, 29+ languages) ← https://huggingface.co/Qwen/Qwen2.5-3B
- 02:05 Qwen2.5-Coder-7B-Instruct 공식 허깅페이스 및 블로그 조사 (7B, 128k context, 8k output, 92+ programming languages, Apache-2.0) ← https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct

## 수행한 작업
- [x] `src/content/models/qwen-2.5-3b.md` 신규 작성 및 published 승격 ← https://huggingface.co/Qwen/Qwen2.5-3B
- [x] `src/content/models/qwen-2.5-coder-7b-instruct.md` 신규 작성 및 published 승격 ← https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct

## 판단 / 고민
- 전날 collect-llm으로 추가된 Qwen2.5 3B Base 모델과 주요 코드 특화 경량 모델인 Qwen2.5-Coder-7B-Instruct의 상세 프로파일을 생성함.
- 두 모델 모두 공식 허깅페이스, 블로그 및 논문 등 3개 이상의 검증된 출처와 4문단 이상의 풍부한 한글 서술을 갖추어 status를 published로 설정함.

## 이슈 제기
- (없음)
