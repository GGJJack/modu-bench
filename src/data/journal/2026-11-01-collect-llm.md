---
date: 2026-11-01
skill: collect-llm
status: completed
author: jules
---

# LLM 모델 수집 저널 (2026-11-01)

## 개요
- 작업 목적: 주요 글로벌 LLM 제공사(Anthropic) 및 소버린 AI 제공사(Upstage)의 공식 발표를 조사하여 신규 출시 모델을 수집하고 등록함.
- 수집 기준: `missions/llm.md` 및 `skills/collect-llm/SKILL.md`에 의거하여 공식 웹사이트 발표를 기반으로 검증된 모델만 등록(최소 필수 5개 필드 + `links.official`).

## 수집 대상 및 공식 소스
1. Anthropic Claude 5.5 라인업
   - 소스: Anthropic 공식 뉴스룸 (`https://www.anthropic.com/news`)
   - 확인 모델:
     - Claude Opus 5.5 (`claude-opus-5-5`): 2026년 9월 22일 발표
     - Claude Sonnet 5.5 (`claude-sonnet-5-5`): 2026년 9월 28일 발표
     - Claude Haiku 5.5 (`claude-haiku-5-5`): 2026년 10월 7일 발표
2. Upstage Solar 4 세대 라인업
   - 소스: Upstage 공식 블로그 (`https://www.upstage.ai/blog`)
   - 확인 모델:
     - Solar Pro 4 (`solar-pro-4`): 2026년 8월 11일 발표 (에이전트 특화 LLM)
     - Solar Mini 4 (`solar-mini-4`): 2026년 10월 1일 발표 (3B 활성 파라미터 기반 에이전트 특화 MoE 모델)

## 등록 모델 내역
1. `claude-opus-5-5`:
   - 이름: Claude Opus 5.5
   - 제공사: Anthropic
   - 출시일: 2026-09-22
   - 라이선스: Proprietary
   - 공식 링크: `https://www.anthropic.com/claude-opus-5-5`
2. `claude-sonnet-5-5`:
   - 이름: Claude Sonnet 5.5
   - 제공사: Anthropic
   - 출시일: 2026-09-28
   - 라이선스: Proprietary
   - 공식 링크: `https://www.anthropic.com/claude-sonnet-5-5`
3. `claude-haiku-5-5`:
   - 이름: Claude Haiku 5.5
   - 제공사: Anthropic
   - 출시일: 2026-10-07
   - 라이선스: Proprietary
   - 공식 링크: `https://www.anthropic.com/claude-haiku-5-5`
4. `solar-pro-4`:
   - 이름: Solar Pro 4
   - 제공사: Upstage
   - 출시일: 2026-08-11
   - 라이선스: Proprietary
   - 공식 링크: `https://www.upstage.ai/blog/en/solar-pro-4`
5. `solar-mini-4`:
   - 이름: Solar Mini 4
   - 제공사: Upstage
   - 출시일: 2026-10-01
   - 라이선스: Proprietary
   - 공식 링크: `https://www.upstage.ai/blog/en/solar-mini-4`

## 특이사항 및 향후 과제
- PoC 원칙에 따라 확실하게 입증되지 않은 상세 벤치마크 점수나 컨텍스트 윈도우 등의 필드는 추측하지 않고 `null`로 유지함.
- 추후 공식 기술 보고서(Technical Report)나 상세 API 문서 릴리스 시 컨텍스트 윈도우, 요금 등의 세부 메타데이터를 추가 업데이트할 예정.
