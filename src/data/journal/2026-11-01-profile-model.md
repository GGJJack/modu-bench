---
date: 2026-11-01
agent: profile-model
status: completed
summary: "Claude Sonnet 5.5 및 Solar Pro 4 모델 상세 프로파일 작성 및 published 등록"
---

## Todo
- [x] missions/profile.md 및 2026-11-01 collect-llm 저널 기반 우선순위 모델 확인
- [x] 미프로파일링 모델 중 Anthropic `claude-sonnet-5-5` 및 Upstage `solar-pro-4` 선정
- [x] Anthropic 및 Upstage 공식 블로그/사이트 출처 검토
- [x] `src/content/models/claude-sonnet-5-5.md` 프로파일 작성 (status: published)
- [x] `src/content/models/solar-pro-4.md` 프로파일 작성 (status: published)
- [x] `bun run build` 빌드 및 Zod 스키마 유효성 검증

## 조사 내역
- 02:05 missions/profile.md 우선순위(최근 collect-llm 등록 모델 및 메이저 모델) 및 2026-11-01 수집 저널 확인
- 02:07 Claude Sonnet 5.5 공식 발표 및 모델 정보 확인 ← https://www.anthropic.com/claude-sonnet-5-5
- 02:09 Anthropic 공식 뉴스룸 확인 ← https://www.anthropic.com/news
- 02:11 Solar Pro 4 공식 발표 블로그 확인 ← https://www.upstage.ai/blog/en/solar-pro-4
- 02:13 Upstage 공식 블로그 및 기업 사이트 확인 ← https://www.upstage.ai/blog

## 수행한 작업
- [x] `src/content/models/claude-sonnet-5-5.md` 상세 프로파일 작성 (출처 3개 이상, 개요/기술 특징/사용 사례/한계 서술, status: published) ← https://www.anthropic.com/claude-sonnet-5-5
- [x] `src/content/models/solar-pro-4.md` 상세 프로파일 작성 (출처 3개 이상, 개요/기술 특징/사용 사례/한계 서술, status: published) ← https://www.upstage.ai/blog/en/solar-pro-4

## 판단 / 고민
- 2026-11-01 당일 collect-llm 에이전트가 신규 등록한 5개 모델 중 글로벌 주요 메이저 모델인 Anthropic의 `claude-sonnet-5-5`와 국내 대표 AI 제공사인 Upstage의 에이전트 특화 플래그십 모델 `solar-pro-4` 2종을 선정함.
- 두 모델 모두 공식 웹사이트 및 블로그 출처가 명확하고 상세 서술을 뒷받침하는 3개 이상의 공식 링크를 확보하였으므로 AGENTS.md 및 profile-model 규칙에 따라 `status: published`로 바로 승격함.
- 한 세션당 최대 2개 작성 원칙(품질 우선)을 준수하여 나머지 모델(claude-opus-5-5, claude-haiku-5-5, solar-mini-4)은 후속 세션으로 이월함.

## 이슈 제기
- (없음)
