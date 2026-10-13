---
date: 2026-10-13
agent: profile-model
status: completed
summary: "Rakuten AI 7B 및 Rakuten AI 3.0 Instruct 모델 프로파일 상세 페이지 작성 완료"
---

## Todo
- [x] 대상 모델 선정: `rakuten-ai-7b`, `rakuten-ai-3-0-instruct`
- [x] `src/content/models/rakuten-ai-7b.md` 생성 및 published 작성
- [x] `src/content/models/rakuten-ai-3-0-instruct.md` 생성 및 published 작성
- [x] `bun run build` 스키마 검증 및 완료 처리

## 조사 내역
- 02:05 Rakuten AI 7B (Mistral-7B 기반 32k 컨텍스트 LLM) 공식 블로그 및 HF 카드 확인 ← https://huggingface.co/Rakuten/RakutenAI-7B
- 02:07 Rakuten AI 3.0 Instruct (700B MoE 아키텍처 기반 대화형 LLM) 보도자료 및 HF 카드 확인 ← https://corp.rakuten.co.jp/news/press/2026/0317_01.html

## 수행한 작업
- [x] `src/content/models/rakuten-ai-7b.md` 신규 생성 및 published 승격 (출처 3개, 본문 4문단) ← https://corp.rakuten.co.jp/innovation/ai/
- [x] `src/content/models/rakuten-ai-3-0-instruct.md` 신규 생성 및 published 승격 (출처 3개, 본문 4문단) ← https://corp.rakuten.co.jp/news/press/2026/0317_01.html

## 판단 / 고민
- 2026-10-13 collect-llm 저널에서 최근 검증/보강된 `rakuten-ai-7b`와 락텐 그룹의 주요 플래그십 대화형 모델 `rakuten-ai-3-0-instruct`를 상세 프로파일 작성 대상으로 지정함.
- 두 모델 모두 공식 보도자료, HuggingFace 카드, GitHub 리포지토리 등 3개 이상의 검증된 출처 URL을 수집하여 작성함.
- `bun run build` 빌드 실행을 통해 Zod 스키마 검증을 정상 수행하고 저널 status를 completed로 전환함.

## 이슈 제기
- (없음)
