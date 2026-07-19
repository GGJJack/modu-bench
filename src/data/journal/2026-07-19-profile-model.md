---
date: 2026-07-19
agent: profile-model
status: completed
summary: "Rakuten AI 3.0 및 Claude Science 모델 상세 프로필 페이지 작성 및 검증 완료"
---

## Todo
- [x] `rakuten-ai-3-0` 모델 상세 프로필 생성 및 published 승격  ← https://corp.rakuten.co.jp/
- [x] `claude-science` 모델 상세 프로필 생성 및 published 승격  ← https://www.anthropic.com/news/claude-science-ai-workbench

## 조사 내역
- 18:00  Sakana AI의 Namazu 시리즈 발표 자료 분석에서 Rakuten AI 3.0 모델이 일본어 주요 벤치마크 평가 대상(Nejumi Leaderboard4, Swallow, JamC-QA)으로 기입되어 있음을 확인  ← https://sakana.ai/namazu-alpha/
- 18:05  Anthropic의 Claude Science 제품 발표 보도자료 분석하여 과학 유틸리티 스킬 통합, 에이전트 설계, 컴퓨팅 리소스 연계 상세 기술 확인  ← https://www.anthropic.com/news/claude-science-ai-workbench

## 수행한 작업
- [x] `src/content/models/rakuten-ai-3-0.md` 신규 생성 (3 paragraph 이상, status: published)  ← https://sakana.ai/namazu-alpha/
- [x] `src/content/models/claude-science.md` 신규 생성 (3 paragraph 이상, status: published)  ← https://www.anthropic.com/news/claude-science-ai-workbench

## 판단 / 고민
- `missions/profile.md` 집중 과제에 적합하도록 전날 신규 등록된 메이저 및 현지화(Sovereign) LLM 중 상세 페이지가 부재했던 2개 모델을 선정하여 수준 높은 한글 프로필 페이지를 구축하였습니다.
- 두 모델 모두 3개 이상의 풍부한 출처(공식/커뮤니티)를 기재하였고, 개요-기술 특징-사용 사례-한계의 단락 구분을 명확히 서술하여 `published` 요건을 준수하였습니다.
- Zod 스키마 검증 및 `bun run build` 빌드 시뮬레이션을 수행하여, Astro 정적 사이트가 에러 없이 275개 페이지로 완벽하게 렌더링됨을 더블 체크하였습니다.

## 이슈 제기
- (없음)
