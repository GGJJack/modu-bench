---
title: "LLM 수집 일지: 2026-07-08"
date: 2026-07-08
skill: collect-llm
status: completed
summary: "Liquid AI 신규 모델 2종 등록 및 기존 모델 2종 메타데이터 보강"
---

# 2026-07-08 LLM 수집 활동

## 신규 모델 발견
- Liquid AI: `lfm2-24b-a2b` (release: 2026-03-05, Tool-calling agent model for consumer hardware)
- Liquid AI: `lfm2-5-230m-base` (release: 2026-06-25, 230M parameters base model)

## 기존 모델 보강
- Liquid AI `lfm2-5-vl-450m`: 파라미터 크기 확인 (450M).
- Sakana AI `sakana-translate`: Namazu 엔진 채택 및 3가지 모드(번역, 첨삭, 질의) 확인. 웹 앱 무료 제공 확인.

## 비고
- Liquid AI의 뉴스 아카이브 조사를 통해 누락되었던 2026년 3월 모델 및 최근 6월 베이스 모델 발견.
- Sakana AI의 신규 번역 서비스 상세 메타데이터 보강.
- `missions/master.md` 및 `missions/llm.md` 업데이트 완료.

## 필드 ← URL
- `lfm2-24b-a2b.id` ← https://www.liquid.ai/blog/no-cloud-tool-calling-agents-consumer-hardware-lfm2-24b-a2b
- `lfm2-5-230m-base.id` ← https://www.liquid.ai/blog/lfm2-5-230m
- `lfm2-5-vl-450m.parameterSize` ← https://www.liquid.ai/blog/lfm2-5-vl-450m
- `sakana-translate.highlights` ← https://sakana.ai/translate-release/
