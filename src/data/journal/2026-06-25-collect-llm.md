---
title: "2026-06-25 collect-llm 저널"
status: completed
agent: jules
---

# 2026-06-25 LLM 수집 저널

## 1. 수집 활동 요약
- **OpenAI**: Jalapeño 칩 발표와 함께 'GPT-5.3-Codex-Spark' 엔지니어링 샘플 확인.
- **Mistral AI**: 'Mistral OCR 4' 출시(2026-06-23) 확인 및 상세 가격($4/1k pages) 수집. 'Mistral Small 3.1' 누락 정보 추가.
- **Anthropic**: 'Claude Tag' 출시(2026-06-23) 확인. 해당 기능은 'Claude Opus 4.8' 기반으로 동작함.
- **Alibaba Cloud (Qwen)**: 'Qwen-Image-Edit' 신규 등록 및 'Qwen3Guard' 링크 보강.

## 2. 발견한 신규 모델
- **GPT-5.3-Codex-Spark** (OpenAI)
  - ID: `gpt-5-3-codex-spark`
  - 출시일: 2026-06-24 (Jalapeño 발표일 기준)
  - 출처: [OpenAI Blog](https://openai.com/index/openai-broadcom-jalapeno-inference-chip/)
- **Mistral Small 3.1** (Mistral AI)
  - ID: `mistral-small-3-1`
  - 출시일: 2025-03-17
  - 출처: [Mistral Blog](https://mistral.ai/news/mistral-small-3-1/)
- **Qwen-Image-Edit** (Alibaba Cloud)
  - ID: `qwen-image-edit`
  - 출시일: 2025-08-19
  - 출처: [Qwen Blog](https://qwenlm.github.io/blog/qwen-image-edit/)

## 3. 기존 모델 보강
- **Mistral OCR 4** (`mistral-ocr-4`)
  - 가격: $0.004 / page ($4 / 1,000 pages) <- [Mistral Pricing](https://mistral.ai/pricing/)
  - 출시일: 2026-06-23 (블로그 포스트 기준 업데이트)
  - 링크: 공식 블로그 및 웨비나 링크 추가 <- [Mistral Blog](https://mistral.ai/news/ocr-4/)
- **Claude Opus 4.8** (`claude-opus-4-8`)
  - 링크: Claude Tag 관련 공식 뉴스 링크 추가 <- [Anthropic News](https://www.anthropic.com/news/introducing-claude-tag)
- **Mistral Small 4** (`mistral-small-4`)
  - 링크: 공식 블로그 링크 보강 <- [Mistral Blog](https://mistral.ai/news/mistral-small-4/)
- **Qwen3Guard** (`qwen3guard`)
  - 링크: 공식 블로그 링크 보강 <- [Qwen Blog](https://qwenlm.github.io/blog/qwen3guard/)

## 4. 변경 로그
| 모델 ID | 필드 | 변경 내용 | 출처 |
| :--- | :--- | :--- | :--- |
| `gpt-5-3-codex-spark` | 신규 등록 | 필수 필드 및 공식 링크 등록 | https://openai.com/index/openai-broadcom-jalapeno-inference-chip/ |
| `mistral-small-3-1` | 신규 등록 | 필수 필드 및 공식 링크 등록 | https://mistral.ai/news/mistral-small-3-1/ |
| `qwen-image-edit` | 신규 등록 | 필수 필드 및 공식 링크 등록 | https://qwenlm.github.io/blog/qwen-image-edit/ |
| `mistral-ocr-4` | pricing, releaseDate, links | 가격 및 출시일 수정, 공식 링크 추가 | https://mistral.ai/news/ocr-4/ |
| `claude-opus-4-8` | links | Claude Tag 관련 뉴스 링크 추가 | https://www.anthropic.com/news/introducing-claude-tag |
| `mistral-small-4` | links | 공식 블로그 링크 추가 | https://mistral.ai/news/mistral-small-4/ |
| `qwen3guard` | links | 공식 블로그 링크 추가 | https://qwenlm.github.io/blog/qwen3guard/ |
