---
date: 2026-10-06
agent: profile-model
status: completed
summary: "DeepSeek-Coder-V2-Base 및 CALM2 7B Chat 상세 프로파일 작성 완료"
---

## Todo
- [x] 대상 모델 조사 및 공식 출처 확인 (`deepseek-coder-v2-base`, `calm2-7b-chat`)
- [x] `deepseek-coder-v2-base` 상세 프로파일 작성 (`src/content/models/deepseek-coder-v2-base.md`)
- [x] `calm2-7b-chat` 상세 프로파일 작성 (`src/content/models/calm2-7b-chat.md`)

## 조사 내역
- 02:05 DeepSeek-Coder-V2-Base 공식 HuggingFace 및 문서 조사 ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Base
- 02:06 CALM2 7B Chat 공식 HuggingFace 및 문서 조사 ← https://huggingface.co/cyberagent/calm2-7b-chat

## 수행한 작업
- [x] `src/content/models/deepseek-coder-v2-base.md` 신규 생성 (`published`, 출처 3개, MoE 236B/21B active 및 128K 컨텍스트 서술) ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Base
- [x] `src/content/models/calm2-7b-chat.md` 신규 생성 (`published`, 출처 3개, CyberAgent 7B 및 32K 컨텍스트 대화형 모델 서술) ← https://huggingface.co/cyberagent/calm2-7b-chat

## 판단 / 고민
- 최근 `collect-llm` 세션(2026-10-06)에서 신규 수집된 LLM 모델 중 `deepseek-coder-v2-base`와 `calm2-7b-chat`의 상세 개요 페이지를 작성함.
- 각 프로파일에 3개 이상의 검증된 출처 URL 및 4개 이상의 서술 단락, 핵심 하이라이트를 작성하고 Zod 스키마 준수 확인 후 `published` 상태로 승격 완료함.

## 이슈 제기
- (없음)
