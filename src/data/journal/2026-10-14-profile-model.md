---
date: 2026-10-14
agent: profile-model
status: completed
summary: "Sakana AI EvoLLM-JP v1 10B 및 Tokyo Tech Swallow 8B Instruct 상세 프로파일 생성"
---

## Todo
- [x] 저널 생성 및 초기화
- [x] `src/content/models/evollm-jp-10b.md` 상세 프로파일 작성 및 published 승격
- [x] `src/content/models/swallow-8b-instruct.md` 상세 프로파일 작성 및 published 승격
- [x] `bun run build` 빌드 및 Zod 스키마 검증
- [x] 저널 완료 마감

## 조사 내역
- 02:05 Sakana AI EvoLLM-JP v1 10B 모델 정보 확보 (Shisa Gamma 7B v1, WizardMath 7B v1.1, Abel 7B 002 진화적 모델 마ージ) ← https://sakana.ai/evolutionary-model-merge-jp/
- 02:07 Sakana AI HuggingFace 모델 카드 및 arXiv 논문 확인 (10B, 8192 컨텍스트, 진화적 모델 마지) ← https://huggingface.co/SakanaAI/EvoLLM-JP-v1-10B
- 02:10 Llama 3 Swallow 8B Instruct 공식 페이지 및 Zenn 기술 블로그 확인 (8B, 8192 컨텍스트, Meta Llama 3 License, Chat Vector 및 SFT 적용) ← https://swallow-llm.github.io/llama3-swallow.ja.html

## 수행한 작업
- [x] 저널 초기화 (`src/data/journal/2026-10-14-profile-model.md`)
- [x] `src/content/models/evollm-jp-10b.md` 상세 프로파일 작성 (`status: published`) ← https://sakana.ai/evolutionary-model-merge-jp/
- [x] `src/content/models/swallow-8b-instruct.md` 상세 프로파일 작성 (`status: published`) ← https://swallow-llm.github.io/llama3-swallow.ja.html
- [x] `bun run build` 스키마 검증 및 전체 빌드 통과

## 판단 / 고민
- KST 02:00 jules-profile 실행 정책에 따라 최근 collect-llm 스킬에 의해 등록된 동아시아(일본) 주요 오프닝 LLM인 `evollm-jp-10b`와 `swallow-8b-instruct` 모델에 대해 출처 URL 3개 이상 및 본문 3문단 이상의 고품질 프로파일 작성 진행 및 승격 완료.

## 이슈 제기
- (없음)
