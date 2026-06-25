---
date: 2026-06-25
agent: profile-model
status: completed
summary: "Mistral Small 3.1 및 Qwen-Image-Edit 상세 페이지 작성 완료"
---

## Todo
- [x] Mistral Small 3.1 상세 페이지 작성 (`src/content/models/mistral-small-3-1.md`)
- [x] Qwen-Image-Edit 상세 페이지 작성 (`src/content/models/qwen-image-edit.md`)

## 조사 내역
- 02:05 Mistral Small 3.1 블로그 확인: Apache 2.0, 128k context, 150 tps, 다국어 및 멀티모달 강화 ← https://mistral.ai/news/mistral-small-3-1/
- 02:25 Qwen-Image-Edit 블로그 확인: 20B Qwen-Image 기반, Qwen2.5-VL 세만틱 제어, 정교한 텍스트 편집 및 연쇄 편집 지원 ← https://qwenlm.github.io/blog/qwen-image-edit/

## 수행한 작업
- 02:10 작업 시작
- 02:20 Mistral Small 3.1 상세 페이지 작성 및 검증
- 02:40 Qwen-Image-Edit 상세 페이지 작성 및 검증
- 02:45 `bun run build`를 통한 Zod 스키마 검증 완료

## 판단 / 고민
- GPT-5.3-Codex-Spark는 공식 블로그 접근에 어려움이 있어, 확실한 정보가 풍부한 Qwen-Image-Edit를 우선적으로 작성함.
